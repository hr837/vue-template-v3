<template>
	<el-menu
		class="left-menu"
		router
		v-if="resources.length"
		:default-active="route.path"
	>
		<el-submenu :index="sub.name" v-for="sub of resources" :key="sub.name">
			<template #title>
				<i class="el-icon-message"></i>
				{{ sub.name }}
			</template>
			<el-menu-item
				v-for="item of sub.childrens"
				:key="item.path"
				:index="item.path"
				>{{ item.name }}</el-menu-item
			>
		</el-submenu>
	</el-menu>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getStore } from "@/store";

const store = getStore();

const getMenus = store.getters.getMenus;
const direcotry = computed(() => store.state.directory);
const route = useRoute();
const router = useRouter();

const resources = ref<any>([]);

watch(
	() => direcotry.value,
	(value) => {
		console.log(value, "left");
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
