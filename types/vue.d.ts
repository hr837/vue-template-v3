import { DictService } from "@/utils/dict.service";
import { FilterService } from "@/utils/filter.service";

declare module "@vue/runtime-core" {
	interface ComponentCustomProperties {
		$filter: FilterService;
		$dic: DictService;
	}
}
