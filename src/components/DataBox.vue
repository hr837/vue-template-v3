<template>
  <div class="component data-box">
    <el-table
      :data="data"
      :highlight-current-row="highlightCurrentRow"
      border
      @selection-change="emitSelectionChange"
      @sort-change="sortChange"
      @current-change="onCurrentRowChange"
    >
      <el-table-column v-if="selection" type="selection" width="45" />
      <slot></slot>
    </el-table>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, computed, defineEmits } from "vue";
type PropType = {
  /** 表格数据 */
  data: Array<any>;
  /** 多选数据 */
  selectionData?: Array<any>;
  /** 点击当前行数据 */
  currentRow?: object;
  /** 点击当前行是否高亮 */
  highlightRowShow?: boolean;
};
const props = defineProps<PropType>();

const emits = defineEmits([
  "update:selectionData",
  "update:currentRow",
  "refreshData",
]);

const highlightCurrentRow = computed(
  () => props.highlightRowShow === true && props.currentRow !== undefined
);

const selection = computed(() => props.selectionData !== undefined);

function emitSelectionChange(val: any) {
  emits("update:selectionData", val);
}

function sortChange({
  column,
  prop,
  order,
}: {
  column: any;
  prop: any;
  order: any;
}) {
  console.log(column, prop, order);
  emits("refreshData");
}

function onCurrentRowChange<T = any>(currentRow: T) {
  emits("update:currentRow", currentRow);
}
</script>
