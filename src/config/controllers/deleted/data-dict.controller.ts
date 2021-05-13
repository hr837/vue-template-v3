import { RequestMethod } from "@gopowerteam/http-request";

const controller = "data-dict-controller";

export default {
	/**
	 * 获取数据字典
	 */
	getAll: {
		type: RequestMethod.Get,
		controller,
		path: "/manage/api/dataDict/getAll",
	},
	/**
	 * 获取字典哈希
	 */
	getDataDictHashCode: {
		type: RequestMethod.Get,
		controller,
		path: "/manage/api/dataDict/getDataDictHashCode",
	},
};
