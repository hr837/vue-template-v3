import { Request, RequestParams } from "@gopowerteam/http-request";
import DepartmentController from "@/config/controllers/department.controller";

/**
 * 部门管理
 */
export class DepartmentService {
	/**
	 * 查询列表
	 * @param requestParam
	 * @returns
	 */
	@Request({
		server: DepartmentController.queryDepatrment,
	})
	public query(requestParam: RequestParams) {
		return requestParam.request();
	}
}
