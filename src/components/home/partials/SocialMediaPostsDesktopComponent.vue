<template>
  <swiper
    :slides-per-view="2"
    :space-between="50"
    :loop="true"
    :autoplay="{
      delay: 2000
    }"
  >
    <swiper-slide v-for="(post, idx) in instagramPosts" :key="idx">
      <SocialMediaCardComponent :post="post"></SocialMediaCardComponent>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SocialMediaCardComponent from "./SocialMediaCardComponent";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

// Import Swiper styles
import "swiper/swiper.scss";

export default {
  name: "SocialMediaPostsDesktopComponent",
  props: {
    instagramPosts: Array
  },
  components: {
    Swiper,
    SwiperSlide,
    SocialMediaCardComponent
  }
};
</script>

<style scoped></style>
