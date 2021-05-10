import { ExtendService, RequestParams } from "@gopowerteam/http-request";
import { AxiosResponse } from "axios";

const tokenKey = "Authorization";

export class TokenService extends ExtendService {
	public before = (params: RequestParams) => {
		const token = window.localStorage.getItem("token");
		const header = params.options.header || {};
		if (token) {
			header[tokenKey] = "Bearer " + token;
		} else {
			delete header[tokenKey];
		}
		params.options.header = header;
	};

	public after = (response: AxiosResponse, _requestParams: any) => {
		if (response.status === 401) {
			window.localStorage.removeItem("token");
			window.location.href = "/";
		}
	};
}
