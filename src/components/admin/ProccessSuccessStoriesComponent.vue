<template>
  <div class="mission-and-vision-section p-1">
    <div class="row justify-content-start align-items-center">
      <div class="row col-12">
        <div class="col-12 title-wrapper mb-3 d-flex">
          <p class="title">
            Success Stories
            <AddElementButton @click="addItem" v-if="canAddMoreOpinions"></AddElementButton>
          </p>
        </div>
      </div>

      <div class="row col-12 section mx-auto">
        <div
          class="col-12 col-md-6 my-1 wrapper"
          v-for="(review, idx) of content.opinions"
          :key="`review-${idx}`"
        >
          <SuccessStoriesAdminComponent
            :review="review"
            :idx="idx"
            @deleteModel="removeItem"
            @click="editItem(idx)"
          ></SuccessStoriesAdminComponent>
        </div>
      </div>

      <template v-if="showModal">
        <ModalFormSuccessStoriesComponent
          :item-prop="modelToEdit"
          @closeModal="closeModal"
          @saveModel="saveModel"
        ></ModalFormSuccessStoriesComponent>
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { displaySuccessSwal, displayErrorSwal } from "./partials/displaySwal";
import AddElementButton from "./partials/AddElementButton";
import ModalFormSuccessStoriesComponent from "./partials/ModalFormSuccessStoriesComponent";
import SuccessStoriesAdminComponent from "./partials/SuccessStoriesAdminComponent";

export default {
  name: "ProccessPlanSectionComponent",
  components: {
    SuccessStoriesAdminComponent,
    ModalFormSuccessStoriesComponent,
    AddElementButton
  },
  data: () => {
    return {
      doc: "successStories",
      content: {
        opinions: []
      },
      showModal: false,
      propIdx: null,
      modelToEdit: null
    };
  },
  computed: {
    canAddMoreOpinions() {
      return this.content.opinions.length < 6;
    }
  },
  methods: {
    ...mapActions("home", ["getText"]),
    ...mapActions("admin", ["updateDocGeneric"]),
    addItem() {
      this.showModal = true;
    },
    editItem(idx) {
      this.propIdx = idx;
      this.modelToEdit = this.content.opinions[this.propIdx];
      this.addItem();
    },
    saveModel(item) {
      if (this.propIdx != null) {
        this.content.opinions[this.propIdx] = item;
      } else {
        this.content.opinions.push(item);
      }

      this.closeModal();
      this.updateContent();
    },
    closeModal() {
      this.showModal = false;
      this.propIdx = null;
      this.modelToEdit = null;
    },
    removeItem({ idx }) {
      this.$swal({
        title: "Are you sure?",
        text: "You will delete this plan",
        showCancelButton: true
      }).then(value => {
        if (value.isConfirmed) {
          this.content.opinions.splice(idx, 1);
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
    },
    toggleModalOffer() {
      this.content.showModal = !this.content.showModal;
      this.updateContent();
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
