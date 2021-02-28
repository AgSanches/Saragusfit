<template>
  <section>
    <CookiesPolicy
      v-if="!isLoadingPage && showCookies"
      @emitCloseCookies="showCookies = false"
    ></CookiesPolicy>
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
    <TheProccessComponent
      v-observe-visibility="{
        callback: reachVisibilityPopupLimitedOffer,
        once: true,
        throttle: 200
      }"
    ></TheProccessComponent>
    <GetYoursNowComponent></GetYoursNowComponent>
    <SuccessStoriesComponent></SuccessStoriesComponent>
    <SocialMediaComponent v-if="showSocialMedia"></SocialMediaComponent>
    <WhatsappComponent></WhatsappComponent>
    <TopUpButtonComponent></TopUpButtonComponent>
    <FreeWorkoutPlanComponent></FreeWorkoutPlanComponent>

    <div v-if="canShowPopup" class="wrapper-workout-plan mb-3">
      <PopupOfferWorkoutComponent
        :content="popupLimitedOfferContent"
      ></PopupOfferWorkoutComponent>
    </div>
  </section>
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
import PopupOfferWorkoutComponent from "../components/home/partials/PopupOfferWorkoutComponent";

export default {
  name: "Homepage",
  components: {
    PopupOfferWorkoutComponent,
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
      showCookies: false,
      showPopupLimitedOffer: false
    };
  },
  computed: {
    ...mapState("general", ["isLoadingPage"]),
    ...mapState("home", [
      "canShowPopupLimitedOffer",
      "popupLimitedOfferContent",
      "hidePopupLimitedOffer"
    ]),
    canShowPopup() {
      return (
        this.canShowPopupLimitedOffer &&
        this.popupLimitedOfferContent != null &&
        this.showPopupLimitedOffer
      );
    }
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
        this.setLocalStorageCookies();
        this.showCookies = true;
      }
    },
    setLocalStorageCookies() {
      localStorage.setItem("cookies", "shown");
    },
    reachVisibilityPopupLimitedOffer(isVisible) {
      this.showPopupLimitedOffer = isVisible;
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

.wrapper-workout-plan {
  position: sticky;
  position: -webkit-sticky;
  bottom: 0;
  z-index: 99;
  width: 100vw;
  animation: fadeInOpacity 1s linear, gradient 10s ease infinite;
  background: linear-gradient(45deg, #de93c1 50%, #194f92 85%);
  background-size: 200%;
}

@keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
