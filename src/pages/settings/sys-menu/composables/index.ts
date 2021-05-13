import { LoadingService } from "@/bootstrap/services/loading.service";
import { ResourceService } from "@/services/resource.service";
import { ResourceInfo } from "@/types/resource.interface";
import { CommonService } from "@/utils/common.service";
import { RequestParams } from "@gopowerteam/http-request";
import { reactive, ref } from "vue";

export const dataSet = ref<ResourceInfo[]>([]);
export const tableTree = ref<any[]>([]);

export const dialog = ref(false);

const service = new ResourceService();
export const loading = new LoadingService();

export function refreshData() {
	tableTree.value = [];
	const params = new RequestParams({}, { loading });
	service.getAll(params).subscribe({
		next: (data) => {
			dataSet.value = data;
			const menuSource = data.filter((x) => x.type !== "CONTROL");
			tableTree.value = CommonService.generateTreeData(menuSource, {
				keyName: "id",
				parentKeyName: "parent",
				sortKey: "sort",
			});
		},
	});
}

export function addMenu() {
	model.id = "";
	model.directory = "";
	model.menu = "";
	dialog.value = true;
}

export function editMenu(data: ResourceInfo) {
	CommonService.revertData(model, data);
	model.directory = "";
	model.menu = "";
	dialog.value = true;
}

export const model = reactive({
	directory: "",
	menu: "",
	name: "",
	icon: "",
	path: "",
	type: "",
	parentId: "",
	id: "",
});
