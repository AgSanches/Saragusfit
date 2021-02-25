<template>
  <div v-if="canShowModal">
    <transition name="fade">
      <div class="modal" tabindex="-1" role="dialog" id="popupModifySection">
        <div class="modal-dialog  modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="overlay overlay-black"></div>
            <div class="modal-header">
              <p class="modal-title text-white">Feedback from client</p>
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
                  <label for="inputClient">Client</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputClient"
                    placeholder="Enter name of the client"
                    required
                    v-model="item.user"
                  />
                </div>

                <div class="form-group col-12 p-1">
                  <label for="inputContent">Feedback</label>
                  <textarea
                    class="form-control"
                    id="inputContent"
                    placeholder="Enter content"
                    required
                    v-model="item.text"
                    rows="8"
                  ></textarea>
                </div>

                <div
                  v-if="!item.imageBasic"
                  class="form-group col-12 p-1 justify-content-center"
                >
                  <InputFileComponent
                    :accept="acceptsFile"
                    label="Before photo"
                    :helper="0"
                    @changeFile="changeFile"
                    :current-file="item.beforeImage"
                  ></InputFileComponent>

                  <InputFileComponent
                    :accept="acceptsFile"
                    label="After photo"
                    :helper="1"
                    @changeFile="changeFile"
                    :current-file="item.afterImage"
                  ></InputFileComponent>
                </div>

                <div
                  v-else
                  class="form-group col-12 p-1 justify-content-center"
                >
                  <InputFileComponent
                    :accept="acceptsFile"
                    label="Feedback photo"
                    :helper="2"
                    @changeFile="changeFile"
                    :current-file="item.image"
                  ></InputFileComponent>
                </div>

                <div class="form-group col-12 p-1">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="item.imageBasic"
                      id="inputImageBasic"
                      @change="resetFile"
                    />
                    <label class="form-check-label" for="inputImageBasic">
                      Have one photo?
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
import { mapActions } from "vuex";
import InputFileComponent from "./InputFileComponent";
import { images } from "../helpers/file_accepts";

export default {
  name: "ModalFormSuccessStoriesComponent",
  components: { InputFileComponent },
  props: {
    itemProp: Object
  },
  data: () => {
    return {
      canShowModal: true,
      item: {
        text: "",
        user: "",
        imageBasic: false,
        image: "",
        beforeImage: "",
        afterImage: ""
      },
      acceptsFile: images,
      fileBefore: null,
      fileAfter: null,
      fileBasic: null
    };
  },
  methods: {
    ...mapActions("admin", ["uploadFile", "getFile"]),
    hideModal() {
      this.canShowModal = false;
      this.$emit("closeModal");
    },
    checkFileBeforeAndAfter() {
      return this.fileAfter && this.fileBefore;
    },
    checkFileBasic() {
      return this.fileBasic != null;
    },
    checkFiles() {
      let status = false;

      if (this.item.imageBasic) {
        status = this.checkFileBasic();
      } else {
        status = this.checkFileBeforeAndAfter();
      }

      if (!status) {
        throw "You need to add all the files before create the feedback";
      }
    },
    handleCatch(error) {
      this.$swal({
        text: error
      });
    },
    saveModel() {
      if (this.itemProp == null) {
        try {
          this.checkFiles();
        } catch (e) {
          this.handleCatch(e);
          return;
        }
      }

      const emitter = {
        model: this.item,
        fileBefore: this.fileBefore,
        fileAfter: this.fileAfter,
        fileBasic: this.fileBasic
      };

      this.$emit("saveModel", emitter);
    },
    setPropToModel() {
      if (this.itemProp) {
        this.item = {
          ...this.itemProp
        };
      }
    },
    resetFile() {
      this.fileBefore = null;
      this.fileAfter = null;
      this.fileBasic = null;
    },
    changeFile({ file, helper }) {
      switch (helper) {
        case 0:
          // Before Photo
          this.fileBefore = file;
          return;
        case 1:
          // After Photo
          this.fileAfter = file;
          return;
        case 2:
          // Basic Photo
          this.fileBasic = file;
          return;
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
