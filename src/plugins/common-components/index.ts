import { App } from "vue";
import DataForm from "@/components/common/DataForm.vue";
import DataBox from "@/components/common/DataBox.vue";
import DataBoxActions from "@/components/common/DataBoxActions.vue";

/**
 * 注册系统公共组件
 * @param app
 */
export default function useCommonComponents(app: App): void {
	app.component("DataForm", DataForm);
	app.component("DataBox", DataBox);
	app.component("DataBoxActions", DataBoxActions);
}
