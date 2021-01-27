<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary py-0">
    <router-link to="/" class="navbar-brand">
      <img src="../../assets/logo.png" alt="Logo Saragusfit" class="logo" />
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
    >
      <img
        src="../../assets/icons/dumbell.png"
        alt="hamburguer-button"
        class="hamburguer-button"
        :class="{ 'hamburguer-animation': isOpenNav }"
        @click="toggleNav"
      />
    </button>

    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active" v-for="(link, idx) in links" :key="idx">
          <router-link class="nav-link" :to="link.to">
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "BaseNav",
  props: {
    links: Array
  },
  methods: {
    ...mapMutations("general", ["toggleNav"])
  },
  computed: {
    ...mapState("general", ["isOpenNav"])
  }
};
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  z-index: 10;
  width: 100%;

  .navbar-brand {
    .logo {
      width: 80px;
    }
  }

  .navbar-nav {
    .nav-item {
      .nav-link {
        color: white;
      }
    }
  }

  .navbar-toggler {
    border: unset !important;
    z-index: 10;

    .hamburguer-button {
      width: 45px;
      transform: rotateY(0deg);
      transition: all 1s;
    }

    .hamburguer-animation {
      transform: rotateY(180deg);
    }
  }
}

@media screen and (max-width: 599px) {
}
</style>
