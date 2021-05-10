import { RequestMethod } from "@gopowerteam/http-request";

const controller = "departmentControll";

export default {
	/**
	 * 部门列表查询
	 */
	queryDepatrment: {
		type: RequestMethod.Get,
		controller: "",
		path: "/manage/api/department/query",
	},
};
