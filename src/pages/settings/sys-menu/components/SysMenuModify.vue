<template>
	<el-dialog v-model="dialogVisable.form" title="维护系统菜单">
		<el-form
			ref="form"
			:rules="rules"
			:model="model"
			class="sys-menu_modify"
			label-width="100px"
		>
			<el-form-item label="名称" prop="title">
				<el-input v-model="model.title"></el-input>
			</el-form-item>
			<el-form-item label="Name" prop="name">
				<el-input v-model="model.name"></el-input>
			</el-form-item>
			<el-form-item label="图标" prop="icon">
				<el-input v-model="model.icon"></el-input>
			</el-form-item>
			<el-form-item label="路径" prop="path">
				<el-input v-model="model.path"></el-input>
			</el-form-item>
		</el-form>
		<DialogAction @cancel="cancel" @save="save" />
	</el-dialog>
</template>

<script lang="ts" setup>
import { defineEmit, ref } from "vue";
import { model, dialogVisable } from "../composables";
import DialogAction from "@/components/common/DialogAction.vue";

const rules = ref({
	url: { required: true, message: "请输入路径" },
});

const form = ref<ElFrom>();
const emiter = defineEmit(["close", "success"]);

const cancel = () => {
	form.value?.resetFields();
	dialogVisable.value.form = false;
};

const save = async () => {
	const result = await form.value?.validate();
	if (result) emiter("success");
};
</script>

<style lang="less" scoped></style>
