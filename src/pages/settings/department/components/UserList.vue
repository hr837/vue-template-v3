<template>
	<DataBox v-model:selectionRows="selectionRows" :data="dataSet">
		<el-table-column label="姓名" prop="realName" width="120"></el-table-column>
		<el-table-column
			label="用户名"
			prop="username"
			width="120"
		></el-table-column>
		<el-table-column
			label="所属部门"
			prop="departmentName"
			width="120"
		></el-table-column>
		<el-table-column label="角色类型" prop="roleName"></el-table-column>
		<el-table-column
			label="状态"
			prop="status"
			:formatter="(row) => $filter.dictConvert(row.status, 'BaseStatus')"
		></el-table-column>
		<el-table-column label="电话" prop="phone" width="120"></el-table-column>
		<el-table-column label="邮箱" prop="email" width="120"></el-table-column>
		<el-table-column label="生效时间" prop="" width="150"></el-table-column>
		<el-table-column label="创建人" prop="" width="120"></el-table-column>
		<el-table-column label="创建时间" prop=""></el-table-column>
		<el-table-column label="操作" width="260" fixed="right">
			<template #default="{ row }">
				<el-button type="text" @click="onEdit(row)">修改用户</el-button>
				<el-button type="text" @click="onAllotClick(row)">分配角色</el-button>
				<el-button type="text" @click="onResetClick(row)">重置密码</el-button>
			</template>
		</el-table-column>
	</DataBox>
	<Pagination :page="page" @pageChange="refreshData" />
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus";
import type { UserListItem } from "@/types/user.interface";
import {
	dataSet,
	refreshData,
	selectionRows,
	page,
	onEdit,
	resetPwd,
} from "../composables/user";
import { setRole } from "../composables/user-role";

function onResetClick(row: UserListItem) {
	resetPwd(row).then(() => {
		ElMessage.success("操作成功");
	});
}

function onAllotClick(row: UserListItem) {
	setRole(row.roleId, [row.id]);
}
</script>
