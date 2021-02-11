import firebase from "firebase";

export default {
  namespaced: true,
  state: {
    isOpenSidebar: false
  },
  mutations: {
    toggleSidebar(state) {
      state.isOpenSidebar = !state.isOpenSidebar;
    }
  },
  actions: {
    updateDocGeneric(state, { doc, content }) {
      return new Promise((resolve, reject) => {
        firebase
          .firestore()
          .collection("pageContent")
          .doc(doc)
          .set(content)
          .then(result => {
            resolve(result);
          })
          .catch(reason => {
            reject(reason);
          });
      });
    }
  }
};
