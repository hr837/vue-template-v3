import { ref, computed } from "vue";
import { RequestParams } from "@gopowerteam/http-request";
import { DepartmentService } from "@/services/department.service";
import { LoadingService } from "@/bootstrap/services/loading.service";
import { DepartmentInfo } from "@/types/department.interface";
import { firstValueFrom } from "rxjs";
import { store } from "@/store";

export const loading = new LoadingService();

export const dialog = ref({
	show: false,
	name: "",
});

// form model
export const model = ref({
	name: "",
	status: "OFF",
	parentId: "",
});

export const editId = ref("");
export const service = new DepartmentService();

// 刷新数据
export function refreshData() {
	store.dispatch("department/refreshDeptData").then(() => {
		if (!currentDepartment.value) {
			currentDepartment.value = store.state.department.departmentList[0];
		}
	});
}

// event handle
export function addDepartment(data: DepartmentInfo) {
	currentDepartment.value = data;
	editId.value = "";
	model.value.parentId = data.id;
	dialog.value.name = "添加部门";
	dialog.value.show = true;
}

// event handle
export function editDepartment(data: DepartmentInfo) {
	currentDepartment.value = data;
	editId.value = data.id;

	// set value
	model.value.name = data.name;
	model.value.status = data.status;
	model.value.parentId = data.id;

	dialog.value.name = "修改部门";
	dialog.value.show = true;
}

/**
 * 保存部门
 * @returns
 */
export function saveDepartment() {
	if (editId.value) {
		// modify
		const requestPram = new RequestParams({
			...model.value,
			id: editId.value,
		});

		return firstValueFrom(service.modify(requestPram))
			.then(() => {
				refreshData();
				return true;
			})
			.catch(() => false);
	} else {
		// add
		const requestPram = new RequestParams(model.value);
		return firstValueFrom(service.add(requestPram))
			.then(() => {
				refreshData();
				return true;
			})
			.catch(() => false);
	}
}

export function deleteDepartment(data: DepartmentInfo) {
	const param = new RequestParams({ departId: data.id }, { loading });
	service.delete(param).subscribe({
		next: () => {
			currentDepartment.value = {} as any;
			refreshData();
		},
	});
}

// 当前树选中的节点
export const currentDepartment = ref<DepartmentInfo>();

export const departmentId = computed(() => currentDepartment.value?.id);
export const departmentCode = computed(
	() => currentDepartment.value?.departCode
);
