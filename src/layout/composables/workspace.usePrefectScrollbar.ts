import { watch, ref, computed, onMounted, onUnmounted } from "vue";
import PerfectScrollbar from "perfect-scrollbar";

export const container = ref<unknown>(null);

let ps: PerfectScrollbar;
const height = computed(() => {
	if (container.value) {
		return (container.value as HTMLDivElement).scrollHeight;
	} else {
		return 0;
	}
});
watch(
	height,
	(value) => {
		console.log(value);
		ps?.update();
	},
	{ immediate: true }
);

onMounted(() => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const el = (container.value as any).$el;
	ps = new PerfectScrollbar(el);
});

onUnmounted(() => {
	// 需要销毁实例
	// 考虑退出、案件详情页等页面再次返回该布局的情况
	ps?.destroy();
});
