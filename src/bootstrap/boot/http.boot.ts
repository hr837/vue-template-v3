import { RequestService } from "@gopowerteam/http-request";
import appConfig from "@/config/app.config";
import { TokenService } from "../services/token.service";
import { ElNotification } from "element-plus";

const messageMap = new Map([
	[400, "请求参数错误"],
	[405, "请求服务方法错误"],
	[500, "服务器内部错误"],
	[403, "没有权限，请重新登陆"],
	[401, "登录过期，请重新登录"],
]);

export default function () {
	/**
	 * 错误通知标识
	 */
	let errorNotifyFlag = false;

	// 配置服务端信息
	RequestService.setConfig({
		server: appConfig.server.url,
		timeout: appConfig.server.timeOut,
	});

	// 添加状态拦截器
	RequestService.interceptors.status.use((response) => {
		return true;
	});

	// 添加成功拦截器
	RequestService.interceptors.success.use((respone) => {
		// 通讯成功的时候。通讯错误的弹出标识要重置
		if (errorNotifyFlag) {
			errorNotifyFlag = false;
		}
		return respone.data;
	});

	// 添加失败拦截器
	RequestService.interceptors.error.use((respone) => {
		return respone;
	});

	// 网络异常处理
	RequestService.requestCatchHandle = (respone) => {
		const defaultError = "服务通讯连接失败";

		if (respone) {
			const responseMessage = (respone.data || {}).message;
			const errorMessage =
				responseMessage || messageMap.get(respone.status) || defaultError;
			if (respone.status === 403) {
				console.error(respone.data);
			}

			ElNotification({
				type: "error",
				message: errorMessage,
				title: "服务请求错误",
			});
		} else {
			ElNotification({
				type: "error",
				message: defaultError,
				title: "网络连接异常",
			});
		}
	};

	RequestService.installExtendService(new TokenService());
}
