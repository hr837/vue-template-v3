import { ExtendService, RequestParams } from "@gopowerteam/http-request";
import { AxiosResponse } from "axios";

// header token key
// const tokenKey = 'X-Access-Token'
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
		// if (response.status === 200 && response.data.code === 403) {
		//   // Taro.showToast({ title: '用户身份过期,将重新登录', icon: 'none' })
		//   // setTimeout(() => {
		//   //   Taro.redirectTo({
		//   //     url: '/pages/login/index'
		//   //   })
		//   // }, 1000)
		// }
	};
}
