<template>
  <div v-if="uniqueId != null" class="custom-file mt-2 mb-3">
    <p class="mb-0">{{ label }}</p>
    <label
      :for="`customFile-${helper}`"
      class="file-label"
      :class="{
        'file-change': file != null
      }"
      >Enter</label
    >
    <input
      type="file"
      :id="`customFile-${helper}`"
      class="input-file"
      :accept="accept"
      @change="handleFileUpload"
      @dragenter="handleFileUpload"
    />
    <p v-if="getFileName" class="mb-0">
      Current file:
      <span class="text-primary"> {{ getFileName }}. </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "InputFileComponent",
  props: {
    label: String,
    accept: String,
    currentFile: String,
    helper: Number
  },
  computed: {
    getFileName() {
      if (this.file) {
        return this.file.name;
      }

      return this.currentFile;
    }
  },
  data: () => {
    return {
      maxSizeAllow: 250000,
      file: null,
      uniqueId: null
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.validateSize(file.size);
      this.file = file;

      const emitter = {
        file: this.file,
        helper: this.helper
      };

      this.$emit("changeFile", emitter);
    },
    validateSize(size) {
      if (size > this.maxSizeAllow) {
        this.$swal({
          title: "Error",
          text: `The file is too big, Its has ${size} kbs, and must be under ${this.maxSizeAllow} kbs.`
        });
        throw "File too big";
      }
    }
  },
  created() {
    this.uniqueId = new Date().getTime();
  }
};
</script>

<style scoped lang="scss">
.custom-file {
  height: 130px;
}
.input-file {
  display: none;
}

.file-change {
  background-color: #dfdfe6 !important;
}

.file-label {
  margin-top: 0.5rem;
  height: 90%;
  width: 100%;
  color: transparent;
  background-color: #f8f8ff;
  -webkit-box-shadow: 0px 0px 5px 3px rgba(215, 100, 135, 1);
  -moz-box-shadow: 0px 0px 5px 3px rgba(215, 100, 135, 1);
  box-shadow: 0px 0px 5px 3px rgba(215, 100, 135, 1);
  background-image: url("../../../assets/icons/cloud-computing.svg");
  background-size: 8%;
  background-position: top 10px center;
  background-repeat: no-repeat;
  position: relative;
  cursor: pointer;
  transition: background-color 1s;

  &:before {
    content: "DROP A FILE HERE";
    position: absolute;
    color: black;
    font-family: Raleway, sans-serif;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    font-size: 0.85rem;
  }

  &:after {
    content: "BROWSE";
    position: absolute;
    color: white;
    font-family: Raleway, sans-serif;
    transform: translate(-50%, -50%);
    top: 75%;
    left: 50%;
    font-size: 0.85rem;
    background-color: #d76487;
    padding: 0.35rem;
    border-radius: 5px;
  }
}
</style>
