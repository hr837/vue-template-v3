<template>
	<router-view></router-view>
</template>

<script lang="ts" setup>
import { onMounted, watch } from "vue";
import { getStore } from "./store";
import WaterMark from "watermark-dom";

const store = getStore();

watch(
	() => store.state.user.token,
	(value: string) => {
		if (!value) {
			WaterMark.load({ watermark_txt: " " });
		} else {
			const { departmentName, userName, realName } = store.state.user;
			const markText = `${departmentName} ${userName} ${realName}`;
			WaterMark.init({
				watermark_txt: markText,
				watermark_fontsize: "11px",
				watermark_alpha: 0.08,
			});
		}
	},
	{
		immediate: true,
	}
);
</script>
