<template>
  <div class="organization-users">
    <OrganizationUserDataForm @queryHandler="queryHandler" />

    <DataBoxAction>
      <template #buttons>
        <el-button type="primary" @click="batchDelet">批量删除</el-button>
      </template>
      <template #append>
        <el-button type="primary" @click="onExport">导出</el-button>
      </template>
    </DataBoxAction>

    <OrganizationUserDataBox
      ref="dataBox"
      @refresh="refreshData"
      :data="data"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import OrganizationUserDataForm from "./components/OrganizationUserDataForm.vue";
import OrganizationUserDataBox from "./components/OrganizationUserDataBox.vue";
import { DataType } from "./composable";

const queryData = ref({});
const data = ref<DataType[]>([]);
const dataBox = ref();

function batchDelet() {
  if (!dataBox.value.selectionData.length) return;
  console.log(dataBox.value.selectionData);
  console.log("删除成功");
}

function onExport() {
  console.log(data.value, "导出成功");
}

function refreshData() {
  const result = [
    {
      date: "2022-09-01",
      name: "上海",
    },
    {
      date: "2022-09-02",
      name: "北京",
    },
  ];

  const params = { ...queryData.value };
  console.log(params, "params");

  data.value = result;
  console.log("更新");
}

function queryHandler(data: any) {
  queryData.value = data;
  refreshData();
}

onMounted(() => {
  refreshData();
});
</script>
