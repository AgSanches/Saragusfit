<template>
  <div class="step-wrapper">
    <div class="step text-center">
      <p class="day text-secondary font-italic">Day {{ step.day }}</p>
      <h4 class="title text-primary font-weight-bold">{{ step.name }}</h4>
      <div class="content d-flex align-items-center">
        <p class="text">{{ step.content }}</p>
      </div>
    </div>
    <div class="separator"></div>
    <div class="cirle mx-auto"></div>
  </div>
</template>

<script>
export default {
  name: "ProccessStepComponent",
  props: {
    step: Object
  }
};
</script>

<style scoped lang="scss">
.step-wrapper {
  position: relative;
}

.separator {
  height: 5rem;
}

.cirle {
  width: 5rem;
  height: 5rem;
  background-color: #de93c1;
  border-radius: 50%;
}

.step {
  padding: 2rem;
  -webkit-box-shadow: 0px 15px 13px 3px rgba(115, 103, 115, 0.52);
  -moz-box-shadow: 0px 15px 13px 3px rgba(115, 103, 115, 0.52);
  box-shadow: 0px 15px 13px 3px rgba(115, 103, 115, 0.52);
  position: relative;

  .content {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: all 1s;

    background: linear-gradient(
      45deg,
      rgba(222, 147, 193, 1) 50%,
      rgba(25, 79, 146, 1) 100%
    );

    .text {
      padding: 1rem;
      color: white;
    }
  }

  &:hover {
    .content {
      opacity: 1;
    }
  }
}
</style>
