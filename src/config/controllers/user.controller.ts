import { RequestMethod } from "@gopowerteam/http-request";

const controller = "user-controller";

export default {
	/**
	 * 用户登录
	 */
	login: {
		type: RequestMethod.Post,
		controller,
		path: "/manage/api/user/login",
	},
	/**
	 * 查询部门下的用户
	 */
	findUserByDepartmentId: {
		type: RequestMethod.Get,
		controller,
		path: "/manage/api/user/findUserByDepartment",
	},
	/**
	 * 查询部门下的用户
	 */
	findUserByDepartmentCode: {
		type: RequestMethod.Get,
		controller,
		path: "/manage/api/user/findUserByDepartmentCode",
	},
	/**
	 * 添加用户
	 */
	addUser: {
		type: RequestMethod.Post,
		controller,
		path: "/manage/api/user/addUser",
	},
	/**
	 * 编辑用户
	 */
	modifyUser: {
		type: RequestMethod.Put,
		controller,
		path: "/manage/api/user/modifyUser",
	},
	/**
	 * 重置密码
	 */
	resetPassword: {
		type: RequestMethod.Put,
		controller,
		path: "/manage/api/user/resetPassword",
	},
};
