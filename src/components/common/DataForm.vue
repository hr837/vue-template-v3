<script lang="ts" setup>
import {
  computed,
  defineEmits,
  defineProps,
  onMounted,
  ref,
  withDefaults,
} from 'vue'
import type { FormInstance } from 'element-plus'
interface PropType {
  /** 表单数据 */
  model: object
  /** label的宽度 */
  labelWidth?: number
  /** 折叠功能 */
  hiddenFlag?: boolean
  /** 一行多少个formitem */
  rowNums?: number
}

const props = withDefaults(defineProps<PropType>(), {
  labelWidth: 120,
  hiddenFlag: false,
  rowNums: 3,
})
const emits = defineEmits(['reset', 'search', 'update:hiddenFlag'])

const form = ref<FormInstance>()
const formDom = computed(() => form.value?.$el)

const formItems = computed(() => {
  if (!formDom.value)
    return undefined
  return formDom.value?.children
})
const isShowExtend = computed(() => {
  if (!formDom.value)
    return false
  if (!formItems.value)
    return false
  const items = formItems.value
  if (!items)
    return false
  let itemsWidth = 0
  const InputElement: HTMLElement[] = Array.from(items)
  const formDomWidth = formDom.value.clientWidth
  InputElement.forEach((i) => {
    itemsWidth = itemsWidth + i.clientWidth
  })
  if (itemsWidth > formDomWidth)
    return true
  else return false
})

/** 收起多余项 */
function onCollapse() {
  if (!formDom.value)
    return
  if (!formItems.value)
    return
  const items = formItems.value
  if (items.length < 2)
    return
  const inputItems: HTMLElement[] = Array.from(items)
  // 去除操作按钮
  inputItems.pop()
  // 容器宽度
  const containerWidth = formDom.value.clientWidth
  let computedWidth = 0
  for (const item of inputItems) {
    computedWidth += item.clientWidth
    if (computedWidth + item.clientWidth >= containerWidth) {
      item.classList.add('hidden')
      item.classList.remove('el-form-item')
    }
  }
  emits('update:hiddenFlag', false)
}

/** 展开所有项 */
function onExpand() {
  if (!formItems.value)
    return
  Array.from(formItems.value).forEach((item: any) => {
    item.classList.remove('hidden')
    item.classList.add('el-form-item')
  })
  emits('update:hiddenFlag', true)
}

function emitSet() {
  form.value?.resetFields()
  emits('reset')
}

function emitSearch() {
  emits('search')
}

onMounted(() => {
  if (isShowExtend.value && props.hiddenFlag)
    onExpand()
  else if (isShowExtend.value && !props.hiddenFlag)
    onCollapse()
})
</script>

<template>
  <div class="component data-form">
    <el-form
      ref="form"
      :model="model"
      :label-width="labelWidth"
      label-suffix="："
      class="flex form-style"
    >
      <slot>el-from-item others</slot>

      <el-form-item label-width="20" class="operationBtn">
        <el-button
          type="primary"
          @click="emitSearch"
        >
          <icon-park-outline-search class="mr-1" />查询
        </el-button>
        <el-button @click="emitSet">
          <icon-park-outline-refresh class="mr-1" />重置
        </el-button>
        <template v-if="isShowExtend">
          <el-button
            v-if="hiddenFlag"
            link
            type="primary"
            @click="onCollapse"
          >
            收起
          </el-button>
          <el-button
            v-else
            link
            type="primary"
            @click="onExpand"
          >
            展开
          </el-button>
        </template>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="less" scoped>
.data-form {
  .form-style {
    display: grid;
    gap: 0px 10px;
    grid-template-columns: repeat(v-bind(rowNums), minmax(0px, 1fr));
    :deep {
      .el-form-item {
        grid-column: span 1 / span 1;
        margin-left: unset;

        .el-form-item__content>*{
          width: 100%;
        }
        //日期选择范围
        .date-range{
            .el-date-editor{
              width: 100%;
            }
        }
        .number-range{
          display: flex;
          .number-range-separator{
            padding: 0 5px;
          }
        }
        // el-select 为多选时不换行显示
        .el-select__tags {
          overflow: hidden;
          white-space: nowrap;
        }
        &.operationBtn{
          .el-form-item__content>*{
            width: auto;
          }
        }
      }
    }
    .el-form-item.hidden {
      display: none !important;
    }
  }

  .el-icon {
    margin: 0 4px 0 8px;
  }
}
</style>
