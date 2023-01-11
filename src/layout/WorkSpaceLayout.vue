<template>
  <el-container class="layout work-space-layout">
    <el-header class="px-0">
      <LayoutHeader />
    </el-header>
    <el-container>
      <div class="work-space-layout-aside">
        <LayoutWorkMenu :collapse="!showAside" />
        <div class="work-space-layout-aside-action" @click="onActionClick">
          <icon-park-outline-left-one  class="i-icon"/>
        </div>
      </div>
      <el-main class="work-space-layout-main overflow-x-hidden " >
        <router-view v-slot="{ Component, route }" class="work-space-layout-main-content bg-white">
            <transition
                name="fade-transform"
                mode="out-in" >
                      <component
                        :is="Component"
                        :key="route.path" />
            </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { useStore } from "@/store";
import { computed } from "vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutWorkMenu from "./components/LayoutWorkMenu.vue";

const showAside = computed(() => useStore("app").showAside);
const actionTransform = computed(
  () => `rotate(${showAside.value ? 0 : 180}deg)`
);
function onActionClick() {
  useStore("app").setAsideVisible(!showAside.value);
}
</script>

<style lang="less" scoped>
.work-space-layout {
  &-aside {
    @apply w-auto relative;
    &-action {
      @apply absolute top-1/2 -right-2.5 h-24 w-3 -translate-y-3/4 flex flex-col justify-center items-center text-white rounded-br-2xl rounded-tr-2xl;
      background-color: var(--el-color-primary);
      .i-icon {
        transform: v-bind(actionTransform);
        transition: ease-out 0.3s;
      }
    }
  }
  &-main {
    background-color: #f5f5f5;
    padding: 15px;
    &-content{
      padding: 10px 20px;
      border-radius: 10px;
    }
  }


}
</style>
