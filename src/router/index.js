import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: { layout: "main" },
    component: () => import("../views/Home")
  },
  {
    path: "/login",
    name: "login",
    meta: { layout: "auth" },
    component: () => import("../views/Login")
  },
  {
    path: "/register",
    name: "register",
    meta: { layout: "auth" },
    component: () => import("../views/Register")
  },
  {
    path: "/categories",
    name: "categories",
    meta: { layout: "main" },
    component: () => import("../views/Categories")
  },
  {
    path: "/detail:id",
    name: "detail",
    meta: { layout: "main" },
    component: () => import("../views/DetailRecord")
  },
  {
    path: "/history",
    name: "history",
    meta: { layout: "main" },
    component: () => import("../views/History")
  },
  {
    path: "/planing",
    name: "planing",
    meta: { layout: "main" },
    component: () => import("../views/Planing")
  },
  {
    path: "/profile",
    name: "profile",
    meta: { layout: "main" },
    component: () => import("../views/Profile")
  },
  {
    path: "/record",
    name: "record",
    meta: { layout: "main" },
    component: () => import("../views/Record")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
