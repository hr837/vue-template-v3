<template>
	<DataBox :data="dataSet">
		<el-table-column label="部门名称" prop="name"></el-table-column>
		<el-table-column label="管理员" prop="business"></el-table-column>
		<el-table-column label="创收" prop="amount"></el-table-column>
		<el-table-column label="案件数" prop="account"></el-table-column>
	</DataBox>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import faker from "faker";
faker.setLocale("zh_CN");

const dataSet = ref<Array<any>>([]);

onMounted(() => {
	dataSet.value = [
		faker.helpers.createTransaction(),
		faker.helpers.createTransaction(),
		faker.helpers.createTransaction(),
		faker.helpers.createTransaction(),
		faker.helpers.createTransaction(),
		faker.helpers.createTransaction(),
	];
});
</script>
