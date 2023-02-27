<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'
import LayoutMenuIcon from './LayoutMenuIcon.vue'
import LayoutMenuIconTwo from './LayoutMenuIconTwo.vue'
interface PropType {
  /** 是否折叠菜单 */
  collapse: boolean
}

withDefaults(defineProps<PropType>(), {
  collapse: false,
})
</script>

<template>
  <el-menu default-active="2" class="component layout-work-menu" router :collapse="collapse">
    <el-sub-menu index="1" title="设置">
      <template #title>
        <LayoutMenuIconTwo type="setting" />
        <span>设置</span>
      </template>
      <el-menu-item index="/about">
        <LayoutMenuIconTwo type="xjkfjke" />
        个人中心
      </el-menu-item>

      <el-sub-menu index="1-4">
        <template #title>
          <LayoutMenuIcon type="abdominal" />
          其他
        </template>
        <el-menu-item index="1-4-1">
          item one
        </el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item v-for="index in 10" :key="index" :index="`page-${index}`">
      <span>Navigator {{ index }}</span>
    </el-menu-item>
  </el-menu>
</template>

<style lang="less" scoped>
.layout-work-menu {
  @apply h-full overflow-x-hidden overflow-y-auto;

  &:not(.el-menu--collapse) {
    width: 240px;
  }

  width: 0;
}
</style>
