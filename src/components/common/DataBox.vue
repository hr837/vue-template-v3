<template>
	<div class="component data-box">
		<el-table
			ref="table"
			:data="data"
			border
			header-row-class-name="data-box_header"
			@select="emitSelection"
			@select-all="emitSelection"
		>
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
import { computed, defineEmit, defineProps, watch, ref } from "vue";

const props = defineProps({
	data: {
		type: Array,
		required: true,
	},
	hiddenSelection: {
		type: Boolean,
	},
	selectionRows: {
		type: Array,
	},
});

const emiter = defineEmit(["update:selectionRows"]);
const selection = computed(() => !props.hiddenSelection);

const emitSelection = (rows: any[], row: any) => {
	emiter("update:selectionRows", rows);
};

const table = ref();

watch(
	() => props.data,
	(rows) => {
		const filterRows = rows.filter((row) => props.selectionRows?.includes(row));
		emiter("update:selectionRows", filterRows);
	},
	{ deep: true }
);

watch(
	() => props.selectionRows || [],
	(rows) => {
		if (!table.value) return;
		props.data.forEach((row) => {
			const checkFlag = rows.includes(row);
			table.value.toggleRowSelection(row, checkFlag);
		});
	},
	{ immediate: true }
);
</script>
