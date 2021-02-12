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
        <div
          class="form-group col-12 col-md-6 p-1"
          v-for="(approach, idx) of content.approachs"
          :key="`approach-${idx}`"
        >
          <label :for="`inputApproach-${idx}`">Approach {{ idx + 1 }}</label>
          <input
            type="text"
            class="form-control"
            :id="`inputApproach-${idx}`"
            placeholder="Enter approach"
            required
            v-model="content.approachs[idx]"
          />
        </div>

        <div class="col-12 col-md-4">
          <button class="btn btn-primary" @click="addParagraph">
            Add paragraph
          </button>
        </div>

        <div
          class="form-group col-12 p-1"
          v-for="(paragraph, idx) of content.paragraphs"
          :key="`paragraph-${idx}`"
        >
          <label :for="`inputParagraph-${idx}`">Paragraph {{ idx + 1 }}</label>
          <textarea
            class="form-control"
            :id="`inputParagraph-${idx}`"
            placeholder="Enter paragraph"
            required
            v-model="content.paragraphs[idx]"
          ></textarea>
          <button class="btn btn-danger mt-1" @click="removeParagraph(idx)">
            Remove paragraph
          </button>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Confirm</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { displaySuccessSwal, displayErrorSwal } from "./partials/displaySwal";

export default {
  name: "ProccessAboutUsComponent",
  data: () => {
    return {
      doc: "aboutUs",
      content: {
        title: "",
        subtitle: "",
        paragraphs: [],
        approachs: []
      }
    };
  },
  methods: {
    ...mapActions("home", ["getText"]),
    ...mapActions("admin", ["updateDocGeneric"]),
    addParagraph() {
      this.content.paragraphs.push("");
    },
    removeParagraph(idx) {
      this.content.paragraphs.splice(idx, 1);
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

<style scoped lang="scss"></style>
