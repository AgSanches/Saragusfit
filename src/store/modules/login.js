import firebase from "firebase";

export default {
  namespaced: true,
  state: {
    user: localStorage.getItem("user") || null
  },
  mutations: {
    changeUser(state, newUser) {
      state.user = newUser;

      if (newUser) {
        localStorage.setItem("user", newUser.refreshToken);
      } else {
        localStorage.clear();
      }
    }
  },
  actions: {
    signInUser(state, { email, password }) {
      return new Promise((resolve, reject) => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    signOutSession() {
      return new Promise((resolve, reject) => {
        firebase
          .auth()
          .signOut()
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};
