<template>
  <transition name="fade">
    <nav class="sidebar bg-primary" v-if="isOpenNav">
      <ul class="navbar-list">
        <li class="navbar-item" v-for="(link, idx) in links" :key="idx">
          <router-link class="navbar-link" :to="link.to">
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </transition>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "TheSidebar",
  props: {
    links: Array
  },
  computed: {
    ...mapState("general", ["isOpenNav"])
  },
  methods: {
    ...mapMutations("general", ["toggleNav"])
  }
};
</script>

<style scoped lang="scss">
.sidebar {
  position: fixed;
  top: 25px;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  clip-path: circle(70% at 0% 0%);
  padding: 1rem;

  .navbar-list {
    list-style: none;
    margin-top: 3rem;

    .navbar-item {
      margin-bottom: 0.3rem;

      .navbar-link {
        text-decoration: none;
        color: white;
        font-size: 1.7rem;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  animation-name: easeIn;
  animation-duration: 1s;
}

.fade-enter,
.fade-leave-to {
  animation-name: easeOut;
  animation-duration: 1s;
}

@keyframes easeIn {
  0% {
    left: -500px;
  }
  100% {
    left: 0;
  }
}

@keyframes easeOut {
  0% {
    left: 0;
  }
  100% {
    left: -500px;
  }
}
</style>
