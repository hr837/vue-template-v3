<template>
	<div class="component data-box">
		<el-table :data="data" border header-row-class-name="data-box_header">
			<el-table-column
				v-if="selection"
				type="selection"
				width="41"
				align="center"
			/>
			<el-table-column type="index" label="序号" align="center" width="45" />
			<!-- table columns slot -->
			<slot>
				<el-table-column
					label="please insert render columns in the scope"
					align="center"
					prop=""
				>
					--
				</el-table-column>
			</slot>
		</el-table>
	</div>
</template>

<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed, defineProps } from "vue";

const props = defineProps({
	data: {
		type: Array,
		required: true,
	},
	hiddenSelection: {
		type: Boolean,
	},
});

const selection = computed(() => !props.hiddenSelection);
</script>
