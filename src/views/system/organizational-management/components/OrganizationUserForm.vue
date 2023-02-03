<script lang="ts" setup>
import { defineEmits, ref } from 'vue'

const emits = defineEmits(['queryHandler'])
const hiddenFlag = ref(true)
const modelData = ref({
  name: '',
  status: '',
  info: '',
  address: '',
  title: '',
  date: ['2023-01-02', '2023-01-02'],
  number: ['', ''],
  time: ['', ''],
})

const options = ref([
  {
    value: 1,
    label: '开启',
  },
  {
    value: 0,
    label: '关闭',
  },
])

function onSearch() {
  emits('queryHandler', modelData.value)
}

function onReset() {
  // console.log("重置");
}
</script>

<template>
  <div class="organization-user-from">
    <DataForm
      v-model:hidden-flag="hiddenFlag"
      :model="modelData"
      :label-width="130"
      inline
      @search="onSearch"
      @reset="onReset"
    >
      <el-form-item label="客户信息" prop="info">
        <el-input v-model="modelData.info" />
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
      <el-form-item label="日期" prop="date">
        <DateRange v-model="modelData.date" />
      </el-form-item>
      <el-form-item label="时间" prop="time">
        <DateTimeRange v-model="modelData.time" />
      </el-form-item>
      <el-form-item label="客户姓名" prop="name">
        <el-input v-model="modelData.name" />
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model="modelData.address" />
      </el-form-item>
      <el-form-item label="名称" prop="title">
        <el-input v-model="modelData.title" />
      </el-form-item>
      <el-form-item label="数字" prop="number">
        <NumberRange v-model="modelData.number" />
      </el-form-item>
    </DataForm>
  </div>
</template>
