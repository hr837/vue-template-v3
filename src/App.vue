<template>
  <ElConfigProvider :locale="zhCn">
    <component :is="currentLayout" />
  </ElConfigProvider>
</template>

<script lang="ts" setup>
import { ElConfigProvider } from "element-plus";
// import { DEFAULT_ICON_CONFIGS, IconProvider } from "@icon-park/vue-next";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import { computed } from "vue";

import { appLayouts } from "@/layout";
import { useStore } from "./store";

// IconProvider({ ...DEFAULT_ICON_CONFIGS, prefix: "icon" });

const currentLayout = computed(() => {
  const key = useStore("app").layout;
  return appLayouts[key];
});
</script>

<style lang="less">
.el-container {
  @apply h-full overflow-hidden;
}
</style>
