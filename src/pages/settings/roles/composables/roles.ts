import { LoadingService } from "@/bootstrap/services/loading.service";
import { PageService } from "@/bootstrap/services/page.service";
import { RoleService } from "@/services/manage-service/role.service";
import type { RoleInfo } from "@/types/role.interface";
import { RequestParams } from "@gopowerteam/http-request";
import { ElMessage } from "element-plus";
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
		.findAllRole(
			new RequestParams(query || {}, { loading: refreshLoading, page })
		)
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

/**
 * 复制角色
 * @param roleId
 * @returns
 */
export function copyRole(roleId: string) {
	const param = new RequestParams({ roleId });
	return firstValueFrom(service.copyRole(param))
		.then(() => {
			refreshData();
			return true;
		})
		.catch(() => false);
}

export function saveRole() {
	let result: Promise<any>;
	const data: any = {
		...model.value,
	};

	if (model.value.id) {
		// edit
		const param = new RequestParams(data, { loading: saveloading });
		result = firstValueFrom(service.modifyRole(param));
	} else {
		// add
		const param = new RequestParams(data, { loading: saveloading });
		result = firstValueFrom(service.addRole(param));
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
	service.deleteRole(param).subscribe({
		next: () => {
			page.reset();
			refreshData();
		},
	});
}
