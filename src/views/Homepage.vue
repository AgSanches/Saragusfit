<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <MissionAndVisionComponent></MissionAndVisionComponent>
    <AboutUsComponent></AboutUsComponent>
    <PersonalCardsSectionComponent></PersonalCardsSectionComponent>
    <PersonalizedWorkoutPlanComponent></PersonalizedWorkoutPlanComponent>
    <TheProccessComponent></TheProccessComponent>
    <GetYoursNowComponent></GetYoursNowComponent>
    <SuccessStoriesComponent></SuccessStoriesComponent>
    <SocialMediaComponent></SocialMediaComponent>
    <WhatsappComponent></WhatsappComponent>
    <TopUpButtonComponent></TopUpButtonComponent>
    <FreeWorkoutPlanComponent></FreeWorkoutPlanComponent>
  </div>
</template>

<script>
import HeaderComponent from "../components/home/HeaderComponent";
import MissionAndVisionComponent from "../components/home/MissionAndVisionComponent";
import AboutUsComponent from "../components/home/AboutUsComponent";
import PersonalCardsSectionComponent from "../components/home/PersonalCardsSectionComponent";
import PersonalizedWorkoutPlanComponent from "../components/home/PersonalizedWorkoutPlanComponent";
import TheProccessComponent from "../components/home/TheProccessComponent";
import GetYoursNowComponent from "../components/home/GetYoursNowComponent";
import SuccessStoriesComponent from "../components/home/SuccessStoriesComponent";
import WhatsappComponent from "../components/general/WhatsappComponent";
import TopUpButtonComponent from "../components/general/TopUpButtonComponent";
import SocialMediaComponent from "../components/home/SocialMediaComponent";
import FreeWorkoutPlanComponent from "../components/home/FreeWorkoutPlanComponent";

export default {
  name: "Homepage",
  components: {
    HeaderComponent,
    MissionAndVisionComponent,
    AboutUsComponent,
    PersonalCardsSectionComponent,
    PersonalizedWorkoutPlanComponent,
    TheProccessComponent,
    GetYoursNowComponent,
    SuccessStoriesComponent,
    WhatsappComponent,
    TopUpButtonComponent,
    SocialMediaComponent,
    FreeWorkoutPlanComponent
  }
};
</script>

<style scoped lang="scss">
.about-us,
.personal-information {
  width: 75vw;
}
</style>
