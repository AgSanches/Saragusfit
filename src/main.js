import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import firebase from "firebase";
import "firebase/analytics";
import "firebase/remote-config";
import firebaseConfig from "./repository/firebaseCredentials";

firebase.initializeApp(firebaseConfig);
firebase.analytics();

import "bootstrap";
import "animate.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  once: true
});

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const options = {
  confirmButtonColor: "#cf466f",
  cancelButtonColor: "#ff7674"
};

const app = createApp(App);

app
  .use(VueSweetalert2, options)
  .use(store)
  .use(router)
  .mount("#app");
