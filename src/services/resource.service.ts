import { Request, RequestParams } from "@gopowerteam/http-request";
import ResourceController from "@/config/controllers/resource.controller";

export class ResourceService {
	/**
	 * getAll
	 * 获取全部菜单
	 */
	@Request({
		server: ResourceController.findAllResource,
	})
	public getAll(requestParam: RequestParams) {
		return requestParam.request();
	}

	/**
	 * 添加菜单
	 */
	@Request({
		server: ResourceController.add,
	})
	public add(requestParam: RequestParams) {
		return requestParam.request();
	}

	/**
	 * 删除菜单
	 */
	@Request({
		server: ResourceController.delete,
	})
	public delete(requestParam: RequestParams) {
		return requestParam.request();
	}

	/**
	 * 修改菜单
	 */
	@Request({
		server: ResourceController.edit,
	})
	public edit(requestParam: RequestParams) {
		return requestParam.request();
	}
}
