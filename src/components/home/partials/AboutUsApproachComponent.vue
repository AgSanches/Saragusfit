<template
  ><div class="approach">
    <img
      src="../../../assets/icons/check.png"
      alt="Check icon approach"
      class="check bg-primary"
    />
    <p class="content">{{ approach }}</p>
  </div></template
>

<script>
export default {
  name: "AboutUsApproachComponent",
  props: {
    approach: String
  }
};
</script>

<style scoped lang="scss">
.approach {
  margin-bottom: 0.5rem;

  &:hover {
    .check {
      animation: rotate 1s;
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

@keyframes rotate {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(360deg);
  }
}
</style>
