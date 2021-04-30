import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
	{
		path: "",
		redirect: "/login",
	},
	{
		path: "login",
		component: () => import("@/pages/login/login.vue"),
	},
];

export default routes;
