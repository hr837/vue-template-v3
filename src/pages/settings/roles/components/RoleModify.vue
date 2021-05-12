<template>
	<el-dialog v-model="dialog" :title="title">
		<el-form ref="elFrom" :model="model" :rules="rules" label-width="100px">
			<el-form-item label="角色名称" prop="name">
				<el-input v-model="model.name" />
			</el-form-item>
			<el-form-item label="是否启用" prop="status">
				<DictSwitch v-model="model.status" dict-name="BaseStatus" />
			</el-form-item>
			<el-form-item label="角色描述" prop="description">
				<el-input v-model="model.description" type="textarea" />
			</el-form-item>
		</el-form>
		<DialogAction :loading="loadingStatus" @cancel="onCancel" @save="onSave" />
	</el-dialog>
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus";
import { computed, onMounted, readonly, ref } from "vue";
import { dialog, model, saveRole, saveloading } from "../composables/roles";
import DictSwitch from "@/components/business-common/DictSwitch.vue";

const elFrom = ref<ElFrom>();
const title = computed(() => (model.value.id ? "编辑角色" : "新增角色"));
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

async function onSave() {
	let result = await elFrom.value
		?.validate()
		.then(() => true)
		.catch(() => false);
	if (!result) return;
	result = await saveRole();
	if (result) {
		ElMessage.success("操作成功");
		onCancel();
	}
}
</script>
