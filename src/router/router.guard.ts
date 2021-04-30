import { Router } from "vue-router";

function useGuards(router: Router): void {
	// /**
	//  * 路由前置钩子
	//  */
	// router.beforeEach((to) => {
	// 	if (to.path === "/") {
	// 		return "/login";
	// 	}
	// 	return true;
	// });
}

export default useGuards;
