<template>
	<div v-loading="loadingStatus" class="page department">
		<div class="g-container">
			<QueryForm />
		</div>
		<div class="g-container">
			<DataBoxActions>
				<template #buttons>
					<el-button type="primary" @click="onDelete">删除</el-button>
					<el-button type="primary">按钮二</el-button>
					<el-button type="primary">按钮三</el-button>
				</template>
				<template #append>
					<el-button type="primary">按钮一</el-button>
					<el-button type="primary">按钮二</el-button>
					<el-button type="primary">按钮三</el-button>
				</template>
			</DataBoxActions>
			<DepratmentList />
		</div>
	</div>
</template>

<script lang="ts" setup>
import QueryForm from "./components/QueryForm.vue";
import DepratmentList from "./components/DepratmentList.vue";
import { dataSet, loadingStatus, selectionRows } from "./composables";
import { ElMessage } from "element-plus";

const onDelete = function () {
	if (!selectionRows.value.length) {
		const messageHandle = ElMessage.info("请选择数据行");
		return;
	}

	// const names = selectionRows.value.map((x) => x.name);
	// console.log(names);
};
</script>
