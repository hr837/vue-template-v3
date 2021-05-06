<template>
	<transition name="el-zoom-in-center">
		<i class="menu-action g-c-gray" :class="iconName" @click="emitCollapse"></i>
	</transition>
</template>
<script lang="ts" setup>
import { computed, defineProps, defineEmit } from "vue";

const props = defineProps({
	modelValue: {
		type: Boolean,
		required: true,
	},
});

const emit = defineEmit(["update:modelValue"]);

const emitCollapse = function () {
	emit("update:modelValue", !props.modelValue);
};
const iconName = computed(() => {
	return props.modelValue ? "el-icon-s-unfold" : "el-icon-s-fold";
});
</script>

<style lang="less" scoped>
.menu-action {
	margin: 0 22px;
	font-size: 22px;
}
</style>
