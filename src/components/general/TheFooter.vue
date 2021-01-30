<template>
  <section
    id="footer"
    class="footer d-flex justify-content-center align-items-center"
  >
    <div class="content">
      <div
        class="social-media d-flex justify-content-center align-items-center"
      >
        <div class="link">
          <a href="https://www.instagram.com/saragusfit/" target="_blank">
            <img src="../../assets/icons/instagram.png" alt="Instagram logo" class="logo"/>
          </a>
        </div>
        <div class="link">
          <a href="https://www.instagram.com/saragusfit/" target="_blank">
            <img src="../../assets/icons/facebook.png" alt="Facebook logo" class="logo" />
          </a>
        </div>
      </div>
      <div class="links"></div>
      <div class="copy"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<style scoped lang="scss">
.footer {
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 12.43055vw;
    background-image: url("../../assets/svg/wave-banner-footer.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transform-style: preserve-3d;
    transform: translateY(-50%) translateZ(2px) scaleY(0.5) rotate(180deg);
  }

  position: relative;
  min-height: 25rem;
  margin-top: 25rem;
  background: linear-gradient(
    45deg,
    rgba(222, 147, 193, 1) 45%,
    rgba(25, 79, 146, 1) 100%
  );



  .content {
    .social-media {
      .link {
        border-radius: 50%;
        padding: 1rem;

        .logo {
          width: 40px;
        }

      }
    }
  }

}
</style>
