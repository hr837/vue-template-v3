<template>
	<div v-loading="loadingStatus" class="page department flex">
		<div class="g-container">
			<DepartmentTree />
		</div>
		<div class="g-container flex-span-1">
			<!-- <DepartmentQueryForm />
			<DataBoxAction>
				<template #buttons>
					<el-button type="primary">新增用户</el-button>
					<el-button type="primary">批量分配角色</el-button>
					<el-button type="primary">批量重置密码</el-button>
				</template>
			</DataBoxAction>
			<DepratmentList /> -->
		</div>
	</div>
</template>

<script lang="ts" setup>
// import DepartmentQueryForm from "./components/DepartmentQueryForm.vue";
// import DepratmentList from "./components/DepratmentList.vue";
import { loading } from "./composables/department";
import { ElMessage } from "element-plus";
import { onBeforeMount, ref } from "@vue/runtime-core";
import DepartmentTree from "@/components/business-common/DepartmentTree.vue";

const loadingStatus = ref(false);

onBeforeMount(() => {
	loading.status.subscribe((data) => (loadingStatus.value = data));
});
</script>

<style lang="less" scoped>
.department {
	.g-container + .g-container {
		margin-left: 0;
	}
	&-tree {
		width: 300px;
	}
}
</style>
