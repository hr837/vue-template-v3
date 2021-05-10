<template>
	<DataForm :model="query" @search="onSearch">
		<el-form-item label="部门名称">
			<el-input v-model="query.name"></el-input>
		</el-form-item>
		<el-form-item label="部门名称5字">
			<el-input v-model="query.name"></el-input>
		</el-form-item>
		<el-form-item label="部门名称6字">
			<el-input v-model="query.name"></el-input>
		</el-form-item>
		<el-form-item label="部门名称称">
			<el-input v-model="query.name"></el-input>
		</el-form-item>
		<el-form-item label="部门名称名称">
			<el-input v-model="query.name"></el-input>
		</el-form-item>
		<el-form-item label="部门名称">
			<el-input v-model="query.name"></el-input>
		</el-form-item>
		<el-form-item label="部门名称">
			<el-input v-model="query.name"></el-input>
		</el-form-item>
		<el-form-item label="部门名称">
			<el-input v-model="query.name"></el-input>
		</el-form-item>
		<el-form-item label="部门名称">
			<el-input v-model="query.name"></el-input>
		</el-form-item>
		<el-form-item label="部门名称">
			<el-input v-model="query.name"></el-input>
		</el-form-item>
	</DataForm>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { refreshData } from "../composables";

const query = ref({
	name: "",
});

const onSearch = () => refreshData(query);
</script>
