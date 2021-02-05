<template>
  <div id="the-process" class="the-proccess mx-auto">
    <TitleComponent title="THE PROCESS"></TitleComponent>
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
import TitleComponent from "./partials/TitleComponent";

export default {
  name: "TheProccessComponent",
  components: {
    StepMobileComponent,
    StepsDesktopComponent,
    TitleComponent
  },
  data: () => {
    return {
      stepsUpper: [
        {
          day: 0,
          name: "The Intake Interview",
          content: "Intake interview.",
          isDown: false,
          aosMobile: "fade-right",
          aosDesktop: "fade-down-right"
        },
        {
          day: 7,
          name: "First Impression",
          content: "Feedback on first-week training. Any doubts or questions?",
          isDown: false,
          aosMobile: "fade-right",
          aosDesktop: "fade-down"
        },
        {
          day: 30,
          name: "The Grand Finale",
          content:
            "Take final measurements, customer review, and plan feedback as a whole. Goal reached? + visual representation of your progress.",
          isDown: false,
          aosMobile: "fade-right",
          aosDesktop: "fade-down-left"
        }
      ],
      stepsDown: [
        {
          day: 1,
          name: "First Day Of Training",
          content: "First Day Of Training.",
          isDown: true,
          aosMobile: "fade-right",
          aosDesktop: "fade-up-right"
        },
        {
          day: 15,
          name: "Half-way Point",
          content: "Feedback, the general feeling, positives, and negatives.",
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
}
</style>
