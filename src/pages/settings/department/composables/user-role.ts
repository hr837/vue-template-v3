import { LoadingService } from "@/bootstrap/services/loading.service";
import { RoleService } from "@/services/manage-service/role.service";
import { RoleInfo } from "@/types/role.interface";
import { RequestParams } from "@gopowerteam/http-request";

import { ref } from "vue";

export const dialog = ref(false);
export const roleId = ref("");
export const userIds = ref<string[]>([]);
export const dataSet = ref<RoleInfo[]>([]);

export function setRole(_roleId: string, _userIds: string[]) {
	roleId.value = _roleId;
	userIds.value = _userIds;
	dialog.value = true;
}

const service = new RoleService();

export function refreshData() {
	service.getAll(new RequestParams()).subscribe({
		next: (data) => (dataSet.value = data),
	});
}

export const loading = new LoadingService();
export function save(_roleId: string) {
	return service.distrbuteRole(
		new RequestParams(
			{
				roleId: _roleId,
				userIds: userIds.value,
			},
			{ loading }
		)
	);
}
