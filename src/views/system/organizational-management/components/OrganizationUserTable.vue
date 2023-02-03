<script lang="ts" setup>
import { defineEmits, defineExpose, defineProps, ref } from 'vue'
import type { DataType } from '@/http/models/user.model'
import type { SortService } from '@/http/extends/sort.service'
interface PropsType {
  data: Array<DataType>
  sort?: SortService
}

defineProps<PropsType>()

const emits = defineEmits(['refresh'])
const selectionData = ref<DataType[]>([])
const currentRow = ref({})

function refreshData() {
  emits('refresh')
}

function edit(row: DataType) {
  // console.log(row, "编辑成功");
}

defineExpose({
  selectionData,
})
</script>

<template>
  <div class="organization-user-table">
    <DataBox
      v-model:selectionData="selectionData"
      v-model:currentRow="currentRow"
      :data="data"
      :sort="sort"
      highlight-row-show
      @refreshData="refreshData"
    >
      <el-table-column prop="createTime" sortable label="时间" />
      <el-table-column prop="name" label="名称" />
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button link type="primary" @click="edit(row)">
            编辑
          </el-button>
        </template>
      </el-table-column>
    </DataBox>
  </div>
</template>
