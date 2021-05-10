<template>
	<el-table
		class="sys-menu_list m-t-14"
		:data="dataSet"
		border
		row-key="id"
		default-expand-all
		:tree-props="{ children: 'childrens' }"
	>
		<el-table-column label="系统名称" prop="name"></el-table-column>
		<el-table-column
			label="系统名称"
			prop="type"
			:formatter="typeFormatter"
		></el-table-column>
		<el-table-column label="图标" prop="icon"></el-table-column>
		<el-table-column label="路径" prop="path"></el-table-column>
		<el-table-column label="操作">
			<template #default="{ row }">
				<el-button type="text" @click="onEditClick(row)">编辑</el-button>
			</template>
		</el-table-column>
	</el-table>
</template>

<script lang="ts" setup>
import { computed, ref, defineComponent } from "vue";
import { dataSet, onEditClick } from "../composables";

const typeFormatter = (row: any) => {
	const type: string = row.type;
	const setting: { [key: string]: string } = {
		DIRECTORY: "模块",
		MENU: "菜单",
	};
	return setting[type];
};
</script>

<style lang="less" scoped></style>
