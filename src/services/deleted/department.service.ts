import { Request, RequestParams } from "@gopowerteam/http-request";
import DepartmentController from "@/config/controllers/deleted/department.controller";

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
		force: true,
	})
	public query(requestParam: RequestParams) {
		return requestParam.request();
	}

	/**
	 * 添加部门
	 * @param requestParam
	 * @returns
	 */
	@Request({
		server: DepartmentController.addDepartemnt,
	})
	public add(requestParam: RequestParams) {
		return requestParam.request();
	}

	/**
	 * 删除部门
	 * @param requestParam
	 * @returns
	 */
	@Request({
		server: DepartmentController.deleteDepartment,
	})
	public delete(requestParam: RequestParams) {
		return requestParam.request();
	}

	/**
	 * 修改部门
	 * @param requestParam
	 * @returns
	 */
	@Request({
		server: DepartmentController.modifyDepartment,
	})
	public modify(requestParam: RequestParams) {
		return requestParam.request();
	}
}
