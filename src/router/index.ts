import { useStore } from "@/store";
import { createRouter, createWebHistory } from "vue-router";
import routesConfig from "./routes"


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routesConfig,
});

router.beforeResolve((to) => {
  useStore("app").updateLayout(to.meta.layout);
});

export default router;
