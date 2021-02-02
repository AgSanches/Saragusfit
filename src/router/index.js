import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import InConstructionLayout from "../layouts/InConstructionLayout";

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
        name: "InConstructionLayout",
        component: InConstructionLayout,
      },
      {
        path: "/oli",
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
  history: createWebHistory(),
  routes
});

export default router;
