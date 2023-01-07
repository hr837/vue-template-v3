<template>
  <i class="component layout-menu-icon el-icon">
    <icon-park :type="type" />
  </i>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
type PropType = {
  /** 图标类型(名称)
   * @link http://iconpark.oceanengine.com/official
   */
  type: string;
};
defineProps<PropType>();
</script>

<style lang="less" scoped>
.layout-menu-icon {
  margin-right: 5px;
  width: var(--el-menu-icon-width);
  text-align: center;
  font-size: 18px;
  vertical-align: middle;
}
</style>
