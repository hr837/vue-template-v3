<script lang="ts" setup>
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { computed } from 'vue'

import { useAppStore } from './store/app.store'
import { appLayouts } from '@/layout'

const appStore = useAppStore()
const currentLayout = computed(() => {
  const key = appStore.layout
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
