<template>
	<div class="component pagination">
		<el-pagination
			prev-text="上一页"
			:current-page="page.pageIndex"
			:page-sizes="page.pageSizeOpts"
			:page-size="page.pageSize"
			:layout="layout"
			:total="page.total"
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

const emiter = defineEmit(["pageChange"]);

const handleSizeChange = function (size: number) {
	props.page.pageIndex = 1;
	props.page.pageSize = size;
	emiter("pageChange");
};

const handleCurrentChange = function (index: number) {
	props.page.pageIndex = index;
	emiter("pageChange");
};
</script>
