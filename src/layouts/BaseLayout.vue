<template>
  <div class="layout">
    <BaseNav :links="links"></BaseNav>
    <TheSidebar :links="links"></TheSidebar>
    <router-view></router-view>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import BaseNav from "../components/general/BaseNav.vue";
import TheSidebar from "../components/general/TheSidebar.vue";
import TheFooter from "../components/general/TheFooter";

export default {
  name: "BaseLayout",
  components: {
    BaseNav,
    TheSidebar,
    TheFooter
  },
  data: () => {
    return {
      links: [
        {
          name: "Home",
          to: "/"
        },
        {
          name: "About us",
          to: "#about-us"
        },
        {
          name: "What we offer",
          to: "#personalized-workout-plan"
        },
        {
          name: "Start now",
          to: "#get-yours-now"
        },
        {
          name: "Success Stories",
          to: "#success-stories"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss"></style>
