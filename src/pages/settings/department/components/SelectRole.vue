<template>
	<el-dialog v-model="dialog" title="角色选择">
		<DataBox v-model:current-row="currentRow" :data="dataSet" hidden-selection>
			<el-table-column label="角色名称" prop="name"></el-table-column>
			<el-table-column label="角色描述" prop="description"></el-table-column>
			<el-table-column
				label="状态"
				prop="status"
				:formatter="(row) => $filter.dictConvert(row.status, 'BaseStatus')"
			></el-table-column>
		</DataBox>
		<DialogAction :loading="loadingStatus" @cancel="onCancel" @save="onSave" />
	</el-dialog>
</template>

<script lang="ts" setup>
import { defineEmit, onMounted, ref, watch } from "vue";
import {
	dialog,
	roleId,
	refreshData,
	save,
	dataSet,
	loading,
} from "../composables/user-role";
import { ElMessage } from "element-plus";
import type { RoleInfo } from "@/types/role.interface";

const emitter = defineEmit(["selected"]);

const currentRow = ref<RoleInfo>();
const loadingStatus = ref(false);

onMounted(() => {
	refreshData();
	loading.status.subscribe((v) => (loadingStatus.value = v));
});

watch(
	roleId,
	(value) => {
		currentRow.value = dataSet.value.find((x) => x.id === value);
	},
	{ immediate: true }
);

function onCancel() {
	currentRow.value = undefined;
	dialog.value = false;
}

function onSave() {
	if (!currentRow.value) {
		ElMessage("请选择要分配的角色");
		return;
	}
	save(currentRow.value.id).subscribe({
		next: () => {
			ElMessage.success("操作成功");
			dialog.value = false;
			emitter("selected");
		},
	});
}
</script>
