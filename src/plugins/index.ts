import useElementUI from "./element-plus.plugin";
import useSvgIcon from "./svg-icon-plugin/index";
import { App } from "vue";
export default function usePlugins(app: App): void {
	useElementUI(app);
	useSvgIcon(app);
}
