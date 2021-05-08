import { StoreOptions } from "vuex";
import type { RootState } from "./type";

const rootStore: StoreOptions<RootState> = {
	state: {
		loginTime: 0,
	},
	mutations: {
		updateLoginTime(state, timeSpan: number) {
			state.loginTime = timeSpan;
		},
	},
	actions: {},
	getters: {},
};

export default rootStore;
