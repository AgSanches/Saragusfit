<template>
  <div v-if="canShowModal">
    <transition name="fade">
      <div class="modal" tabindex="-1" role="dialog" id="popupOffer">
        <div class="modal-dialog  modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="overlay overlay-black"></div>
            <div class="modal-header">
              <p class="modal-title text-white">Coach</p>
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
                  <label for="inputCoachName">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputCoachName"
                    placeholder="Enter name"
                    required
                    v-model="coach.name"
                  />
                </div>

                <div class="form-group col-12 p-1">
                  <label for="inputCoachText">First Text </label>
                  <textarea
                    class="form-control"
                    id="inputCoachText"
                    placeholder="Enter text"
                    required
                    v-model="coach.subtitle"
                    rows="3"
                  ></textarea>
                </div>

                <div class="form-group col-12 p-1">
                  <label for="inputCoachContent">Main Content</label>
                  <textarea
                    class="form-control"
                    id="inputCoachContent"
                    placeholder="Enter text"
                    required
                    v-model="coach.description"
                    rows="10"
                  ></textarea>
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
  name: "ModalFormCoachComponent",
  props: {
    coachProp: Object
  },
  data: () => {
    return {
      canShowModal: true,
      coach: {
        description: "",
        subtitle: "",
        name: ""
      }
    };
  },
  methods: {
    hideModal() {
      this.canShowModal = false;
      this.$emit("closeModal");
    },
    saveModel() {
      this.$emit("saveModel", this.coach);
    },
    setPropToModel() {
      if (this.coachProp) {
        this.coach = {
          ...this.coachProp
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
