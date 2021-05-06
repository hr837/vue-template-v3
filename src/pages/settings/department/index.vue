<template>
	<div class="page main">
		<DataForm :model="query">
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
		department
	</div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const query = reactive({
	name: "",
});
</script>

<style lang="less" scoped>
.main {
}
</style>
