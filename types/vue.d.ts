import { FilterService } from "@/utils/filter.service";

declare module "@vue/runtime-core" {
	interface ComponentCustomProperties {
		$filter: FilterService;
	}
}
