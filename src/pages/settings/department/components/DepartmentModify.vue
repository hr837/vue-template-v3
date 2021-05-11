<template>
	<el-dialog v-model="dialog.show" :title="dialog.name">
		<el-form :model="model">
			<el-form-item label="部门名称" prop="name">
				<el-input v-model="model.name" />
			</el-form-item>
		</el-form>
		<DialogAction @save="onSave" @cancel="onCancel" />
	</el-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { dialog, model, saveDepartment } from "../composables/department";

const form = ref<ElFrom>();

function onCancel() {
	form.value?.resetFields();
	dialog.value.show = false;
}

function onSave() {
	form.value?.validate((v) => {
		if (v) saveDepartment();
	});
}
</script>
