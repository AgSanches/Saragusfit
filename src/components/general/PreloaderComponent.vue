<template>
  <transition name="fade">
    <div
      v-if="isLoadingPage"
      class="preloader bg-primary d-flex justify-content-center align-items-center flex-column"
    >
      <div class="logo-wrapper">
        <img src="../../assets/logo.png" alt="Logo Saragusfit" class="logo" />
      </div>
      <div class="typewriter">
        <h1 class="page-title text-center mt-1 text-white font-weight-bold">
          Saragusfit
        </h1>
      </div>

      <div class="dumbells d-flex justify-content-center">
        <div
          class="wrapper d-flex justify-content-center align-items-center"
          v-for="index in 5"
          :key="index"
        ></div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "PreloaderComponent",
  computed: {
    ...mapState("general", ["isLoadingPage"])
  },
  mounted() {
    document.body.style.position = "fixed";
    this.setTimeOutLoader();
  },
  methods: {
    ...mapMutations("general", ["setLoadingFalse"]),
    setTimeOutLoader() {
      setTimeout(() => {
        document.body.style.position = "";
        this.setLoadingFalse();
      }, 2000);
    }
  }
};
</script>

<style scoped lang="scss">
.preloader {
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 9999;
  overflow: hidden;

  .logo-wrapper {
    .logo {
      display: block;
      width: 10rem;
    }
  }

  .dumbells {
    .wrapper {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background-color: white;
      margin: 0.75rem;
      animation-name: scaleIn;
      animation-duration: 1.5s;
      transform: scale(0);

      &:nth-child(1) {
        animation-delay: 0s;
      }

      &:nth-child(2) {
        animation-delay: 0.05s;
      }

      &:nth-child(3) {
        animation-delay: 0.1s;
      }

      &:nth-child(4) {
        animation-delay: 0.15s;
      }

      &:nth-child(5) {
        animation-delay: 0.2s;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
  .logo,
  .page-title {
    animation-name: scaleOut;
    animation-duration: 1s;
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes scaleIn {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes scaleOut {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}

.typewriter h1 {
  overflow: hidden;
  border-right: 0.15em solid #de93c1;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 1.5s steps(20, end), blink-caret 0.75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #de93c1;
  }
}
</style>
