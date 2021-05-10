import { ref, reactive } from "vue";
import { RequestParams } from "@gopowerteam/http-request";
import { PageService } from "@/bootstrap/services/page.service";
import { DepartmentService } from "@/services/department.service";
import { LoadingService } from "@/bootstrap/services/loading.service";
import { firstValueFrom, lastValueFrom } from "rxjs";

export const loading = new LoadingService();

// 网络请求参数
const requestPram = new RequestParams({}, { loading });
const service = new DepartmentService();

export const dialog = ref({
	show: false,
	name: "",
});

export const model = ref({
	name: "",
	parentId: "",
});

export const editId = ref("");

export function addDepartment(parentId: number) {
	editId.value = "";
	dialog.value.name = "添加部门";
	dialog.value.show = true;
}

export function editDepartment(data: any) {
	model.value.name = data.name;
	model.value.parentId = data.parent;
	editId.value = data.id;
	dialog.value.name = "修改部门";
	dialog.value.show = true;
}

export function saveDepartment() {
	if (editId.value) {
		// modify
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
