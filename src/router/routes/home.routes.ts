const homeRoutes = [
	{
		path: "reports/myReport",
		component: () => import("@/pages/home/report/index.vue"),
	},
	{
		path: "todos/myTodo",
		component: () => import("@/pages/home/todos/index.vue"),
	},
];

export default homeRoutes;
