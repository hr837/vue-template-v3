<template>
	<div class="component pagination">
		<el-pagination
			prev-text="上一页"
			:current-page="page.pageIndex.value"
			:page-sizes="page.pageSizeOpts"
			:page-size="page.pageSize.value"
			:layout="layout"
			:total="page.total.value"
			next-text="下一页"
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
		></el-pagination>
	</div>
</template>

<script lang="ts" setup>
import { defineEmit, defineProps } from "vue";
import { PageService } from "@/bootstrap/services/page.service";

const props = defineProps({
	page: {
		type: PageService,
		required: true,
	},
	layout: {
		type: String,
		default: "total, sizes, prev, pager, next, jumper",
	},
});

const emiter = defineEmit(["page-change"]);

const handleSizeChange = function (size: number) {
	props.page.pageIndex.value = 0;
	props.page.pageSize.value = size;
	emiter("page-change");
};

const handleCurrentChange = function (index: number) {
	props.page.pageIndex.value = index;
	emiter("page-change");
};
</script>
