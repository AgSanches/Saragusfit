<template>
  <div id="the-process" class="the-proccess mx-auto">
    <div
      class="the-proccess-title d-flex justify-content-center align-items-center"
    >
      <div class="line mr-2"></div>
      <h3 class="title font-weight-bold">THE PROCESS</h3>
      <div class="line ml-2"></div>
    </div>

    <StepsDesktopComponent
      v-if="!isViewResize"
      :steps-upper="stepsUpper"
      :steps-down="stepsDown"
    ></StepsDesktopComponent>

    <StepMobileComponent
      v-else
      :steps-upper="stepsUpper"
      :steps-down="stepsDown"
    ></StepMobileComponent>
  </div>
</template>

<script>
import StepsDesktopComponent from "./partials/StepsDesktopComponent";
import StepMobileComponent from "./partials/StepsMobileComponent";

export default {
  name: "TheProccessComponent",
  components: {
    StepMobileComponent,
    StepsDesktopComponent
  },
  data: () => {
    return {
      stepsUpper: [
        {
          day: 0,
          name: "Intake interview",
          content:
            "We will know you, take initial measurements, and define your needs, goals and preferences",
          isDown: false,
          aosMobile: "fade-right",
          aosDesktop: "fade-down-right"
        },
        {
          day: 7,
          name: "First Impressions",
          content: "Feedback on first-week training. Any doubts or questions?",
          isDown: false,
          aosMobile: "fade-right",
          aosDesktop: "fade-down"
        },
        {
          day: 30,
          name: "The Grand Finale",
          content:
            "Take final measurements, customer review, and plan feedback as a whole. Goal reached? + visual representation of your progress",
          isDown: false,
          aosMobile: "fade-right",
          aosDesktop: "fade-down-left"
        }
      ],
      stepsDown: [
        {
          day: 1,
          name: "First Day Of Training",
          content: "Feedback on first-week training. Any doubts or questions?",
          isDown: true,
          aosMobile: "fade-right",
          aosDesktop: "fade-up-right"
        },
        {
          day: 15,
          name: "Half-way Point",
          content: "Feedback, the general feeling, positives, and negatives",
          isDown: true,
          aosMobile: "fade-right",
          aosDesktop: "fade-up-left"
        }
      ],
      windowWidth: window.innerWidth
    };
  },
  computed: {
    isViewResize() {
      return this.windowWidth < 599;
    }
  },
  watch: {}
};
</script>

<style scoped lang="scss">
.the-proccess {
  margin-top: 3.5rem;
  width: 95vw;
  max-width: 1700px;

  @media screen and (max-width: 599px) {
    width: 100vw;
  }

  .the-proccess-title {
    .title {
      text-align: center;
    }

    .line {
      width: 3rem;
      border-bottom: 3px solid #de93c1;
    }
  }
}
</style>
