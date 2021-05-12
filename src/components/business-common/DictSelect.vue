<template>
	<el-select v-model="currentDict" class="component dict-select" clearable>
		<el-option
			v-for="({ value, code }, index) in list"
			:key="index"
			:label="value"
			:value="code"
		/>
	</el-select>
</template>

<script lang="ts" setup>
import { DictService } from "@/utils/dict.service";
import { computed, defineEmit, defineProps } from "@vue/runtime-core";

const props = defineProps({
	dictName: {
		type: String,
		required: true,
	},
	modelValue: {
		type: String,
		required: true,
	},
});

const emiter = defineEmit(["update:modelValue"]);

const currentDict = computed({
	get: () => props.modelValue,
	set: (value) => emiter("update:modelValue", value),
});

const list = computed(() => {
	if (!props.dictName) return [];
	return DictService.getDictData(props.dictName);
});
</script>
