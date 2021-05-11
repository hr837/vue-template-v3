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
});

export const userId = ref("");

export const dialog = ref({
	show: false,
	name: "",
});

/**
 * 修改用户
 * @param data
 */
export function onEdit(data: any) {
	model.value.departmentId = data.deptId;
	model.value.name = data.name;
	userId.value = data.id;
	dialog.value.show = true;
	dialog.value.name = "修改用户";
}

/**
 * 新增用户
 * @param departmentId
 */
export function onAdd(departmentId: string) {
	model.value.departmentId = departmentId;
	model.value.name = "";
	userId.value = "";
	dialog.value.show = true;
	dialog.value.name = "新增用户";
}

const service = new UserService();
export const page = new PageService();
export const loading = new LoadingService();

const requestParam = new RequestParams(
	{ departCode: departmentCode },
	{ page, loading }
);

/**
 * 查询用户
 * @param query
 */
export function refreshData(query?: any) {
	if (query) {
		requestParam.data = { ...requestParam.data, ...query };
	}
	service.query(requestParam, "DepartmentCode").subscribe((data) => {
		dataSet.value = data;
	});
}
