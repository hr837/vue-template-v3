<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import type { QueryUserInput, UserModel } from '@/http/models/user.model'

const queryModel = reactive<QueryUserInput>({
  username: '',
  createdAt: '',
})

const dataList = ref<UserModel[]>([])

// const service = new UserService();

function queryHandle() {
  dataList.value = [
    {
      id: '1000001',
      username: 'ango.zhang',
      realname: '张安国',
      createdAt: '2023-01-05 15:33:22',
      updatedAt: '2023-01-05 16:33:22',
    },
    {
      id: '1000002',
      username: 'ango2.zhang',
      realname: '张安国2',
      createdAt: '2023-01-05 15:33:22',
      updatedAt: '2023-01-05 16:33:22',
    },
    {
      id: '1000003',
      username: 'ango3.zhang',
      realname: '张安国3',
      createdAt: '2023-01-05 15:33:22',
      updatedAt: '2023-01-05 16:33:22',
    },
    {
      id: '1000004',
      username: 'ango4.zhang',
      realname: '张安国4',
      createdAt: '2023-01-05 15:33:22',
      updatedAt: '2023-01-05 16:33:22',
    },
    {
      id: '1000005',
      username: 'ango5.zhang',
      realname: '张安国5',
      createdAt: '2023-01-05 15:33:22',
      updatedAt: '2023-01-05 16:33:22',
    },
  ]
}

onMounted(queryHandle)
</script>

<template>
  <div class="page user-view">
    <el-form :model="queryModel" inline>
      <el-form-item label="用户名" prop="username">
        <el-input v-model.trim="queryModel.username" />
      </el-form-item>
      <el-form-item label="创建时间" prop="createdAt">
        <el-date-picker v-model.trim="queryModel.createdAt" type="date" />
      </el-form-item>
      <el-form-item>
        <el-button type="info" @click="queryHandle">
          查询
        </el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="dataList" border>
      <el-table-column label="用户名" prop="username" />
      <el-table-column label="姓名" prop="realname" />
      <el-table-column label="创建时间" prop="createdAt" />
    </el-table>
  </div>
</template>
