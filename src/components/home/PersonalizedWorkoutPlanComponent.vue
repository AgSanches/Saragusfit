<template>
  <section
    id="personalized-workout-plan"
    class="personalized-workout-plan row justify-content-center align-items-center mx-auto py-2"
  >
    <div
      class="col-12 col-md-4 px-3"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <h3 class="personalized-workout-plan-title font-weight-bold text-primary">
        Your Personalized Workout Plan
      </h3>

      <div class="personalized-workout-plan-addition">
        <p class="personalized-workout-plan-subtitle">
          It is not simply a workout plan. We will guide you to stick to new
          behavioral changes and habits contributing to achieving your goals. It
          is a learning process with ups and downs, where we will facilitate the
          path to a consistent wellness journey.
        </p>

        <p class="personalized-workout-plan-client-goals-title">
          Past client´s goals:
        </p>

        <ul class="personalized-workout-plan-client-goals-list">
          <li
            class="client-goal"
            v-for="(goal, idx) in pageContent.goals"
            :key="idx"
          >
            {{ goal }}
          </li>
        </ul>
      </div>
    </div>

    <div class="col-12 col-md-8 row justify-content-center align-items-center">
      <div
        class="col-12 col-md-6 p-1"
        v-for="(content, idx) in pageContent.sections"
        :key="idx"
      >
        <WorkoutPlanSectionComponent
          :content="content"
          :image="images[idx]"
        ></WorkoutPlanSectionComponent>
      </div>
    </div>
  </section>
</template>

<script>
import WorkoutPlanSectionComponent from "./partials/WorkoutPlanSectionComponent";
import content from "../../texts/personalizedWorkoutPlanTexts";
import { mapActions } from "vuex";

export default {
  name: "PersonalizedWorkoutPlanComponent",
  components: {
    WorkoutPlanSectionComponent
  },
  data: () => {
    return {
      images: [
        require("../../assets/icons/dumbbells.png"),
        require("../../assets/icons/coach.png"),
        require("../../assets/icons/shopping-online.png"),
        require("../../assets/icons/information.png")
      ],
      pageContent: content,
      doc: "workoutPlan"
    };
  },
  methods: {
    ...mapActions("home", ["getText"])
  },
  created() {
    this.getText(this.doc).then(response => {
      this.pageContent = response;
    });
  }
};
</script>

<style scoped lang="scss">
.personalized-workout-plan {
  box-shadow: rgba(194, 194, 194, 0.7) 4px 3px 2px 1px;
  margin-top: 5rem;
  width: 92.5vw;
  min-height: 30rem;
  max-width: 95rem;

  .personalized-workout-plan-title {
    font-size: 2rem;
  }

  .personalized-workout-plan-addition {
    padding-left: 1rem;

    .personalized-workout-plan-subtitle {
      font-size: 1.2rem;
    }

    .personalized-workout-plan-client-goals-title {
      font-size: 1.2rem;
    }

    .personalized-workout-plan-client-goals-list {
      list-style: none;

      .client-goal {
        font-size: 1.1rem;
        margin-bottom: 0.2rem;
        position: relative;

        &::after {
          display: block;
          position: relative;
          content: "";
          border-bottom: 3px solid #de93c1;
          width: 2rem;
        }

        &:nth-child(1) {
          &::after {
            animation: width-change 6s infinite linear;
          }
        }

        &:nth-child(2) {
          &::after {
            animation: width-change 7s infinite linear;
          }
        }

        &:nth-child(3) {
          &::after {
            animation: width-change 8s infinite linear;
          }
        }
      }
    }
  }
}

@keyframes width-change {
  0% {
    width: 0;
  }
  50% {
    width: 6rem;
  }
  100% {
    width: 0;
  }
}
</style>
