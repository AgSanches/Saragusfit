<template>
  <div v-if="canShowModal">
    <transition name="fade">
      <div class="modal" tabindex="-1" role="dialog" id="popupModifySection">
        <div class="modal-dialog  modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="overlay overlay-black"></div>
            <div class="modal-header">
              <p class="modal-title text-white">Section</p>
              <button
                type="button"
                class="close text-white"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" @click="hideModal">&times;</span>
              </button>
            </div>

            <div class="modal-body text-white modal-height">
              <form action="" @submit.prevent="saveModel">
                <div class="form-group col-12 p-1">
                  <label for="inputDay">Day</label>
                  <input
                    type="number"
                    class="form-control"
                    id="inputDay"
                    placeholder="Enter day"
                    required
                    v-model="item.day"
                  />
                </div>

                <div class="form-group col-12 p-1">
                  <label for="inputName">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputName"
                    placeholder="Enter name"
                    required
                    v-model="item.name"
                  />
                </div>

                <div class="form-group col-12 p-1">
                  <label for="inputText">Content</label>
                  <textarea
                    class="form-control"
                    id="inputText"
                    placeholder="Enter text"
                    required
                    v-model="item.content"
                    rows="3"
                  ></textarea>
                </div>

                <div class="form-group col-12 p-1">
                  <label for="inputAOSDesktop">AOS Desktop</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAOSDesktop"
                    placeholder="Enter aos desktop"
                    required
                    v-model="item.aosDesktop"
                  />
                </div>

                <div class="form-group col-12 p-1">
                  <label for="inputAOSMobile">AOS Mobile</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAOSMobile"
                    placeholder="Enter aos mobile"
                    required
                    v-model="item.aosMobile"
                  />
                </div>

                <button class="btn btn-primary" type="submit">Save</button>
                <button
                  class="btn btn-secondary ml-2"
                  type="button"
                  @click="hideModal"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ModalFormProccess",
  props: {
    itemProp: Object
  },
  data: () => {
    return {
      canShowModal: true,
      item: {
        day: 0,
        name: "",
        content: "",
        isDown: false,
        aosDesktop: "",
        aosMobile: ""
      }
    };
  },
  methods: {
    hideModal() {
      this.canShowModal = false;
      this.$emit("closeModal");
    },
    saveModel() {
      this.$emit("saveModel", this.item);
    },
    setPropToModel() {
      this.item = {
        ...this.itemProp
      };
    }
  },
  mounted() {
    this.setPropToModel();
  }
};
</script>

<style scoped lang="scss">
.modal {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
  animation: fadeInOpacity linear 1s;
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
  background-position: center;

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
