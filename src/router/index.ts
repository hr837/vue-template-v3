import { createRouter, createWebHistory } from "vue-router";
import { App } from "vue";
import RoutesConfig from "./routes";
import useGuards from "./router.guard";

const router = createRouter({
	// 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
	history: createWebHistory(),
	routes: RoutesConfig, // `routes: routes` 的缩写
});

useGuards(router);

export default function useRouter(app: App): void {
	app.use(router);
}
