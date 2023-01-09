import { RouteRecordRaw } from "vue-router";

export const SystemRoutes: Array<RouteRecordRaw> = [
  {
    path: "/system/organize/users",
    name: "users",
    component: () => import("@/views/system/organizational-management/OrganizationUsers.vue"),
  },
]