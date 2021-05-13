<template>
	<div class="component data-box">
		<el-table
			ref="table"
			:data="data"
			style="width: 100%"
			border
			:height="height"
			header-row-class-name="data-box_header"
			:highlight-current-row="showHightRow"
			@select="emitSelection"
			@select-all="emitSelection"
			@current-change="onCurrentRowChange"
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
	currentRow: {
		type: Object,
	},
	height: {
		type: String,
	},
});

const emitter = defineEmit(["update:selectionRows", "update:currentRow"]);
const selection = computed(() => !props.hiddenSelection);

const emitSelection = (rows: any[], row: any) => {
	emitter("update:selectionRows", rows);
};

const table = ref();

watch(
	() => props.data,
	(rows) => {
		if (!rows) return;
		const filterRows = rows.filter((row) => props.selectionRows?.includes(row));
		emitter("update:selectionRows", filterRows);
	},
	{ deep: true }
);

watch(
	() => props.selectionRows || [],
	(rows) => {
		if (!props.data) return;
		if (!table.value) return;
		props.data.forEach((row) => {
			const checkFlag = rows.includes(row);
			table.value.toggleRowSelection(row, checkFlag);
		});
	},
	{ immediate: true }
);

const showHightRow = computed(() => !!props.currentRow);

// 点击某行
function onCurrentRowChange(newRow: any) {
	emitter("update:currentRow", newRow);
}

// 传入的选中行变化之后设置
watch(
	() => props.currentRow,
	(val) => {
		if (!table.value) return;
		table.value.setCurrentRow(val);
	},
	{ immediate: true }
);
</script>
