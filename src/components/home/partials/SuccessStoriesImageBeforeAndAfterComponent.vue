<template>
  <div
    class="col-12 col-md-7 col-xl-5 row justify-content-center align-items-center"
  >
    <div class="col-6 p-1">
      <SuccessStoriesChangeComponent
        :image="pathImageBefore"
        text="Before"
        data-aos="zoom-in"
        data-aos-duration="1000"
      ></SuccessStoriesChangeComponent>
    </div>

    <div class="col-6 p-1 after-change">
      <SuccessStoriesChangeComponent
        :image="pathImageAfter"
        text="After"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="150"
      ></SuccessStoriesChangeComponent>
    </div>
  </div>
</template>

<script>
import SuccessStoriesChangeComponent from "./SuccessStorieChangeComponent";
import { mapActions } from "vuex";

export default {
  name: "SuccessStoriesImageBeforeAndAfterComponent",
  components: {
    SuccessStoriesChangeComponent
  },
  props: {
    images: Array,
    imageBefore: String,
    imageAfter: String
  },
  data: () => {
    return {
      pathImageBefore: null,
      pathImageAfter: null
    };
  },
  methods: {
    ...mapActions("admin", ["getFile"])
  },
  created() {
    this.getFile(this.imageBefore).then(url => {
      this.pathImageBefore = url.data;
    });

    this.getFile(this.imageAfter).then(url => {
      this.pathImageAfter = url.data;
    });
  }
};
</script>

<style scoped></style>
