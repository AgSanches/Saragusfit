<template>
  <div class="d-flex justify-content-around flex-wrap">
    <div
      class="col-12 col-md-4 p-3"
      v-for="(step, idx) in stepsUpper"
      :key="idx"
    >
      <ProccessStepComponent
        :step="step"
        :data-aos="step.aosDesktop"
        data-aos-duration="1000"
      ></ProccessStepComponent>
    </div>

    <div
      class="col-12 row justify-content-around circles"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <div class="col-2">
        <CircleComponent></CircleComponent>
      </div>
      <div class="col-2">
        <CircleComponent></CircleComponent>
      </div>
      <div class="col-2">
        <CircleComponent></CircleComponent>
      </div>
      <div class="col-2">
        <CircleComponent></CircleComponent>
      </div>
      <div class="col-2">
        <CircleComponent></CircleComponent>
      </div>
    </div>

    <div
      class="col-12 col-md-4 p-3"
      v-for="(step, idx) in stepsDown"
      :key="idx"
    >
      <ProccessStepComponent
        :step="step"
        :data-aos="step.aosDesktop"
        data-aos-duration="1000"
      ></ProccessStepComponent>
    </div>
  </div>
</template>

<script>
import ProccessStepComponent from "./ProccessStepComponent";
import CircleComponent from "./CircleComponent";

export default {
  name: "StepsDesktopComponent",
  props: {
    stepsUpper: Array,
    stepsDown: Array
  },
  components: {
    ProccessStepComponent,
    CircleComponent
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
    width: 100%;
    height: 0.2rem;
    background-color: #de93c1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
