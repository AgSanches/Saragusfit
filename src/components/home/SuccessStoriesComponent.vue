<template>
  <div id="success-stories" class="success-stories">
    <div class="overlay overlay-black"></div>
    <div class="wrapper-reflejos">
      <div class="reflejos"></div>
      <div class="reflejos segundo"></div>
    </div>
    <div class="content mx-auto">
      <div class="success-stories-title text-center">
        <h6 class="title font-weight-bold">Success Stories</h6>
        <p class="subtitle font-italic">
          We don’t just sell, we’re beloved too.
        </p>
      </div>
      <div class="row justify-content-center align-items-center">
        <div
          class="col-12 row align-items-center justify-content-center "
          v-for="(review, idx) in reviews"
          :key="idx"
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
      </div>
    </div>
  </div>
</template>

<script>
import SuccessStoriesChangeComponent from "./partials/SuccessStorieChangeComponent";

export default {
  name: "SuccessStoriesComponent",
  components: {
    SuccessStoriesChangeComponent
  },
  data: () => {
    return {
      reviews: [
        {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dolor mauris, tincidunt nec finibus ut, eleifend a diam. Nulla facilisi. Ut mollis, velit quis efficitur",
          user: "Amina Augusto",
          images: [
            require("../../assets/home/saragusfit-photo-sara.jpeg"),
            require("../../assets/home/saragusfit-photo-agustina.jpeg")
          ]
        }
      ]
    };
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
  background-image: url("../../assets/home/saragusfit-success-stories.jpg");
  width: 100vw;
  background-size: cover;

  @media screen and (max-width: 599px) {
    height: 35rem;
  }

  height: 45rem;
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
</style>
