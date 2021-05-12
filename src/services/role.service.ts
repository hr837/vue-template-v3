import { Request, RequestParams } from "@gopowerteam/http-request";
import RoleController from "@/config/controllers/role.controller";

/**
 * 角色管理
 */
export class RoleService {
	/**
	 * 查询角色
	 * @param requestParam
	 * @returns
	 */
	@Request({
		server: RoleController.findAllRole,
		force: true,
	})
	public query(requestParam: RequestParams) {
		return requestParam.request();
	}

	/**
	 * 添加角色
	 * @param requestParam
	 * @returns
	 */
	@Request({
		server: RoleController.addRole,
	})
	public add(requestParam: RequestParams) {
		return requestParam.request();
	}

	/**
	 * 删除角色
	 * @param requestParam
	 * @returns
	 */
	@Request({
		server: RoleController.deleteRole,
	})
	public delete(requestParam: RequestParams) {
		return requestParam.request();
	}

	/**
	 * 修改角色
	 * @param requestParam
	 * @returns
	 */
	@Request({
		server: RoleController.modifyRole,
	})
	public modify(requestParam: RequestParams) {
		return requestParam.request();
	}
}
