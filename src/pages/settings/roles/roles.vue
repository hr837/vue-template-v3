<template>
	<div v-loading="loadingStatus" class="roles">
		<div class="g-container">
			<RoleQueryForm />
		</div>
		<div class="g-container">
			<DataBoxAction>
				<template #buttons>
					<el-button type="primary" @click="addRole">添加角色</el-button>
				</template>
			</DataBoxAction>
			<RoleList />
			<Pagination :page="page" @page-change="refreshData" />
		</div>
		<RoleModify />
	</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import RoleQueryForm from "./components/RoleQueryForm.vue";
import RoleList from "./components/RoleList.vue";
import {
	addRole,
	page,
	refreshData,
	refreshLoading,
} from "./composables/roles";
import RoleModify from "./components/RoleModify.vue";

const loadingStatus = ref(false);

onMounted(() => {
	refreshLoading.status.subscribe((v) => (loadingStatus.value = v));
	refreshData();
});
</script>

<style lang="less" scoped></style>
