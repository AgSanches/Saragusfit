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
            <label for="inputSubtitle">Client's title</label>
            <input
              type="text"
              class="form-control"
              id="inputSubtitle"
              placeholder="Title for clients title"
              required
              v-model="content.clientTitle"
            />
          </div>

          <div class="form-group col-12 p-1">
            <label for="inputParagraph">Paragraph</label>
            <textarea
              class="form-control"
              id="inputParagraph"
              placeholder="Paragraph"
              required
              v-model="content.paragraph"
            ></textarea>
          </div>
        </div>

        <div class="row col-12">
          <div class="col-12 title-wrapper mb-2">
            <p class="title">Goals</p>
          </div>

          <div
            class="col-12 row align-items-center justify-content-center"
            v-for="(goal, idx) of content.goals"
            :key="`approach-${idx}`"
          >
            <div class="form-group col-12 col-md-6 p-1">
              <input
                type="text"
                class="form-control"
                :id="`inputClientGoal-${idx}`"
                placeholder="Enter goal"
                required
                v-model="content.goals[idx]"
              />
            </div>
            <div class="col-6">
              <ClientsGoalsComponent :goal="goal"></ClientsGoalsComponent>
            </div>
          </div>
        </div>

        <div class="row col-12">
          <div class="col-12 title-wrapper mb-2">
            <p class="title">Sections</p>
          </div>

          <div
            class="col-12 col-md-6 row align-items-center justify-content-center cursor"
            v-for="(section, idx) of content.sections"
            :key="`section-${idx}`"
            @click="modifySection(idx)"
          >
            <WorkoutPlanSectionComponent
              :content="section"
              :image="images[idx]"
            ></WorkoutPlanSectionComponent>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Confirm</button>
    </form>
    <template v-if="showModal">
      <ModalFormSectionWorkoutPlanComponent
        :item-prop="content.sections[sectionIdx]"
        @closeModal="closeModal"
        @saveModel="saveModel"
      ></ModalFormSectionWorkoutPlanComponent>
    </template>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { displaySuccessSwal, displayErrorSwal } from "./partials/displaySwal";
import ClientsGoalsComponent from "../home/partials/ClientsGoalsComponent";
import WorkoutPlanSectionComponent from "../home/partials/WorkoutPlanSectionComponent";
import ModalFormSectionWorkoutPlanComponent from "./partials/ModalFormSectionWorkoutPlanComponent";

export default {
  name: "ProccessWorkoutPlan",
  components: {
    ClientsGoalsComponent,
    WorkoutPlanSectionComponent,
    ModalFormSectionWorkoutPlanComponent
  },
  data: () => {
    return {
      doc: "workoutPlan",
      content: {
        title: "",
        clientTitle: "",
        goals: [],
        paragraph: "",
        sections: []
      },
      images: [
        require("../../assets/icons/dumbbells.png"),
        require("../../assets/icons/coach.png"),
        require("../../assets/icons/shopping-online.png"),
        require("../../assets/icons/information.png")
      ],
      showModal: false,
      sectionIdx: null
    };
  },
  methods: {
    ...mapActions("home", ["getText"]),
    ...mapActions("admin", ["updateDocGeneric"]),
    modifySection(idx) {
      this.showModal = true;
      this.sectionIdx = idx;
    },
    saveModel(model) {
      this.content.sections[this.sectionIdx] = model;
      this.closeModal();
      this.updateContent();
    },
    closeModal() {
      this.showModal = false;
      this.sectionIdx = null;
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
