<script lang="ts" setup>
import LayoutHeaderSysLogo from './LayoutHeaderSysLogo.vue'
import LayoutWorkTitle from './LayoutWorkTitle.vue'
</script>

<template>
  <el-header class="layout-header" height="50px">
    <LayoutHeaderSysLogo :collapse="false" />
    <LayoutWorkTitle />
  </el-header>
</template>

<style lang="less" scoped>
.layout-header {
  @apply flex items-start p-0;
}
</style>
