<template>
	<el-image
		style="width: 160px; height: 42px"
		:src="logoUrl"
		fit="contain"
	></el-image>
	<el-divider class="divider-line" direction="vertical"></el-divider>
	<h3 class="sys-name">
		{{ sysName }}
	</h3>
</template>

<script lang="ts" setup>
import faker from "faker";

const logoUrl = faker.image.technics(324, 84);
const sysName = import.meta.env.VITE_APP_NAME;
</script>

<style lang="less" scoped>
.divider-line {
	height: 2em;
	color: #e5e5e5;
}
</style>
