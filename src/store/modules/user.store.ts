import { Module } from "vuex";
import { RootState, UserState } from "../type";

const userModule: Module<UserState, RootState> = {
	namespaced: true,
	state: {
		departmentId: "",
		departmentName: "",
		departmentCode: "",
		token: "",
		roleId: [],
		realName: "",
		userName: "",
		resource: [],
		isManage: "NO",
		userId: "",
	},
	mutations: {
		/**
		 * 更新用户部门信息
		 * @param state
		 * @param udp
		 */
		updateUserInfo(state, userInfo: UserState) {
			state.departmentId = userInfo.departmentId;
			state.departmentName = userInfo.departmentName;
			state.departmentCode = userInfo.departmentCode;
			state.token = userInfo.token;
			state.roleId = userInfo.roleId;
			state.realName = userInfo.realName;
			state.userName = userInfo.userName;
			state.resource = userInfo.resource;
			state.isManage = userInfo.isManage;
			state.userId = userInfo.userId;
		},
	},
};

export default userModule;
