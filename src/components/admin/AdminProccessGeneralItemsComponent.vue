<template>
  <div class="p-1 row m-2">
    <div class="col-12 col-xl-4">
      <div class="section">
        <h1 class="title">Change content from our mission and vision</h1>
        <ProccessMissionAndVisionComponent></ProccessMissionAndVisionComponent>
      </div>
    </div>
    <div class="col-12 col-xl-8">
      <div class="section">
        <h1 class="title">Change content from Free Workout Section</h1>
        <ProccessFitnessChallengeComponent></ProccessFitnessChallengeComponent>
      </div>
    </div>
  </div>
</template>

<script>
import ProccessMissionAndVisionComponent from "./ProccessMissionAndVisionComponent";
import ProccessFitnessChallengeComponent from "./ProccessFitnessChallengeComponent";

export default {
  name: "AdminPanel",
  components: {
    ProccessMissionAndVisionComponent,
    ProccessFitnessChallengeComponent
  }
};
</script>

<style scoped lang="scss">
.section {
  background-color: #3b5998;
  border-radius: 10px;
  color: white;
  padding: 1rem;
  margin-bottom: 1rem;

  .title {
    font-size: 1.4rem;
  }

  &:hover {
    -webkit-box-shadow: 0px 0px 5px 7px rgba(230, 108, 143, 0.3);
    -moz-box-shadow: 0px 0px 5px 7px rgba(230, 108, 143, 0.3);
    box-shadow: 0px 0px 5px 7px rgba(230, 108, 143, 0.3);
  }
}
</style>
