<template>
  <div class="circle mx-auto"></div>
</template>

<script>
export default {
  name: "CircleComponent"
};
</script>

<style scoped lang="scss">
@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(222, 147, 193, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}

.circle {
  width: 5rem;
  height: 5rem;
  background-color: #de93c1;
  border-radius: 50%;
  position: relative;

  box-shadow: 0 0 0 0 rgba(222, 147, 193, 1);
  transform: scale(1);
  animation: pulse 3s infinite;
}
</style>
