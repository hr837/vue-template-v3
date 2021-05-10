import { reactive, ref } from "vue";

export const dataSet = ref<any>([]);
export const dialogVisable = ref({
	form: false,
});

export const model = ref({
	name: "",
	title: "",
	icon: "",
	path: "",
});

export function refreshData() {
	dataSet.value = [
		{
			name: "home",
			id: "1",
			type: "DIRECTORY",
			childrens: [
				{
					name: "报表管理",
					id: "11",
					type: "MENU",
					childrens: [
						{
							name: "我的日报",
							path: "/home/reports/myReport",
							id: "111",
							type: "MENU",
						},
					],
				},
				{
					name: "任务管理",
					id: "12",
					type: "MENU",
					childrens: [
						{
							name: "我的待办",
							path: "/home/todos/myTodo",
							id: "121",
							type: "MENU",
						},
					],
				},
			],
		},
		{
			name: "settings",
			id: "2",
			type: "DIRECTORY",
			childrens: [
				{
					name: "系统管理",
					id: "21",
					type: "MENU",
					childrens: [
						{
							name: "部门管理",
							path: "/setting/system/department",
							id: "211",
							type: "MENU",
						},
						{
							name: "人员管理",
							path: "/setting/system/users",
							id: "212",
							type: "MENU",
						},
						{
							name: "系统菜单",
							path: "/setting/system/sys-menu",
							id: "213",
							type: "MENU",
						},
					],
				},
			],
		},
	];
}

export function onEditClick(row: any) {
	model.value.name = row.name;
	model.value.type = row.type;
	model.value.path = row.path;
	dialogVisable.value.form = true;
}

export function addMenu() {
	model.value = {
		name: "",
		title: "",
		icon: "",
		path: "",
	};
	dialogVisable.value.form = true;
}
