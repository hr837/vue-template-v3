<template>
  <ElConfigProvider :locale="zhCn">
    <component :is="currentLayout" />
  </ElConfigProvider>
</template>

<script lang="ts" setup>
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import { computed } from "vue";

import { appLayouts } from "@/layout";
import { useStore } from "./store";

const currentLayout = computed(() => {
  const key = useStore("app").layout;
  return appLayouts[key];
});
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
