<template>
	<el-container class="workspace-layout">
		<el-header height="65px" class="flex align-items-center">
			<Logo />
			<MenuCollapse v-model="collapse" />
			<TopMenu class="flex-span-1" />
			<UserAction />
		</el-header>
		<el-container class="flex-auto g-ov-h">
			<el-aside :style="{ width: menuWidth }" class="g-no-scorll">
				<LeftMenu :collapse="collapse" />
			</el-aside>
			<el-main>
				<router-view id="container" class="page"></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script lang="ts" setup>
import { watch, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { getStore } from "@/store";
import LeftMenu from "./components/LeftMenu.vue";
import TopMenu from "./components/top/TopMenu.vue";
import UserAction from "./components/top/UserAction.vue";
import Logo from "./components/top/Logo.vue";
import MenuCollapse from "./components/top/MenuCollapse.vue";

const route = useRoute();
const store = getStore();

const collapse = ref(false);
const menuWidth = computed(() => (collapse.value ? "64px" : "224px"));

watch(
	() => route.path,
	(value: string) => {
		const [, type] = value.split("/");
		if (type !== store.state.directory) {
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
	.el-main {
		background: #f4f5f7;
		.page {
			@header-h: 65px;
			@padding: 20px * 2;
			background: #fff;
			border-radius: 8px;
			min-height: calc(100vh - @header-h - @padding);
			// height: 100%;
			overflow: auto;
		}
		&::-webkit-scrollbar {
			width: 0.5rem;
			height: 0.5rem;
			background: rgba(255, 255, 255, 0.6);
		}
		&::-webkit-scrollbar-track {
			border-radius: 0;
		}
		&::-webkit-scrollbar-thumb {
			border-radius: 0;
			background-color: rgba(95, 95, 95, 0.4);
			transition: all 0.2s;
			border-radius: 0.5rem;

			&:hover {
				background-color: rgba(95, 95, 95, 0.7);
			}
		}
	}
}
</style>
