<template>
  <el-container class="layout work-space-layout">
    <el-header>
      <LayoutHeader />
    </el-header>
    <el-container>
      <el-aside>Aside</el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import LayoutHeader from "./components/LayoutHeader.vue";
</script>

<style lang="scss" scoped></style>
