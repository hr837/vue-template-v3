<template>
	<div class="department-manage">
		<DepartmentTree @current-change="onCurrentChange" @add="onAdd" />
		<DepartmentModify />
	</div>
</template>

<script lang="ts" setup>
import { ref, defineEmit } from "vue";
import DepartmentTree from "@/components/business-common/DepartmentTree.vue";
import DepartmentModify from "./DepartmentModify.vue";
import type { DepartmentInfo } from "@/types/department.interface";
import { currentDepartment } from "../composables/department";

function onCurrentChange(data: DepartmentInfo) {
	currentDepartment.value = data;
}

function onAdd(data: DepartmentInfo) {
	currentDepartment.value = data;
}
</script>

<style lang="less" scoped></style>
