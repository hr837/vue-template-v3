import { useStore } from "@/store";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      ignoreAuth: true,
      layout: "Basic",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
    meta: {
      ignoreAuth: true,
      layout: "Blank",
    },
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/UserView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeResolve((to) => {
  // 更新路由控制的页面布局
  useStore("app").updateLayout(to.meta.layout);
});

export default router;
