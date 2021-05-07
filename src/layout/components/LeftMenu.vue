<template>
	<el-menu
		v-if="resources.length"
		class="left-menu"
		router
		:default-active="route.path"
		:collapse="collapse"
		text-color="#6a6a6a"
	>
		<el-submenu v-for="sub of resources" :key="sub.name" :index="sub.name">
			<template #title>
				<i class="el-icon-message"></i>
				<span>{{ sub.name }}</span>
			</template>
			<el-menu-item
				v-for="item of sub.childrens"
				:key="item.path"
				:index="item.path"
			>
				<i class="el-icon-arrow-right"></i>
				<span>{{ item.name }}</span>
			</el-menu-item>
		</el-submenu>
	</el-menu>
</template>

<script lang="ts" setup>
import { computed, defineProps, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getStore } from "@/store";

defineProps({
	collapse: {
		type: Boolean,
	},
});

const store = getStore();

const getMenus = store.getters.getMenus;
const direcotry = computed(() => store.state.directory);
const route = useRoute();
const router = useRouter();

const resources = ref<any>([]);

watch(
	() => direcotry.value,
	(value) => {
		resources.value = getMenus(value);
		const [first] = resources.value;
		if (!first) return;

		const match = resources.value.find((sub: any) =>
			sub.childrens.find((x: any) => x.path === route.path)
		);
		if (!match) {
			const [item] = first.childrens;
			if (!item) return;
			router.push(item.path);
		}
	},
	{ immediate: true }
);
</script>
<style lang="less" scoped>
.left-menu {
	height: 100%;
	box-sizing: border-box;
	&:not(.el-menu--collapse) {
		width: 224px;
	}
}
</style>
