<template>
  <div
    id="success-stories"
    class="success-stories"
    :style="`background-image: url('${getImageBackground}')`"
  >
    <div class="overlay overlay-black"></div>
    <div class="wrapper-reflejos" data-aos="zoom-in" data-aos-duration="2000">
      <div class="reflejos"></div>
      <div class="reflejos segundo"></div>
    </div>
    <div class="content mx-auto">
      <div class="success-stories-title text-center">
        <h5 class="title font-weight-bold">Success Stories</h5>
        <p class="subtitle font-italic mb-4">
          We don’t just sell, we’re beloved too.
        </p>
      </div>
      <div class="row justify-content-center align-items-center">
        <swiper
          :slides-per-view="1"
          effect="coverflow"
          :lazy="true"
          :pagination="{ clickable: isPc, type: 'fraction' }"
          :loop="true"
          :navigation="isPc"
          :autoplay="{
            delay: 4000
          }"
          :keyboard="{
            enabled: true
          }"
        >
          <swiper-slide
            v-for="(review, idx) in reviews"
            :key="idx"
            class="success-stories-swiper"
          >
            <SuccessStoriesWrapperComponent
              :review="review"
            ></SuccessStoriesWrapperComponent>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import SuccessStoriesWrapperComponent from "./partials/SuccessStoriesWrapperComponent";

import SwiperCore, {
  EffectCoverflow,
  Lazy,
  Navigation,
  Pagination,
  Autoplay,
  Keyboard
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { mapActions } from "vuex";
import content from "../../texts/successStoriesText";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import "swiper/components/lazy/lazy.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([
  EffectCoverflow,
  Lazy,
  Navigation,
  Pagination,
  Autoplay,
  Keyboard
]);

export default {
  name: "SuccessStoriesComponent",
  components: {
    Swiper,
    SwiperSlide,
    SuccessStoriesWrapperComponent
  },
  data: () => {
    return {
      reviews: content,
      windowWidth: window.innerWidth,
      doc: "successStories"
    };
  },
  computed: {
    getImageBackground() {
      const isMobile = this.windowWidth < 599;

      if (isMobile) {
        return require("../../assets/home/saragusfit-success-stories-mobile.jpg");
      }

      return require("../../assets/home/saragusfit-success-stories.jpg");
    },
    isPc() {
      return this.windowWidth > 599;
    }
  },
  methods: {
    ...mapActions("home", ["getText"])
  },
  created() {
    this.getText(this.doc).then(response => {
      this.reviews = response.opinions;
    });
  }
};
</script>

<style scoped lang="scss">

.wrapper-reflejos {
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 5;

  .reflejos {
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 300px;
    height: 100%;
    z-index: 0;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      20deg,
      rgba(215, 100, 135, 1) 0%,
      rgba(215, 100, 135, 0) 70%
    );
    opacity: 0.2;
    animation: reflejo 45s infinite;
  }

  .segundo {
    animation-direction: reverse;
  }
}

.change-content {
  font-size: 1rem;
}

.change-user {
  font-size: 1.2rem;
}

@keyframes reflejo {
  0% {
    transform: translateX(40vw) skewX(20deg);
  }
  20% {
    transform: translateX(80vw) skewX(20deg);
  }
  50% {
    transform: translateX(40vw) skewX(20deg);
  }
  70% {
    transform: translateX(30vw) skewX(20deg);
  }
  85% {
    transform: translateX(70vw) skewX(20deg);
  }
  100% {
    transform: translateX(40vw) skewX(20deg);
  }
}

.success-stories {
  width: 100vw;
  background-size: cover;

  @media screen and (max-width: 599px) {
    min-height: 34rem;
  }

  min-height: 40rem;
  position: relative;
  margin-top: 2.5rem;

  .content {
    position: relative;
    z-index: 5;
    width: 95%;
    max-width: 1600px;
  }

  .success-stories-title {
    padding-top: 2rem;

    .title {
      color: white;
      font-size: 2rem;
      margin-bottom: 0;
    }

    .subtitle {
      color: white;
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 599px) {
    .after-change {
      transform: translateY(35px);
    }
  }
}

@media screen and (min-width: 599px) {
  .success-stories-swiper {
    min-height: 30rem;
  }
}
</style>
