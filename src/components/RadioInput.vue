<script lang="ts" setup>
import { useVModel } from '@vueuse/core'
const props = defineProps<{
  /** 是否选中 */
  modelValue: boolean
  /** 输入文本 */
  extraText: string
}>()

const emit = defineEmits(['update:modelValue', 'update:extraText'])
const checked = useVModel(props, 'modelValue', emit)
const text = useVModel(props, 'extraText', emit)

defineOptions({
  name: 'RadioInput',
})
</script>

<template>
  <van-radio v-model="checked" class="radio-input" shape="square" name="药物">
    <div inline-flex items-center>
      药物
    </div>
    <van-field v-if="modelValue" v-model="text" :border="false" important-p-l-2 important-p-y-0 flex-1 />
  </van-radio>
</template>
