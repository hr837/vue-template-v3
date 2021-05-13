<template>
	<div class="resource-controls">
		<ContainerHeader titile="按钮资源"></ContainerHeader>
		<DataBox
			v-model:selectionRows="selectionRows"
			:data="dataSet"
			height="500px"
		>
			<el-table-column label="按钮名称" prop="name"></el-table-column>
			<el-table-column
				label="说明"
				prop="description"
				show-overflow-tooltip
			></el-table-column>
		</DataBox>
	</div>
</template>

<script lang="ts" setup>
import { computed, defineEmit, defineProps } from "vue";
import { controlResource, pickedControlIds } from "../composables/resource";

const props = defineProps({
	currentMenu: {
		type: Number,
	},
});

const emitter = defineEmit(["control-checked"]);

const dataSet = computed(() => {
	if (!controlResource.value) return [];
	return controlResource.value.filter((x) => x.parent === props.currentMenu);
});

const selectionRows = computed({
	get: () => {
		return dataSet.value.filter((x) => pickedControlIds.value.includes(x.id));
	},
	set: (value) => {
		if (value.length) emitter("control-checked");
		const ketSet = new Set(pickedControlIds.value);
		dataSet.value.forEach((r) =>
			value.includes(r) ? ketSet.add(r.id) : ketSet.delete(r.id)
		);
		pickedControlIds.value = Array.from(ketSet);
	},
});
</script>

<style lang="less" scoped></style>
