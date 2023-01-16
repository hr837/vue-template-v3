<template>
  <div class="component data-upload">
    <UplaodFile
      v-if="type === 'file'"
      v-model="fileListData"
      :maxSize="maxSize"
      :limitNumber="limitNumber"
      :isAnyFileType="isAnyFileType"
      :uploadFileTip="uploadFileTip"
      :extension="extension"
    />
    <UploadPicture
      v-else
      v-model="fileListData"
      :maxSize="maxSize"
      :limitNumber="limitNumber"
      :isAnyFileType="isAnyFileType"
      :uploadFileTip="uploadFileTip"
      :extension="extension"
    />
  </div>
</template>
<script lang="ts" setup>
import UplaodFile from "./UploadFile.vue";
import UploadPicture from "./UploadPicture.vue";
import { UploadUserFile } from "element-plus";
import { ref, defineProps, defineEmits, withDefaults, watch } from "vue";

type PropType = {
  type?: "file" | "picture";
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
  type: "file",
  maxSize: 5,
  limitNumber: 1,
  isAnyFileType: false,
});

const fileListData = ref<UploadUserFile[]>([]);

const emits = defineEmits(["update:modelValue"]);

watch(
  () => fileListData.value,
  (val, old) => {
    if (val && val.length) {
      emits("update:modelValue", val);
    }
  },
  {
    immediate: true,
  }
);

watch(
  () => props.modelValue,
  (val, old) => {
    if (val && val.length) {
      fileListData.value = val;
    }
  },
  {
    immediate: true,
  }
);
</script>
