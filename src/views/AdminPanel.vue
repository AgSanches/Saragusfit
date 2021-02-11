<template>
  <div class="app-content" :class="{ 'app-content-sidebar': isOpenSidebar }">
    <div class="p-1 row m-2">
      <div class="col-12 col-md-6 col-xl-4 section">
        <h1 class="title">Change content from our mission and vision</h1>
        <ProccessMissionAndVisionComponent></ProccessMissionAndVisionComponent>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ProccessMissionAndVisionComponent from "../components/admin/ProccessMissionAndVisionComponent";

export default {
  name: "AdminPanel",
  components: {
    ProccessMissionAndVisionComponent
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
  padding: 0.8rem;
  color: white;

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
