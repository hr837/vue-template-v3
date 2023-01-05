export const appConfig: AppConfig = {
	title: "商城后台管理",
	http: {
		gateway: process.env.VUE_APP_HTTP_GETWAY,
		timeout: 3000,
	},
};

export type AppConfig = {
	/** 应用名称 */
	title: string;
	http: {
		/**
		 * 网关地址配置
		 */
		gateway: string;
		/**
		 * 超时时间配置(毫秒)
		 */
		timeout?: number;
	};
};
