<template>
  <section
    id="footer"
    class="footer d-flex justify-content-center align-items-center"
  >
    <div class="content">
      <div
        class="social-media d-flex justify-content-center align-items-center"
      >
        <div class="link" data-aos="fade-up" data-aos-duration="1200">
          <a
            href="https://www.instagram.com/saragusfit/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../../assets/icons/instagram.png"
              alt="Instagram logo"
              class="logo"
            />
          </a>
        </div>
        <div class="link" data-aos="fade-up" data-aos-duration="1200">
          <a
            href="https://www.facebook.com/saragusfit/?ref=page_internal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../../assets/icons/facebook.png"
              alt="Facebook logo"
              class="logo"
            />
          </a>
        </div>
        <div class="link" data-aos="fade-up" data-aos-duration="1200">
          <a
            href="mailto:saragusfit@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../../assets/icons/email.png"
              alt="Email logo"
              class="logo"
            />
          </a>
        </div>
      </div>

      <div class="pages d-flex justify-content-around text-white">
        <router-link to="" class="footer-link">
          Terms of Use
        </router-link>
        |
        <router-link to="" class="footer-link">
          Cookies
        </router-link>
      </div>
      <div class="copy text-center mt-1 text-black-50">
        @Saragusfit 2021
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
  min-height: 15rem;
  margin-top: 7rem;
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
    .pages {
      margin-top: 0.5rem;
      .footer-link {
        color: white;
        text-decoration: none;
      }
    }
  }
}
</style>
