<template>
  <div
    class="the-title-wrapper d-flex justify-content-center align-items-center"
    data-aos="zoom-in"
    data-aos-duration="1500"
  >
    <div class="line mr-2"></div>
    <h3 class="title font-weight-bold">{{title}}</h3>
    <div class="line ml-2"></div>
  </div>
</template>

<script>
export default {
  name: "TitleComponent",
  props: {
    title: String
  }
};
</script>

<style scoped lang="scss">
.the-title-wrapper {
  .title {
    text-align: center;
  }

  .line {
    width: 3rem;
    border-bottom: 3px solid #de93c1;
  }
}
</style>
