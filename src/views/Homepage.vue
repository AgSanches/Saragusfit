<template>
  <div>
    <CookiesPolicy v-if="!isLoadingPage && showCookies" @emitCloseCookies="showCookies = false"></CookiesPolicy>
    <HeaderComponent></HeaderComponent>
    <MissionAndVisionComponent></MissionAndVisionComponent>
    <AboutUsComponent></AboutUsComponent>
    <PersonalCardsSectionComponent></PersonalCardsSectionComponent>
    <PersonalizedWorkoutPlanComponent
      v-observe-visibility="{
        callback: visibilityChanged,
        once: true,
        throttle: 200
      }"
    ></PersonalizedWorkoutPlanComponent>
    <TheProccessComponent></TheProccessComponent>
    <GetYoursNowComponent></GetYoursNowComponent>
    <SuccessStoriesComponent></SuccessStoriesComponent>
    <SocialMediaComponent v-if="showSocialMedia"></SocialMediaComponent>
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
import CookiesPolicy from "../components/home/partials/CookiesPolicy";

import { mapState } from "vuex";

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
    FreeWorkoutPlanComponent,
    CookiesPolicy
  },
  data: () => {
    return {
      showSocialMedia: false,
      showCookies: false
    };
  },
  computed: {
    ...mapState("general", ["isLoadingPage"])
  },
  methods: {
    handleScroll() {
      if (!this.showSocialMedia && window.scrollY > 500) {
        this.showSocialMedia = true;
        document.removeEventListener("scroll", this.handleScroll);
      }
    },
    visibilityChanged(isVisible) {
      if (this.isAlreadyVisible) return;

      if (isVisible) {
        this.showSocialMedia = true;
      }
    },
    checkShowCookies() {
      const isSafeCookies = localStorage.getItem("cookies") != null;

      if (!isSafeCookies) {
        //this.setLocalStorageCookies();
        this.showCookies = true;
      }
    },
    setLocalStorageCookies() {
      localStorage.setItem("cookies", "shown");
    }
  },
  created() {
    this.checkShowCookies();
  }
};
</script>

<style scoped lang="scss">
.about-us,
.personal-information {
  width: 75vw;
}
</style>
