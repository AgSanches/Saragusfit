<template>
  <div
    class="col-12 col-md-7 col-xl-5 row justify-content-center align-items-center"
  >
    <img :src="image" alt="Saragusfit feedback image" class="feedback-image d-block mx-auto" />
  </div>
</template>

<script>
export default {
  name: "SuccessStoriesImageBasicComponent",
  props: {
    image: String
  }
};
</script>

<style scoped lang="scss">
.feedback-image {
  width: 95%;
}
</style>
