<template>
  <div class="mission-and-vision-section p-1">
    <form action="#" @submit.prevent="updateContent">
      <div class="row justify-content-start align-items-center">
        <div
          class="col-12 row my-1 subsection"
          v-for="(step, idx) of content.stepsUpper"
          :key="`step-${idx}`"
        >
          <div class="form-group col-12 p-1">
            <label :for="`inputStepName-${idx}`">Name </label>
            <input
              type="text"
              class="form-control"
              :id="`inputStepName-${idx}`"
              placeholder="Enter name"
              required
              v-model="step.name"
            />
          </div>

          <div class="form-group col-12 p-1">
            <label :for="`inputDay-${idx}`">Day </label>
            <input
              type="number"
              class="form-control"
              :id="`inputDay-${idx}`"
              placeholder="Enter day"
              required
              v-model="step.day"
            />
          </div>

          <div class="form-group col-12 p-1">
            <label :for="`inputContent-${idx}`">Content </label>
            <textarea
              class="form-control"
              :id="`inputContent-${idx}`"
              placeholder="Enter content"
              required
              v-model="step.content"
            ></textarea>
          </div>

          <div class="form-group col-12 p-1">
            <label :for="`inputAosMobile-${idx}`"
              >Aos Mobile </label
            >
            <input
              type="text"
              class="form-control"
              :id="`inputAosMobile-${idx}`"
              placeholder="Enter aos mobile"
              required
              v-model="step.aosMobile"
            />
          </div>

          <div class="form-group col-12 p-1">
            <label :for="`inputAosDesktop-${idx}`"
              >Aos Desktop </label
            >
            <input
              type="text"
              class="form-control"
              :id="`inputAosDesktop-${idx}`"
              placeholder="Enter aos desktop"
              required
              v-model="step.aosDesktop"
            />
          </div>

          <hr />
        </div>

        <div
          class="col-12 row my-1 subsection"
          v-for="(step, idx) of content.stepsDown"
          :key="`step-${idx}`"
        >
          <div class="form-group col-12 p-1">
            <label :for="`2inputStepName-${idx}`">Name </label>
            <input
              type="text"
              class="form-control"
              :id="`2inputStepName-${idx}`"
              placeholder="Enter name"
              required
              v-model="step.name"
            />
          </div>

          <div class="form-group col-12 p-1">
            <label :for="`inputDay-${idx}`">Day </label>
            <input
              type="number"
              class="form-control"
              :id="`2inputDay-${idx}`"
              placeholder="Enter day"
              required
              v-model="step.day"
            />
          </div>

          <div class="form-group col-12 p-1">
            <label :for="`inputContent-${idx}`">Content </label>
            <textarea
              class="form-control"
              :id="`2inputContent-${idx}`"
              placeholder="Enter content"
              required
              v-model="step.content"
            ></textarea>
          </div>

          <div class="form-group col-12 p-1">
            <label :for="`2inputAosMobile-${idx}`"
              >Aos Mobile </label
            >
            <input
              type="text"
              class="form-control"
              :id="`2inputAosMobile-${idx}`"
              placeholder="Enter aos mobile"
              required
              v-model="step.aosMobile"
            />
          </div>

          <div class="form-group col-12 p-1">
            <label :for="`2inputAosDesktop-${idx}`"
              >Aos Desktop </label
            >
            <input
              type="text"
              class="form-control"
              :id="`2inputAosDesktop-${idx}`"
              placeholder="Enter aos desktop"
              required
              v-model="step.aosDesktop"
            />
          </div>

          <hr />
        </div>
      </div>
      <button type="submit" class="btn btn-primary mt-2">Confirm</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { displaySuccessSwal, displayErrorSwal } from "./partials/displaySwal";

export default {
  name: "ProccessPlanSectionComponent",
  data: () => {
    return {
      doc: "theProccess",
      content: {
        stepsDown: [],
        stepsUpper: []
      }
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

  .subsection {
    border: 1px solid;
    display: block;
    margin: 0 auto;
  }

</style>
