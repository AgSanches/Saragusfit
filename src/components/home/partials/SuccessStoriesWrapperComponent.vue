<template>
  <div class="col-12 row align-items-center justify-content-center mx-auto">
    <SuccessStoriesImageBasicComponent
      v-if="review.imageBasic"
      :image="imageBasic"
    ></SuccessStoriesImageBasicComponent>

    <SuccessStoriesImageBeforeAndAfterComponent
      v-else
      :images="images"
    ></SuccessStoriesImageBeforeAndAfterComponent>

    <div
      class="col-12 col-md-5 col-xl-4 mt-2 mt-md-0"
      data-aos="fade-up-left"
      data-aos-duration="1500"
    >
      <p class="change-content text-white">
        {{ review.text }}
      </p>
      <p
        class="change-user text-center font-italic text-primary font-weight-bold"
      >
        {{ review.user }}
      </p>
    </div>
  </div>
</template>

<script>
import SuccessStoriesImageBeforeAndAfterComponent from "./SuccessStoriesImageBeforeAndAfterComponent";
import SuccessStoriesImageBasicComponent from "./SuccessStoriesImageBasicComponent";

export default {
  name: "SuccessStoriesWrapper",
  props: {
    review: Object
  },
  data: () => {
    return {
      images: [
        require("../../../assets/home/saragusfit-photo-sara.jpeg"),
        require("../../../assets/home/saragusfit-photo-agustina.jpeg")
      ],
      imageBasic: require("../../../assets/home/saragusfit-feedback.jpg")
    };
  },
  components: {
    SuccessStoriesImageBeforeAndAfterComponent,
    SuccessStoriesImageBasicComponent
  }
};
</script>

<style scoped></style>
