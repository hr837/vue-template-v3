<template>
  <div class="component data-form">
    <el-form
      ref="form"
      :model="model"
      :label-width="LabelWidth"
      label-suffix="："
      class="flex"
    >
      <slot>el-from-item others</slot>

      <el-form-item label-width="20">
        <el-button type="primary" @click="emitSearch">查询</el-button>
        <el-button @click="emitSet">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, ref, withDefaults } from "vue";
import type { FormInstance } from "element-plus";
type PropType = {
  /** 表单数据 */
  model: object;
  /** label的宽度 */
  LabelWidth?: number;
};

withDefaults(defineProps<PropType>(), {
  LabelWidth: 120,
});

const form = ref<FormInstance>();

const emits = defineEmits(["reset", "search"]);

function emitSet() {
  form.value?.resetFields();
  emits("reset");
}

function emitSearch() {
  emits("search");
}
</script>
