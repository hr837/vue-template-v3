import { RequestMethod } from "@gopowerteam/http-request";

const controller = "role-controller";

export default {
	/**
	 * 获取全部角色
	 */
	getAll: {
		type: RequestMethod.Get,
		controller,
		path: "/manage/api/role/getAllRoles",
	},
	/**
	 * 查询角色
	 */
	findRoles: {
		type: RequestMethod.Get,
		controller,
		path: "/manage/api/role/findRoles",
	},
	/**
	 * 添加角色
	 */
	addRole: {
		type: RequestMethod.Post,
		controller,
		path: "/manage/api/role/addRole",
	},
	/**
	 * 删除角色
	 */
	deleteRole: {
		type: RequestMethod.Delete,
		controller,
		path: "/manage/api/role/deleteRole",
	},
	/**
	 * 修改角色
	 */
	modifyRole: {
		type: RequestMethod.Put,
		controller,
		path: "/manage/api/role/modifyRole",
	},
	/**
	 * 复制角色
	 */
	copyRole: {
		type: RequestMethod.Get,
		controller,
		path: "/manage/api/role/modifyRole",
	},
	/**
	 * 给用户分配角色
	 */
	distrbuteRole: {
		type: RequestMethod.Post,
		controller,
		path: "/manage/api/role/distributeRole",
	},
};
