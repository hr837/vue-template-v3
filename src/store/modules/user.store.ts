import { Module } from "vuex";
import { RootState, UserState } from "../type";

const userModule: Module<UserState, RootState> = {
	namespaced: true,
	state: () => ({
		token: "",
		roleId: "",
		realName: "",
		username: "",
		resource: [],
		isManage: "NO",
		userId: "",
		status: "",
		phone: "",
		email: "",
		departId: "",
		departmentName: "",
	}),
	mutations: {
		/**
		 * 更新用户部门信息
		 * @param state
		 * @param udp
		 */
		updateUserInfo(state, userInfo: UserState) {
			// state.departmentId = userInfo.departmentId;
			// state.departmentName = userInfo.departmentName;
			// state.departmentCode = userInfo.departmentCode;
			state.token = userInfo.token;
			state.roleId = userInfo.roleId;
			state.realName = userInfo.realName;
			state.username = userInfo.username;
			state.resource = userInfo.resource;
			state.isManage = userInfo.isManage;
			state.userId = userInfo.userId;
		},
	},
};

export default userModule;
