import { createRouter, createWebHashHistory } from "vue-router";
import App from "../App.vue";

import BaseLayout from "../layouts/BaseLayout.vue";
import InConstructionLayout from "../layouts/InConstructionLayout.vue";

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
        component: InConstructionLayout
      },
      {
        path: "saragusfit",
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
