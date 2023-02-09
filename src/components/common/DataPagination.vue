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
  background?: boolean
  pageCount?: number
}

const props = withDefaults(defineProps<PropType>(), {
  layout: 'total, sizes, prev, pager, next, jumper',
  background: true,
  pageCount: 4,
})

const emits = defineEmits(['pageChange'])

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
  emits('pageChange')
}

function handleCurrentChange(val: number) {
  props.page.updatePageIndex(val)
  emits('pageChange')
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
      :background="background"
      :page-count="pageCount"
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
