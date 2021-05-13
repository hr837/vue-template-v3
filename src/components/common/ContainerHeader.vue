<template>
	<div
		class="component container-title flex-row justify-content-between align-items-center"
	>
		<div class="flex align-items-center container-title_info">
			<div v-if="showIcon">
				<slot name="icon">
					<i class="el-icon-s-operation g-c-primary"></i>
				</slot>
			</div>

			<span class="custom-card-header">{{ title }}</span>
		</div>
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "@vue/runtime-core";

const props = defineProps({
	title: {
		type: String,
		default: "标题",
	},
	hiddenIcon: {
		type: Boolean,
	},
});

const showIcon = computed(() => !props.hiddenIcon);
</script>

<style lang="less" scoped>
.container-title {
	height: 40px;
	background-color: #dadada;
	padding: 0 5px;
	border-radius: 4px;
	&_info {
		font-size: 16px;
		font-weight: bold;
	}
}
</style>
