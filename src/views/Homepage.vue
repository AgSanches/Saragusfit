<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <MissionAndVisionComponent></MissionAndVisionComponent>
    <AboutUsComponent></AboutUsComponent>
    <PersonalCardsSectionComponent></PersonalCardsSectionComponent>
    <PersonalizedWorkoutPlanComponent></PersonalizedWorkoutPlanComponent>
    <TheProccessComponent></TheProccessComponent>
  </div>
</template>

<script>
import HeaderComponent from "../components/home/HeaderComponent";
import MissionAndVisionComponent from "../components/home/MissionAndVisionComponent";
import AboutUsComponent from "../components/home/AboutUsComponent";
import PersonalCardsSectionComponent from "../components/home/PersonalCardsSectionComponent";
import PersonalizedWorkoutPlanComponent from "../components/home/PersonalizedWorkoutPlanComponent";
import TheProccessComponent from "../components/home/TheProccessComponent";

export default {
  name: "Homepage",
  components: {
    HeaderComponent,
    MissionAndVisionComponent,
    AboutUsComponent,
    PersonalCardsSectionComponent,
    PersonalizedWorkoutPlanComponent,
    TheProccessComponent
  }
};
</script>

<style scoped lang="scss">
.about-us,
.personal-information {
  width: 75vw;
}
</style>
