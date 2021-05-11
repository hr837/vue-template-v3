<template>
	<DataForm :model="query" @search="onSearch">
		<el-form-item label="用户名称" prop="realName">
			<el-input v-model="query.realName"></el-input>
		</el-form-item>
		<el-form-item label="用户账号" prop="userName">
			<el-input v-model="query.userName"></el-input>
		</el-form-item>
	</DataForm>
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";
import { refreshData } from "../composables/user";
import { departmentCode } from "../composables/department";

const query = ref({
	realName: "",
	userName: "",
});

function onSearch() {
	const queryModel = { departmentCode: departmentCode, ...query.value };
	refreshData(queryModel);
}
</script>
