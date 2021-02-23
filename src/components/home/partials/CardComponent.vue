<template>
  <div
    class="card-coach d-flex justify-content-center align-items-center"
    :style="{ 'background-image': `url(${coachImage})` }"
    v-if="coach"
  >
    <div
      class="gradient-coach d-flex justify-content-center align-items-centers"
    >
      <p class="coach-description">
        <span class="d-block pb-2 font-weight-bold">
          {{ coach.subtitle }}
        </span>
        {{ coach.description }}
      </p>
    </div>
    <div class="coach-name bg-primary">
      <h3 class="name">{{ coach.name }}</h3>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CardComponent",
  props: {
    coach: Object
  },
  data: () => {
    return {
      coachImage: ""
    };
  },
  methods: {
    ...mapActions("admin", ["getFile"]),
    getImage() {
      this.getFile(this.coach.image).then(response => {
        this.coachImage = response.data;
      });
    }
  },
  created() {
    this.getImage();
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    coach: function(newValue, oldValue) {
      this.getImage();
    }
  }
};
</script>

<style scoped lang="scss">
.gradient-coach {
  background: linear-gradient(
    45deg,
    rgba(222, 147, 193, 0.85) 50%,
    rgba(25, 79, 146, 0.6) 100%
  );

  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;

  transition: opacity 1.5s;

  .coach-description {
    margin: auto;
    padding: 1rem;
    color: white;
  }
}

.card-coach {
  height: 35rem;
  width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    max-width: 27rem;
    margin: 0 auto;
  }

  &:hover {
    .gradient-coach {
      opacity: 1;
    }
  }

  .coach-name {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.7rem;
    border-top-left-radius: 15px;

    .name {
      font-size: 1.25rem;
      color: white;
      font-weight: bold;
    }
  }
}
</style>
