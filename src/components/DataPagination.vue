<template>
  <div class="component data-pagination">
    <el-pagination
      v-model:current-page="pageIndex"
      v-model:page-size="pageSize"
      :page-sizes="page.pageSizeOpts"
      :layout="'total, sizes, prev, pager, next, jumper'"
      :total="page.total.value"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script lang="ts" setup>
import { PageService } from "@/http/extends/page.service";
import { defineProps, defineEmits, computed } from "vue";

type PropType = {
  page: PageService;
};
const props = defineProps<PropType>();
const emits = defineEmits(["page-change"]);

const pageIndex = computed(() => props.page.pageIndex);
const pageSize = computed(() => props.page.pageSize);

function handleSizeChange(val: number) {
  props.page.updatePageSize(val);
  emits("page-change");
}

function handleCurrentChange(val: number) {
  props.page.updatePageIndex(val);
  emits("page-change");
}
</script>
