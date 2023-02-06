<script lang="ts" setup>
import { computed, defineExpose, defineProps, withDefaults } from 'vue'
type alignType = 'left' | 'center' | 'right'
interface PropType {
  /** 总列数 */
  rowSpan: number
  /**  */
  label?: string
  /** lable的宽度 */
  labelWidth?: string
  /** label 样式布局 */
  labelAlign?: alignType
  /** label背景颜色 */
  labelBackground?: string
  /** 内容的样式布局 */
  contentAlign?: alignType
  /** 边框的颜色 */
  borderColor?: string
  /** 边框的宽度 */
  borderWidth?: string
  /** label字体颜色 */
  labelColor?: string
  /** 字体大小 */
  fontSize?: string
}

const props = withDefaults(defineProps<PropType>(), {
  labelAlign: 'right',
  contentAlign: 'left',
  borderColor: '#e5e7eb',
  borderWidth: '1px',
  fontSize: '12px',
})

const gridStyle = computed(() => {
  return {
    borderTop: `solid ${props.borderWidth} ${props.borderColor}`,
    borderLeft: `solid ${props.borderWidth} ${props.borderColor}`,
    fontSize: props.fontSize,
  }
})

defineExpose({
  componentName: 'data-grid',
})
</script>

<template>
  <div class="component data-gride">
    <div class="flex flex-wrap" :style="gridStyle">
      <slot />
    </div>
  </div>
</template>
