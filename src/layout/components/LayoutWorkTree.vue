<script lang="ts" setup>
import { useRouter } from 'vue-router'
import LayoutMenuIcon from './LayoutMenuIcon.vue'
const router = useRouter()
interface Tree {
  name: string
  path?: string
  children?: Tree[]
}
const workMenus: Tree[] = [
  {
    name: 'Menu',
    children: [
      {
        name: 'menuItem',
        path: '/system/organize/users',
      },
    ],
  },
]
function handleNodeClick(data: Tree) {
  if (data.path)
    router.push(data.path)
    // router.push('/system/organize/users')
}
</script>

<template>
  <el-tree
    :data="workMenus"
    default-expand-all
    highlight-current
    class="layout-work-menu noScrollbar"
    @node-click="handleNodeClick"
  >
    <template #default="{ data }">
      <!-- <icon-park-outline-all-application
        v-if="!data.children || (data.children && data.children.length === 0)" class="mr-1"
      /> -->
      <LayoutMenuIcon type="user" />
      <span>{{ data.name }}</span>
    </template>
  </el-tree>
</template>

<style lang="less" scoped>
.layout-work-menu {
  @apply overflow-x-hidden overflow-y-auto;
  padding: 15px;
  font-size: 14px;
  color: #000;
  height: calc(100% - 50px);
}
</style>
