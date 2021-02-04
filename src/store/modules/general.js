import axios from "axios";

export default {
  namespaced: true,
  state: {
    isOpenNav: false,
    isLoadingPage: true
  },
  mutations: {
    toggleNav(state) {
      state.isOpenNav = !state.isOpenNav;
    },
    setLoadingFalse(state) {
      state.isLoadingPage = false;
    }
  },
  actions: {
    fetchInstagramPost(state, { apiToken, fields }) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `https://graph.instagram.com/me/media?access_token=${apiToken}&fields=${fields}`
          )
          .then(response => {
            resolve({ data: response.data });
          })
          .catch(error => {
            reject({ error });
          });
      });
    }
  }
};
