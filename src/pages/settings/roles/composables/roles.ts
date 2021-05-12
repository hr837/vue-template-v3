import { LoadingService } from "@/bootstrap/services/loading.service";
import { PageService } from "@/bootstrap/services/page.service";
import { RoleService } from "@/services/role.service";
import type { RoleInfo } from "@/types/role.interface";
import { RequestParams } from "@gopowerteam/http-request";
import { firstValueFrom } from "rxjs";
import { reactive, ref } from "vue";

export const dataSet = ref([]);
export const dialog = ref(false);

export const model = ref<RoleInfo>({
	id: "",
	name: "",
	status: "OFF",
	description: "",
});

const service = new RoleService();
export const refreshLoading = new LoadingService();
export const saveloading = new LoadingService();
export const page = new PageService();

export function refreshData(query?: any) {
	service
		.query(new RequestParams(query || {}, { loading: refreshLoading, page }))
		.subscribe({
			next: (data) => (dataSet.value = data),
		});
}

export function addRole() {
	model.value.id = "";
	dialog.value = true;
}

export function editRole(data: RoleInfo) {
	model.value.id = data.id;
	model.value.name = data.name;
	model.value.status = data.status;
	model.value.description = data.description;
	dialog.value = true;
}

export function saveRole() {
	let result = null;
	const data: any = {
		...model.value,
	};

	if (model.value.id) {
		// edit
		const param = new RequestParams(data, { loading: saveloading });
		result = firstValueFrom(service.modify(param));
	} else {
		// add
		const param = new RequestParams(data, { loading: saveloading });
		result = firstValueFrom(service.add(param));
	}

	return result
		.then(() => {
			refreshData();
			return true;
		})
		.catch(() => false);
}

export function deleteRole(data: RoleInfo) {
	const param = new RequestParams({
		roleId: data.id,
	});
	service.delete(param).subscribe({
		next: () => {
			page.reset();
			refreshData();
		},
	});
}
