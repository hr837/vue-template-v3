import useElementUI from "./element-plus-plugin";
import useSvgIcon from "./svg-icon-plugin/index";
import useCommonComponents from "./common-components";
import { App } from "vue";
/**
 * 使用第三方插件【组件等其他】
 * @param app
 */
export default function usePlugins(app: App): void {
	useElementUI(app);
	useSvgIcon(app);
	useCommonComponents(app);
}
