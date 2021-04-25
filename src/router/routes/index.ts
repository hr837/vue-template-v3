import BlankRoutes from "./blank.routes";
import WorkspaceRoutes from "./workspace.routes";

export default [
  {
    path: "/",
    component: () => import("@/layout/blank-layout.vue"),
    children: BlankRoutes,
  },
  {
    path: "/workspace",
    component: () => import("@/layout/workspace-layout.vue"),
    children: WorkspaceRoutes,
  },
];
