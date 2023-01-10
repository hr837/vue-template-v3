<template>
  <DataForm
    :model="modelData"
    :label-width="130"
    inline
    @search="onSearch"
    @reset="onReset"
  >
    <el-form-item label="客户信息" prop="info">
      <el-input v-model="modelData.info"></el-input>
    </el-form-item>
    <el-form-item label="开户状态" prop="status">
      <el-select v-model="modelData.status">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="客户姓名" prop="name">
      <el-input v-model="modelData.name"></el-input>
    </el-form-item>
  </DataForm>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from "vue";

const modelData = ref({
  name: "",
  status: "",
  info: "",
});
const options = ref([
  {
    value: 1,
    label: "开启",
  },
  {
    value: 0,
    label: "关闭",
  },
]);

const emits = defineEmits(["queryHandler"]);

function onSearch() {
  console.log("查询");
  emits("queryHandler", modelData.value);
}

function onReset() {
  console.log("重置");
}
</script>
