<template>
  <div class="admin-wrapper">
    <div class="overlay overlay-black"></div>
    <AdminNavbarComponent></AdminNavbarComponent>
    <AdminSidebarComponent></AdminSidebarComponent>
    <div class="app-content" :class="{ 'app-content-sidebar': isOpenSidebar }">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AdminNavbarComponent from "../components/admin/AdminNavbarComponent";
import AdminSidebarComponent from "../components/admin/AdminSidebarComponent";
import { mapState } from "vuex";

export default {
  name: "AdminLayout",
  components: {
    AdminNavbarComponent,
    AdminSidebarComponent
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
  min-height: 99vw;
  color: white;
}

.app-content {
  padding-left: 25px;
  padding-top: 60px;
  position: relative;
  z-index: 5;
}

.app-content-sidebar {
  padding-left: 225px;
}
</style>
