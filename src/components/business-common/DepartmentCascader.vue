<template>
	<el-cascader
		v-model="tmpValue"
		:options="treeData"
		:props="setting"
		placeholder="请选择部门"
		clearable
		:disabled="disabled"
		@change="onChange"
		@visible-change="onVisableChange"
	></el-cascader>
</template>

<script lang="ts" setup>
import { ref, computed, defineProps, defineEmit, watch } from "vue";
import { getStore } from "@/store";
import type { DepartmentInfo } from "@/types/department.interface";

const props = defineProps({
	disabled: {
		type: Boolean,
	},
	modelValue: {
		type: String,
		required: true,
	},
});

const emiter = defineEmit(["update:modelValue", "select-change"]);

const tmpValue = ref("");

watch(
	() => props.modelValue,
	(val) => (tmpValue.value = val),
	{ immediate: true }
);

const store = getStore();
const setting = {
	emitPath: false,
	value: "id",
	label: "name",
	checkStrictly: true,
};
const treeData = store.getters["department/departmentTreeData"];

const getDepartmentInfo: (id: string) => DepartmentInfo =
	store.getters["department/queryDepartmentInfo"];

function onChange(value: string) {
	tmpValue.value = value;
}

function onVisableChange(visabled: boolean) {
	if (visabled) return;
	emiter("update:modelValue", tmpValue.value);
	emiter("select-change", getDepartmentInfo(tmpValue.value));
}
</script>
