<template>
	<div class="page department flex">
		<div v-loading="loadingStatus.department" class="g-container">
			<DepartmentManage @departemnt-change="refreshUser" />
		</div>
		<div
			v-loading="loadingStatus.user"
			class="g-container flex-auto"
			style="margin-left: 0"
		>
			<UserManage />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import { loading as departmentLoading } from "./composables/department";
import {
	loading as userLoading,
	refreshData as refreshUser,
} from "./composables/user";
import DepartmentManage from "./components/DepartmentManage.vue";
import UserManage from "./components/UserManage.vue";

const loadingStatus = ref({
	user: false,
	department: false,
});

onBeforeMount(() => {
	departmentLoading.status.subscribe(
		(v) => (loadingStatus.value.department = v)
	);
	userLoading.status.subscribe((v) => (loadingStatus.value.user = v));
});
</script>
