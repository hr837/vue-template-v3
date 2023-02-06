<script lang="ts" setup>
import { ref } from 'vue'
import type { UploadUserFile } from 'element-plus'

const fileList = ref<UploadUserFile[]>([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food2.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
])
</script>

<template>
  <div class="origanization-user-upload">
    <DataUpload
      v-model="fileList"
      :limit-number="3"
      type="picture"
      :extension="['png', 'jpg', 'jpeg']"
    />
  </div>
</template>
