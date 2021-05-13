<template>
	<el-table class="sys-menu_list m-t-14" :data="tableTree" border row-key="id">
		<el-table-column label="系统名称" prop="name"></el-table-column>
		<el-table-column
			label="系统名称"
			prop="type"
			:formatter="typeFormatter"
		></el-table-column>
		<el-table-column label="图标" prop="icon"></el-table-column>
		<el-table-column label="路径" prop="url"></el-table-column>
		<el-table-column label="操作">
			<template #default="{ row }">
				<el-button type="text" @click="editMenu(row)">编辑</el-button>
			</template>
		</el-table-column>
	</el-table>
</template>

<script lang="ts" setup>
import { tableTree, editMenu } from "../composables";

const setting = {
	DIRECTORY: "模块",
	MENU: "菜单",
};

const typeFormatter = (row: any) => {
	const type: string = row.type;
	return setting[type];
};
</script>

<style lang="less" scoped></style>
