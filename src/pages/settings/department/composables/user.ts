import { LoadingService } from "@/bootstrap/services/loading.service";
import { PageService } from "@/bootstrap/services/page.service";
import { UserService } from "@/services/user.service";
import { RequestParams } from "@gopowerteam/http-request";
import { ref } from "vue";
import { departmentCode, departmentId } from "./department";

export const dataSet = ref([]);
export const selectionRows = ref([]);

export const model = ref({
	name: "",
	departmentId: "",
	status: "NO",
	phone: "",
	email: "",
});

export const userId = ref("");

export const dialogShow = ref(false);

/**
 * 修改用户
 * @param data
 */
export function onEdit(data: any) {
	model.value.departmentId = data.deptId;
	model.value.name = data.name;
	userId.value = data.id;
	dialogShow.value = true;
}

/**
 * 新增用户
 * @param departmentId
 */
export function onAdd() {
	model.value.departmentId = departmentId.value || "";
	model.value.name = "";
	userId.value = "";
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
	return Promise.resolve(true);
}
