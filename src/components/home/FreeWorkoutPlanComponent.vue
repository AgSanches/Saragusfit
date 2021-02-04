<template>
  <div
    class="free-workout-plan row justify-content-center align-items-center mx-0"
    id="free-workout-plan"
  >
    <div class="overlay overlay-black"></div>
    <div class="wrapper-reflejos" data-aos="zoom-in" data-aos-duration="1000">
      <div class="reflejos"></div>
      <div class="reflejos segundo"></div>
    </div>
    <div class="content mx-auto text-center">
      <div class="title pb-3" data-aos="fade-down" data-aos-duration="1500">
        <h3 class="text-primary font-weight-bold mb-0 ">
          FITNESS CHALLENGES
        </h3>
        <small class="font-italic text-white"
          >Complimentary service and completely FREE.</small
        >
      </div>
      <div class="text-wrapper text-white">
        <p class="text mx-auto" data-aos="fade-up" data-aos-duration="1200">
          Join our fitness challenges, and let us help you achieve your fitness
          goals and improve your performance in no time.
        </p>
        <button
          class="btn btn-gradient"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="500"
        >
          FREE WORKOUT
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FreeWorkoutPlanComponent"
};
</script>

<style scoped lang="scss">
.free-workout-plan {
  width: 100vw;
  height: 20rem;

  @media screen and (max-width: 599px) {
    height: 23rem;
  }

  background-size: cover;
  background-position: center;
  background-image: url("../../assets/home/saragusfit-free-workout.jpg");
  position: relative;
  margin-top: 5rem;

  .content {
    position: relative;
    z-index: 5;
    width: 85%;
    max-width: 1500px;
  }
}

.btn-gradient {
  background: linear-gradient(270deg, #de93c1, #194f92);
  background-size: 400% 400%;
  color: white;

  -webkit-animation: gradient 30s ease infinite;
  -moz-animation: gradient 30s ease infinite;
  animation: gradient 30s ease infinite;
}

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
      rgb(25, 79, 146) 0%,
      rgba(25, 79, 146, 0) 70%
    );
    opacity: 0.2;
    animation: reflejo 50s infinite;
  }

  .segundo {
    animation-direction: reverse;
  }
}

@keyframes reflejo {
  0% {
    transform: translateX(50vw) skewX(30deg);
  }
  20% {
    transform: translateX(80vw) skewX(30deg);
  }
  50% {
    transform: translateX(40vw) skewX(30deg);
  }
  70% {
    transform: translateX(30vw) skewX(30deg);
  }
  85% {
    transform: translateX(70vw) skewX(30deg);
  }
  100% {
    transform: translateX(50vw) skewX(30deg);
  }
}

@-webkit-keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
@-moz-keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
@keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
