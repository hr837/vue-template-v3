import { App } from "vue";
import DataForm from "@/components/common/DataForm.vue";
import DataBox from "@/components/common/DataBox.vue";
import DataBoxAction from "@/components/common/DataBoxAction.vue";
import Pagination from "@/components/common/Pagination.vue";
import DialogAction from "@/components/common/DialogAction.vue";

/**
 * 注册系统公共组件
 * @param app
 */
export default function useCommonComponents(app: App): void {
	app.component("DataForm", DataForm);
	app.component("DataBox", DataBox);
	app.component("DataBoxAction", DataBoxAction);
	app.component("Pagination", Pagination);
	app.component("DialogAction", DialogAction);
}
