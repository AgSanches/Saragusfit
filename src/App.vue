<template>
  <div id="app">
    <PreloaderComponent></PreloaderComponent>
    <router-view />
  </div>
</template>

<script>
import PreloaderComponent from "./components/general/PreloaderComponent.vue";

export default {
  name: "App",
  components: {
    PreloaderComponent
  }
};
</script>

<style lang="scss">
$primary: #d76487;
$secondary: #1f2b3a;
$tertiary: #194f92;

body,
html {
  width: 100vw;
  overflow-x: hidden;
}

@import "styles/fonts";
@import "~bootstrap/scss/bootstrap";
</style>
