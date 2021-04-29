import useElementUI from "./element-plus.plugin";
import useSvgIcon from "./svg-icon-plugin/index";
import { App } from "vue";
export default function usePlugins(app: App) {
	useElementUI(app);
	useSvgIcon(app);
}
