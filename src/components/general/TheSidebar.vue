<template>
  <transition name="fade">
    <nav class="sidebar bg-primary" v-if="isOpenNav">
      <ul class="navbar-list">
        <li
          class="navbar-item"
          v-for="(link, idx) in links"
          :key="`baselink-${idx}`"
        >
          <a v-if="link.to" class="nav-link" :href="link.to">
            {{ link.name }}
          </a>
          <a v-else class="nav-link" v-scroll-to="{ element: link.scroll }">
            {{ link.name }}
          </a>
        </li>

        <template v-if="user">
          <li
            class="navbar-item"
            v-for="(link, idx) in linksUser"
            :key="`userlink-${idx}`"
          >
            <router-link v-if="link.to" class="nav-link" :to="link.to">
              {{ link.name }}
            </router-link>

            <a v-else class="nav-link" :href="link.to" @click="emitSignOut">
              {{ link.name }}
            </a>
          </li>
        </template>
      </ul>
    </nav>
  </transition>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "TheSidebar",
  props: {
    links: Array,
    linksUser: Array
  },
  computed: {
    ...mapState("general", ["isOpenNav"]),
    ...mapState("login", ["user"])
  },
  methods: {
    ...mapMutations("general", ["toggleNav"]),
    ...mapActions("login", ["signOutSession"]),
    emitSignOut() {
      this.signOutSession()
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
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

      .nav-link {
        text-decoration: none;
        color: white;
        font-size: 1.2rem;
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
