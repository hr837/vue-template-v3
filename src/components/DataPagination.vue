<template>
  <div class="component data-pagination">
    <el-pagination v-model:current-page="pageIndex"
                   v-model:page-size="pageSize"
                   :page-sizes="page.pageSizeOpts"
                   :layout="'total, sizes, prev, pager, next, jumper'"
                   :total="page.total.value"
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange" />
  </div>
</template>
<script lang="ts" setup>
import { PageService } from "@/http/extends/page.service";
import { defineProps, defineEmits, watch, ref } from "vue";

type PropType = {
  page: PageService;
};
const props = defineProps<PropType>();
const emits = defineEmits(["page-change"]);

const pageIndex = ref(props.page.pageIndex);
const pageSize = ref(props.page.pageSize);

watch(() => props.page, (newval) => {
  pageIndex.value = newval.pageIndex;
  pageSize.value = newval.pageSize;
})

function handleSizeChange(val: number) {
  props.page.updatePageSize(val);
  emits("page-change");
}

function handleCurrentChange(val: number) {
  console.log(val);

  props.page.updatePageIndex(val);
  emits("page-change");
}
</script>
<style lang="less">
.data-pagination {
  @apply flex flex-row-reverse mr-5;
  margin-top: 16px;
  margin-bottom: 10px;
}
</style>