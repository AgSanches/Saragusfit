<template>
  <div class="wrapper bg-secondary py-1 px-3">
    <p class="title text-primary">
      Success Stories
      <RemoveElementButton @click.stop="deleteModel"></RemoveElementButton>
    </p>
    <p class="content">{{ review.text }}</p>

    <div class="wrapper-img">
      <div v-if="review.imageBasic" class="basic">
        <img :src="imageBasic" alt="Basic image" class="w-100" />
      </div>
      <div v-else class="before-and-after d-flex">
        <img :src="images[0]" alt="Basic image" class="col-12 col-md-6" />
        <img :src="images[1]" alt="Basic image" class="col-12 col-md-6" />
      </div>
    </div>

    <p class="user text-center text-primary">{{ review.user }}</p>
  </div>
</template>

<script>
import RemoveElementButton from "./RemoveElementButton";

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
      images: [
        require("../../../assets/home/saragusfit-photo-sara.jpeg"),
        require("../../../assets/home/saragusfit-photo-agustina.jpeg")
      ],
      imageBasic: require("../../../assets/home/saragusfit-feedback.jpg")
    };
  },
  methods: {
    deleteModel() {
      this.$emit("deleteModel", { idx: this.idx });
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
