<template>
  <div class="organization-user-table">
    <DataBox
      :data="data"
      v-model:selectionData="selectionData"
      v-model:currentRow="currentRow"
      :sort="sort"
      highlight-row-show
      @refreshData="refreshData"
    >
      <el-table-column prop="createTime" sortable label="时间" />
      <el-table-column prop="name" label="名称" />
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button link type="primary" @click="edit(row)">编辑</el-button>
        </template>
      </el-table-column>
    </DataBox>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineExpose, defineEmits, defineProps } from "vue";
import type { DataType } from "@/http/models/user.model";
import { SortService } from "@/http/extends/sort.service";
type PropsType = {
  data: Array<DataType>;
  sort?: SortService;
};

defineProps<PropsType>();

const selectionData = ref<DataType[]>([]);
const currentRow = ref({});

const emits = defineEmits(["refresh"]);

function refreshData() {
  emits("refresh");
}

function edit(row: DataType) {
  console.log(row, "编辑成功");
}

defineExpose({
  selectionData,
});
</script>
