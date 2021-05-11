<template>
	<DataBox v-model:selectionRows="selectionRows" :data="dataSet">
		<el-table-column label="部门名称" prop="name"></el-table-column>
		<el-table-column label="管理员" prop="business"></el-table-column>
		<el-table-column label="创收" prop="amount"></el-table-column>
		<el-table-column label="案件数" prop="account"></el-table-column>
		<el-table-column label="操作">
			<template #default="{ row, $index }">
				<el-button type="text" @click="onDelete($index)">删除</el-button>
				<el-button type="text" @click="onEdit(row)">编辑</el-button>
			</template>
		</el-table-column>
	</DataBox>
	<Pagination :page="page" @pageChange="refreshData" />
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { dataSet, refreshData, selectionRows, page } from "../composables/user";

onMounted(refreshData);
const onDelete = (index: number) => dataSet.value.splice(index, 1);
const onEdit = (row: any) => {
	return;
};
</script>
