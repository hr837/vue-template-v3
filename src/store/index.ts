import { createStore, Store, useStore as baseUseStore } from "vuex";

import { App } from "vue";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import { InjectionKey } from "@vue/runtime-core";
import { State } from "./types";

const key: InjectionKey<Store<State>> = Symbol();

const store = createStore<State>({
	state,
	mutations,
	actions,
	getters,
	modules: {},
	plugins: [],
});

export function getStore() {
	return baseUseStore(key);
}

/**
 * 使用store
 * @param app
 */
export function useStore(app: App) {
	app.use(store, key);
}
