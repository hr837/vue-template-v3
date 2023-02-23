<script lang="ts" setup>
import { computed } from 'vue'
import { useAppStore } from '@/store/app.store'

const appStore = useAppStore()
const showWorkMenuTree = computed(() => appStore.showWorkMenuTree)
function onActionClick() {
  appStore.setWorkMenuVisible(!showWorkMenuTree.value)
}
</script>

<template>
  <img
    src="@/assets/images/workAction.png" alt="" class="layout-work-action"
    :class="showWorkMenuTree ? 'layout-work-action--collapse' : ''" @click="onActionClick"
  >
</template>

<style lang="less" scoped>
img.layout-work-action {
  width: 21px;
  position: absolute;
  top: 140px;
  left: 248px;
  z-index: 10;
  cursor: pointer;
  transform: rotate(180deg);
  transition: left .5s;

  &--collapse {
    transform: rotate(0);
    left: 0;
  }
}
</style>
