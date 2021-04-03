<template>
  <div class="section p-1 mx-auto mt-3">
    <TitleComponent :title="content.title"></TitleComponent>
    <StepsDesktopComponent
      :steps-upper="content.stepsUpper"
      :steps-down="content.stepsDown"
      @proccessClicked="openModalForEdit"
    ></StepsDesktopComponent>

    <form action="#" @submit.prevent="updateContent" class="container">
      <div class="row justify-content-start align-items-center">
        <div class="form-group col-12 col-md-9 p-1">
          <label for="inputTitle">Title Modal</label>
          <input
            type="text"
            class="form-control"
            id="inputTitle"
            placeholder="Enter title"
            required
            v-model="content.title"
          />
        </div>
        <div class="col-3">
          <button type="submit" class="btn btn-primary mt-3">Confirm</button>
        </div>
      </div>
    </form>

    <template v-if="showModal">
      <ModalFormProccess
        :item-prop="stepModel"
        @closeModal="closeModal"
        @saveModel="saveModal"
      ></ModalFormProccess>
    </template>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { displaySuccessSwal, displayErrorSwal } from "./partials/displaySwal";
import StepsDesktopComponent from "../home/partials/StepsDesktopComponent";
import ModalFormProccess from "./partials/ModalFormProccess";
import TitleComponent from "../home/partials/TitleComponent";

export default {
  name: "ProccessPlanSectionComponent",
  components: {
    StepsDesktopComponent,
    ModalFormProccess,
    TitleComponent
  },
  data: () => {
    return {
      doc: "theProccess",
      content: {
        stepsUpper: [],
        stepsDown: [],
        title: ""
      },
      showModal: false,
      stepIdx: null,
      isUpper: null,
      stepModel: null
    };
  },
  methods: {
    ...mapActions("home", ["getText"]),
    ...mapActions("admin", ["updateDocGeneric"]),
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
    openModalForEdit(event) {
      this.isUpper = event.isUpper;
      this.stepIdx = event.idx;

      if (this.isUpper) {
        this.stepModel = this.content.stepsUpper[this.stepIdx];
      } else {
        this.stepModel = this.content.stepsDown[this.stepIdx];
      }

      this.showModal = true;
    },
    saveModal(model) {
      if (this.isUpper) {
        this.content.stepsUpper[this.stepIdx] = model;
      } else {
        this.content.stepsDown[this.stepIdx] = model;
      }

      this.closeModal();
      this.updateContent();
    },
    closeModal() {
      this.showModal = false;
      this.isUpper = null;
      this.stepIdx = null;
      this.stepModel = null;
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
.section {
  width: 95vw;
  max-width: 1600px;
}
</style>
