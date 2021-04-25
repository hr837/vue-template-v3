import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "",
    component: () => import("@/pages/main/index.vue"),
  },
];

export default routes;
