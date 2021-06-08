import { createRouter, createWebHistory } from "vue-router";
import Home from "../Pages/Home.vue";
import ErrorPage from "../Pages/ErrorPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: ErrorPage,
  },
];

const Router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default Router;
