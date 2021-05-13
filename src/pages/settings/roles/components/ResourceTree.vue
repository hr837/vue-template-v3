<template>
	<div class="resource-tree">
		<ContainerHeader title="菜单资源"></ContainerHeader>
		<el-tree
			ref="tree"
			default-expand-all
			:data="treeData"
			show-checkbox
			:props="{ label: 'name' }"
			node-key="id"
			:indent="13"
			class="tree"
			highlight-current
			:expand-on-click-node="false"
			@current-change="onCurrentChange"
			@check="onCheck"
		></el-tree>
	</div>
</template>

<script lang="ts" setup>
import { CommonService } from "@/utils/common.service";
import { defineEmit, defineProps, ref, watch, nextTick } from "vue";
import { menuResource, pickedMemuIds } from "../composables/resource";
import type { ResourceInfo } from "@/types/resource.interface";

const props = defineProps({
	modelValue: {
		type: Number,
		required: true,
	},
});

const emitter = defineEmit(["update:modelValue", "checked-change"]);

const treeData = ref<any[]>([]);
const tree = ref();

watch(
	menuResource,
	(val) => {
		if (!val.length) {
			treeData.value = [];
			return;
		}

		const tmpTreeData = CommonService.generateTreeData(val, {
			keyName: "id",
			parentKeyName: "parent",
			sortKey: "sort",
		});
		tmpTreeData.forEach((x) => (x.parent = -1));
		treeData.value = [
			{
				id: -1,
				parent: null,
				name: "贷后催收管理系统",
				type: "ROOT",
				children: tmpTreeData,
			},
		];
	},
	{ immediate: true }
);

// 当前高亮的节点变化
function onCurrentChange(data: ResourceInfo) {
	if (props.modelValue === data.id) return;
	emitter("update:modelValue", data.id);
}

// 节点勾选发成变化的时候
function onCheck() {
	if (!tree.value) return;
	const nodes: ResourceInfo[] = tree.value
		.getCheckedNodes(true)
		.filter((x) => x.type === "MENU");
	// 发送出去让父组件处理控件选择
	emitter(
		"checked-change",
		nodes.map((x) => x.id)
	);
}

watch(
	pickedMemuIds,
	(value) => {
		nextTick(() => {
			if (!tree.value) return;
			tree.value.setCheckedKeys(value);
		});
	},
	{ immediate: true, deep: true }
);
</script>

<style lang="less" scoped>
.resource-tree {
	.tree {
		width: 300px;
		min-height: 500px;
		max-height: 500px;
		overflow-y: auto;
	}
}
</style>
