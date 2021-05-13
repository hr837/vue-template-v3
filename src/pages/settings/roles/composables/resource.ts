import { LoadingService } from "@/bootstrap/services/loading.service";
import { ResourceService } from "@/services/manage-service/resource.service";
import { ResourceInfo } from "@/types/resource.interface";
import { RoleInfo } from "@/types/role.interface";
import { RequestParams } from "@gopowerteam/http-request";
import { ref } from "vue";

export const menuResource = ref<ResourceInfo[]>([]);
export const controlResource = ref<ResourceInfo[]>();
export const dialog = ref(false);
export const loading = new LoadingService();

const service = new ResourceService();
export function refreshData() {
	console.log("rrr");
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
	dialog.value = true;
}
