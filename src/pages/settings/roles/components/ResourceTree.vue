<template>
	<el-tree
		ref="tree"
		default-expand-all
		:data="treeData"
		:props="{ label: 'name' }"
		node-key="id"
		:indent="10"
		style="width: 300px"
		highlight-current
		:expand-on-click-node="false"
		@current-change="onCurrentChange"
	></el-tree>
</template>

<script lang="ts" setup>
import { CommonService } from "@/utils/common.service";
import { defineEmit, ref, watch } from "vue";
import { menuResource, roleId } from "../composables/resource";
import type { ResourceInfo } from "@/types/resource.interface";

const treeData = ref<any[]>([]);

watch(
	menuResource,
	(val) => {
		if (!val.length) {
			treeData.value = [];
			return;
		}
		treeData.value = CommonService.generateTreeData(val, {
			keyName: "id",
			parentKeyName: "parent",
			sortKey: "sort",
		});
	},
	{ immediate: true }
);

const emitter = defineEmit(["current-change"]);
const lastKey = ref(-1);

function onCurrentChange(data: ResourceInfo) {
	if (lastKey.value === data.id) return;
	lastKey.value = data.id;
	emitter("current-change", lastKey.value);
}

watch(roleId, (value) => {
	if (!value) {
		return;
	}
});
</script>

<style lang="less" scoped></style>
