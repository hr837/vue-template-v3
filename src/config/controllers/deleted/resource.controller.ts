import { RequestMethod } from "@gopowerteam/http-request";

const controller = "resource-controller";

export default {
	/**
	 * 获取全部菜单
	 */
	findAllResource: {
		type: RequestMethod.Get,
		controller,
		path: "/manage/api/resource/findAllResource",
	},
	/**
	 * 添加菜单
	 */
	add: {
		type: RequestMethod.Post,
		controller,
		path: "/manage​/api​/resource​/add",
	},
	/**
	 * 删除菜单
	 */
	delete: {
		type: RequestMethod.Delete,
		controller,
		path: "/manage/api/resource/delete",
	},
	/**
	 * 编辑菜单
	 */
	edit: {
		type: RequestMethod.Post,
		controller,
		path: "/manage/api/resource/edit",
	},
};
