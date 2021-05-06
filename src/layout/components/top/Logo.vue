<template>
	<el-image
		style="width: 160px; height: 42px"
		src="/images/logo.png"
		fit="contain"
	></el-image>
	<el-divider class="divider-line" direction="vertical"></el-divider>
	<div class="sys-name g-c-black">
		{{ sysName }}
	</div>
</template>

<script lang="ts" setup>
import faker from "faker";

const logoUrl = faker.image.technics(324, 84);
const sysName = import.meta.env.VITE_APP_NAME;
</script>

<style lang="less" scoped>
.divider-line {
	height: 1.5em;
	color: #e5e5e5;
}
.sys-name {
	font-size: 18px;
	font-weight: bold;
}
</style>
