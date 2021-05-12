<template>
	<div class="component data-form">
		<el-form
			ref="form"
			:model="model"
			label-width="110px"
			label-suffix="︰"
			class="flex-row flex-wrap"
		>
			<slot>plase insert your form items</slot>
			<el-form-item class="form-action" label-width="0px">
				<el-button type="primary" @click="emitSearch">搜索</el-button>
				<el-button type="primary" plain @click="emitReset">重置</el-button>
				<slot name="action"></slot>
				<template v-if="showExpand">
					<el-button v-if="!hidden" type="text" @click="onCollapse">
						收起
						<i class="el-icon-d-arrow-left g-rotate-x1"></i>
					</el-button>
					<el-button v-else type="text" @click="onExpand">
						展开
						<i class="el-icon-d-arrow-left g-rotate-x3"></i>
					</el-button>
				</template>
			</el-form-item>
		</el-form>
	</div>
</template>

<script lang="ts" setup>
import { computed, defineEmit, defineProps, ref } from "vue";

defineProps({
	model: {
		type: Object,
		required: true,
	},
});

const emiter = defineEmit(["search", "reset"]);

const form = ref<ElFrom>();
const hidden = ref(false);

const formDom = computed(() => {
	return form.value?.$el;
});

const formItems = computed(() => {
	return formDom.value?.children;
});

const emitSearch = () => emiter("search");

function emitReset() {
	form.value?.resetFields();
	emiter("reset");
}

const showExpand = computed(() => {
	let show = false;
	if (!formDom.value) return show;
	const items = formItems.value;
	if (!items) return show;
	if (items.length < 2) return;
	const inputItems = Array.from(items);
	const containerWidth = formDom.value.clientWidth;
	let computedWidth = 0;

	for (const item of inputItems) {
		computedWidth += item.clientWidth;
		if (show) {
			break;
		}
		show = computedWidth > containerWidth;
	}
	return show;
});

/**
 * 收起多余的表单项
 */
const onCollapse = function () {
	if (!formDom.value) return;
	if (!formItems.value) return;
	const items = formItems.value;
	if (items.length < 2) return;
	const inputItems = Array.from(items);
	// 去除操作按钮
	inputItems.pop();
	// // 按钮宽度
	// const actionItemWidth = inputItems.pop()?.clientWidth;
	// if (!actionItemWidth) return;
	// 容器宽度
	const containerWidth = formDom.value.clientWidth;
	let computedWidth = 0;

	for (const item of inputItems) {
		computedWidth += item.clientWidth;
		if (computedWidth + item.clientWidth >= containerWidth) {
			item.classList.add("hidden");
		}
	}
	hidden.value = !hidden.value;
};

/**
 * 展开所有表单项
 */
const onExpand = function () {
	if (!formItems.value) return;
	Array.from(formItems.value).forEach((item) =>
		item.classList.remove("hidden")
	);
	hidden.value = !hidden.value;
};
</script>

<style lang="less">
.component.data-form {
	.el-form {
		gap: 16px 10px;
		.el-form-item {
			margin: 0;
		}
	}
	.form-action {
		padding-left: 40px;
	}
	.hidden {
		display: none;
	}
}
</style>
