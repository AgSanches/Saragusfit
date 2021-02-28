import firebase from "firebase";

export default {
  namespaced: true,
  state: {
    pageContent: {},
    popupLimitedOfferContent: null,
    canShowPopupLimitedOffer: false
  },
  mutations: {
    setPopupLimitedOffer(state, payload) {
      state.popupLimitedOfferContent = payload;
    },
    setShowPopupLimitedOffer(state, payload) {
      state.canShowPopupLimitedOffer = payload;
    }
  },
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
