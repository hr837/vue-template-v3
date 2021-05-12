import { Request, RequestParams } from "@gopowerteam/http-request";
import DataDictController from "@/config/controllers/data-dict.controller";

export class DataDictService {
	/**
	 * getAll
	 * 获取数据字典
	 */
	@Request({
		server: DataDictController.getAll,
	})
	public getAll(requestParam: RequestParams) {
		return requestParam.request();
	}

	/**
	 * 获取字典哈希
	 */
	@Request({
		server: DataDictController.getDataDictHashCode,
	})
	public getHash(requestParam: RequestParams) {
		return requestParam.request();
	}
}
