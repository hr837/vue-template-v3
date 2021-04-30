import BlankRoutes from "./blank.routes";
import SettingRoutes from "./setting.routes";
import HomeRoutes from "./home.routes";

export default [
	{
		path: "/",
		component: () => import("@/layout/BlankLayout.vue"),
		children: BlankRoutes,
	},
	{
		path: "/home",
		component: () => import("@/layout/WorkspaceLayout.vue"),
		children: HomeRoutes,
	},
	{
		path: "/setting",
		component: () => import("@/layout/WorkspaceLayout.vue"),
		children: SettingRoutes,
	},
];
