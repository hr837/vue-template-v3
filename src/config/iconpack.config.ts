import { App } from "vue";
import { IconPark, install } from "@icon-park/vue-next/es/all";
import "@icon-park/vue-next/styles/index.css";

/**
 * 安装icon-park,全局模式
 * @param vueApp App实例
 * @example
 * <icon-park type="AddText" />
 * <icon-park type="add-text" theme="filled"/>
 * @link Doc https://github.com/bytedance/IconPark/tree/master/packages/vue-next
 */
export function installIconPark(vueApp: App) {
  install(vueApp);
  vueApp.component("icon-park", IconPark);
}
