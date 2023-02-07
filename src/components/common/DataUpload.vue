<script lang="ts" setup>
import type { UploadUserFile } from 'element-plus'
import { defineEmits, defineProps, ref, watch, withDefaults } from 'vue'
import UplaodFile from './UploadFile.vue'
import UploadPicture from './UploadPicture.vue'

interface PropType {
  type?: 'file' | 'picture'
  modelValue: UploadUserFile[]
  /** 允许文件上传的最大数量 */
  limitNumber?: number
  /** 文件大小 */
  maxSize?: number
  /** 上传的提示信息 */
  uploadFileTip?: string
  /** 允许上传的文件扩展名 */
  extension?: string[]
  /** 允许上传任何类型文件 */
  isAnyFileType?: boolean
}

const props = withDefaults(defineProps<PropType>(), {
  type: 'file',
  maxSize: 5,
  limitNumber: 1,
  isAnyFileType: false,
})

const emits = defineEmits(['update:modelValue'])

const fileListData = ref<UploadUserFile[]>([])

watch(
  () => fileListData.value,
  (val, _) => {
    if (val && val.length)
      emits('update:modelValue', val)
  },
  {
    immediate: true,
  },
)

watch(
  () => props.modelValue,
  (val, _) => {
    if (val && val.length)
      fileListData.value = val
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div class="component data-upload">
    <UplaodFile
      v-if="type === 'file'"
      v-model="fileListData"
      :max-size="maxSize"
      :limit-number="limitNumber"
      :is-any-file-type="isAnyFileType"
      :upload-file-tip="uploadFileTip"
      :extension="extension"
    />
    <UploadPicture
      v-else
      v-model="fileListData"
      :max-size="maxSize"
      :limit-number="limitNumber"
      :is-any-file-type="isAnyFileType"
      :upload-file-tip="uploadFileTip"
      :extension="extension"
    />
  </div>
</template>
