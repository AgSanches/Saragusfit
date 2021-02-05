<template>
  <div id="personal-information" class="personal-information-wrapper">
    <div
      class="personal-information mx-auto row justify-content-center align-items-center"
    >
      <div
        class="col-12 col-md-4 col-xl-3 p-2 mx-md-3"
        v-for="(coach, idx) in coachs"
        :key="idx"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2000"
        data-aos-anchor-placement="top-bottom"
        :data-aos-delay="200 * idx"
      >
        <CardComponent
          :coach="coach.coach"
          :image="coach.image"
        ></CardComponent>
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "./partials/CardComponent";

export default {
  name: "PersonalCardsSectionComponent",
  components: {
    CardComponent
  },
  data: () => {
    return {
      coachs: [
        {
          image: require("../../assets/home/saragusfit-photo-sara.jpeg"),
          coach: {
            name: "Sara",
            subtitle:
              "Every little bit helps, and all of the bits really add up.",
            description:
              "I want to help you achieve your fitness goals and make you feel good and empowered! Because this is a beautiful journey in which you are the narrator and where you will see amazing changes in the short and long term.",
            instagram_link: "",
            facebook_link: "",
            image_description: "Image of Sara"
          }
        },
        {
          image: require("../../assets/home/saragusfit-photo-agustina.jpeg"),
          coach: {
            name: "Agustina",
            subtitle:
              "I want to help you achieve your goals and live a happy, healthy, and active life!",
            description:
              "Accompanying you through your journey, serving as a guide, a safe space to talk, and, most importantly, supporting you each step of the way to becoming who you want to be!",
            instagram_link: "",
            facebook_link: "",
            image_description: "Image of Agustina"
          }
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.personal-information-wrapper {
  margin-top: 5rem;
  width: 100vw;
  background-image: url("../../assets/svg/wave-banner-full.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
