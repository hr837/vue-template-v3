import { ref, reactive } from "vue";
import { RequestParams } from "@gopowerteam/http-request";
import { PageService } from "@/bootstrap/services/page.service";
import { DepartmentService } from "@/services/department.service";
import { LoadingService } from "@/bootstrap/services/loading.service";
import { firstValueFrom, lastValueFrom } from "rxjs";

type departmentType = {
	name: string;
};

export const dataSet = ref([]);
export const selectionRows = ref([]);
export const page = new PageService();
export const loading = new LoadingService();

// 网络请求参数
const requestPram = new RequestParams({}, { page, loading });
const service = new DepartmentService();

/**
 * 刷新数据
 */
export function refreshData(queryData?: any) {
	if (queryData) {
		requestPram.data = queryData;
	}

	service.query(requestPram).subscribe((data) => {
		console.log(data);

		dataSet.value = data;
	});

	// const random = Mockjs.Random;
	// loadingStatus.value = true;
	// setTimeout(() => {
	// 	dataSet.value = Mockjs.mock({
	// 		"data|20": [
	// 			{
	// 				"name|1": "@ctitle",
	// 				"business|1": "@CNAME",
	// 				"amount|500-8000.2": 1,
	// 				"account|20-1000": 1,
	// 			},
	// 		],
	// 	}).data;
	// 	loadingStatus.value = false;
	// }, random.natural(400, 800));
}
