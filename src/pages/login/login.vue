<template>
	<div class="full-page login flex justify-content-center align-items-center">
		<div class="login_container flex">
			<LoginBanner />
			<LoginForm class="login_container-form" @validated="onLogin" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import LoginForm from "./components/LoginForm.vue";
import { login } from "./composables";
import LoginBanner from "./components/LoginBanner.vue";

const router = useRouter();

async function onLogin() {
	const result = await login();
	if (result) {
		router.replace("/home");
	}
}
</script>

<style lang="less" scoped>
.login {
	background: url("/images/login_bg.png") center / cover no-repeat;
	&_container {
		background: #fff;
		box-shadow: 0px 3px 8px 2px rgba(122, 122, 122, 0.1);
		border-radius: 8px;
		height: 447px;
	}
}
</style>
