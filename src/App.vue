<script lang="ts" setup>
import { ElConfigProvider } from 'element-plus'
// import { DEFAULT_ICON_CONFIGS, IconProvider } from "@icon-park/vue-next";
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { computed } from 'vue'

import { useStore } from './store'
import { appLayouts } from '@/layout'

// IconProvider({ ...DEFAULT_ICON_CONFIGS, prefix: "icon" });

const currentLayout = computed(() => {
  const key = useStore('app').layout
  return appLayouts[key]
})
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <component :is="currentLayout" />
  </ElConfigProvider>
</template>

<style lang="less">
.el-container {
  @apply h-full overflow-hidden;
}
</style>
