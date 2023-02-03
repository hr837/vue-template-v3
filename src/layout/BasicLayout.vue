<script lang="ts" setup>
import LayoutHeader from './components/LayoutHeader.vue'
</script>

<template>
  <el-container class="layout basic-layout">
    <el-header class="px-0">
      <LayoutHeader />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>
