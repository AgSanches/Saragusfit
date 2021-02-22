<template>
  <div
    v-if="review"
    class="col-12 row align-items-center justify-content-center my-2 mx-auto p-2"
  >
    <SuccessStoriesImageBasicComponent
      v-if="review.imageBasic && review.image"
      :image-name="review.image"
    ></SuccessStoriesImageBasicComponent>

    <SuccessStoriesImageBeforeAndAfterComponent
      v-else-if="review.beforeImage && review.afterImage"
      :image-before="review.beforeImage"
      :image-after="review.afterImage"
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
  components: {
    SuccessStoriesImageBeforeAndAfterComponent,
    SuccessStoriesImageBasicComponent
  }
};
</script>

<style scoped></style>
