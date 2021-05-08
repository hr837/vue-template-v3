<template>
	<div
		class="login-banner flex-column justify-content-center align-items-center"
	>
		<div class="login-banner_logo"></div>
		<p class="login-banner_name">统一贷后管理平台</p>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.login-banner {
	width: 361px;
	background: url("/images/login_banner.png") center / cover no-repeat;
	border-radius: 8px 0 0 8px;
	&_logo {
		width: 276px;
		height: 72px;
		background: url("/images/logo.png") center/contain;
	}
	&_name {
		font-size: 20px;
		margin-top: 37px;
		letter-spacing: 10px;
		font-weight: bold;
	}
}
</style>
