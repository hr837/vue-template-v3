<script setup lang="ts" generic="T extends any, O extends any">
import { useWindowSize } from '@vant/use'

defineOptions({
  name: 'IndexPage',
})

const { width } = useWindowSize()
let colCoumnt = $ref(3)

watch(width, (val) => {
  if (val < 450)
    colCoumnt = 3
  else if (val >= 450 && val < 1024)
    colCoumnt = 5
  else
    colCoumnt = 8
}, { immediate: true })
</script>

<template>
  <van-grid square :column-num="colCoumnt">
    <van-grid-item icon="description" text="知情书" to="/comfort-cure/comfort-cure-escape-clause" />
    <van-grid-item icon="description" text="术前记录" to="/comfort-cure/comfort-cure-preoperative-record" />
    <van-grid-item icon="description" text="术前记录Element" to="/comfort-cure/comfort-cure-preoperative-record-element" />
  </van-grid>
</template>
