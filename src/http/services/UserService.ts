import type { UserModel } from "../models/user.model";
import { RequestService, type RequestPlugin } from "@gopowerteam/request";

export class UserService {
	// 请求实例
	private request = RequestService.getInstance();

	/**
	 * 创建管理员
	 */
	public findUser(
		requestBody: QueryUserInput,
		requestPlugins: RequestPlugin[] = []
	): Promise<UserModel[]> {
		// 请求数据
		const result = this.request.send(
			{
				path: "/api/management/user",
				method: "get",
				paramsBody: requestBody,
			},
			requestPlugins
		);

		return result;
	}
}

export type QueryUserInput = Pick<UserModel, "username" | "createdAt">;
