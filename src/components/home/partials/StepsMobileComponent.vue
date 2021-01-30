<template>
  <div class="d-flex justify-content-around flex-wrap">
    <div class="col-8 steps p-0">
      <div class="col-12" v-for="(step, idx) in getSteps" :key="idx">
        <ProccessStepComponent
          :step="step"
          :data-aos="step.aosMobile"
          data-aos-duration="1000"
        ></ProccessStepComponent>
      </div>
    </div>

    <div
      class="col-4 row justify-content-around circles p-0 align-items-center"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <div class="col-12">
        <CircleComponent></CircleComponent>
      </div>
      <div class="col-12">
        <CircleComponent></CircleComponent>
      </div>
      <div class="col-12">
        <CircleComponent></CircleComponent>
      </div>
      <div class="col-12">
        <CircleComponent></CircleComponent>
      </div>
      <div class="col-12">
        <CircleComponent></CircleComponent>
      </div>
    </div>
  </div>
</template>

<script>
import ProccessStepComponent from "./ProccessStepComponent";
import CircleComponent from "./CircleComponent";

export default {
  name: "StepsMobileComponent",
  props: {
    stepsUpper: Array,
    stepsDown: Array
  },
  components: {
    ProccessStepComponent,
    CircleComponent
  },
  computed: {
    getSteps() {
      const steps = [...this.stepsUpper, ...this.stepsDown];

      return steps.sort((a, b) => {
        return a.day - b.day;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.circles {
  position: relative;
  margin-top: 2rem;
  margin-bottom: 2rem;

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 0.2rem;
    background-color: #de93c1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
