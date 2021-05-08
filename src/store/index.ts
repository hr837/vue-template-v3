import { createStore, Store, useStore } from "vuex";

import { App, InjectionKey } from "vue";
import { RootState } from "./type";
import rootStore from "./root.store";
// modules
import departmentModule from "./modules/department.store";
import userModule from "./modules/user.store";

const key: InjectionKey<Store<RootState>> = Symbol();

const store = createStore<RootState>({
	...rootStore,
	modules: {
		department: departmentModule,
		user: userModule,
	},
	plugins: [],
});

export function getStore(module?: string) {
	return useStore(module || key);
}

/**
 * 使用store
 * @param app
 */
export function useVuex(app: App) {
	app.use(store, key);
}
