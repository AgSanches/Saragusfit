<template>
  <div class="whatsapp-wrapper" data-aos="zoom-in-up" data-aos-duration="1500">
    <div class="position-relative">
      <div
        class="whatsapp d-flex justify-content-center align-items-center"
        @click="showWhatsapp = !showWhatsapp"
      >
        <img src="../../assets/icons/whatsapp.png" alt="Whatsapp icon" />
      </div>

      <transition name="fade">
        <a
          class="whatsapp whatsapp-sara d-flex justify-content-center align-items-center"
          v-if="showWhatsapp"
          href="https://wa.link/d5hqif"
          target="_blank"
          rel="noreferrer"
        >
          <span class="whatsapp-name font-italic text-dark font-weight-bold">Sara</span>

          <img src="../../assets/icons/whatsapp.png" alt="Whatsapp icon" />
        </a>
      </transition>

      <transition name="fade">
        <a
          class="whatsapp whatsapp-agus d-flex justify-content-center align-items-center"
          v-if="showWhatsapp"
          href="https://wa.link/qb3xrh"
          target="_blank"
          rel="noreferrer"
        >
          <span class="whatsapp-name font-italic text-dark font-weight-bold">Agustina</span>
          <img src="../../assets/icons/whatsapp.png" alt="Whatsapp icon" />
        </a>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhatsappComponent",
  data: () => {
    return {
      showWhatsapp: false
    };
  }
};
</script>

<style scoped lang="scss">
@keyframes fadeWhatsapp {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  animation: fadeWhatsapp 1s linear;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(222, 147, 193, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}

.whatsapp-wrapper {
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 9999;

  .whatsapp {
    background: transparent;
    border-radius: 50%;
    width: 54px;
    height: 54px;
    box-shadow: 0 0 0 0 rgba(222, 147, 193, 1);
    transform: scale(1);
    animation: pulse 3s infinite;

    img {
      width: 48px;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .whatsapp-sara,
  .whatsapp-agus {
    animation: fadeWhatsapp 1s linear;
  }

  .whatsapp-sara {
    position: absolute;
    top: -25px;
    left: -60px;
  }

  .whatsapp-agus {
    position: absolute;
    top: -65px;
  }

  .whatsapp-name {
    position: absolute;
    top: -25px;
    text-align: center;
  }
}
</style>
