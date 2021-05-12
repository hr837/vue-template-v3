import { reactive, ref } from "vue";

export const dataSet = ref([]);
export const dialog = ref(false);

export function refreshData() {
	//
}

export function addMenu() {
	dialog.value = true;
}

export function editMenu(data: any) {
	//
}

export const model = reactive({
	name: "",
	icon: "",
	path: "",
	type: "",
	parentId: "",
	id: "",
});
