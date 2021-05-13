<template>
	<el-dialog v-model="dialog" title="角色资源配置">
		<div v-loading="loadingStatus" class="role-resouce-pick flex-row">
			<div>
				<ContainerHeader title="资源数据" />
				<ResourceTree />
			</div>
		</div>
	</el-dialog>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import ContainerHeader from "@/components/common/ContainerHeader.vue";
import ResourceTree from "../components/ResourceTree.vue";
import { dialog, refreshData, loading } from "../composables/resource";

const loadingStatus = ref(false);

onMounted(() => {
	loading.status.subscribe((v) => (loadingStatus.value = v));
	refreshData();
});
</script>

<style lang="less" scoped></style>
