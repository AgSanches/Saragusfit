<template>
  <div class="get-yours-now mx-auto" id="get-yours-now">
    <TitleComponent title="GET YOURS NOW"></TitleComponent>

    <ModalStartNowPlanComponent></ModalStartNowPlanComponent>
    <div class="services row justify-content-center align-items-center mt-3">
      <div
        class="col-11 col-md-4 col-xl-3 p-1 mx-5"
        v-for="(plan, idx) in plans"
        :key="idx"
      >
        <PlanComponent
          :plan="plan"
          data-aos="fade-up"
          data-aos-duration="1000"
        ></PlanComponent>
      </div>
    </div>
  </div>
</template>

<script>
import TitleComponent from "./partials/TitleComponent";
import PlanComponent from "./partials/PlanComponent";
import ModalStartNowPlanComponent from "./partials/ModalStartNowPlanComponent";

export default {
  name: "GetYoursNowComponent",
  components: {
    TitleComponent,
    PlanComponent,
    ModalStartNowPlanComponent
  },
  data: () => {
    return {
      plans: [
        {
          name: "Personalized Workout Plan",
          icon: require("../../assets/icons/dumbell-plan.png"),
          subtitle: "First ten clients",
          price: 5,
          isOffer: true
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.get-yours-now {
  margin-top: 3rem;
  width: 95vw;
}
</style>
