<template>
	<div class="component data-form">
		<el-form
			ref="form"
			:model="model"
			inline
			label-width="110px"
			label-suffix="︰"
		>
			<slot>plase insert your form items</slot>
			<el-form-item class="form-action">
				<el-button type="primary" @click="emitSearch">搜索</el-button>
				<el-button type="primary" plain @click="emitReset">重置</el-button>
				<slot name="action">
					<el-button v-if="!hidden" type="text" @click="onCollapse">
						收起
						<i class="el-icon-d-arrow-left g-rotate-x1" />
					</el-button>
					<el-button v-else type="text" @click="onExpand">
						展开
						<i class="el-icon-d-arrow-left g-rotate-x3" />
					</el-button>
				</slot>
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

const formDom = computed<Element>(() => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (form.value as any).$el;
});

const formItems = computed(() => {
	return formDom.value.children;
});

const emitSearch = () => emiter("search");

const emitReset = function () {
	form.value?.resetFields();
	emiter("reset");
};

/**
 * 收起多余的表单项
 */
const onCollapse = function () {
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
	Array.from(formItems.value).forEach((item) =>
		item.classList.remove("hidden")
	);
	hidden.value = !hidden.value;
};
</script>

<style lang="less">
.component.data-form {
	.form-action {
		padding-left: 40px;
	}
	.hidden {
		display: none;
	}
}
</style>
