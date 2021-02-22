<template>
  <div
    class="col-12 col-md-7 col-xl-5 d-flex justify-content-center align-items-center"
    v-if="imagePath"
  >
    <div
      class="feedback-image"
      :style="`background-image: url('${imagePath}')`"
    ></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SuccessStoriesImageBasicComponent",
  props: {
    imageName: String
  },
  data: () => {
    return {
      imagePath: null
    };
  },
  methods: {
    ...mapActions("admin", ["getFile"])
  },
  created() {
    this.getFile(this.imageName).then(url => {
      this.imagePath = url.data;
    });
  }
};
</script>

<style scoped lang="scss">
.feedback-image {
  width: 35rem;
  height: 25rem;
  background-size: cover;
  background-position: center;
}

@media screen and (max-width: 599px) {
  .feedback-image {
    height: 20rem;
  }
}
</style>
