<template>
  <div class="section" :data-aos="content.aos" data-aos-duration="1500">
    <img
      :src="content.image"
      :alt="`Image of ${content.title}`"
      class="section-image"
    />
    <h4 class="section-title text-primary font-weight-bold">
      {{ content.title }}
    </h4>
    <p class="section-content">{{ content.text }}</p>
  </div>
</template>

<script>
export default {
  name: "WorkoutPlanSectionComponent",
  props: {
    content: Object
  }
};
</script>

<style scoped lang="scss">
.section {
  margin-bottom: 2rem;
  padding: 1rem;
  display: inline-block;
  transition: all 0.3s;

  .section-image {
    width: 64px;
    margin-bottom: 1.2rem;
  }

  .section-content {
    font-size: 0.95rem;
  }

  &:hover {
    background: linear-gradient(
      45deg,
      rgba(222, 147, 193, 0.85) 50%,
      rgba(25, 79, 146, 0.6) 100%
    );
    transform: translateY(-15px) !important;

    .section-content,
    .section-title {
      color: white !important;
    }
  }
}
</style>
