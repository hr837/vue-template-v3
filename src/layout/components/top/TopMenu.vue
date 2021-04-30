<template>
	<el-menu
		class="top-menu"
		mode="horizontal"
		router
		:default-active="direcotry"
	>
		<el-menu-item index="/home">首页</el-menu-item>
		<el-menu-item index="/setting">系统管理</el-menu-item>
	</el-menu>
</template>

<script lang="ts" setup>
import { getStore } from "@/store";
import { computed } from "vue";

const store = getStore();
const direcotry = computed(() => `/${store.state.directory}`);
</script>

<style lang="less">
.top-menu {
	border-bottom: none;
	.el-menu-item {
		height: 65px;
	}
}
</style>
