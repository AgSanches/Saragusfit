<template>
  <div class="mission-and-vision-section p-1">
    <form action="#" @submit.prevent="updateContent">
      <div class="row justify-content-start align-items-center">
        <div class="row col-12">
          <div class="col-12 title-wrapper">
            <p class="title">
              Coachs <AddElementButton @click="addModel"></AddElementButton>
            </p>
          </div>
        </div>

        <template v-if="content.coachs && content.coachs.length > 0">
          <div
            class="col-12 col-md-4 col-xl-3 p-2 mx-md-1 coach-wrapper"
            v-for="(coach, idx) in content.coachs"
            :key="idx"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
            :data-aos-delay="200 * idx"
          >
            <CardComponent
              :coach="coach"
              :image="images[idx]"
              @click="showModelEdit(idx)"
            ></CardComponent>
            <RemoveElementButton
              @click="removeContent(idx)"
            ></RemoveElementButton>
          </div>
        </template>

        <template v-if="showModal">
          <ModalFormCoachComponent
            :coach-prop="coachProp"
            :coachIdx="coachIdx"
            @closeModal="closeModal"
            @saveModel="saveModel"
          ></ModalFormCoachComponent>
        </template>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { displaySuccessSwal, displayErrorSwal } from "./partials/displaySwal";
import CardComponent from "../home/partials/CardComponent";
import AddElementButton from "./partials/AddElementButton";
import RemoveElementButton from "./partials/RemoveElementButton";
import ModalFormCoachComponent from "./partials/ModalFormCoachComponent";

export default {
  name: "ProccessCoachsComponent",
  components: {
    CardComponent,
    AddElementButton,
    RemoveElementButton,
    ModalFormCoachComponent
  },
  data: () => {
    return {
      doc: "coach",
      content: {
        coachs: []
      },
      coachProp: null,
      coachIdx: null,
      images: [
        require("../../assets/home/saragusfit-photo-sara.jpeg"),
        require("../../assets/home/saragusfit-photo-agustina.jpeg")
      ],
      showModal: false
    };
  },
  methods: {
    ...mapActions("home", ["getText"]),
    ...mapActions("admin", ["updateDocGeneric"]),
    addModel() {
      this.showModal = true;
    },
    showModelEdit(idx) {
      this.coachProp = this.content.coachs[idx];
      this.coachIdx = idx;
      this.showModal = true;
    },
    saveModel(model) {
      if (this.coachIdx != null) this.editModel(model);
      else this.createModel(model);

      this.closeModal();
      this.updateContent();
    },
    createModel(model) {
      this.content.coachs.push(model);
    },
    editModel(model) {
      this.content.coachs[this.coachIdx] = model;
    },
    closeModal() {
      this.showModal = false;
      this.coachProp = null;
      this.coachIdx = null;
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
    },
    removeContent(idx) {
      this.$swal({
        title: "Are you sure?",
        text: "You will delete this coach",
        showCancelButton: true
      }).then(value => {
        if (value.isConfirmed) {
          this.content.coachs.splice(idx, 1);
          this.updateContent();
        }
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

.coach-wrapper {
  cursor: pointer;
}
</style>
