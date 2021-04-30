import ElementPlus from "element-plus";
import "./element-variables.scss";
import { App } from "vue";

export default function useElementUI(app: App): void {
	app.use(ElementPlus);
}
