import firebase from "firebase";

export default {
  namespaced: true,
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
    },
    uploadFile(state, { name, file }) {
      return new Promise((resolve, reject) => {
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(name);

        fileRef
          .put(file)
          .then(snapshot => {
            resolve({ data: snapshot });
          })
          .catch(reason => {
            reject({ error: reason });
          });
      });
    },
    getFile(state, name) {
      return new Promise((resolve, reject) => {
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(name);

        fileRef
          .getDownloadURL()
          .then(snapshot => {
            resolve({ data: snapshot });
          })
          .catch(reason => {
            reject({ error: reason });
          });
      });
    },
    deleteFile(state, name) {
      return new Promise((resolve, reject) => {
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(name);

        fileRef
          .delete()
          .then(snapshot => {
            resolve({ data: snapshot });
          })
          .catch(reason => {
            reject({ error: reason });
          });
      });
    }
  }
};
