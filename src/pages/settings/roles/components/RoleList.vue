<template>
	<DataBox class="role_list" :data="dataSet">
		<el-table-column label="名称" prop="name"></el-table-column>
		<el-table-column
			label="状态"
			prop="status"
			:formatter="(row) => $filter.convertState(row.status)"
		></el-table-column>
		<el-table-column label="操作">
			<template #default="{ row }">
				<el-button type="text" @click="editRole(row)">编辑</el-button>
			</template>
		</el-table-column>
	</DataBox>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { dataSet, editRole } from "../composables/roles";
</script>

<style lang="less" scoped></style>
