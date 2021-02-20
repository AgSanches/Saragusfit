<template>
  <li class="client-goal">
    {{ goal }}
  </li>
</template>

<script>
export default {
  name: "ClientsGoalsComponent",
  props: {
    goal: String
  }
};
</script>

<style scoped lang="scss">
.client-goal {
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
  position: relative;

  &::after {
    display: block;
    position: relative;
    content: "";
    border-bottom: 3px solid #de93c1;
    width: 2rem;
  }

  &:nth-child(odd) {
    &::after {
      animation: width-change 6s infinite linear;
    }
  }

  &:nth-child(even) {
    &::after {
      animation: width-change 7s infinite linear;
    }
  }
}

@keyframes width-change {
  0% {
    width: 0;
  }
  50% {
    width: 6rem;
  }
  100% {
    width: 0;
  }
}
</style>
