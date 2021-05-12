<template>
	<div class="component department-tree">
		<el-tree
			ref="tree"
			default-expand-all
			:data="treeData"
			:props="{ label: 'name' }"
			node-key="id"
			:indent="10"
			highlight-current
			:expand-on-click-node="false"
			@current-change="onCurrentChange"
		>
			<template #default="{ data }">
				<div
					class="customer-node flex-span-1 flex-row no-warp justify-content-between align-items-center"
				>
					<span class="label">{{ data.name }}</span>
					<div v-if="showEdit && selectKey === data.id" class="actions">
						<el-button
							type="text"
							icon="el-icon-plus"
							title="添加部门"
							@click="onAdd(data)"
						></el-button>
						<el-button
							type="text"
							icon="el-icon-edit"
							title="修改部门"
							@click="onEdit(data)"
						></el-button>
						<el-button
							type="text"
							icon="el-icon-delete"
							title="删除部门"
							@click="onDelete(data)"
						></el-button>
					</div>
				</div>
			</template>
		</el-tree>
	</div>
</template>

<script lang="ts" setup>
import { computed, defineEmit, defineProps, ref, nextTick, watch } from "vue";

const tree = ref();
const props = defineProps({
	edit: {
		type: Boolean,
	},
	selectKey: {
		type: String,
	},
	treeData: {
		type: Array,
		required: true,
	},
});

const showEdit = computed(() => props.edit !== undefined || props.edit);
const emiter = defineEmit(["current-change", "add", "edit", "delete"]);

function onCurrentChange(data: any) {
	// 节点每次点击都会触发，所以要做判断
	if (data.id !== props.selectKey) {
		emiter("current-change", data);
	}
}
const onAdd = (data: any) => emiter("add", data);
const onEdit = (data: any) => emiter("edit", data);
const onDelete = (data: any) => emiter("delete", data);

watch(
	computed(() => props.treeData),
	(value: any[]) => {
		if (!value.length) return;
		nextTick(() => {
			if (props.selectKey) {
				tree.value.setCurrentKey(props.selectKey);
			} else {
				const el = tree.value.$el.querySelector(".el-tree-node__content");
				if (el) el.click();
			}
		});
	},
	{ immediate: true }
);
</script>

<style lang="less" scoped>
.department-tree {
	.actions {
		.el-button--text {
			padding: 0;
		}
	}
}
</style>
