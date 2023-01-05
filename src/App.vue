<template>
	<ElConfigProvider :size="size">
		<div class="header" v-if="showHeader">
			<div>{{ store.user.token }}</div>
		</div>
		<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</nav>
		<router-view />
		<el-button type="warning" @click="size = 'large'">按钮设为大号</el-button>
	</ElConfigProvider>
</template>

<script lang="ts" setup>
import { ElConfigProvider } from "element-plus";
import { computed, ref } from "vue";
import { useStore } from "./store";
const store = useStore();

const showHeader = computed(() => !store.app.microApp);

const size = ref("small");
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>
