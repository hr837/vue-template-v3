const settingRoutes = [
	{
		path: "system/department",
		component: () => import("@/pages/settings/department/index.vue"),
	},
	{
		path: "system/users",
		component: () => import("@/pages/settings/users/index.vue"),
	},
];

export default settingRoutes;
