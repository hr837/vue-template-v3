import { Router } from "vue-router";
import { resetStore } from "@/store";

function useGuards(router: Router): void {
	/**
	 * 路由前置钩子
	 */
	router.beforeEach((to) => {
		if (to.path === "/") {
			resetStore();
			return "/login";
		}
		return true;
	});
}

export default useGuards;
