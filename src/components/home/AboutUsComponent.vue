<template>
  <section id="about-us" class="about-us mx-auto">
    <div class="content row">
      <div class="text col-12 col-md-8">
        <div class="title">
          <h3 class="header text-primary">{{ pageContent.title }}</h3>
          <h4 class="subtitle">{{ pageContent.subtitle }}</h4>
        </div>
        <div class="content-wrapper">
          <p
            class="content"
            data-aos="fade-up"
            data-aos-duration="1500"
            :data-aos-delay="idx * 100"
            v-for="(paragraph, idx) in pageContent.paragraphs"
            :key="idx"
          >
            {{ paragraph }}
          </p>

          <div class="approachs row justify-content-start align-items-center">
            <div
              class="col-12 col-md-6"
              v-for="(approach, idx) in pageContent.approachs"
              :key="idx"
              data-aos="fade-up"
              data-aos-duration="1500"
              :data-aos-delay="125 * idx"
            >
              <AboutUsApproachComponent
                :approach="approach"
              ></AboutUsApproachComponent>
            </div>
          </div>
        </div>
      </div>

      <div
        class="image-wrapper col-12 col-md-4 d-flex align-items-center mt-2 mt-md-0"
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-delay="100"
      ></div>
    </div>
  </section>
</template>

<script>
import content from "../../texts/aboutUsTexts";
import AboutUsApproachComponent from "./partials/AboutUsApproachComponent";
import { mapActions } from "vuex";

export default {
  name: "AboutUsComponent",
  components: {
    AboutUsApproachComponent
  },
  data: () => {
    return {
      pageContent: content,
      doc: "aboutUs"
    };
  },
  methods: {
    ...mapActions("home", ["getText"])
  },
  created() {
    this.getText(this.doc).then(response => {
      this.pageContent = response;
    });
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
  }
}

.image-wrapper {
  background-image: url("../../assets/home/saragusfit_winter_sports_3.jpg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 599px) {
    min-height: 25rem;
  }

  @media screen and (min-width: 1920px) {
    max-width: 350px;
    margin: 0 auto;
  }
}
</style>
