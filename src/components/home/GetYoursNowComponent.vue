<template>
  <div class="get-yours-now mx-auto" id="get-yours-now">
    <TitleComponent title="GET YOURS NOW"></TitleComponent>

    <div class="services row justify-content-center align-items-center mt-3">
      <div class="col-11 col-md-4 p-1 mx-5" v-for="(plan, idx) in plans" :key="idx">
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

export default {
  name: "GetYoursNowComponent",
  components: {
    TitleComponent,
    PlanComponent
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
        },
        {
          name: "Ganarle a Sara",
          icon: require("../../assets/icons/dumbell-plan.png"),
          subtitle: "¿Quién podrá?",
          price: 999,
          isOffer: false
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
