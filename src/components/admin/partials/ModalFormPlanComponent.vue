<template>
  <div v-if="canShowModal">
    <transition name="fade">
      <div class="modal" tabindex="-1" role="dialog" id="popupModifySection">
        <div class="modal-dialog  modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="overlay overlay-black"></div>
            <div class="modal-header">
              <p class="modal-title text-white">Plan</p>
              <button
                type="button"
                class="close text-white"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" @click="hideModal">&times;</span>
              </button>
            </div>

            <div class="modal-body text-white">
              <form action="" @submit.prevent="saveModel">
                <div class="form-group col-12 p-1">
                  <label for="inputPlanName">Plan name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPlanName"
                    placeholder="Enter name"
                    required
                    v-model="item.name"
                  />
                </div>

                <div class="form-group col-12 p-1">
                  <label for="inputSubtitle">Subtitle</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputSubtitle"
                    placeholder="Enter subtitle"
                    required
                    v-model="item.subtitle"
                  />
                </div>

                <div class="form-group col-12 p-1">
                  <label for="inputPrice">Price</label>
                  <input
                    type="number"
                    class="form-control"
                    id="inputPrice"
                    placeholder="Enter Price"
                    required
                    v-model="item.price"
                  />
                </div>

                <div class="form-group col-12 p-1">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="item.isOffer"
                      id="inputIsOffer"
                    />
                    <label
                      class="form-check-label"
                      for="inputIsOffer"
                    >
                      It's is on sale?
                    </label>
                  </div>
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
  name: "ModalFormPlanComponent",
  props: {
    itemProp: Object
  },
  data: () => {
    return {
      canShowModal: true,
      item: {
        name: "",
        subtitle: "",
        price: 0,
        isOffer: false
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
      if (this.itemProp) {
        this.item = {
          ...this.itemProp
        };
      }
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
