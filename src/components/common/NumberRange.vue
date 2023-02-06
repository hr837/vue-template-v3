<script lang="ts" setup>
import { computed, defineEmits, defineProps } from 'vue'
type InputType = string | number

interface PropType {
  modelValue: InputType[]
}
const props = defineProps<PropType>()
const emits = defineEmits(['update:modelValue'])

const min = computed({
  get: () => {
    const [min] = props.modelValue
    return min
  },
  set: (value) => {
    const [, max] = props.modelValue
    let val = value === undefined ? '' : value
    const reg = RegExp(/(^\d*\.(\d*)$)|(^[1-9]*$)/)
    if (isNaN(parseFloat(String(value))))
      val = ''

    if (!reg.test(String(value)))
      val = parseFloat(String(value))

    emits('update:modelValue', [val, max])
  },
})

const max = computed({
  get: () => {
    const [, max] = props.modelValue
    return max
  },
  set: (value) => {
    const [min] = props.modelValue
    let val = value === undefined ? '' : value
    const reg = RegExp(/(^\d*\.(\d*)$)|(^[1-9]*$)/)
    if (isNaN(parseFloat(String(value))))
      val = ''

    if (!reg.test(String(value)))
      val = parseFloat(String(value))

    emits('update:modelValue', [min, val])
  },
})

function minChangeInput(e: any) {
  const reg = RegExp(/\.|(^[0-9]*$)/)
  if (e.key === 'Backspace') {
    e.returnValue = true
    return true
  }
  else if (!reg.test(e.key)) {
    e.returnValue = false
    return false
  }
  else {
    return true
  }
}

function ruleValueHandler() {
  if (
    String(min.value)
    && String(max.value)
    && parseFloat(String(min.value)) > parseFloat(String(max.value))
  )
    emits('update:modelValue', [max.value, min.value])
}
</script>

<template>
  <div class="component number-range">
    <el-input
      v-model="min"
      clearable
      placeholder="输入数字"
      :min="0"
      :max="999999999"
      @keydown="minChangeInput"
      @mousewheel.prevent
      @blur="ruleValueHandler"
    />
    <span class="number-range-separator">~</span>
    <el-input
      v-model="max"
      clearable
      placeholder="输入数字"
      :min="0"
      :max="999999999"
      @keydown="minChangeInput"
      @mousewheel.prevent
      @blur="ruleValueHandler"
    />
  </div>
</template>
