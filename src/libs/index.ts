import { FilterService } from "@/utils/filter.service";
import { App } from "vue";

export function installFilter(app: App) {
	app.config.globalProperties.$filter = new FilterService();
}

/**
 * 使用lib
 * @param app
 */
function useLibs(app: App) {
	installFilter(app);
}

export default useLibs;
