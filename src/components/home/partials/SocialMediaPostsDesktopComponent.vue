<template>
  <swiper
    :slides-per-view="3"
    :space-between="100"
    :loop="true"
    navigation
    :pagination="{ clickable: true }"
  >
    <swiper-slide v-for="(post, idx) in instagramPosts" :key="idx">
      <SocialMediaCardComponent :post="post"></SocialMediaCardComponent>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SocialMediaCardComponent from "./SocialMediaCardComponent";
import SwiperCore, { Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination]);

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

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
