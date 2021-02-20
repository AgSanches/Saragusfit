<template>
  <div class="mission-and-vision-section p-1">
    <div class="row justify-content-start align-items-center">
      <div class="row col-12">
        <div class="col-12 title-wrapper mb-3">
          <p class="title">
            Plans <AddElementButton @click="addItem"></AddElementButton>
          </p>
        </div>
      </div>

      <div
        class="col-12 col-md-4 my-1"
        v-for="(plan, idx) of content.plans"
        :key="`plan-${idx}`"
      >
        <PlanComponent
          :image="image"
          :plan="plan"
          data-aos="fade-up"
          data-aos-duration="1000"
          @click="editItem(idx)"
        ></PlanComponent>
        <RemoveElementButton @click="removeItem(idx)"></RemoveElementButton>
      </div>

      <template v-if="showModal">
        <ModalFormPlanComponent
          :item-prop="content.plans[propIdx]"
          @closeModal="closeModal"
          @saveModel="saveModel"
        ></ModalFormPlanComponent>
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { displaySuccessSwal, displayErrorSwal } from "./partials/displaySwal";
import AddElementButton from "./partials/AddElementButton";
import PlanComponent from "../home/partials/PlanComponent";
import RemoveElementButton from "./partials/RemoveElementButton";
import ModalFormPlanComponent from "./partials/ModalFormPlanComponent";

export default {
  name: "ProccessPlanSectionComponent",
  components: {
    ModalFormPlanComponent,
    RemoveElementButton,
    PlanComponent,
    AddElementButton
  },
  data: () => {
    return {
      doc: "plansSection",
      content: {
        plans: []
      },
      image: require("../../assets/icons/dumbell-plan.png"),
      showModal: false,
      propIdx: null
    };
  },
  methods: {
    ...mapActions("home", ["getText"]),
    ...mapActions("admin", ["updateDocGeneric"]),
    addItem() {
      this.showModal = true;
    },
    editItem(idx) {
      this.propIdx = idx;
      this.addItem();
    },
    saveModel(item) {
      if (!this.propIdx) {
        this.content.plans.push(item);
      } else {
        this.content.plans[this.propIdx] = item;
      }

      this.closeModal();
      this.updateContent();
    },
    closeModal() {
      this.showModal = false;
      this.propIdx = null;
    },
    removeItem(idx) {
      this.$swal({
        title: "Are you sure?",
        text: "You will delete this plan",
        showCancelButton: true
      }).then(value => {
        if (value.isConfirmed) {
          this.content.plans.splice(idx, 1);
          this.updateContent();
        }
      });
    },
    updateContent() {
      const dataToUpdate = {
        content: this.content,
        doc: this.doc
      };

      this.updateDocGeneric(dataToUpdate)
        .then(() => {
          this.$swal(displaySuccessSwal);
        })
        .catch(() => {
          this.$swal(displayErrorSwal);
        });
    }
  },
  created() {
    this.getText(this.doc).then(content => {
      this.content = content;
    });
  }
};
</script>

<style scoped lang="scss">
.title-wrapper {
  padding: 0;

  .title {
    font-size: 1.4rem;
    margin: 0;
  }
}
</style>
