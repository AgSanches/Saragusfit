<template>
  <div v-if="canShowModal" class="test">
    <transition name="fade">
      <div class="modal" tabindex="-1" role="dialog" id="popupOffer">
        <div class="modal-dialog  modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="overlay overlay-black"></div>
            <div class="modal-header">
              <button
                type="button"
                class="close text-white"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" @click="hideModal">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <FreeWorkoutSectionContent
                :content="content"
                :file-path="filePath"
              ></FreeWorkoutSectionContent>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import FreeWorkoutSectionContent from "./FreeWorkoutSectionContent";
import {
  setScrollBlock,
  allowScroll
} from "../../../scroll-extras/scroll-modal";

export default {
  name: "PopupDownloadWorkoutComponent",
  components: {
    FreeWorkoutSectionContent
  },
  props: {
    content: Object,
    filePath: String
  },
  data: () => {
    return {
      canShowModal: false
    };
  },
  methods: {
    setScrollBlock,
    allowScroll,
    checkVisits() {
      let item = JSON.parse(localStorage.getItem("userVisit"));

      if (item === null) {
        item = {
          qty: 1
        };

        this.setStorageAndListener(item);
      } else if (item.qty && item.qty === 1) {
        item.qty = item.qty + 1;
        this.setStorageAndListener(item);
      }
    },
    setStorageAndListener(item) {
      localStorage.setItem("userVisit", JSON.stringify(item));
      window.addEventListener("scroll", this.handleScroll);
    },
    handleScroll() {
      this.canShowModal = window.scrollY > 1400;
      if (this.canShowModal) {
        window.removeEventListener("scroll", this.handleScroll);
        this.setScrollBlock();
      }
    },
    hideModal() {
      this.canShowModal = false;
      this.allowScroll();
    }
  },
  mounted() {
    this.checkVisits();
  },
  watch: {}
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

.test {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-header {
  border-bottom: unset;
}
.modal-content {
  background-image: url("../../../assets/home/saragusfit-planning.jpg");
  background-size: cover;
  position: relative;

  .modal-header,
  .modal-body {
    position: relative;
    z-index: 5;
  }
}
</style>
