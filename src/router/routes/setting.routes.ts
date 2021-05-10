const settingRoutes = [
	{
		path: "system/department",
		component: () => import("@/pages/settings/department/Depratment.vue"),
	},
	{
		path: "system/users",
		component: () => import("@/pages/settings/users/index.vue"),
	},
	{
		path: "system/sys-menu",
		component: () => import("@/pages/settings/sys-menu/SysMenu.vue"),
	},
];

export default settingRoutes;
