<template>
	<DataBox :data="dataSet">
		<el-table-column label="角色名称" prop="name"></el-table-column>
		<el-table-column label="角色描述" prop="description"></el-table-column>
		<el-table-column
			label="状态"
			prop="status"
			:formatter="(row) => $filter.dictConvert(row.status, 'BaseStatus')"
		></el-table-column>
		<el-table-column label="创建人" prop=""></el-table-column>
		<el-table-column label="创建时间" prop=""></el-table-column>
		<el-table-column label="操作">
			<template #default="{ row }">
				<el-button type="text" @click="editRole(row)">修改角色</el-button>
				<el-button type="text" @click="pickResource(row)">模块权限</el-button>
				<el-button type="text" @click="onUserViewClick(row)">
					用户列表
				</el-button>
				<el-button type="text" @click="onCopyRole(row)">复制角色</el-button>
				<el-button type="text" @click="onDelete(row)">删除</el-button>
			</template>
		</el-table-column>
	</DataBox>
</template>

<script lang="ts" setup>
import type { RoleInfo } from "@/types/role.interface";
import { defineEmit } from "@vue/runtime-core";
import { ElMessage, ElMessageBox } from "element-plus";
import { dataSet, deleteRole, editRole, copyRole } from "../composables/roles";
import { pickResource } from "../composables/resource";

function onDelete(row: RoleInfo) {
	ElMessageBox({
		type: "warning",
		message: `确定要删除角色【${row.name}】吗?`,
		title: "删除提示",
		showCancelButton: true,
	})
		.then(() => deleteRole(row))
		.catch();
}

function onCopyRole(row: RoleInfo) {
	copyRole(row.id).then(() => {
		ElMessage.success("操作成功");
	});
}

const emitter = defineEmit(["view-users"]);
// 传出role信息，由父组件去通知别的组件行为
function onUserViewClick(row: RoleInfo) {
	emitter("view-users", row);
}
</script>
