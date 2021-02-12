<template>
  <div class="app-content" :class="{ 'app-content-sidebar': isOpenSidebar }">
    <div class="p-1 row m-2">
      <div class="col-12 col-md-6 col-xl-4 section">
        <h1 class="title">Change content from our mission and vision</h1>
        <ProccessMissionAndVisionComponent></ProccessMissionAndVisionComponent>
      </div>
      <div class="col-12 col-md-7 section">
        <h1 class="title">Change content from Free Workout Section</h1>
        <ProccessFitnessChallengeComponent></ProccessFitnessChallengeComponent>
      </div>
      <div class="col-11 section">
        <h1 class="title">Change content from About Us Section</h1>
        <ProccessAboutUsComponent></ProccessAboutUsComponent>
      </div>
      <div class="col-12 col-md-8 section">
        <h1 class="title">Coachs</h1>
        <ProccessCoachsComponent></ProccessCoachsComponent>
      </div>
      <div class="col-12 col-md-8 section">
        <h1 class="title">Plans</h1>
        <ProccessPlanSectionComponent></ProccessPlanSectionComponent>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ProccessMissionAndVisionComponent from "../components/admin/ProccessMissionAndVisionComponent";
import ProccessFitnessChallengeComponent from "../components/admin/ProccessFitnessChallengeComponent";
import ProccessAboutUsComponent from "../components/admin/ProccessAboutUsComponent";
import ProccessCoachsComponent from "../components/admin/ProccessCoachsComponent";
import ProccessPlanSectionComponent from "../components/admin/ProccessPlanSectionComponent";

export default {
  name: "AdminPanel",
  components: {
    ProccessMissionAndVisionComponent,
    ProccessFitnessChallengeComponent,
    ProccessAboutUsComponent,
    ProccessCoachsComponent,
    ProccessPlanSectionComponent
  },
  computed: {
    ...mapState("admin", ["isOpenSidebar"])
  }
};
</script>

<style scoped lang="scss">
.app-content {
  padding-left: 0;
  padding-top: 60px;
  position: relative;
}

.app-content-sidebar {
  padding-left: 200px;
}

.section {
  background-color: #3b5998;
  border-radius: 10px;
  color: white;
  margin: 1rem;
  padding: 1rem;

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
