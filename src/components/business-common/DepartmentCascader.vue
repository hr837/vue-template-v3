<template>
	<el-cascader
		ref="cascader"
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
import { ref, computed, defineProps, defineEmit, watch, onMounted } from "vue";
import { getStore } from "@/store";
import type { DepartmentInfo } from "@/types/department.interface";
import { CommonService } from "@/utils/common.service";

const props = defineProps({
	disabled: {
		type: Boolean,
	},
	modelValue: {
		type: String,
		required: true,
	},
});

const store = getStore();
const departmentList = store.state.department.departmentList;
const treeData = ref<any[]>([]);

const tmpValue = ref("");
const cascader = ref();

onMounted(() => {
	treeData.value = CommonService.generateTreeData(departmentList, {
		keyName: "id",
		parentKeyName: "parentId",
	});
});

watch(
	() => props.modelValue,
	(val) => (tmpValue.value = val),
	{ immediate: true }
);

const setting = {
	emitPath: false,
	value: "id",
	label: "name",
	checkStrictly: true,
};

const getDepartmentInfo: (id: string) => DepartmentInfo =
	store.getters["department/queryDepartmentInfo"];

function onChange(value: string) {
	tmpValue.value = value;
}

const emiter = defineEmit(["update:modelValue", "select-change"]);

function onVisableChange(visabled: boolean) {
	if (visabled) return;
	emiter("update:modelValue", tmpValue.value);
	emiter("select-change", getDepartmentInfo(tmpValue.value));
}
</script>
