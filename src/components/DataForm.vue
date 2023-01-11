<template>
  <div class="component data-form">
    <el-form
      ref="form"
      :model="model"
      :label-width="LabelWidth"
      label-suffix="："
      class="flex form-style"
    >
      <slot>el-from-item others</slot>

      <el-form-item label-width="20">
        <el-button type="primary" @click="emitSearch">查询</el-button>
        <el-button @click="emitSet">重置</el-button>
        <template v-if="isShowExtend">
          <el-button v-if="hiddenFlag" link type="primary" @click="onCollapse"
            >收起</el-button
          >
          <el-button v-else link type="primary" @click="onExpand"
            >展开</el-button
          >
        </template>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import {
  defineProps,
  defineEmits,
  ref,
  withDefaults,
  onMounted,
  computed,
} from "vue";
import { FormInstance } from "element-plus";
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
const hiddenFlag = ref(false);

const formItems = computed(() => {
  if (!formDom.value) return undefined;
  return formDom.value?.children;
});
const formDom = computed(() => form.value?.$el);
const isShowExtend = computed(() => {
  if (!formDom.value) return false;
  if (!formItems.value) return false;
  const items = formItems.value;
  if (!items) return false;
  let itemsWidth = 0;
  const InputElement: HTMLElement[] = Array.from(items);
  const formDomWidth = formDom.value.clientWidth;
  InputElement.forEach((i) => {
    itemsWidth = itemsWidth + i.clientWidth;
  });
  if (itemsWidth > formDomWidth) return true;
  else return false;
});

const emits = defineEmits(["reset", "search"]);

/** 收起多余项 */
function onCollapse() {
  if (!formDom.value) return;
  if (!formItems.value) return;
  const items = formItems.value;
  if (items.length < 2) return;
  const inputItems: HTMLElement[] = Array.from(items);
  // 去除操作按钮
  inputItems.pop();
  // 容器宽度
  const containerWidth = formDom.value.clientWidth;
  let computedWidth = 0;
  for (const item of inputItems) {
    computedWidth += item.clientWidth;
    if (computedWidth + item.clientWidth >= containerWidth) {
      item.classList.add("hidden");
      item.classList.remove("el-form-item");
    }
  }
  hiddenFlag.value = false;
}

/** 展开所有项 */
function onExpand() {
  if (!formItems.value) return;
  Array.from(formItems.value).forEach((item: any) => {
    item.classList.remove("hidden");
    item.classList.add("el-form-item");
  });
  hiddenFlag.value = true;
}

function emitSet() {
  form.value?.resetFields();
  emits("reset");
}

function emitSearch() {
  emits("search");
}

onMounted(() => {
  if (isShowExtend.value) onCollapse();
});
</script>
<style lang="less" scoped>
.data-form {
  .form-style {
    flex-wrap: wrap;
    .el-form-item.hidden {
      display: none !important;
    }
  }

  .el-icon {
    margin: 0 4px 0 8px;
  }
}
</style>
