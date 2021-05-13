import { ExtendService, RequestParams } from "@gopowerteam/http-request";
import { AxiosResponse } from "axios";

const tokenKey = "Authorization";

export class TokenService extends ExtendService {
	public before = (params: RequestParams) => {
		const token = window.localStorage.getItem("token");
		const options = params.getOptions();
		const header = options.header || {};
		if (token) {
			header[tokenKey] = token;
		} else {
			delete header[tokenKey];
		}
		params.setOptions({
			...options,
			header,
		});
	};

	public after = (response: AxiosResponse, _requestParams: any) => {
		if (response.status === 401) {
			window.localStorage.removeItem("token");
			window.location.href = "/";
		}
	};
}
