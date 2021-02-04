<template>
  <div
    class="change bg-white d-flex flex-column align-items-end justify-content-end"
  >
    <div class="img-wrapper mx-auto swiper-lazy" :data-background="image">
      <div class="swiper-lazy-preloader"></div>
    </div>

    <p class="change-text bg-primary text-center p-1 mb-0 w-100 text-white">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "SuccessStoriesChangeComponent",
  props: {
    text: String,
    image: String
  }
};
</script>

<style scoped lang="scss">
.change {
  width: 100%;
  height: 25rem;

  .img-wrapper {
    width: 90%;
    height: 85%;
    background-size: cover;
    background-position: center;
    margin-bottom: 1rem;
  }

  .change-text {
    font-size: 1.3rem;
  }
}

.swiper-lazy-preloader {
  border: 4px solid #de93c1;
  border-top-color: transparent;
}

@media screen and (max-width: 599px) {
  .change {
    height: 15rem;

    .img-wrapper {
      width: 100%;
      height: 100%;
      margin: 0;
    }
  }
}
</style>
