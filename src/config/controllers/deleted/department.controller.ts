import { RequestMethod } from "@gopowerteam/http-request";

const controller = "department-controller";

export default {
	/**
	 * 部门列表查询
	 */
	queryDepatrment: {
		type: RequestMethod.Get,
		controller,
		path: "/manage/api/department/findAllDepartment",
	},
	/**
	 * 添加部门
	 */
	addDepartemnt: {
		type: RequestMethod.Post,
		controller,
		path: "/manage/api/department/addDepartment",
	},
	/**
	 * 删除部门
	 */
	deleteDepartment: {
		type: RequestMethod.Delete,
		controller,
		path: "/manage/api/department/deleteDepartment",
	},
	/**
	 * 修改部门
	 */
	modifyDepartment: {
		type: RequestMethod.Put,
		controller,
		path: "/manage/api/department/modifyDepartment",
	},
};
