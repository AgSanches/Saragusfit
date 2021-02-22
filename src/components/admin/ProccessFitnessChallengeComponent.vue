<template>
  <div class="mission-and-vision-section p-1">
    <form action="#" @submit.prevent="updateContent">
      <div class="row justify-content-start align-items-center">
        <div class="form-group col-12 col-md-6 p-1">
          <label for="inputTitle">Title Section</label>
          <input
            type="text"
            class="form-control"
            id="inputTitle"
            placeholder="Enter title"
            required
            v-model="content.title"
          />
        </div>
        <div class="form-group col-12 col-md-6 p-1">
          <label for="inputSubtitle">Subtitle Section</label>
          <input
            type="text"
            class="form-control"
            id="inputSubtitle"
            placeholder="Enter subtitle"
            required
            v-model="content.subtitle"
          />
        </div>
        <div class="form-group col-12 p-1">
          <label for="inputText">Text Section</label>
          <input
            type="text"
            class="form-control"
            id="inputText"
            placeholder="Enter text"
            required
            v-model="content.text"
          />
        </div>
        <div class="form-group col-12 col-md-3 p-1">
          <label for="inputButton">Button content</label>
          <input
            type="text"
            class="form-control"
            id="inputButton"
            placeholder="Enter text for button"
            required
            v-model="content.button"
          />
        </div>

        <div class="form-group col-12 p-1">
          <InputFileComponent
            :accept="acceptsFile"
            :helper="2"
            @changeFile="changeFile"
            label="Free workout"
            :current-file="content.name"
          ></InputFileComponent>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Confirm</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { displaySuccessSwal, displayErrorSwal } from "./partials/displaySwal";
import InputFileComponent from "./partials/InputFileComponent";
import { pdf_files } from "./helpers/file_accepts";
import { getFileName } from "./helpers/manage_files";

export default {
  name: "ProccessFitnessChallengeComponent",
  components: { InputFileComponent },
  data: () => {
    return {
      doc: "fitnessChallenge",
      content: {
        title: "",
        subtitle: "",
        text: "",
        button: "",
        name: ""
      },
      acceptsFile: pdf_files,
      filePath: ""
    };
  },
  methods: {
    ...mapActions("home", ["getText"]),
    ...mapActions("admin", [
      "updateDocGeneric",
      "uploadFile",
      "deleteFile"
    ]),
    getFileName,
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
    async changeFile({ file }) {
      const name = this.getFileName(file.name);
      await this.deleteFileFromFirebase();
      await this.uploadFile({ name: name, file: file });
      this.content.name = name;
    },
    async deleteFileFromFirebase() {
      await this.deleteFile(this.content.name);
    },
  },
  created() {
    this.getText(this.doc).then(content => {
      this.content = content;
    });
  }
};
</script>

<style scoped lang="scss"></style>
