<script lang="ts" setup>
import {
  defineEmits,
  defineProps,
  ref,
  watch,
  withDefaults,
} from 'vue'
import type { PageService } from '@/http/extends/page.service'

interface PropType {
  page: PageService
  layout?: string
}

const props = withDefaults(defineProps<PropType>(), {
  layout: 'total, sizes, prev, pager, next, jumper',
})

const emits = defineEmits(['page-change'])

const pageIndex = ref(0)
const pageSize = ref(10)

watch(
  () => props.page.pageIndex.value,
  (index, oldIndex) => {
    pageIndex.value = index
  },
  {
    immediate: true,
  },
)

watch(
  () => props.page.pageSize.value,
  (size, oldSize) => {
    pageSize.value = size || 10
  },
  {
    immediate: true,
  },
)

function handleSizeChange(val: number) {
  props.page.updatePageSize(val)
  emits('page-change')
}

function handleCurrentChange(val: number) {
  console.log(val)

  props.page.updatePageIndex(val)
  emits('page-change')
}
</script>

<template>
  <div class="component data-pagination">
    <el-pagination
      v-model:current-page="pageIndex"
      v-model:page-size="pageSize"
      :page-sizes="page.pageSizeOpts"
      :layout="layout"
      :total="page.total.value"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<style lang="less">
.data-pagination {
  @apply flex flex-row-reverse mr-5;
  margin-top: 16px;
  margin-bottom: 10px;
}
</style>
