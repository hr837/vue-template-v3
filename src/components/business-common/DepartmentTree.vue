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
			@current-change="emitCurrentChange"
		>
			<template #default="{ data }">
				<div
					class="customer-node flex-row no-warp justify-content-between align-items-center"
				>
					<span class="label">{{ data.name }}</span>
					<div v-if="showEdit" class="actions">
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
import { computed, defineEmit, defineProps, onMounted, ref } from "vue";
import { DepartmentService } from "@/services/department.service";
import { RequestParams } from "@gopowerteam/http-request";

const service = new DepartmentService();
const tree = ref();
const treeData = ref([]);

const props = defineProps({
	edit: {
		type: Boolean,
	},
});

const showEdit = computed(() => props.edit !== undefined || props.edit);
const emiter = defineEmit(["current-change", "add", "edit", "delete"]);

const emitCurrentChange = (data: any) => emiter("current-change", data);
const onAdd = (data: any) => emiter("add", data);
const onEdit = (data: any) => emiter("edit", data);
const onDelete = (data: any) => emiter("delete", data);

onMounted(refreshData);

// 刷新数据
function refreshData() {
	service.query(new RequestParams()).subscribe((data) => {
		treeData.value = data;
	});
}
</script>

<style lang="less" scoped>
.department-tree {
	.actions {
		margin-left: 20px;
		.el-button--text {
			padding: 0;
		}
	}
}
</style>
