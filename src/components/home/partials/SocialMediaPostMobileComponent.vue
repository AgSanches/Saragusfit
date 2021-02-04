<template>
  <swiper :slides-per-view="1" :space-between="50" :loop="true" effect="cube">
    <swiper-slide
      v-for="(post, idx) in instagramPosts"
      :key="idx"
      :id="`post-${idx}`"
    >
      <SocialMediaCardComponent :post="post"></SocialMediaCardComponent>
    </swiper-slide>
  </swiper>
</template>

<script>
import SwiperCore, { EffectCube } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import SocialMediaCardComponent from "./SocialMediaCardComponent";

SwiperCore.use([EffectCube]);
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/effect-cube/effect-cube.min.css";

export default {
  name: "SocialMediaPostMobileComponent",
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

<style scoped lang="scss">
@import "node_modules/swiper/components/effect-cube/effect-cube";
</style>
