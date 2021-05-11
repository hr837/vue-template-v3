import { Request, RequestParams } from "@gopowerteam/http-request";
import UserController from "@/config/controllers/user.controller";

/**
 * 用户服务
 */
export class UserService {
	/**
	 * 登录
	 * @param requestParam
	 * @returns
	 */
	@Request({
		server: UserController.login,
	})
	public login(requestParam: RequestParams) {
		return requestParam.request();
	}

	/**
	 * 查询用户
	 * @param requestParam
	 * @param type DepartmentId:根据部门ID查询，DepartmentCode:根据部门code查询
	 * @returns
	 */
	@Request({
		server: UserController.queryUser,
	})
	public query(
		requestParam: RequestParams,
		type: "DepartmentId" | "DepartmentCode"
	) {
		const apiSetting = {
			DepartmentId: "findUserByDepartment",
			DepartmentCode: "findUserByDepartmentCode",
		};
		const append = apiSetting[type];
		requestParam.options.append = { type: append };
		return requestParam.request();
	}
}
