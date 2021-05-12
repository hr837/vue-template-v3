<template>
	<el-dialog v-model="dialogShow" :title="title">
		<el-form ref="elFrom" :model="model" :rules="rules" label-width="100px">
			<el-form-item label="用户名" prop="username">
				<el-input v-model="model.username" />
			</el-form-item>
			<el-form-item label="姓名" prop="realName">
				<el-input v-model="model.realName" />
			</el-form-item>
			<el-form-item label="所属机构" prop="departId">
				<DepartmentCascader
					v-model="model.departId"
					:disabled="disabled"
					style="width: 100%"
				/>
			</el-form-item>
			<el-form-item label="电话" prop="phone">
				<el-input v-model="model.phone" type="phone" />
			</el-form-item>
			<el-form-item label="电子邮箱" prop="email">
				<el-input v-model="model.email" type="email" />
			</el-form-item>
			<el-form-item label="用户状态" prop="status">
				<DictSelect v-model="model.status" dict-name="UserStatus" />
			</el-form-item>
			<el-form-item label="是否管理员" prop="isManage">
				<DictSwitch v-model="model.isManage" dict-name="BaseSelect" />
			</el-form-item>
		</el-form>
		<DialogAction :loading="loadingStatus" @cancel="onCancel" @save="onSave" />
	</el-dialog>
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus";
import { computed, readonly, ref } from "vue";
import { dialogShow, model, saveUser } from "../composables/user";
import { ValidatorService } from "@/utils/validator.service";
import DepartmentCascader from "@/components/business-common/DepartmentCascader.vue";
import DictSelect from "@/components/business-common/DictSelect.vue";
import DictSwitch from "@/components/business-common/DictSwitch.vue";

const title = computed(() => (model.value.userId ? "修改用户" : "新增用户"));
const disabled = computed(() => !model.value.userId);
const elFrom = ref<ElFrom>();
const loadingStatus = ref(false);

const rules = readonly({
	username: { required: true, message: "请输入用户名" },
	realName: { required: true, message: "请输入用户姓名" },
	departId: { required: true, message: "请选择所属部门" },
	phone: [
		{ required: true, message: "请输入电话号码" },
		{ validator: ValidatorService.phoneNumber },
	],
	email: {
		required: true,
		type: "email",
		message: "请输入正确的email地址",
	},
	status: { required: true, message: "请选择用户状态" },
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
		ElMessage.success("操作成功");
		onCancel();
	}
}
</script>
