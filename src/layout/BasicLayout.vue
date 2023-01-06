<template>
  <el-container class="layout basic-layout">
    <el-header>
      <LayoutHeader />
    </el-header>
    <el-main> <router-view /></el-main>
  </el-container>
</template>

<script lang="ts" setup>
import LayoutHeader from "./components/LayoutHeader.vue";
</script>

<style lang="scss" scoped></style>
