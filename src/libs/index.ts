import { DictService } from "@/utils/dict.service";
import { FilterService } from "@/utils/filter.service";
import { App } from "vue";

export function installFilter(app: App) {
	app.config.globalProperties.$filter = new FilterService();
}

export function installDict(app: App) {
	app.config.globalProperties.$dict = new DictService();
}

/**
 * 使用lib
 * @param app
 */
function useLibs(app: App) {
	installFilter(app);
	installDict(app);
}

export default useLibs;
