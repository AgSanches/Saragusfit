<template>
  <aside
    class="sidebar bg-secondary"
    :class="{ 'open-sidebar': isOpenSidebar }"
  >
    <div class="img-wrapper bg-secondary mt-3">
      <img
        src="../../assets/logo.png"
        alt="Image of Saragusfit"
        class="w-50 d-block mx-auto"
      />
    </div>
  </aside>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AdminSidebarComponent",
  computed: {
    ...mapState("admin", ["isOpenSidebar"])
  }
};
</script>

<style scoped lang="scss">
.sidebar {
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  transition: width 0.5s;
  width: 0;
  z-index: 10;
}

.open-sidebar {
  width: 200px;
}
</style>
