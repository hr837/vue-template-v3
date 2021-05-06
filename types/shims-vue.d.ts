declare module "*.vue" {
	import { DefineComponent } from "vue";
	/** eslint-ignore */
	const component: DefineComponent<{}, {}, any>;
	export default component;

	interface ElForm {
		validate: () => Promise<boolean>;
	}
}
