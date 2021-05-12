import { createRouter, createWebHistory } from "vue-router";
import { App } from "vue";
import RoutesConfig from "./routes";
import useGuards from "./router.guard";

const router = createRouter({
	history: createWebHistory(),
	routes: RoutesConfig,
});

useGuards(router);

/**
 * 使用路由
 * @param app
 */
export default function useRouter(app: App): void {
	app.use(router);
}
