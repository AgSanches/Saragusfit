<template>
  <div class="social-media">
    <TitleComponent title="FOLLOW US"></TitleComponent>

    <vue-instagram></vue-instagram>
  </div>
</template>

<script>
import VueInstagram from "vue-instagram";
import TitleComponent from "./partials/TitleComponent";

export default {
  name: "SocialMediaComponent",
  components: {
    VueInstagram,
    TitleComponent
  }
};
</script>

<style scoped></style>
