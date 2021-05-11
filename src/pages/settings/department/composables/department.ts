import { ref, reactive, computed } from "vue";
import { RequestParams } from "@gopowerteam/http-request";
import { PageService } from "@/bootstrap/services/page.service";
import { DepartmentService } from "@/services/department.service";
import { LoadingService } from "@/bootstrap/services/loading.service";
import { firstValueFrom, lastValueFrom } from "rxjs";
import { DepartmentInfo } from "@/types/department.interface";

export const loading = new LoadingService();

// 网络请求参数
const requestPram = new RequestParams({}, { loading });
const service = new DepartmentService();

export const dialog = ref({
	show: false,
	name: "",
});

export const editId = ref("");

export const model = ref({
	name: "",
	parentId: "",
});

export function addDepartment(data: DepartmentInfo) {
	editId.value = "";
	// setting value
	model.value.name = data.name;
	model.value.parentId = data.id;
	// dialog
	dialog.value.name = "添加部门";
	dialog.value.show = true;
}

export function editDepartment(data: DepartmentInfo) {
	// setting value
	editId.value = data.id;
	model.value.name = data.name;
	model.value.parentId = data.parent || "";
	// dialog
	dialog.value.name = "修改部门";
	dialog.value.show = true;
}

export function saveDepartment() {
	requestPram.data = model.value;
	if (editId.value) {
		// modify
		requestPram.data.id = editId.value;
		service.modify(requestPram).subscribe((data) => {
			console.log(data);
		});
	} else {
		// add
		service.add(requestPram).subscribe((data) => {
			console.log(data);
		});
	}
}

export const currentDepartment = ref<DepartmentInfo>();

export const departmentId = computed(() => currentDepartment.value?.id);
export const departmentCode = computed(
	() => currentDepartment.value?.departCode
);
