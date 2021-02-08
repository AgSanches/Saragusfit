<template>
  <div id="personal-information" class="personal-information-wrapper">
    <div
      class="personal-information mx-auto row justify-content-center align-items-center"
      v-if="coachs && coachs.length > 0"
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
        <CardComponent :coach="coach" :image="images[idx]"></CardComponent>
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "./partials/CardComponent";
import { mapActions } from "vuex";

export default {
  name: "PersonalCardsSectionComponent",
  components: {
    CardComponent
  },
  data: () => {
    return {
      images: [
        require("../../assets/home/saragusfit-photo-sara.jpeg"),
        require("../../assets/home/saragusfit-photo-agustina.jpeg")
      ],
      coachs: null,
      doc: "coach"
    };
  },
  methods: {
    ...mapActions("home", ["getText"])
  },
  created() {
    this.getText(this.doc).then(response => {
      this.coachs = response.coachs;
    });
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
