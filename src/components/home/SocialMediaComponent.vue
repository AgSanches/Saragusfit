<template>
  <div class="social-media mt-4">
    <TitleComponent title="FOLLOW US"></TitleComponent>

  </div>
</template>

<script>
import TitleComponent from "./partials/TitleComponent";
import apiToken from "../../repository/instagramCredentials.js";

export default {
  name: "SocialMediaComponent",
  data: () => {
    return {
      tokenInstagram: apiToken
    };
  },
  components: {
    TitleComponent
  }
};
</script>

<style scoped lang="scss"></style>
