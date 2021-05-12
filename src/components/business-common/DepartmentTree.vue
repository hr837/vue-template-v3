<template>
	<div class="component department-tree">
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
		>
			<template #default="{ node, data }">
				<div
					class="customer-node flex-auto flex-row no-warp justify-content-between align-items-center"
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
							v-if="node.level !== 1"
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
import {
	computed,
	defineEmit,
	defineProps,
	ref,
	nextTick,
	watch,
	onMounted,
} from "vue";
import { getStore } from "@/store";
import { CommonService } from "@/utils/common.service";

const tree = ref();
const props = defineProps({
	edit: {
		type: Boolean,
	},
	selectKey: {
		type: String,
	},
});

const showEdit = computed(() => props.edit !== undefined || props.edit);
const emiter = defineEmit(["current-change", "add", "edit", "delete"]);
const store = getStore();

const departmentList = store.state.department.departmentList;
const treeData = ref<any[]>([]);

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
	computed(() => departmentList),
	(value: any[]) => {
		treeData.value = CommonService.generateTreeData(departmentList, {
			keyName: "id",
			parentKeyName: "parentId",
		});

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
