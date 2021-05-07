<template>
	<el-form ref="form" class="login-form" :model="model" :rules="rules">
		<el-form-item prop="uname">
			<el-input v-model="model.uname" />
		</el-form-item>
		<el-form-item prop="pwd">
			<el-input v-model="model.pwd" type="password" />
		</el-form-item>
	</el-form>
	<el-button class="login-button" type="primary" @click="submit">
		登录
	</el-button>
</template>

<script lang="ts" setup>
import { ref, defineEmit } from "vue";
import { rules, model } from "./login-form.data";

const emit = defineEmit(["validated"]);

const form = ref<ElFrom>();

const submit = async function submit() {
	const result = await form.value?.validate();
	if (!result) return;
	emit("validated", model.value);
};
</script>

<style lang="less" scoped>
@width: 400px;
.login-form {
	width: @width;
}
.login-button {
	width: @width;
}
</style>
