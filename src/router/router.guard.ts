import { Router } from "vue-router";

function useGuards(router: Router) {
	/**
	 * 路由前置钩子
	 */
	router.beforeEach((to, from) => {
		if (to.path === "/") {
			return "/login";
		}
		return true;
	});
}

export default useGuards;
