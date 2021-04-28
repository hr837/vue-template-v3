<template>
  <svg class="app-svg-icon" :style="style" aria-hidden="true">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  prefix: {
    type: String,
    default: "icon",
  },
  /**
   * svg图标的名称
   */
  name: {
    type: String,
    required: true,
  },
  /**
   * 图标大小，像素
   */
  size: {
    type: String,
    default: "18",
  },
  /**
   * 图标的颜色
   */
  color: {
    type: String,
  },
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);

const style = computed(() => {
  return {
    fontSize: `${props.size}px`,
    color: props.color,
  };
});
</script>

<style scoped>
.app-svg-icon {
  height: 1em;
  width: 1em;
  vertical-align: middle;
  fill: currentColor;
}
</style>