<template>
  <div class="mission-and-vision-section p-1">
    <form action="#" @submit.prevent="updateContent">
      <div class="row justify-content-start align-items-center">
        <div class="row col-12">
          <div class="col-12 title-wrapper">
            <p class="title">General content</p>
          </div>

          <div class="form-group col-12 col-md-6 p-1">
            <label for="inputTitle">Title</label>
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
            <label for="inputSubtitle">Subtitle</label>
            <input
              type="text"
              class="form-control"
              id="inputSubtitle"
              placeholder="Enter subtitle"
              required
              v-model="content.subtitle"
            />
          </div>
        </div>

        <div class="row col-12">
          <div class="col-12 title-wrapper mb-2">
            <p class="title">Approachs</p>
          </div>

          <div
            class="col-12 row align-items-center justify-content-center"
            v-for="(approach, idx) of content.approachs"
            :key="`approach-${idx}`"
          >
            <div class="form-group col-12 col-md-6 p-1">
              <input
                type="text"
                class="form-control"
                :id="`inputApproach-${idx}`"
                placeholder="Enter approach"
                required
                v-model="content.approachs[idx]"
              />
            </div>
            <div class="col-6">
              <AboutUsApproachComponent
                :approach="approach"
              ></AboutUsApproachComponent>
            </div>
          </div>
        </div>

        <div class="row col-12">
          <div class="col-12 title-wrapper mb-2">
            <p class="title">
              Paragraphs
              <AddElementButton @click="addParagraph"></AddElementButton>
            </p>
          </div>
          <div
            class="col-12 row align-items-center"
            v-for="(_, idx) of content.paragraphs"
            :key="`paragraph-${idx}`"
          >
            <div class="col-12 mb-3">
              <p class="title">
                Paragraph
                <RemoveElementButton
                  @click="removeParagraph(idx)"
                ></RemoveElementButton>
              </p>
              <textarea
                class="form-control"
                :id="`inputParagraph-${idx}`"
                placeholder="Enter paragraph"
                required
                v-model="content.paragraphs[idx]"
              ></textarea>
            </div>
            <div
              class="col-1 d-flex justify-content-start align-items-center"
            ></div>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Confirm</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { displaySuccessSwal, displayErrorSwal } from "./partials/displaySwal";
import AboutUsApproachComponent from "../home/partials/AboutUsApproachComponent";
import AddElementButton from "./partials/AddElementButton";
import RemoveElementButton from "./partials/RemoveElementButton";

export default {
  name: "ProccessAboutUsComponent",
  components: {
    AboutUsApproachComponent,
    AddElementButton,
    RemoveElementButton
  },
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
      this.$swal({
        title: "Are you sure?",
        showCancelButton: true
      }).then(value => {
        if (value.isConfirmed) {
          this.content.paragraphs.splice(idx, 1);
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
