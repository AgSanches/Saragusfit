<template>
  <div>
    <transition name="fade">
      <div
        class="top-up bg-dark d-flex justify-content-center align-items-center text-white"
        :class="{ rotateButton: userClickTop }"
        @click="userClickTop = true"
        v-if="isScroll"
      >
        TOP
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TopUpButtonComponent",
  data: () => {
    return {
      isScroll: false,
      userClickTop: false
    };
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        this.isScroll = window.scrollY > 100;

        if (!this.isScroll) {
          this.userClickTop = false;
        }
      };
    }
  },
  mounted() {
    this.scroll();
  },
  watch: {
    userClickTop: function(val) {
      if (val) {
        window.scrollTo(0, 0);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.top-up {
  position: fixed;
  bottom: 25px;
  left: 25px;
  z-index: 9999;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  animation: rotate 1s linear;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
    opacity: 0.3;
  }
  100% {
    transform: rotate(360deg);
    opacity: 1;
  }
}
</style>
