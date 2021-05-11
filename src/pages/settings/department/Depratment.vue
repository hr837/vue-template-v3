<template>
	<div class="page department flex">
		<div v-loading="loading.department" class="g-container">
			<DepartmentManage />
		</div>
		<div v-loading="loading.user" class="g-container flex-span-1">
			<UserQueryForm />
			<DataBoxAction>
				<template #buttons>
					<el-button type="primary">新增用户</el-button>
					<el-button type="primary">批量分配角色</el-button>
					<el-button type="primary">批量重置密码</el-button>
				</template>
			</DataBoxAction>
			<UserList />
		</div>
	</div>
</template>

<script lang="ts" setup>
import UserQueryForm from "./components/UserQueryForm.vue";
import UserList from "./components/UserList.vue";
import { loading as departmentLoading } from "./composables/department";
import { loading as userLoading } from "./composables/user";
import { ElMessage } from "element-plus";
import { onBeforeMount, ref } from "@vue/runtime-core";
import DepartmentManage from "./components/DepartmentManage.vue";

const loading = ref({
	department: false,
	user: false,
});

onBeforeMount(() => {
	departmentLoading.status.subscribe((v) => (loading.value.department = v));
	userLoading.status.subscribe((v) => (loading.value.user = v));
});
</script>

<style lang="less" scoped>
.department {
	.g-container + .g-container {
		margin-left: 0;
	}
	&-manage {
		width: 300px;
	}
}
</style>
