<template>
  <div class="">
    <AdminNavbarComponent></AdminNavbarComponent>
    <AdminSidebarComponent></AdminSidebarComponent>
    <router-view></router-view>
  </div>
</template>

<script>
import AdminNavbarComponent from "../components/admin/AdminNavbarComponent";
import AdminSidebarComponent from "../components/admin/AdminSidebarComponent";

export default {
  name: "AdminLayout",
  components: {
    AdminNavbarComponent,
    AdminSidebarComponent
  }
};
</script>

<style scoped lang="scss"></style>
