<template>
	<div v-loading="loadingStatus" class="page department">
		<div class="g-container">
			<DepartmentQueryForm />
		</div>
		<div class="g-container">
			<!-- <DataBoxActions>
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
			</DataBoxActions> -->
			<DepratmentList />
		</div>
	</div>
</template>

<script lang="ts" setup>
import DepartmentQueryForm from "./components/DepartmentQueryForm.vue";
import DepratmentList from "./components/DepratmentList.vue";
import { loading, selectionRows } from "./composables";
import { ElMessage } from "element-plus";
import { onBeforeMount, ref } from "@vue/runtime-core";

const loadingStatus = ref(false);

onBeforeMount(() => {
	loading.status.subscribe((data) => (loadingStatus.value = data));
});

const onDelete = function () {
	if (!selectionRows.value.length) {
		const messageHandle = ElMessage.info("请选择数据行");
		return;
	}

	// const names = selectionRows.value.map((x) => x.name);
	// console.log(names);
};
</script>
