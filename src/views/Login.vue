<template>
  <div class="in-construction d-flex justify-content-center align-items-center">
    <div class="overlay overlay-black"></div>
    <div
      class="content d-flex flex-column align-items-center justify-content-center"
    >
      <div class="logo">
        <img
          src="../assets/logo.png"
          alt="Instagram logo"
          class="logo-saragusfit"
          width="100"
        />
      </div>
      <h1 class="title text-center text-white mb-2">Login</h1>
      <div class="container">
        <form action="#" @submit.prevent="loginFormSubmit">
          <p class="alert alert-danger" v-if="errorMessage">
            Incorrect credentials
          </p>
          <div class="form-group">
            <label for="emailInput" class="text-white">Email address</label>
            <input
              type="email"
              class="form-control"
              id="emailInput"
              placeholder="Enter email"
              v-model="user.email"
            />
          </div>
          <div class="form-group">
            <label for="passswordInput" class="text-white">Password</label>
            <input
              type="password"
              class="form-control"
              id="passswordInput"
              placeholder="Password"
              v-model="user.password"
            />
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
          <a href="/" class="btn btn-secondary ml-2">Home</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data: () => {
    return {
      user: {
        email: "",
        password: ""
      },
      errorMessage: false
    };
  },
  methods: {
    ...mapActions("login", ["signInUser"]),
    loginFormSubmit() {
      const user = {
        email: this.user.email,
        password: this.user.password
      };

      const firebaseAuthPromise = this.signInUser(user);

      firebaseAuthPromise.then(this.loginSuccess).catch(this.loginError);
    },
    loginSuccess() {
      this.$router.push({ name: "Homepage" });
    },
    loginError() {
      this.errorMessage = true;
    }
  }
};
</script>

<style scoped lang="scss">
.in-construction {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url("../assets/in-construction.jpg");
  background-size: cover;
  position: relative;

  .content {
    height: 500px;
    width: 400px;
    max-width: 95vw;
    background-color: rgba(215, 100, 135, 0.85);
    z-index: 2;

    .title {
      margin-top: 1rem;
      margin-bottom: 0;
      font-size: 2rem;
    }

    .social-media {
      margin-top: 2rem;

      .social-media-icon {
        width: 2rem;
        margin: 0.75rem;
      }
    }
  }
}

.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;

  &-black {
    background-color: rgba(0, 0, 0, 0.6);
  }
}
</style>
