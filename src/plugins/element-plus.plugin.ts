import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import { App } from "vue";

export default function useElementUI(app: App): void {
	app.use(ElementPlus);
}
