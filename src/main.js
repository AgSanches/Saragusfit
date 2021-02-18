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

import { ObserveVisibility } from "vue-observe-visibility";

app.directive("observe-visibility", {
  beforeMount: (el, binding, vnode) => {
    vnode.context = binding.instance;
    ObserveVisibility.bind(el, binding, vnode);
  },
  update: ObserveVisibility.update,
  unmounted: ObserveVisibility.unbind
});

import VueScrollTo from "vue-scrollto";
const optionsScrollTo = {
  container: "body",
  duration: 1000,
  lazy: false,
  easing: "ease",
  offset: -100
};

app
  .use(VueSweetalert2, options)
  .use(VueScrollTo, optionsScrollTo)
  .use(store)
  .use(router)
  .mount("#app");
