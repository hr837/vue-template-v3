<script lang="ts" setup>
import { computed } from 'vue'

import LayoutHeaderSysLogo from './components/LayoutHeaderSysLogo.vue'
import LayoutWorkTree from './components/LayoutWorkTree.vue'
import LayoutWorkAction from './components/LayoutWorkAction.vue'
import LayoutWorkTitle from './components/LayoutWorkTitle.vue'
import { useAppStore } from '@/store/app.store'
const appStore = useAppStore()
const collapse2 = computed(() => appStore.showWorkMenuTree)
</script>

<template>
  <el-container class="layout basic-layout">
    <el-aside
      class="layout-work-aside"
      width="258px"
      :class="{ 'layout-work-aside-hide': collapse2 }"
    >
      <div>
        <LayoutHeaderSysLogo :collapse="collapse2" />
        <LayoutWorkTree />
      </div>
    </el-aside>
    <el-container
      class="layout-work-container"
      direction="vertical"
    >
      <LayoutWorkTitle />
      <el-main class="layout-work-container-main">
        <router-view
          v-slot="{ Component, route }"
          class="layout-work-container-main-content"
        >
          <transition
            name="fade-transform"
            mode="out-in"
          >
            <component
              :is="Component"
              :key="route.path"
            />
          </transition>
        </router-view>
      </el-main>
    </el-container>
    <LayoutWorkAction />
  </el-container>
</template>

<style lang="less" scoped>
.basic-layout {
  position: relative;
}

.layout-work-aside {
  @apply overflow-hidden;
  position: relative;
  background-color: @color-primary;
  transition: all .5s;

  >div {
    @apply h-full bg-white;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: #fff;
  }

  &-hide {
    width: 0;
  }
}

.layout-work-container {
  @apply overflow-hidden;
  position: relative;

  &-main {
    @apply overflow-x-hidden;
    background-color: #EFF3F6;
    padding: 15px;
    height: calc(100% - 50px);
    flex: none;

    &-content {
      padding: 10px 20px;
      background-color: #fff;
    }
  }
}
</style>
