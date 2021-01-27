<template>
  <div class="in-construction d-flex justify-content-center align-items-center">
    <div class="overlay overlay-black"></div>
    <div
      class="content text-center text-white d-flex flex-column justify-content-center align-items-center"
    >
      <div class="logo">
        <img
          src="../assets/logo.png"
          alt="Instagram logo"
          class="logo-saragusfit"
        />
      </div>
      <h1 class="title">Saragusfit</h1>
      <span class="subtitle font-italic">Very soon...</span>
      <div class="social-media">
        <p class="text">Follow us for more updates</p>
        <div class="icons">
          <a href="https://www.instagram.com/saragusfit/" target="_blank">
            <img
              src="../assets/icons/instagram.png"
              alt="Instagram logo"
              class="social-media-icon"
            />
          </a>

          <a
            href="https://www.facebook.com/saragusfit/?ref=page_internal"
            target="_blank"
          >
            <img
              src="../assets/icons/facebook.png"
              alt="Facebook logo"
              class="social-media-icon"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InConstructionLayout"
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
    height: 400px;
    width: 350px;
    background-color: rgba(215, 100, 135, 0.8);
    z-index: 2;

    .title {
      margin-top: 1rem;
      margin-bottom: 0;
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
