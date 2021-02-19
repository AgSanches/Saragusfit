<template>
  <div>
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
.app-content {
  padding-left: 25px;
  padding-top: 60px;
  position: relative;
}

.app-content-sidebar {
  padding-left: 225px;
}
</style>
