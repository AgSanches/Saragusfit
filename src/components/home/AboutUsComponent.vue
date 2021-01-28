<template>
  <section id="about-us" class="about-us mx-auto">
    <div class="content row">
      <div class="text col-12 col-md-8">
        <div class="title">
          <h3 class="header text-primary">ABOUT US</h3>
          <h4 class="subtitle">Your Body, the Way You Want it</h4>
        </div>
        <div class="content-wrapper">
          <p class="content" data-aos="fade-up" data-aos-duration="1000">
            The brand
            <span class="font-weight-bold text-primary">SARAGUSFIT</span>
            stemmed from the combination of our names, Sara and Agustina. We
            started
            <span class="font-weight-bold text-primary">SARAGUSFIT</span> almost
            two years ago as a way for us to take our passion and fitness
            knowledge and turn it into something that would help others. We are
            certified personal trainers and sports professionals with bachelor's
            degrees in Sports Studies from Hanze University, Groningen, The
            Netherlands.
          </p>
          <p
            class="content"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="25"
          >
            By making lifestyle changes, consistent motivation, and creating
            sustainable behavioral changes will unconsciously teach you how to
            work for you, by you. To be self-dependent and have the body you
            want, the way you want it.
          </p>
          <p
            class="content"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="50"
          >
            Doing what you enjoy is the best motivator for exercising - and it
            works.
          </p>
          <p
            class="content"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="75"
          >
            It is a learning process to find out what works best for you, and
            this is what we want to help you achieve by customizing a workout
            plan just for you!
          </p>
          <p
            class="content"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            The SARAGUS approach:
          </p>

          <div class="approachs row justify-content-start align-items-center">
            <div
              class="col-12 col-md-6 approach"
              v-for="(approach, idx) in approachs"
              :key="idx"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="125"
            >
              <img
                src="../../assets/icons/check.png"
                alt="Check icon approach"
                class="check bg-primary"
              />
              <p class="content">{{ approach }}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="image-wrapper col-12 col-md-4 d-flex align-items-center"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <img
          class="image w-100"
          src="../../assets/home/saragusfit_winter_sports.jpg"
          alt="Image about us winter sports"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutUsComponent",
  data: () => {
    return {
      approachs: [
        "Learning process vs. Do-or-fail",
        "Flexibility vs. Restriction",
        "Empathy vs. Try harder",
        "Well-being vs. Distress"
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.about-us {
  margin-top: 2rem;
  display: block;
  position: relative;
  z-index: 2;

  .title {
    .header,
    .subtitle {
      font-weight: bold;
    }

    .subtitle::after {
      content: "";
      width: 15rem;
      height: 0.5rem;
      border-bottom: 1px solid #de93c1;
      display: block;
    }
  }

  .content-wrapper {
    .content {
      margin-bottom: 0.5rem;
    }
  }

  .approachs {
    width: 75%;
    margin-right: auto;
    margin-left: 2rem;
    margin-top: 1.5rem;

    .approach {
      margin-bottom: 0.5rem;

      &:hover {
        .check {
          animation-name: rotate;
          animation-duration: 1s;
        }
      }

      .check {
        padding: 0.3rem;
        width: 24px;
        margin-right: 0.5rem;
      }

      .content {
        display: inline;
      }
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(360deg);
  }
}
</style>
