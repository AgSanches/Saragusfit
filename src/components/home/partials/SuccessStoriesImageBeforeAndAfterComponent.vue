<template>
  <div
    class="col-12 col-md-7 col-xl-5 row justify-content-center align-items-center"
  >
    <div class="col-6 p-1">
      <SuccessStoriesChangeComponent
        :image="images[0]"
        text="Before"
        data-aos="zoom-in"
        data-aos-duration="1000"
      ></SuccessStoriesChangeComponent>
    </div>

    <div class="col-6 p-1 after-change">
      <SuccessStoriesChangeComponent
        :image="images[1]"
        text="After"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="150"
      ></SuccessStoriesChangeComponent>
    </div>
  </div>
</template>

<script>
import SuccessStoriesChangeComponent from "./SuccessStorieChangeComponent";

export default {
  name: "SuccessStoriesImageBeforeAndAfterComponent",
  components: {
    SuccessStoriesChangeComponent
  },
  props: {
    images: Array
  }
};
</script>

<style scoped></style>
