import { LoadingService } from "@/bootstrap/services/loading.service";
import { ResourceService } from "@/services/manage-service/resource.service";
import { RoleService } from "@/services/manage-service/role.service";
import { ResourceInfo } from "@/types/resource.interface";
import { RoleInfo } from "@/types/role.interface";
import { RequestParams } from "@gopowerteam/http-request";
import { ref } from "vue";

export const menuResource = ref<ResourceInfo[]>([]);
export const controlResource = ref<ResourceInfo[]>([]);
export const dialog = ref(false);
export const loading = new LoadingService();

export const pickedMemuIds = ref<number[]>([]);
export const pickedControlIds = ref<number[]>([]);

const service = new ResourceService();
const roleService = new RoleService();

export function refreshData() {
	const param = new RequestParams({}, { loading });
	service.findAllResource(param).subscribe({
		next: (data: ResourceInfo[]) => {
			menuResource.value = data.filter(
				(x) => x.type === "DIRECTORY" || x.type === "MENU"
			);
			controlResource.value = data.filter((x) => x.type === "CONTROL");
		},
	});
}

// 角色相关
export const roleId = ref("");
export function pickResource(role: RoleInfo) {
	roleId.value = role.id;
	roleService
		.findAllResource(new RequestParams({ roleId: role.id }))
		.subscribe({
			next: (data) => (pickedMemuIds.value = data),
		});
	roleService
		.findAllControls(new RequestParams({ roleId: role.id }))
		.subscribe({
			next: (data) => (pickedControlIds.value = data),
		});
	dialog.value = true;
}

export function saveRoleResource() {
	const params = new RequestParams(
		{
			roleIds: [roleId.value],
			resources: [...pickedControlIds.value, ...pickedMemuIds.value],
		},
		{ loading }
	);
	return roleService.distributePermission(params);
}
