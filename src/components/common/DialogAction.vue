<template>
	<div
		class="components operater-buttons flex justify-content-end m-t-20 p-r-20"
	>
		<slot>
			<el-button @click="cancel">取消</el-button>
			<el-button :loading="loading" type="primary" @click="save">
				保存
			</el-button>
		</slot>
	</div>
</template>

<script lang="ts" setup>
import { defineEmit, defineProps } from "vue";

defineProps({
	loading: {
		type: Boolean,
	},
});

const emiter = defineEmit(["cancel", "save"]);
const cancel = () => emiter("cancel");
const save = () => emiter("save");
</script>

<style lang="less" scoped></style>
