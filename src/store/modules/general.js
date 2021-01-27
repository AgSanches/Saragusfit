export default {
  namespaced: true,
  state: {
    isOpenNav: false,
    isLoadingPage: true,
  },
  mutations: {
    toggleNav(state) {
      state.isOpenNav = !state.isOpenNav;
    },
    setLoadingFalse(state) {
      state.isLoadingPage = false
    }
  },
  actions: {}
};
