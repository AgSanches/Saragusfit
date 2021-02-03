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
        <p class="subtitle font-italic">
          We don’t just sell, we’re beloved too.
        </p>
      </div>
      <div class="row justify-content-center align-items-center">
        <swiper
          :slides-per-view="1"
          effect="coverflow"
          :lazy="true"
          :pagination="{ clickable: true }"
          :loop="true"
          :navigation="isMobile"
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
            <div
              class="col-12 row align-items-center justify-content-center mx-auto"
            >
              <div
                class="col-12 col-md-7 col-xl-5 row justify-content-center align-items-center"
              >
                <div class="col-6 p-1">
                  <SuccessStoriesChangeComponent
                    :image="review.images[0]"
                    text="Before"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                  ></SuccessStoriesChangeComponent>
                </div>

                <div class="col-6 p-1 after-change">
                  <SuccessStoriesChangeComponent
                    :image="review.images[1]"
                    text="After"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="150"
                  ></SuccessStoriesChangeComponent>
                </div>
              </div>
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
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import SuccessStoriesChangeComponent from "./partials/SuccessStorieChangeComponent";
import SwiperCore, {
  EffectCoverflow,
  Lazy,
  Navigation,
  Pagination,
  Autoplay,
  Keyboard
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

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
    SuccessStoriesChangeComponent,
    Swiper,
    SwiperSlide
  },
  data: () => {
    return {
      reviews: [
        {
          text:
            "SARAGUSFIT workouts are so much fun! The music, the environment, and the girls are the perfect combinations to get my body moving without complaints!",
          user: "Amina Augusto",
          images: [
            require("../../assets/home/saragusfit-photo-sara.jpeg"),
            require("../../assets/home/saragusfit-photo-agustina.jpeg")
          ]
        },
        {
          text:
            "SARAGUSFIT workouts are more than just simply exercises! It's a safe place to work on yourself, improve your confidence and become more disciplined! They are such a fun and challenging part of the day!!!",
          user: "Andres Giraldo",
          images: [
            require("../../assets/home/saragusfit-photo-sara.jpeg"),
            require("../../assets/home/saragusfit-photo-agustina.jpeg")
          ]
        },
        {
          text:
            "An amazing duo, if they can motivate me, they can motivate ANYONE!",
          user: "Carlotta Peverada",
          images: [
            require("../../assets/home/saragusfit-photo-sara.jpeg"),
            require("../../assets/home/saragusfit-photo-agustina.jpeg")
          ]
        },
        {
          text:
            "My experience with SARAGUSFIT training sessions was overall amazing. I usually find working out very difficult, and I lose motivation very fast, but SARAGUSFIT workouts helped me find the joy and fun in working out. Their routines are very dynamic, easy, and effective to do, and the time went so fast! Always with a smile and good energy, I recommend everyone to give it a go!",
          user: "Natalia Angelucci",
          images: [
            require("../../assets/home/saragusfit-photo-sara.jpeg"),
            require("../../assets/home/saragusfit-photo-agustina.jpeg")
          ]
        }
      ],
      windowWidth: window.innerWidth
    };
  },
  computed: {
    getImageBackground() {
      const isMobile = this.windowWidth < 599;

      if (isMobile) {
        return require("../../assets/home/saragusfit-success-stories-mobile.jpg");
      }

      return require("../../assets/home/saragusfit-success-stories.jpg");
    }
  },
  isMobile() {
    return this.windowWidth < 599;
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

  min-height: 45rem;
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
