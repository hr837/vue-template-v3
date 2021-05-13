<template>
	<el-dialog v-model="dialog" title="角色资源配置" width="900px">
		<div v-loading="loadingStatus" class="role-resouce-pick flex-row">
			<ResourceTree v-model="currentMenu" @checked-change="onCheckedChange" />
			<ResourceControls
				class="m-l-default flex-auto"
				@control-checked="onControlChecked"
			/>
		</div>
		<DialogAction @cancel="onCancel" @save="onSave" />
	</el-dialog>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import ResourceTree from "../components/ResourceTree.vue";
import {
	dialog,
	refreshData,
	loading,
	pickedMemuIds,
	pickedControlIds,
	controlResource,
	saveRoleResource,
} from "../composables/resource";
import ResourceControls from "../components/ResourceControls.vue";
import { ElMessage } from "element-plus";

const loadingStatus = ref(false);
const currentMenu = ref(-1);

onMounted(() => {
	loading.status.subscribe((v) => (loadingStatus.value = v));
	refreshData();
});

function onControlChecked() {
	// 按钮有选中的，则节点应该被勾选
	if (pickedMemuIds.value.includes(currentMenu.value)) {
		pickedMemuIds.value.push(currentMenu.value);
	}
}

// 树节点勾选发生变化的时候，
function onCheckedChange(value: number[]) {
	// 因计算勾选的节点，并没有明确的需求说明按钮之前的选中状态如何处置
	// 故按钮勾选重新计算, 节点被勾选，则按钮全选
	pickedControlIds.value = controlResource.value
		.filter((control) => value.includes(control.parent))
		.map((x) => x.id);
	pickedMemuIds.value = value;
}

function onCancel() {
	pickedControlIds.value = [];
	pickedMemuIds.value = [];
	currentMenu.value = -1;
	dialog.value = false;
}

function onSave() {
	saveRoleResource().subscribe({
		next: () => {
			ElMessage.success("操作成功");
			onCancel();
		},
	});
}
</script>
