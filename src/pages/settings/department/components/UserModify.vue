<template>
	<el-dialog v-model="dialogShow" :title="title">
		<el-form ref="elFrom" :model="model" :rules="rules" label-width="100px">
			<el-form-item label="姓名" prop="name">
				<el-input v-model="model.name" />
			</el-form-item>
			<el-form-item label="所属机构" prop="departmentId">
				<DepartmentCascader v-model="model.departmentId" :disabled="disabled" />
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
			<el-form-item label="电话" prop="phone">
				<el-input v-model="model.phone" type="phone" />
			</el-form-item>
			<el-form-item label="电子邮箱" prop="email">
				<el-input v-model="model.email" type="email" />
			</el-form-item>
		</el-form>
		<DialogAction :loading="loadingStatus" @cancel="onCancel" @save="onSave" />
	</el-dialog>
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus";
import { computed, readonly, ref } from "vue";
import { dialogShow, userId, model, saveUser } from "../composables/user";
import { ValidatorService } from "@/utils/validator.service";
import DepartmentCascader from "@/components/business-common/DepartmentCascader.vue";

const title = computed(() => (userId.value ? "修改用户" : "新增用户"));
const disabled = computed(() => !userId.value);
const elFrom = ref<ElFrom>();
const loadingStatus = ref(false);

const rules = readonly({
	name: { required: true, message: "请输入用户姓名" },
	departmentId: { required: true, message: "请选择所属部门" },
	phone: [
		{ required: true, message: "请输入电话号码" },
		{ validator: ValidatorService.phoneNumber },
	],
	email: {
		required: true,
		type: "email",
		message: "请输入正确的email地址",
	},
});

function onCancel() {
	elFrom.value?.resetFields();
	dialogShow.value = false;
}

async function onSave() {
	let result = await elFrom.value
		?.validate()
		.then(() => true)
		.catch(() => false);
	if (!result) return;
	loadingStatus.value = true;
	result = await saveUser();
	loadingStatus.value = false;
	if (result) {
		ElMessage({
			type: "success",
			message: "操作成功",
		});
		onCancel();
	}
}
</script>

<style lang="less" scoped></style>
