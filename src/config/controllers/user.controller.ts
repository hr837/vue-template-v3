import { RequestMethod } from "@gopowerteam/http-request";

const controller = "userControll";

export default {
	/**
	 * 用户登录
	 */
	login: {
		type: RequestMethod.Post,
		controller: "",
		path: "/management-service/lcs-management/api/loginController/login",
	},
};
