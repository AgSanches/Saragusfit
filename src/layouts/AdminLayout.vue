<template>
  <div class="admin-wrapper">
    <div class="overlay overlay-black"></div>
    <AdminNavbarComponent></AdminNavbarComponent>
    <div class="app-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AdminNavbarComponent from "../components/admin/AdminNavbarComponent";
import { mapState } from "vuex";

export default {
  name: "AdminLayout",
  components: {
    AdminNavbarComponent
  },
  computed: {
    ...mapState("admin", ["isOpenSidebar"])
  }
};
</script>

<style scoped lang="scss">
.admin-wrapper {
  background-image: url("../assets/admin/saragusfit-admin-background.jpg");
  background-size: cover;
  background-position: left;
  position: relative;
  min-height: 100vh;
  color: white;
}

.app-content {
  padding-left: 25px;
  padding-top: 60px;
  position: relative;
  z-index: 5;
}

</style>
