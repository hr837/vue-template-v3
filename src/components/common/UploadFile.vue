<script lang="ts" setup>
import {
  computed,
  defineEmits,
  defineProps,
  ref,
  watch,
  withDefaults,
} from 'vue'
import { ElMessage } from 'element-plus'
import type { UploadInstance, UploadProps, UploadUserFile } from 'element-plus'
import { appConfig } from '@/config/app.config'
import { getAuthorization } from '@/composables/http-header'
interface PropType {
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
  maxSize: 5,
  limitNumber: 1,
})

const emits = defineEmits(['update:modelValue'])
const fileListData = ref<UploadUserFile[]>([])
const uploadRef = ref<UploadInstance>()

const actionUrl = computed(() => {
  const baseUrl = appConfig.http.gateway
  const path = '/direct-rent-service/direct-rent/filePath'
  return `${baseUrl}${path}`
})

const headers = getAuthorization()

watch(
  () => props.modelValue,
  (val, _) => {
    if (val && val.length === 0 && uploadRef.value)
      uploadRef.value.clearFiles()
    else
      fileListData.value = val
  },
  {
    immediate: true,
  },
)

const handleChange: UploadProps['onChange'] = (uploadFile, uploadFiles) => {
  emits('update:modelValue', uploadFiles)
}

/**
 * 文件上传前
 */
const beforeUploadHandler: UploadProps['beforeUpload'] = (rawFile) => {
  if (!props.isAnyFileType && props.extension && props.extension.length) {
    const result = props.extension.some((ex) => {
      return new RegExp(`.${ex}`, 'i').test(rawFile.name)
    })
    if (!result)
      ElMessage.error('不支持该文件扩展名')

    return result
  }
  else if (rawFile.size / 1024 / 1024 > props.maxSize) {
    ElMessage.error(`上传的文件最大不能超过${props.maxSize}MB!`)
    return false
  }
  else { return true }
}

/**
 * 文件上传失败
 */
const errorHandler: UploadProps['onError'] = () => {
  ElMessage.error('上传失败，请重新上传！')
}

/**
 * 文件移除
 */
const removeHandler: UploadProps['onRemove'] = (UploadFile, UploadFiles) => {
  emits('update:modelValue', UploadFiles)
}

/**
 * 文件上传成功
 */
const successHandler: UploadProps['onSuccess'] = () => {
  ElMessage.success('上传成功！')
}

/**
 * 文件超出数量
 */
const handleExceed: UploadProps['onExceed'] = () => {
  ElMessage.warning(`上传的文件已超出限定的数量${props.limitNumber}！`)
}
</script>

<template>
  <div class="component upload-file">
    <el-upload
      ref="uploadRef" v-model:file-list="fileListData" :action="actionUrl" :headers="headers"
      :limit="limitNumber" :on-change="handleChange" :before-upload="beforeUploadHandler" :on-error="errorHandler"
      :on-remove="removeHandler" :on-success="successHandler" :on-exceed="handleExceed"
    >
      <el-button type="primary">
        上传文件
      </el-button>
      <template #tip>
        <div class="el-upload__tip">
          {{ uploadFileTip }}
        </div>
      </template>
    </el-upload>
  </div>
</template>
