import type {
	AdapterResponse,
	RequestPlugin,
	RequestSendOptions,
} from "@gopowerteam/request";
import { ref, Ref } from "vue";

export class PageService implements RequestPlugin {
	pageIndex = 1;
	pageSize = 10;
	pageSizeOpts: number[] = [5, 10, 20, 30];
	pageLayouts: (
		| "PrevJump"
		| "PrevPage"
		| "JumpNumber"
		| "NextPage"
		| "NextJump"
		| "Sizes"
		| "FullJump"
		| "Total"
	)[] = [
			"PrevJump",
			"PrevPage",
			"JumpNumber",
			"NextPage",
			"NextJump",
			"Sizes",
			"FullJump",
			"Total",
		];
	total: Ref<number> = ref(100);

	/**
	 * 构造函数
	 * @param index
	 * @param size
	 */
	constructor(index = 1, size = 10) {
		this.pageIndex = index;
		this.pageSize = size;
	}

	/**
	 * 重置操作
	 */
	reset(): void {
		this.pageIndex = 1;
	}

	/**
	 * 前置操作
	 * @param options
	 */
	before(options: RequestSendOptions) {
		options.paramsQuery = {
			...options.paramsQuery,
			page: this.pageIndex - 1,
			size: this.pageSize,
		};
	}

	/**
	 * 后置操作
	 * @param response
	 */
	after(response: AdapterResponse) {
		this.total.value = response.data?.totalElements;
	}

	/**
	 * 更新PageSize
	 * @param val 
	 */
	updatePageSize(val: number) {
		this.pageSize = val;
	}

	/**
	 * 更新PageIndex
	 * @param val 
	 */
	updatePageIndex(val: number) {
		this.pageIndex = val;
	}
}
