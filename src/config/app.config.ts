export const appConfig: AppConfig = {
  title: process.env.VUE_APP_TITLE,
  http: {
    gateway: process.env.VUE_APP_HTTP_GETWAY,
    timeout: 3000,
  },
}

export interface AppConfig {
  /** 应用名称 */
  title: string
  http: {
    /**
     * 网关地址配置
     */
    gateway: string
    /**
     * 超时时间配置(毫秒)
     */
    timeout?: number
  }
}
