<template>
	<el-container class="workspace-layout">
		<el-header>header</el-header>
		<el-container class="flex-auto g-ov-h">
			<el-aside class="g-no-scorll">
				<LeftMenu />
			</el-aside>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script lang="ts" setup>
import LeftMenu from "./components/left-menu/left-menu.vue";
</script>

<style lang="less">
.workspace-layout {
	height: 100vh;
	.el-aside {
		border-right: solid 1px #e6e6e6;
	}
}
</style>
