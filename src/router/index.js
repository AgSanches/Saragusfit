import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";

import BaseLayout from "../layouts/BaseLayout.vue";

import Homepage from "../views/Homepage.vue";
import Login from "../views/Login";

import CookiesPolicy from "../views/CookiesPolicy";

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
          },
          {
            path: "cookies",
            name: "Cookies",
            component: CookiesPolicy
          }
        ]
      },
      {
        path: "/login",
        name: "Login",
        component: Login
      },
      {
        path: "/admin",
        name: "AdminPanelLayout",
        component: () => import("../layouts/AdminLayout"),
        meta: {
          requiresAuth: true
        },
        children: [
          {
            path: "",
            name: "AdminBasePage",
            component: () => import("../views/admin/AdminBasePage"),
            children: [
              {
                path: "",
                name: "AdminDefaultPage",
                component: () =>
                  import(
                    "../components/admin/AdminProccessGeneralItemsComponent"
                  )
              },
              {
                path: "about-us",
                name: "AdminAboutUsPage",
                component: () =>
                  import("../components/admin/ProccessAboutUsComponent")
              },
              {
                path: "coachs",
                name: "AdminCoachsPage",
                component: () =>
                  import("../components/admin/ProccessCoachsComponent")
              },
              {
                path: "workout-plan",
                name: "AdminWorkoutPlan",
                component: () =>
                  import("../components/admin/ProccessWorkoutPlanComponent")
              },
              {
                path: "the-proccess",
                name: "AdminTheProccess",
                component: () =>
                  import(
                    "../components/admin/ProccessTheProccessSectionComponent"
                  )
              },
              {
                path: "plans",
                name: "AdminPlans",
                component: () =>
                  import("../components/admin/ProccessPlanSectionComponent")
              },
              {
                path: "success-stories",
                name: "AdminSuccessStories",
                component: () =>
                  import("../components/admin/ProccessSuccessStoriesComponent")
              }
            ]
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

router.beforeEach((to, from, next) => {
  const isAuth = localStorage.getItem("user") !== null;

  if (to.name === "Login" && isAuth) {
    next({ name: "Homepage" });
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuth) {
    next({ name: "Login" });
  }

  next();
});

export default router;
