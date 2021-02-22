<template>
  <div class="mission-and-vision-section p-1">
    <div class="row justify-content-start align-items-center">
      <div class="row col-12">
        <div class="col-12 title-wrapper mb-3 d-flex">
          <p class="title">
            Success Stories
            <AddElementButton
              @click="addItem"
              v-if="canAddMoreOpinions"
            ></AddElementButton>
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
import { displayErrorSwal, displaySuccessSwal } from "./partials/displaySwal";
import AddElementButton from "./partials/AddElementButton";
import ModalFormSuccessStoriesComponent from "./partials/ModalFormSuccessStoriesComponent";
import SuccessStoriesAdminComponent from "./partials/SuccessStoriesAdminComponent";
import { getFileName } from "./helpers/manage_files";

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
    ...mapActions("admin", ["updateDocGeneric", "uploadFile", "deleteFile"]),
    getFileName,
    addItem() {
      this.showModal = true;
    },
    editItem(idx) {
      this.propIdx = idx;
      this.modelToEdit = this.content.opinions[this.propIdx];
      this.addItem();
    },
    async saveModel(items) {
      const model = await this.manageFiles(items);

      if (this.propIdx != null) {
        this.content.opinions[this.propIdx] = model;
      } else {
        this.content.opinions.push(model);
      }

      this.closeModal();
      this.updateContent();
    },
    async manageFiles({ model, fileBasic, fileBefore, fileAfter }) {
      if (fileBasic) {
        this.deleteFilesInModel(model);
        model.image = await this.uploadFileAndGetName(fileBasic);
        model.beforeImage = null;
        model.afterImage = null;
      } else if (fileBefore && fileAfter) {
        this.deleteFilesInModel(model);
        model.beforeImage = await this.uploadFileAndGetName(fileBefore);
        model.afterImage = await this.uploadFileAndGetName(fileAfter);
        model.image = null;
      }

      return model;
    },
    async uploadFileAndGetName(file) {
      const name = this.getFileName(file.name);
      await this.uploadFile({ name: name, file: file });
      return name;
    },
    deleteFilesInModel(model) {
      if (model.image) this.deleteFileByName(model.image);
      if (model.beforeImage) this.deleteFileByName(model.beforeImage);
      if (model.afterImage) this.deleteFileByName(model.afterImage);
    },
    deleteFileByName(name) {
      this.deleteFile(name)
        .then(() => {})
        .catch(() => {});
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
