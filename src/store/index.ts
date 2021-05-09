import { createStore, Store, useStore } from "vuex";

import { App, InjectionKey } from "vue";
import createPersistedState from "vuex-persistedstate";
import { AllState, RootState } from "./type";
import rootStore from "./root.store";
// modules
import departmentModule from "./modules/department.store";
import userModule from "./modules/user.store";

const key: InjectionKey<Store<RootState>> = Symbol();

/**
 * 以模块方式调用的sotre
 */
export const store = createStore<RootState>({
	...rootStore,
	modules: {
		department: departmentModule,
		user: userModule,
	},
	plugins: [createPersistedState()],
}) as Store<AllState>;

export const getStore = () => useStore<AllState>(key);

/**
 * 使用store
 * @param app
 */
export function useVuex(app: App) {
	app.use(store, key);
}
