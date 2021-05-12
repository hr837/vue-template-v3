import { RequestMethod } from "@gopowerteam/http-request";

const controller = "role-controller";

export default {
	/**
	 * 查询角色
	 */
	findAllRole: {
		type: RequestMethod.Get,
		controller,
		path: "/manage/api/role/getAllRoles/",
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
};
