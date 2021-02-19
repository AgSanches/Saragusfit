<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary" :class="{'open-sidebar': isOpenSidebar }">
    <div class="container-fluid">
      <div
        class="hamburguer-button"
        :class="{ 'hamburguer-button-action': isOpenSidebar }"
        @click="toggleSidebar()"
      >
        <div class="bar bar-first"></div>
        <div class="bar bar-second"></div>
        <div class="bar bar-third"></div>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-for="(link, idx) in links" :key="idx">
            <router-link class="nav-link text-white" to="/admin">
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "AdminNavbarComponent",
  data: () => {
    return {
      links: [
        {
          name: "General",
          to: { name: "AdminDefaultPage" }
        },
        {
          name: "About us",
          to: { name: "AboutUsPage" }
        },
        {
          name: "Sara & Agus",
          to: { name: "AdminCoachsPage" }
        },
        {
          name: "Personalized Workout Plan",
          to: { name: "WorkoutPlanPage" }
        },
        {
          name: "The Process",
          to: { name: "TheProcessPage" }
        },
        {
          name: "Get Your now",
          to: { name: "GetYoursNowPage" }
        },
        {
          name: "Sign Out",
          to: { name: "" }
        }
      ]
    };
  },
  computed: {
    ...mapState("admin", ["isOpenSidebar"])
  },
  methods: {
    ...mapMutations("admin", ["toggleSidebar"])
  }
};
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  width: 100%;
  transition: padding-left 0.4s;
  z-index: 9;
}

.open-sidebar {
  padding-left: 225px;
}

.hamburguer-button {
  cursor: pointer;
  display: inline-block;

  .bar {
    width: 35px;
    height: 5px;
    background-color: #f1f1f1;
    margin: 6px 0;
    transition: 0.4s;
  }
}
.hamburguer-button-action {
  .bar-first {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }

  .bar-second {
    opacity: 0;
  }

  .bar-third {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }
}
</style>
