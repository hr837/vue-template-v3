import useElementUI from "./element-plus-plugin";
import useSvgIcon from "./svg-icon-plugin/index";
import { App } from "vue";
/**
 * 使用第三方插件【组件等其他】
 * @param app
 */
export default function usePlugins(app: App): void {
	useElementUI(app);
	useSvgIcon(app);
}
