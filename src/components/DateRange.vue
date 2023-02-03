<script lang="ts" setup>
import { computed, defineEmits, defineProps, withDefaults } from 'vue'
import dayjs from 'dayjs'
interface PropType {
  modelValue: string[]
}
const props = withDefaults(defineProps<PropType>(), {
  modelValue: () => ['', ''],
})

const emits = defineEmits(['update:modelValue'])

const FORMAT_STR = 'YYYY-MM-DD'

const model = computed({
  get: (): [string, string] => {
    if (!props.modelValue)
      return ['', '']
    const [s1, s2] = props.modelValue
    if (!s1 && !s2)
      return ['', '']

    const d1 = s1 ? dayjs(s1).format(FORMAT_STR) : ''
    const d2 = s2 ? dayjs(s2).format(FORMAT_STR) : ''
    return [d1, d2]
  },
  set: (value) => {
    if (!value) {
      emits('update:modelValue', ['', ''])
      return
    }
    const [v1, v2] = value
    const s1 = v1 ? dayjs(v1).format(FORMAT_STR) : ''
    const s2 = v2 ? dayjs(v2).format(FORMAT_STR) : ''
    emits('update:modelValue', [s1, s2])
  },
})
</script>

<template>
  <div class="component date-range">
    <el-date-picker
      v-model="model"
      type="daterange"
      format="YYYY-MM-DD"
      range-separator="~"
      start-placeholder="开始时日期"
      end-placeholder="结束日期"
    />
  </div>
</template>
