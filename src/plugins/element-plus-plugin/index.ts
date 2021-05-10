import ElementPlus from "element-plus";
import locale from "element-plus/lib/locale/lang/zh-cn";
import "./element-variables.scss";
import { App } from "vue";
export default function useElementUI(app: App): void {
	app.use(ElementPlus, { size: "small", locale });
}
