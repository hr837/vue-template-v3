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
<script lang="ts" setup>
import DataUpload from "@/components/DataUpload.vue";
import { ref, watch } from "vue";
import type { UploadUserFile } from "element-plus";
import { useStore } from "@/store";

const fileList = ref<UploadUserFile[]>([
  {
    name: "food.jpeg",
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  },
  {
    name: "food2.jpeg",
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  },
]);
const store = useStore();

watch(
  () => fileList.value,
  (val, old) => {
    console.log(val, "dataupload");
  }
);
</script>
