/**
 *  系统参数合并
 *  如果是特殊参数，不允许用户自定义，则应该使用import.mate.env.VITE_APP_XXX
 */
const { appConfig: customConfig } = window;

let appConfig = {
  encryptSwitch: false,
  server: {
    url: import.meta.env.VITE_APP_SERVE,
    timeOut: 3000,
  },
};

if (customConfig && customConfig.enabled) {
  appConfig = { ...appConfig, ...customConfig };
}

export default appConfig;
