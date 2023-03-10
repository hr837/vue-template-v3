<script lang="ts">
import { defineComponent } from 'vue'
import LayoutHeader from './components/LayoutHeader.vue'
export default defineComponent({
  name: 'BasicLayout',
  components: {
    LayoutHeader,
  },
})
</script>

<template>
  <el-container class="layout basic-layout" direction="vertical">
    <LayoutHeader />
    <el-main class="layout-work-container-main">
      <router-view v-slot="{ Component, route }" class="layout-work-container-main-content">
        <transition name="fade-transform" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </el-main>
  </el-container>
</template>

<style lang="less" scoped>
.layout-work-container-main {
  @apply overflow-x-hidden;
  position: relative;
  background-color: #EFF3F6;
  padding: 15px;
  height: calc(100% - 50px);
}
</style>
