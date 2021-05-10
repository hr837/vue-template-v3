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
}
