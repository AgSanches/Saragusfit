<template>
  <div
    class="plan text-center rainbow d-flex flex-column align-items-center justify-content-center"
  >
    <h4 class="plan-title text-primary font-weight-bold">
      {{ plan.name }}
    </h4>

    <img :src="image" alt="Icon of a plan" class="plan-icon d-block mx-auto" />

    <p class="plan-subtitle">
      {{ plan.subtitle }}
    </p>

    <p class="plan-price font-weight-bold">
      {{ plan.price }} €
      <span
        v-if="plan.isOffer"
        class="text-danger d-block font-weight-bolder plan-offer"
        >LIMITED OFFER</span
      >
    </p>

    <button class="btn btn-primary plan-btn" @click="startNowPlan">
      START NOW
    </button>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "PlanComponent",
  props: {
    plan: Object,
    image: String
  },
  methods: {
    startNowPlan() {
      $("#modalStartNowPlanComponent").modal("show");
    }
  }
};
</script>

<style scoped lang="scss">
@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}

@media screen and (min-width: 599px) {
  .rainbow {
    position: relative;
    z-index: 0;
    border-radius: 10px;
    overflow: hidden;
    padding: 1rem;

    &::before {
      content: "";
      position: absolute;
      z-index: -2;
      left: -50%;
      top: -50%;
      width: 200%;
      height: 200%;
      background-color: #399953;
      background-repeat: no-repeat;
      background-size: 50% 50%, 50% 50%;
      background-position: 0 0, 100% 0, 100% 100%, 0 100%;
      background-image: linear-gradient(#fff, #de93c1),
        linear-gradient(#de93c1, #fff), linear-gradient(#fff, #de93c1),
        linear-gradient(#fff, #de93c1);
      animation: rotate 10s linear infinite;
    }

    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      left: 6px;
      top: 6px;
      width: calc(100% - 12px);
      height: calc(100% - 12px);
      background: white;
      border-radius: 5px;
    }
  }
}

.plan {
  min-height: 30rem;
  -webkit-box-shadow: 0px 10px 5px 10px rgba(140, 140, 140, 0.5);
  -moz-box-shadow: 0px 10px 5px 10px rgba(140, 140, 140, 0.5);
  box-shadow: 0px 10px 5px 10px rgba(140, 140, 140, 0.5);
  cursor: pointer;
  transition: all 1s;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 1440px) {
    max-width: 20rem;
    margin: 0 auto;
  }

  animation: border 2s infinite;

  .plan-title {
    padding-top: 1rem;
    font-size: 1.5rem;
  }

  .plan-icon {
    width: 150px;
    margin-top: 1.5rem;
  }

  .plan-subtitle {
    margin-top: 1rem;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .plan-price {
    font-size: 2rem;

    .plan-offer {
      font-size: 1.2rem;
    }
  }

  .plan-btn {
    font-size: 1.4rem;
    transition: all 1s;
    animation: animationScaleButton 5s 1s linear infinite;
  }

  &:hover {
    transform: scale(1.05);

    .plan-btn {
      font-size: 1.65rem;
    }
  }
}

@keyframes animationScaleButton {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.07);
  }
  100% {
    transform: scale(1);
  }
}
</style>
