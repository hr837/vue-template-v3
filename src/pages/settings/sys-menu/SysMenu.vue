<template>
	<div class="page sys-menu">
		<div class="g-container sys-menu">
			<DataBoxAction>
				<template #append>
					<el-button type="primary" @click="addMenu">添加菜单</el-button>
				</template>
			</DataBoxAction>
			<SysMenuList />
			<SysMenuModify />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted } from "@vue/runtime-core";
import SysMenuList from "./components/SysMenuList.vue";
import { refreshData, addMenu } from "./composables";
import SysMenuModify from "./components/SysMenuModify.vue";

onMounted(refreshData);
</script>

<style lang="less" scoped></style>
