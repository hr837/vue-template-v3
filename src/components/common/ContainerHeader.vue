<template>
	<div
		class="component container-title flex-row justify-content-between align-items-center"
	>
		<div class="flex align-items-center">
			<div v-if="showIcon">
				<slot name="icon">
					<i class="el-icon-s-operation"></i>
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

const showIcon = computed(
	() => props.hiddenIcon === undefined || props.hiddenIcon
);
</script>
