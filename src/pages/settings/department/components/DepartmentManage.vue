<template>
	<div class="department-manage">
		<DepartmentTree
			:select-key="departmentId"
			@current-change="onCurrentChange"
			@add="addDepartment"
			@edit="editDepartment"
			@delete="onDelete"
		/>
		<DepartmentModify />
	</div>
</template>

<script lang="ts" setup>
import { defineEmit, onMounted } from "vue";
import DepartmentTree from "@/components/business-common/DepartmentTree.vue";
import DepartmentModify from "./DepartmentModify.vue";
import type { DepartmentInfo } from "@/types/department.interface";
import {
	currentDepartment,
	addDepartment,
	editDepartment,
	departmentId,
	refreshData,
	deleteDepartment,
} from "../composables/department";
import { ElMessageBox } from "element-plus";

const emiter = defineEmit(["departemnt-change"]);

// 第一次打开先加载一次，预防别的管理员操作
onMounted(refreshData);

function onCurrentChange(data: DepartmentInfo) {
	currentDepartment.value = data;
	emiter("departemnt-change");
}

function onDelete(data: DepartmentInfo) {
	ElMessageBox({
		type: "warning",
		message: `确定要删除部门【${data.name}】吗?`,
		title: "删除提示",
		showCancelButton: true,
	})
		.then(() => deleteDepartment(data))
		.catch();
}
</script>
