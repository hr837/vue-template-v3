import { Request, RequestParams } from "@gopowerteam/http-request";
import UserController from "@/config/controllers/user.controller";

import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const mock = new MockAdapter(axios);
mock.onPost(UserController.login.path).reply(200, {
	token: "REASDF",
});

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
