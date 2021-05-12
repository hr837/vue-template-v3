import { LoadingService } from "@/bootstrap/services/loading.service";
import { PageService } from "@/bootstrap/services/page.service";
import { RoleService } from "@/services/role.service";
import type { RoleInfo } from "@/types/role.interface";
import { RequestParams } from "@gopowerteam/http-request";
import { firstValueFrom } from "rxjs";
import { ref } from "vue";

export const dataSet = ref([]);
export const editId = ref("");
export const dialog = ref(false);

export const model = ref({
	name: "",
	status: "ON",
});

const service = new RoleService();
export const refreshLoading = new LoadingService();
export const saveloading = new LoadingService();
export const page = new PageService();

export function refreshData(query?: any) {
	if (query) page.reset();
	service
		.query(new RequestParams(query || {}, { loading: refreshLoading, page }))
		.subscribe({
			next: (data) => (dataSet.value = data),
		});
}

export function addRole() {
	editId.value = "";
	dialog.value = true;
}

export function editRole(data: RoleInfo) {
	editId.value = data.id;
	model.value.name = data.name;
	model.value.status = data.status;
	dialog.value = true;
}

export function saveRole() {
	let obserable = null;
	const data: any = {
		...model.value,
	};

	if (editId.value) {
		// edit
		data.id = editId.value;
		const param = new RequestParams(data, { loading: saveloading });
		obserable = service.modify(param);
	} else {
		// add
		const param = new RequestParams(data, { loading: saveloading });
		obserable = service.add(param);
	}

	obserable.subscribe(refreshData);

	return obserable;
}

export function deleteRole(data: RoleInfo) {
	const param = new RequestParams({
		id: data.id,
	});
	service.delete(param).subscribe({
		next: () => {
			refreshData();
			editId.value = "";
		},
	});
}
