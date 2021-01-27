<template>
  <section class="the-header d-flex justify-content-center align-items-center">
    <div class="background-header-wrapper bg-primary">
      <div class="background-header bg-white"></div>
    </div>
    <div v-if="!isLoadingPage" class="title-header">
      <h1
        class="title font-weight-bold"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        Saragusfit
      </h1>
      <p class="subtitle" data-aos="fade-right" data-aos-duration="1500">
        Build Strength. Build Confidence
      </p>
      <img
        src="../../assets/home/saragusfit_logo.png"
        alt="Logo of saragusfit"
        class="logo"
        data-aos="fade-up"
        data-aos-duration="2000"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HeaderComponent",
  computed: {
    ...mapState("general", ["isLoadingPage"])
  }
};
</script>

<style scoped lang="scss">
.the-header {
  width: 100vw;
  height: 100vh;
  position: relative;

  .background-header-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    z-index: -1;

    .background-header {
      padding: 0;
      clip-path: polygon(100% 16%, 100% 100%, 0 100%);
      height: 100%;
    }
  }

  .title-header {
    text-align: center;

    .title {
      font-size: calc(3.5rem + 6 * ((100vw - 320px) / 680));
    }

    .subtitle {
      font-size: calc(1.2rem + 6 * ((100vw - 320px) / 680));
    }

    .logo {
      width: 128px;
    }
  }
}
</style>
