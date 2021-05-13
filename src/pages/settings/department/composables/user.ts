import { LoadingService } from "@/bootstrap/services/loading.service";
import { PageService } from "@/bootstrap/services/page.service";
import { UserService } from "@/services/manage-service/user.service";
import { RequestParams } from "@gopowerteam/http-request";
import type { UserInfo } from "@/types/user.interface";
import { firstValueFrom } from "rxjs";
import { ref } from "vue";
import { departmentCode, departmentId, editId } from "./department";

export const dataSet = ref([]);
export const selectionRows = ref([]);

export const model = ref<UserInfo>({
	realName: "",
	username: "",
	departId: "",
	status: "",
	phone: "",
	email: "",
	isManage: "",
	userId: "",
});

export const dialogShow = ref(false);

/**
 * 修改用户
 * @param data
 */
export function onEdit(data: any) {
	model.value.departId = data.departId;
	model.value.username = data.username;
	model.value.realName = data.realName;
	model.value.status = data.status;
	model.value.phone = data.phone;
	model.value.email = data.email;
	model.value.isManage = data.isManage;
	model.value.userId = data.userId;
	dialogShow.value = true;
}

/**
 * 新增用户
 * @param departmentId
 */
export function onAdd() {
	model.value.departId = departmentId.value || "";
	model.value.userId = "";
	dialogShow.value = true;
}

const service = new UserService();
export const page = new PageService();
export const loading = new LoadingService();

/**
 * 查询用户
 * @param query
 */
export function refreshData(query?: any) {
	let param = {
		departCode: departmentCode.value,
	};
	if (query) {
		param = { ...param, ...query };
	}

	const requestParam = new RequestParams(param, { page, loading });

	service.queryUserByDeptCode(requestParam).subscribe({
		next: (list) => (dataSet.value = list),
	});
}

export function saveUser() {
	let result = null;

	if (model.value.userId) {
		const param = new RequestParams(model.value);
		result = firstValueFrom(service.modify(param));
	} else {
		const param = new RequestParams(model.value);
		result = firstValueFrom(service.add(param));
	}

	return result
		.then(() => {
			refreshData();
			return true;
		})
		.catch(() => false);
}

export function resetPwd(row: UserInfo) {
	const param = new RequestParams({ userIds: [row.userId] });
	return firstValueFrom(service.resetPassword(param))
		.then(() => {
			refreshData();
			return true;
		})
		.catch(() => false);
}
