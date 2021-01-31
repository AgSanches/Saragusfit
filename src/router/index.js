import { createRouter, createWebHashHistory } from "vue-router";
import App from "../App.vue";

import BaseLayout from "../layouts/BaseLayout.vue";

import Homepage from "../views/Homepage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: App,
    children: [
      {
        path: "/",
        name: "BaseLayout",
        component: BaseLayout,
        children: [
          {
            path: "",
            name: "Homepage",
            component: Homepage
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
