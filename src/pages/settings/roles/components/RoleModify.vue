<template>
	<el-dialog v-model="dialog" class="role_modify" :title="title">
		<el-form ref="elFrom" :model="model" :rules="rules" label-width="100px">
			<el-form-item label="角色名称" prop="name">
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
		<DialogAction :loading="loadingStatus" @cancel="onCancel" @save="onSave" />
	</el-dialog>
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus";
import { computed, onMounted, readonly, ref } from "vue";
import {
	dialog,
	editId,
	model,
	saveRole,
	saveloading,
} from "../composables/roles";

const elFrom = ref<ElFrom>();
const title = computed(() => (editId.value ? "编辑角色" : "新增角色"));
const rules = readonly({
	name: { required: true, message: "请输入角色名称" },
});
const loadingStatus = ref(false);

onMounted(() => {
	saveloading.status.subscribe((v) => (loadingStatus.value = v));
});

function onCancel() {
	elFrom.value?.resetFields();
	dialog.value = false;
}

function onSave() {
	elFrom.value?.validate((v) => {
		if (!v) return;
		saveRole().subscribe({
			next: () => {
				ElMessage.success("操作成功");
				onCancel();
			},
		});
	});
}
</script>
