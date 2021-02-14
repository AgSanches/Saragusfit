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

export default {
  name: "PopupDownloadWorkoutComponent",
  components: {
    FreeWorkoutSectionContent
  },
  props: {
    content: Object
  },
  data: () => {
    return {
      isFirstVisit: true,
      canShowModal: false
    };
  },
  methods: {
    checkFirstVisit() {
      this.isFirstVisit = localStorage.getItem("isUserVisit");

      if (!this.isFirstVisit) {
        localStorage.setItem("isUserVisit", "yes");
        window.addEventListener("scroll", this.handleScroll);
      }
    },
    handleScroll() {
      this.canShowModal = window.scrollY > 1000;

      if (this.canShowModal) {
        window.removeEventListener("scroll", this.handleScroll);
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.position = "fixed";
      }
    },
    hideModal() {
      this.canShowModal = false;
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  },
  created() {
    this.checkFirstVisit();
  },
  watch: {}
};
</script>

<style scoped lang="scss">
.modal {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
