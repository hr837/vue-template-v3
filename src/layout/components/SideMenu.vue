<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'

interface Menu {
  path: string
  icon?: string
  title: string
  children?: Menu[]
}
interface PropType {
  /** 是否折叠菜单 */
  collapse: boolean
  datas: Menu[]
}
withDefaults(defineProps<PropType>(), {
  collapse: false,
  datas: () => {
    return []
  },
})
</script>

<template>
  <ul class="component">
    <li
      v-for="(item, index) in datas" :key="`layout-basic-menu-item-${index}`" class="layout-basic-menu-item"
      :class="[{ 'layout-basic-menu-item--collapse': collapse }, { active: index === 0 }]"
    >
      <el-popover
        v-if="item.children && item.children.length > 0" placement="right" :title="item.title" :width="200"
        trigger="hover" :offset="15" popper-class="popver-menu-container"
      >
        <template #reference>
          <div class="flex items-center h-full">
            <icon-park-outline-home-two class="menu-item-icon" :class="[{ 'menu-item-icon--collapse': collapse }]" />
            <span>{{ item.title }}</span>
          </div>
        </template>
        <div
          v-for="(child, childIndex) in item.children" :key="`layout-basic-menu-item-${index}-child-${childIndex}`"
          class="popver-menu"
        >
          <icon-park-outline-user class="menu-item-icon" :class="[]" />
          <span>{{ child.title }}</span>
        </div>
      </el-popover>
      <el-tooltip
        v-else placement="right" title="Title" :width="200" trigger="hover" :disabled="!collapse"
        content="Navigator2"
      >
        <div class="flex items-center h-full">
          <icon-park-outline-home-two class="menu-item-icon" :class="[{ 'menu-item-icon--collapse': collapse }]" />
          <span>{{ item.title }}</span>
        </div>
      </el-tooltip>
    </li>
  </ul>
</template>

<style lang="less" scoped>
.layout-basic-menu-item {
  @apply cursor-pointer text-left w-full;
  height: 40px;
  color: #fff;
  position: relative;
  font-size: 14px;

  span {
    @apply overflow-hidden whitespace-nowrap;
  }

  &--collapse {
    >div {
      @apply justify-center;

      span {
        height: 0;
        width: 0;
      }
    }
  }

  .menu-item-icon {
    position: relative;
    top: -2px;
    margin: 0 9px;
    display: inline-block;
  }

  &.active {
    font-weight: bold;
    background-color: #DE0D1A;
    border-radius: 10px;

    &::before {
      width: 1px;
      height: 20px;
      background-color: #fff;
      position: absolute;
      top: 10px;
      left: -7px;
      content: '';
    }
  }
}
</style>

<style lang="less">
//悬浮的菜单列表样式
.el-popover.popver-menu-container {
  background-color: @color-primary;
  color: #fff;

  .el-popover__title {
    color: #fff;
    font-size: 14px;
  }

  .popver-menu {
    cursor: pointer;
    line-height: 40px;

    .menu-item-icon {
      position: relative;
      top: -2px;
      display: inline-block;
      margin-right: 9px;
    }
  }

  .el-popper__arrow::before {
    background-color: @color-primary;
  }

  &[data-popper-placement^=right] .el-popper__arrow::before {
    border-right-color: @color-primary !important;
    border-top-color: @color-primary !important;
  }
}
</style>
