import { App } from "vue";
import DataForm from "@/components/common/DataForm.vue";

/**
 * 注册系统公共组件
 * @param app
 */
export default function useCommonComponents(app: App): void {
	app.component("DataForm", DataForm);
}
