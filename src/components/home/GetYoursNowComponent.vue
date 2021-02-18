<template>
  <div class="get-yours-now mx-auto" id="get-yours-now">
    <TitleComponent title="GET YOURS NOW"></TitleComponent>

    <ModalStartNowPlanComponent></ModalStartNowPlanComponent>
    <div
      v-if="showModal"
      v-observe-visibility="{
        callback: visibilityChanged,
        once: true,
        throttle: 600
      }"
    >
      <PopupOfferWorkoutComponent
        v-if="isAlreadyVisible"
      ></PopupOfferWorkoutComponent>
    </div>

    <div class="services row justify-content-center align-items-center mt-3">
      <div
        class="col-11 col-md-4 col-xl-3 p-1 mx-5"
        v-for="(plan, idx) in plans"
        :key="idx"
      >
        <PlanComponent
          :image="image"
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
import PopupOfferWorkoutComponent from "./partials/PopupOfferWorkoutComponent";
import { mapActions } from "vuex";

export default {
  name: "GetYoursNowComponent",
  components: {
    TitleComponent,
    PlanComponent,
    ModalStartNowPlanComponent,
    PopupOfferWorkoutComponent
  },
  data: () => {
    return {
      doc: "plansSection",
      image: require("../../assets/icons/dumbell-plan.png"),
      plans: [
        {
          name: "Personalized Workout Plan",
          icon: require("../../assets/icons/dumbell-plan.png"),
          subtitle: "First ten clients",
          price: 5,
          isOffer: true
        }
      ],
      showModal: false,
      isAlreadyVisible: false
    };
  },
  methods: {
    ...mapActions("home", ["getText"]),
    visibilityChanged(isVisible) {
      if (this.isAlreadyVisible) return;

      if (isVisible) {
        this.isAlreadyVisible = true;
      }
    }
  },
  created() {
    this.getText(this.doc).then(response => {
      this.plans = response.plans;
      this.showModal = response.showModal;
    });
  }
};
</script>

<style scoped lang="scss">
.get-yours-now {
  margin-top: 3rem;
  width: 95vw;
}
</style>
