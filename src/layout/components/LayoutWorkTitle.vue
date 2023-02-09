<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const currentRoute = useRoute()
const title = computed(() => {
  return (currentRoute.meta && currentRoute.meta.title) || '标题'
})
</script>

<template>
  <el-header>{{ title }}</el-header>
</template>

<style lang="less" scoped>
header {
  font-size: 16px;
  padding: 0 15px;
  border-left: 1px solid #eee;
  border-bottom: 1px solid #ccc;
  flex: 1;
  height: 50px;
  @apply font-bold flex items-center bg-white;

}
</style>
