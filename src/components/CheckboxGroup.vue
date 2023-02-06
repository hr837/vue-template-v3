<script lang="ts" setup>
const props = withDefaults(defineProps<{
  /** 当前选中的值 */
  modelValue: string[]
  /** 可选项 */
  options: string[]
  /** 最大可选值
   * @default 0
  */
  max?: number
  /** 复选框最小宽度
   * @default 70px
   */
  minWidth?: string
  /** 唯一值，如果选择唯一值，则清空其他值
   * @default 否
   */
  uniqueValue?: string
}>(), {
  max: 0,
  minWidth: '70px',
  uniqueValue: '无',
})

const emit = defineEmits(['update:modelValue'])

const data = $computed({
  get: () => props.modelValue,
  set: (val) => {
    const [lastValue] = val.slice(-1)
    if (lastValue === props.uniqueValue) {
      emit('update:modelValue', [lastValue])
    }
    else {
      const tmpValue = val.filter(x => x !== props.uniqueValue)
      if (props.max > 0)
        emit('update:modelValue', val.slice(0 - props.max))
      else
        emit('update:modelValue', tmpValue)
    }
  },
})
</script>

<template>
  <van-checkbox-group v-model="data" class="checkbox-group" direction="horizontal">
    <van-checkbox
      v-for="(item, index) of options" :key="`checkbox-${index}-${item}`" :name="item" :style="{ minWidth }"
      shape="square"
    >
      <slot :value="item">
        {{ item }}
      </slot>
    </van-checkbox>
  </van-checkbox-group>
</template>
