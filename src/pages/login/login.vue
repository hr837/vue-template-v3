<template>
	<div
		class="full-page login flex-column align-items-center justify-content-center"
	>
		<LoginForm @validated="onLogin" />
	</div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import LoginForm from "./components/LoginForm.vue";
import type { LoginModel } from "./login.type";

const router = useRouter();

const onLogin = (model: LoginModel) => {
	router.push("/home");
};
</script>
