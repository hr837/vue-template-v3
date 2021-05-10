import { ref } from "vue";

export const model = ref({
	name: "",
	departmentId: "",
});

export const userId = ref("");

export const dialog = ref({
	show: false,
	name: "",
});

/**
 * 修改用户
 * @param data
 */
export function onEdit(data: any) {
	model.value.departmentId = data.deptId;
	model.value.name = data.name;
	userId.value = data.id;
	dialog.value.show = true;
	dialog.value.name = "修改用户";
}

/**
 * 新增用户
 * @param departmentId
 */
export function onAdd(departmentId: string) {
	model.value.departmentId = departmentId;
	model.value.name = "";
	userId.value = "";
	dialog.value.show = true;
	dialog.value.name = "新增用户";
}
