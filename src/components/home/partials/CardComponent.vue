<template>
  <div class="card-coach" :style="{ 'background-image': `url(${image})` }">
    <div class="card-info mx-auto">
      <h4 class="coach-name mx-auto">{{ coach.name }}</h4>
      <p class="content px-2">
        {{ coach.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    image: String,
    coach: Object
  }
};
</script>

<style scoped lang="scss">
.card-coach {
  height: 45rem;
  width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;

  .card-info {
    width: 85%;
    background: rgba(222, 147, 193, 0.95);
    height: 11rem;
    position: absolute;
    bottom: -8rem;
    left: 0;
    right: 0;

    .coach-name {
      color: white;
      padding: 1rem;
      text-align: center;
      background-color: #353333;
      width: 75%;
      transform: translateY(-25px);
      font-size: 2rem;
      margin-bottom: 0;
    }

    .content {
      margin-top: -1.2rem;
      color: white;
    }
  }
}
</style>
