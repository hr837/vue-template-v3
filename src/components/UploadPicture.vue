<template>
  <div class="component upload-picture flex">
    <el-upload ref="uploadRef" list-type="picture-card" v-model:file-list="fileListData" :action="actionUrl"
      :headers="headers" :limit="limitNumber" :on-change="handleChange" :before-upload="beforeUploadHandler"
      :on-error="errorHandler" :on-success="successHandler" :on-exceed="handleExceed">
      <icon-park-outline-plus theme="outline" size="24" fill="#333" />
      <template #tip>
        <div class="el-upload__tip">
          {{ uploadFileTip }}
        </div>
      </template>
    </el-upload>

    <ul class="upload-items flex flex-wrap">
      <li v-for="(file, index) in fileListData" :key="file.uid" class="upload-item">
        <el-image style="width: 146px; height: 146px" :src="file.url" :zoom-rate="1.2" :preview-src-list="imageList"
          :initial-index="index" fit="fill" />
        <div class="upload-back">
          <div class="upload-success"></div>
          <icon-park-outline-check-small theme="outline" size="24" fill="#fff" />

          <icon-park-outline-close class="upload-delete" theme="outline" size="15" fill="#fff"
            @click="handleRemove(file as UploadFile)" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  defineProps,
  computed,
  defineEmits,
  withDefaults,
  watch,
} from "vue";
import { UploadProps, UploadUserFile, UploadInstance } from "element-plus";
import { ElMessage } from "element-plus";
import { appConfig } from "@/config/app.config";
import { useStore } from "@/store";
import type { UploadFile } from "element-plus";
type PropType = {
  modelValue: UploadUserFile[];
  /** 允许文件上传的最大数量 */
  limitNumber?: number;
  /** 文件大小 */
  maxSize?: number;
  /** 上传的提示信息 */
  uploadFileTip?: string;
  /** 允许上传的文件扩展名 */
  extension?: string[];
  /** 允许上传任何类型文件 */
  isAnyFileType?: boolean;
};
const props = withDefaults(defineProps<PropType>(), {
  maxSize: 5,
  limitNumber: 1,
});

const store = useStore();
const fileListData = ref<UploadUserFile[]>([]);
const uploadRef = ref<UploadInstance>();

const actionUrl = computed(() => {
  const baseUrl = appConfig.http.gateway;
  const path = "/direct-rent-service/direct-rent/filePath";
  return `${baseUrl}${path}`;
});

const headers = computed(() => {
  return {
    "X-UserToken": store.user.token,
  };
});

const imageList = computed(() => fileListData.value.map((file) => file.url!));

watch(
  () => props.modelValue,
  (val, old) => {
    if (val && val.length === 0 && uploadRef.value) {
      uploadRef.value.clearFiles();
    } else {
      fileListData.value = val;
    }
  },
  {
    immediate: true,
  }
);

const emits = defineEmits(["update:modelValue"]);

const handleChange: UploadProps["onChange"] = (uploadFile, uploadFiles) => {
  emits("update:modelValue", uploadFiles);
};

/**
 * 文件上传前
 */
const beforeUploadHandler: UploadProps["beforeUpload"] = (rawFile) => {
  if (!props.isAnyFileType && props.extension && props.extension.length) {
    const result = props.extension.some((ex) => {
      return new RegExp(`.${ex}`, "i").test(rawFile.name);
    });
    if (!result) {
      ElMessage.error("不支持该文件扩展名");
    }

    return result;
  } else if (rawFile.size / 1024 / 1024 > props.maxSize) {
    ElMessage.error(`上传的文件最大不能超过${props.maxSize}MB!`);
    return false;
  } else return true;
};

/**
 * 文件上传失败
 */
const errorHandler: UploadProps["onError"] = () => {
  ElMessage.error("上传失败，请重新上传！");
};

/**
 * 文件上传成功
 */
const successHandler: UploadProps["onSuccess"] = () => {
  ElMessage.success("上传成功！");
};

/**
 * 删除
 */
const handleRemove = (file: UploadFile) => {
  const index = fileListData.value.findIndex((item) => file.uid === item.uid);
  fileListData.value.splice(index, 1);
  emits("update:modelValue", fileListData.value);
};

/**
 * 文件超出数量
 */
const handleExceed: UploadProps["onExceed"] = (files, uploadFiles) => {
  ElMessage.warning(`上传的文件已超出限定的数量${props.limitNumber}！`);
};
</script>

<style lang="less" scoped>
.component.upload-picture {
  :deep(.el-upload-list--picture-card) {
    margin-right: 5px;

    .el-upload-list__item {
      display: none !important;
    }
  }

  .upload-items {
    .upload-item {
      border: 1px solid #dcdfe6;
      border-radius: 6px;
      margin: 0 5px;
      position: relative;
      width: 148px;
      height: 148px;
      overflow: hidden;

      .el-image {
        display: block;
        border-radius: 6px;
      }
    }

    .upload-back {
      border-radius: 6px;

      .icon-park-outline {
        width: 10px;
        height: 10px;
        color: #fff;
        cursor: pointer;
        position: absolute;
        right: 3px;
        top: 3px;
        z-index: 2;
      }

      .upload-delete {
        display: none;
        color: #909399;
      }

      .upload-success {
        position: absolute;
        right: -15px;
        top: -10px;
        width: 40px;
        height: 24px;
        background: #67c23a;
        text-align: center;
        transform: rotate(45deg);
      }
    }

    .upload-item:hover .upload-delete {
      display: block;
    }

    .upload-item:hover .upload-success {
      display: none;
    }
  }
}
</style>
