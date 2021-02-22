<template>
  <div class="wrapper bg-secondary py-1 px-3">
    <p class="title text-primary">
      Success Stories
      <RemoveElementButton @click.stop="deleteModel"></RemoveElementButton>
    </p>
    <p class="content">{{ review.text }}</p>

    <div class="wrapper-img">
      <div v-if="review.imageBasic" class="basic d-flex">
        <img :src="imagePath" alt="Basic image" class="col-12" />
      </div>
      <div v-else class="before-and-after d-flex">
        <img :src="imageBefore" alt="Basic image" class="col-12 col-md-6" />
        <img :src="imageAfter" alt="Basic image" class="col-12 col-md-6" />
      </div>
    </div>

    <p class="user text-center text-primary">{{ review.user }}</p>
  </div>
</template>

<script>
import RemoveElementButton from "./RemoveElementButton";
import { mapActions } from "vuex";

export default {
  name: "SuccessStoriesAdminComponent",
  components: {
    RemoveElementButton
  },
  props: {
    review: Object,
    idx: Number
  },
  data: () => {
    return {
      imagePath: "",
      imageBefore: "",
      imageAfter: ""
    };
  },
  methods: {
    deleteModel() {
      this.$emit("deleteModel", { idx: this.idx });
    },
    ...mapActions("admin", ["getFile"]),
    getFilePath(imageName, attr) {
      this.getFile(imageName).then(url => {
        this.assignItem(attr, url.data);
      });
    },
    assignItem(attr, data) {
      switch (attr) {
        case 0:
          this.imagePath = data;
          break;
        case 1:
          this.imageBefore = data;
          break;
        case 2:
          this.imageAfter = data;
          break;
      }
    },
    evaluatedImages() {
      if (this.review.imageBasic) {
        this.getFilePath(this.review.image, 0);
      } else {
        this.getFilePath(this.review.beforeImage, 1);
        this.getFilePath(this.review.afterImage, 2);
      }
    }
  },
  created() {
    this.evaluatedImages();
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    review: function(newValue, oldValue) {
      this.evaluatedImages();
    }
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  min-height: 40rem;
  position: relative;
  cursor: pointer;
  transition: all 1s;

  .title {
    font-size: 1.5rem;
  }

  .content {
    font-size: 1.2rem;
  }

  .user {
    font-size: 1.1rem;
    margin-top: 2rem;
  }

  &:hover {
    transform: scale(1.03);
  }
}
</style>
