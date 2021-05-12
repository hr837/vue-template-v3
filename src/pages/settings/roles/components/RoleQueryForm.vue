<template>
	<div class="role_queryform">
		<DataForm :model="model" :page="page" @search="onSearch">
			<el-form-item label="角色名称" prop="name">
				<el-input v-model="model.name" />
			</el-form-item>
			<el-form-item label="角色状态" prop="status">
				<el-select v-model="model.status">
					<el-option label="启用" value="ON" />
					<el-option label="停用" value="OFF" />
				</el-select>
			</el-form-item>
		</DataForm>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { refreshData, page } from "../composables/roles";

const model = ref({
	name: "",
	status: "",
});

function onSearch() {
	refreshData(model.value);
}
</script>

<style lang="less" scoped></style>
