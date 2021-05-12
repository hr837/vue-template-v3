const settingRoutes = [
	{
		path: "system/department",
		component: () => import("@/pages/settings/department/Depratment.vue"),
	},
	{
		path: "system/sys-menu",
		component: () => import("@/pages/settings/sys-menu/SysMenu.vue"),
	},
	{
		path: "system/roles",
		component: () => import("@/pages/settings/roles/roles.vue"),
	},
];

export default settingRoutes;
