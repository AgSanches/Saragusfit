<template>
  <div class="layout">
    <BaseNav :links="links" :linksUser="linksUser"></BaseNav>
    <TheSidebar :links="links" :linksUser="linksUser"></TheSidebar>
    <router-view></router-view>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import BaseNav from "../components/general/BaseNav.vue";
import TheSidebar from "../components/general/TheSidebar.vue";
import TheFooter from "../components/general/TheFooter";
import { mapState } from "vuex";

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
          scroll: "#about-us"
        },
        {
          name: "What we offer",
          scroll: "#personalized-workout-plan"
        },
        {
          name: "Start now",
          scroll: "#get-yours-now"
        },
        {
          name: "Success Stories",
          scroll: "#success-stories"
        }
      ],
      linksUser: [
        {
          name: "Admin",
          to: { name: "AdminDefaultPage" }
        },
        {
          name: "Sign Out"
        }
      ]
    };
  },
  computed: {
    ...mapState("login", ["user"])
  }
};
</script>

<style scoped lang="scss"></style>
