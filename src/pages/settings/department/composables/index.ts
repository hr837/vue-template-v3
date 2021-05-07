import { ref, reactive } from "vue";
import Mockjs from "mockjs";
import { RequestParams } from "@gopowerteam/http-request";

type departmentType = {
	name: string;
};

export const dataSet = ref([]);
export const loadingStatus = ref(false);
export const selectionRows = ref([]);

// 网络请求参数
// const requestPram = new RequestParams();

/**
 * 刷新数据
 */
export function refreshData(queryData?: any) {
	if (queryData) {
		// requestPram.data = queryData;
	}
	// todo

	loadingStatus.value = true;
	const random = Mockjs.Random;
	setTimeout(() => {
		dataSet.value = Mockjs.mock({
			"data|20": [
				{
					"name|1": "@ctitle",
					"business|1": "@CNAME",
					"amount|500-8000.2": 1,
					"account|20-1000": 1,
				},
			],
		}).data;
		loadingStatus.value = false;
	}, random.natural(400, 800));
}
