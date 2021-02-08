import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import InConstructionLayout from "../layouts/InConstructionLayout";

import BaseLayout from "../layouts/BaseLayout.vue";

import Homepage from "../views/Homepage.vue";
import Login from "../views/Login";

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
      },
      {
        path: "/login",
        name: "Login",
        component: Login
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuth = localStorage.getItem("user") !== null;

  if (to.name === "Login" && isAuth) {
    next({ name: "Homepage" });
  }

  next();
});

export default router;
