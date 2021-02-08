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
import { mapActions } from "vuex";
import content from "../../texts/theProccessText";

export default {
  name: "TheProccessComponent",
  components: {
    StepMobileComponent,
    StepsDesktopComponent,
    TitleComponent
  },
  data: () => {
    return {
      stepsUpper: content.stepsUpper,
      stepsDown: content.stepsDown,
      windowWidth: window.innerWidth,
      doc: "theProccess"
    };
  },
  computed: {
    isViewResize() {
      return this.windowWidth < 599;
    }
  },
  methods: {
    ...mapActions("home", ["getText"])
  },
  created() {
    this.getText(this.doc).then(content => {
      this.stepsUpper = content.stepsUpper;
      this.stepsDown = content.stepsDown;
    });
  }
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
