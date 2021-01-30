<template>
  <div class="plan text-center rainbow">
    <h5 class="plan-title text-primary font-weight-bold">
      {{ plan.name }}
    </h5>

    <img
      :src="plan.icon"
      alt="Icon of a plan"
      class="plan-icon d-block mx-auto"
    />

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
export default {
  name: "PlanComponent",
  props: {
    plan: Object
  },
  methods: {
    startNowPlan() {
      alert("Sara es una novatilla");
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
    background-image: linear-gradient(#de93c1, #de93c1),
      linear-gradient(#194f92, #194f92), linear-gradient(#de93c1, #de93c1),
      linear-gradient(#194f92, #194f92);
    animation: rotate 10s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    background: white;
    border-radius: 5px;
  }
}

.plan {
  min-height: 30rem;
  -webkit-box-shadow: 0px 10px 5px 10px rgba(140, 140, 140, 0.5);
  -moz-box-shadow: 0px 10px 5px 10px rgba(140, 140, 140, 0.5);
  box-shadow: 0px 10px 5px 10px rgba(140, 140, 140, 0.5);
  cursor: pointer;
  transition: all 1s;

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
  }

  &:hover {
    transform: scale(1.05);

    .plan-btn {
      font-size: 1.65rem;
    }
  }
}
</style>
