<template>
	<el-container class="workspace-layout">
		<el-header height="65px">
			<TopMenu />
		</el-header>
		<el-container class="flex-auto g-ov-h">
			<el-aside width="224px" class="g-no-scorll">
				<LeftMenu />
			</el-aside>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script lang="ts" setup>
import { getStore } from "@/store";
import { watch } from "vue";
import { useRoute } from "vue-router";
import LeftMenu from "./components/LeftMenu.vue";
import TopMenu from "./components/top/TopMenu.vue";

const route = useRoute();
const store = getStore();

watch(
	() => route.path,
	(value: string) => {
		const [, type] = value.split("/");
		if (type !== store.state.directory) {
			console.log(type);
			store.commit("updateDirectory", type);
		}
	},
	{ immediate: true }
);
</script>

<style lang="less">
.workspace-layout {
	height: 100vh;
	.el-header {
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
		z-index: 1;
	}
	.el-aside {
		border-right: solid 1px #e6e6e6;
	}
}
</style>
