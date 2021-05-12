<template>
	<el-switch
		v-model="currentDict"
		class="component dict-switch"
		:active-text="activeSetting.value"
		:active-value="activeSetting.code"
		:inactive-text="inactiveSetting.value"
		:inactive-value="inactiveSetting.code"
	></el-switch>
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

const activeSetting = computed(() => list.value[0]);
const inactiveSetting = computed(() => list.value[1]);
</script>
