<template>
	<el-dialog v-model="dialog" title="维护系统菜单">
		<el-form
			ref="form"
			:rules="rules"
			:model="model"
			class="sys-menu_modify"
			label-width="100px"
		>
			<el-form-item label="名称" prop="name">
				<el-input v-model="model.name"></el-input>
			</el-form-item>
			<el-form-item label="所属模块" prop="directory">
				<el-select v-model="model.directory" clearable>
					<el-option
						v-for="item of directoryList"
						:key="item.id"
						:label="item.name"
						:value="item.id"
					/>
				</el-select>
			</el-form-item>
			<el-form-item label="所属目录" prop="menu">
				<el-select v-model="model.menu" clearable>
					<el-option
						v-for="item of menuList"
						:key="item.id"
						:label="item.name"
						:value="item.id"
					/>
				</el-select>
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
import { computed, defineEmit, ref } from "vue";
import { model, dialog, dataSet } from "../composables";

const rules = ref({
	url: { required: true, message: "请输入路径" },
});

const form = ref<ElFrom>();
const emiter = defineEmit(["close", "success"]);

const cancel = () => {
	form.value?.resetFields();
	dialog.value = false;
};

const save = async () => {
	const result = await form.value?.validate();
	if (result) emiter("success");
};

const directoryList = computed(() =>
	dataSet.value.filter((x) => x.type === "DIRECTORY")
);

const menuList = computed(() =>
	dataSet.value.filter(
		(x) =>
			x.type === "MENU" && x.parent.toString() === model.directory.toString()
	)
);
</script>

<style lang="less" scoped></style>
