<template>
	<div class="page sys-menu">
		<div v-loading="loadingStatus" class="g-container sys-menu">
			<DataBoxAction>
				<template #buttons>
					<el-button type="primary" @click="addMenu">添加菜单</el-button>
				</template>
				<template #append>
					<el-button type="primary" icon="el-icon-refresh" @click="refreshData">
						刷新
					</el-button>
				</template>
			</DataBoxAction>
			<SysMenuList />
		</div>
		<SysMenuModify />
	</div>
</template>

<script lang="ts" setup>
import { onMounted } from "@vue/runtime-core";
import SysMenuList from "./components/SysMenuList.vue";
import { refreshData, addMenu, loading } from "./composables";
import SysMenuModify from "./components/SysMenuModify.vue";
import { ref } from "vue";

const loadingStatus = ref(false);

onMounted(() => {
	loading.status.subscribe((v) => (loadingStatus.value = v));
	refreshData();
});
</script>

<style lang="less" scoped></style>
