<template>
	<DataForm :model="query" @search="onSearch">
		<el-form-item label="用户名称" prop="realName">
			<el-input v-model="query.realName"></el-input>
		</el-form-item>
		<el-form-item label="用户账号" prop="userName">
			<el-input v-model="query.userName"></el-input>
		</el-form-item>
		<el-form-item label="用户账号" prop="status">
			<el-select v-model="query.status">
				<el-option label="启用" value="ON" />
				<el-option label="停用" value="OFF" />
			</el-select>
		</el-form-item>
	</DataForm>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { refreshData } from "../composables/user";

const query = ref({
	realName: "",
	userName: "",
	status: "",
});

function onSearch() {
	refreshData(query.value);
}
</script>
