<template>
  <div class="layout">
    <BaseNav :links="links"></BaseNav>
    <TheSidebar :links="links"></TheSidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import BaseNav from "../components/general/BaseNav.vue";
import TheSidebar from "../components/general/TheSidebar.vue";

export default {
  name: "BaseLayout",
  components: {
    BaseNav,
    TheSidebar
  },
  data: () => {
    return {
      links: [
        {
          name: "Home",
          to: ""
        },
        {
          name: "About us",
          to: ""
        },
        {
          name: "What we offer",
          to: ""
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss"></style>
