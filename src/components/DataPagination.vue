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
<script lang="ts" setup>
import { PageService } from "@/http/extends/page.service";
import { defineProps, defineEmits, computed, withDefaults } from "vue";

type PropType = {
  page: PageService;
  layout?: string;
};

const props = withDefaults(defineProps<PropType>(), {
  layout: "total, sizes, prev, pager, next, jumper",
});

const emits = defineEmits(["page-change"]);

const pageIndex = computed(() => props.page.pageIndex.value);
const pageSize = computed(() => props.page.pageSize.value);

function handleSizeChange(val: number) {
  props.page.updatePageSize(val);
  emits("page-change");
}

function handleCurrentChange(val: number) {
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
