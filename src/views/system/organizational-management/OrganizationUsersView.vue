<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import OrganizationUserDataForm from './components/OrganizationUserForm.vue'
import OrganizationUserDataBox from './components/OrganizationUserTable.vue'
import OrganizationUserInfo from './components/OrganizationUserInfo.vue'
import OrganizationUserUpload from './components/OrganizationUserUpload.vue'
import type { DataType } from '@/http/models/user.model'
import { PageService } from '@/http/extends/page.service'
import { SortService } from '@/http/extends/sort.service'
import { UserService } from '@/http/services/UserService'
import { LoadingService } from '@/http/extends/loading.service'

const queryData = ref({})
const data = ref<DataType[]>([])
const dataBox = ref()
const page = new PageService()
const dialogFlag = ref(false)
const loading = ref(false)
const sort = new SortService()
const service = new UserService()
const loadingFlag = ref(false)
const loadingStatus = new LoadingService(loadingFlag)

function batchDelet() {
  // if (!dataBox.value.selectionData.length)
}

function onExport() {
  dialogFlag.value = true
}

async function onSave() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    dialogFlag.value = false
  }, 500)
}

function onCancel() {
  dialogFlag.value = false
}

function refreshData() {
  const result = [
    {
      createTime: '2022-09-01',
      name: '上海',
      date: '',
    },
    {
      createTime: '2022-09-02',
      name: '北京',
      date: '',
    },
  ]

  const params = { ...queryData.value }

  data.value = result
  getRoleList()
}

function queryHandler(data: any) {
  queryData.value = data
  refreshData()
}
/**
 * 获取用户信息
 */
function getUserInfoHandler() {
  service.getUserInfo('1450034652778135553').then((data) => {
    // console.log(data, "useInfo");
  })
}
/**
 * 获取角色列表数据带请求参数，page，sort，loading
 */
function getRoleList() {
  service.getRoleList({}, [page, sort, loadingStatus]).then((data) => {
    // console.log(data, "roleList");
  })
}

onMounted(() => {
  refreshData()
  getUserInfoHandler()
})
</script>

<template>
  <div v-loading="loadingFlag" class="organization-users">
    <OrganizationUserDataForm @queryHandler="queryHandler" />

    <DataBoxAction>
      <template #buttons>
        <el-button type="primary" @click="batchDelet">
          批量删除
        </el-button>
      </template>
      <template #append>
        <el-button type="primary" @click="onExport">
          导出
        </el-button>
      </template>
    </DataBoxAction>

    <OrganizationUserDataBox ref="dataBox" :data="data" :sort="sort" @refresh="refreshData" />
    <DataPagination :page="page" @page-change="refreshData" />

    <OrganizationUserInfo />
    <OrganizationUserUpload />

    <el-dialog v-model="dialogFlag" title="导出">
      <div>内容</div>
      <template #footer>
        <DialogAction :is-show-cancel="false" :loading="loading" button-text="关闭" @save="onSave" @cancel="onCancel" />
      </template>
    </el-dialog>
  </div>
</template>
