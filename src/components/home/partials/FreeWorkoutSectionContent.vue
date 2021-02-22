<template>
  <div class="content mx-auto text-center">
    <div class="title pb-3" data-aos="fade-down" data-aos-duration="1500">
      <h3 class="text-white font-weight-bold mb-0 ">
        {{ content.title }}
      </h3>
      <small class="font-italic text-white">{{ content.subtitle }}</small>
    </div>
    <div class="text-wrapper text-white">
      <p class="text mx-auto" data-aos="fade-up" data-aos-duration="1200">
        {{ content.text }}
      </p>
      <a
        :href="filePath"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-gradient"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="500"
      >
        {{ content.button }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FreeWorkoutSectionContent",
  props: {
    content: Object,
    filePath: String
  }
};
</script>

<style scoped lang="scss">
.content {
  position: relative;
  z-index: 5;
  width: 85%;
  max-width: 1500px;
}
.btn-gradient {
  background: linear-gradient(270deg, #de93c1, #194f92);
  background-size: 400% 400%;
  color: white;

  -webkit-animation: gradient 15s ease infinite;
  -moz-animation: gradient 15s ease infinite;
  animation: gradient 15s ease infinite;
}

@-webkit-keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
@-moz-keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
@keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
