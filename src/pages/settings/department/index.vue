<template>
	<div class="page department">
		<QueryForm />
		<div class="g-container">
			<DataBoxActions>
				<template #buttons>
					<el-button type="primary">按钮一</el-button>
					<el-button type="primary">按钮二</el-button>
					<el-button type="primary">按钮三</el-button>
				</template>
				<template #append>
					<el-button type="primary">按钮一</el-button>
					<el-button type="primary">按钮二</el-button>
					<el-button type="primary">按钮三</el-button>
				</template>
			</DataBoxActions>
			<DepratmentList />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import QueryForm from "./components/QueryForm.vue";
import DepratmentList from "./components/DepratmentList.vue";
import { emitter } from "./composables";

emitter.on("search", (data) => {
	console.log(data);
});
</script>
