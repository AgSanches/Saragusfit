import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "bootstrap";
import "animate.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const app = createApp(App);

app
  .use(store)
  .use(router)
  .mount("#app");
