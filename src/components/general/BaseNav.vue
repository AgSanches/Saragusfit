<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary py-0">
    <router-link to="/" class="navbar-brand">
      <img src="../../assets/logo.png" alt="Logo Saragusfit" class="logo" />
    </router-link>

    <button class="navbar-toggler" type="button">
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
        <li
          class="nav-item"
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
            class="nav-item"
            v-for="(link, idx) in linksUser"
            :key="`userlink-${idx}`"
          >
            <router-link v-if="link.to" class="nav-link" :to="link.to">
              {{ link.name }}
            </router-link>

            <a
              v-else
              class="nav-link"
              :href="link.to"
              @click="emitSignOut"
            >
              {{ link.name }}
            </a>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "BaseNav",
  props: {
    links: Array,
    linksUser: Array
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
  },
  computed: {
    ...mapState("general", ["isOpenNav"]),
    ...mapState("login", ["user"])
  }
};
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  z-index: 10;
  width: 100vw;

  .navbar-brand {
    .logo {
      width: 80px;
    }
  }

  .navbar-nav {
    .nav-item {
      .nav-link {
        color: white;
        cursor: pointer;
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
