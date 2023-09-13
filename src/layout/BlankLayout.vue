<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BlankLayout',
})
</script>

<template>
  <el-container class="layout blank-layout">
    <el-main class="p-0">
      <router-view />
    </el-main>
  </el-container>
</template>
