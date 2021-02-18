<template>
  <div class="cookies">
    <h1 class="title">
      <img
        src="../../../assets/icons/cookies.png"
        alt="Cookies image"
        width="32"
        class="mr-2"
      />Cookies
    </h1>
    <p class="content">
      We use cookies to ensure that we give you the best experience on our web.
      If you continue, we will assume that you accept to receive all cookies in
      our page.
      <router-link :to="{ name: 'Cookies' }">
        Checkout our cookies policy
      </router-link>
    </p>
    <div class="btn btn-primary" @click="emitClose">Close</div>
  </div>
</template>

<script>
export default {
  name: "CookiesPolicy",
  methods: {
    emitClose() {
      this.$emit("emitCloseCookies");
    }
  }
};
</script>

<style scoped lang="scss">
.cookies {
  position: fixed;
  left: 25px;
  bottom: 25px;
  background-color: white;
  z-index: 999999;
  width: 30%;
  min-width: 20rem;
  padding: 1rem;
  -webkit-box-shadow: 4px -4px 5px 0px rgba(168, 168, 168, 1);
  -moz-box-shadow: 4px -4px 5px 0px rgba(168, 168, 168, 1);
  box-shadow: 4px -4px 5px 0px rgba(168, 168, 168, 1);

  animation-name: fadeInOpacity;
  animation-duration: 3s;
  opacity: 1;

  .title {
    font-size: 2rem;
  }
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
