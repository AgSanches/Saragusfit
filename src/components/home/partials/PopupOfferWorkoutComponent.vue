<template>
  <div v-if="canShowModal">
    <transition name="fade">
      <div class="modal" tabindex="-1" role="dialog" id="popupOffer">
        <div class="modal-dialog  modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="overlay overlay-black"></div>
            <div class="modal-header">
              <p class="modal-title text-white">GET YOURS NOW</p>
              <button
                type="button"
                class="close text-white"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" @click="hideModal">&times;</span>
              </button>
            </div>
            <div class="modal-body text-center"></div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {
  setScrollBlock,
  allowScroll
} from "../../../scroll-extras/scroll-modal";

export default {
  name: "PopupDownloadWorkoutComponent",
  props: {
    content: Object
  },
  data: () => {
    return {
      canShowModal: true
    };
  },
  methods: {
    setScrollBlock,
    allowScroll,
    hideModal() {
      this.canShowModal = false;
      this.allowScroll();
    }
  },
  created() {
    this.setScrollBlock();
  }
};
</script>

<style scoped lang="scss">
.modal {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
  animation: fadeInOpacity linear 1.3s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

body {
  overflow: hidden;
  height: 100vh;
}

.modal-header {
  border-bottom: unset;

  .modal-title {
    font-size: 1.5rem;
  }
}
.modal-content {
  background-image: url("../../../assets/home/saragusfit-free-plan.jpg");
  background-size: cover;
  position: relative;

  .modal-header,
  .modal-body {
    position: relative;
    z-index: 5;

    .title {
      font-size: 2rem;
    }
  }
}
</style>
