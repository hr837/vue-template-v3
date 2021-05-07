<template>
	<DataForm :model="query" class="g-container" @search="onSearch">
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
import { reactive, defineEmit } from "vue";
import { emitter } from "../composables";
const query = reactive({
	name: "",
});

const onSearch = () => emitter.emit("search", query);
</script>
