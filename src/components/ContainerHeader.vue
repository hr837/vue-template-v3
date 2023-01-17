<template>
  <div class="component container-header">
    <div class="container-header-box flex flex-nowrap" :style="styleHandler">
      <slot name="icon"></slot>
      <span class="container-header-title">{{ title }}</span>
      <span class="container-header-tip">{{ tipText }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, computed, withDefaults } from "vue";
type PropType = {
  title: string;
  fontSize?: string;
  color?: string;
  tipText?: string;
};
const props = withDefaults(defineProps<PropType>(), {
  fontSize: "12px",
});

const styleHandler = computed(() => {
  return {
    fontSize: props.fontSize,
    color: props.color,
  };
});
</script>
<style lang="less" scoped>
.component.container-header {
  .container-header-box {
    border-bottom: 1px solid #eeeeee;
    padding: 10px 0;
    margin: 10px;
    align-items: center;
    .container-header-title {
      font-weight: bold;
    }

    .container-header-tip {
      color: #999;
      font-size: 12px;
      font-weight: normal;
    }
  }
}
</style>
