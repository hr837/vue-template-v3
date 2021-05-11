<template>
	<el-dialog v-model="dialog.show" :title="title">
		<el-form ref="refForm" :model="model" :rules="rules" label-width="100px">
			<el-form-item label="部门名称" prop="name">
				<el-input v-model="model.name" />
			</el-form-item>
			<el-form-item label="是否启用" prop="status">
				<el-switch
					v-model="model.status"
					active-text="启用"
					inactive-text="停用"
					active-value="ON"
					inactive-value="OFF"
				/>
			</el-form-item>
		</el-form>
		<DialogAction :loading="loadingState" @save="onSave" @cancel="onCancel" />
	</el-dialog>
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus";
import { computed, readonly, ref } from "vue";
import {
	dialog,
	model,
	editId,
	saveDepartment,
} from "../composables/department";

const title = computed(() => (editId.value ? "修改部门" : "添加部门"));
const rules = readonly({
	name: { required: true, message: "请输入部门名称" },
});

// form ref
const refForm = ref<ElFrom>();

const loadingState = ref(false);

function onCancel() {
	refForm.value?.resetFields();
	dialog.value.show = false;
}

async function onSave() {
	let result = await refForm.value?.validate();
	if (!result) return;
	loadingState.value = true;
	result = await saveDepartment();
	loadingState.value = false;
	if (result) {
		ElMessage({
			type: "success",
			message: "操作成功",
		});
		onCancel();
	}
}
</script>
