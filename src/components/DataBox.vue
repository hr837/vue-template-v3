<template>
  <div class="component data-box">
    <el-table
      :data="data"
      :highlight-current-row="highlightCurrentRow"
      :border="tableBorder"
      :size="tableSize"
      @selection-change="emitSelectionChange"
      @sort-change="sortChange"
      @current-change="onCurrentRowChange"
      :header-cell-style="headerCellStyle"
    >
      <el-table-column v-if="selection" type="selection" width="45" />
      <slot></slot>
    </el-table>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, computed, defineEmits, withDefaults } from "vue";
import { SortService } from "@/http/extends/sort.service";
type PropType = {
  /** 表格数据 */
  data: Array<any>;
  /** 多选数据 */
  selectionData?: Array<any>;
  /** 点击当前行数据 */
  currentRow?: object;
  /** 点击当前行是否高亮 */
  highlightRowShow?: boolean;
  /** sort */
  sort?: SortService;
  /** 表格尺寸 */
  tableSize?: "large" | "default" | "small";
  /** 表格边框 */
  tableBorder?: boolean;
};
const props = withDefaults(defineProps<PropType>(), {
  tableSize: "small",
  tableBorder: false,
});

const emits = defineEmits([
  "update:selectionData",
  "update:currentRow",
  "refreshData",
]);

const highlightCurrentRow = computed(
  () => props.highlightRowShow === true && props.currentRow !== undefined
);

const selection = computed(() => props.selectionData !== undefined);

// { row, column, rowIndex, columnIndex } 回调参数
const headerCellStyle = () => {
  return {
    color: "#262626",
    "background-color": "#fafafa",
    "font-size": "12px",
  };
};
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
  props.sort?.update(prop, order);
  emits("refreshData");
}

function onCurrentRowChange<T = any>(currentRow: T) {
  emits("update:currentRow", currentRow);
}
</script>
<style lang="less" scoped>
.data-box {
  margin-top: 15px;
  .el-table {
    font-size: 12px;
  }
}
</style>
