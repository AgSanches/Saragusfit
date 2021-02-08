import firebase from "firebase";

export default {
  namespaced: true,
  state: {
    pageContent: {}
  },
  mutations: {},
  actions: {
    getText(state, doc) {
      return new Promise((resolve, reject) => {
        firebase
          .firestore()
          .collection("pageContent")
          .doc(doc)
          .get()
          .then(val => {
            const data = {
              ...val.data(),
              id: val.id
            };

            resolve(data);
          })
          .catch(reason => {
            reject(reason);
          });
      });
    }
  }
};
