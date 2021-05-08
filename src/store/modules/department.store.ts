import { DepartmentInfo } from "@/types/department.type";
import { Module } from "vuex";
import { DepartmentState, RootState } from "../type";

const departmentModule: Module<DepartmentState, RootState> = {
	namespaced: true,
	state: {
		departmentList: [
			{
				departCode: "oooooo",
				id: "1",
				level: 0,
				name: "东风财务",
				status: "ON",
			},
		],
	},
	mutations: {
		updateDepartmentList(state, list: DepartmentInfo[]) {
			state.departmentList = list;
		},
	},
};

export default departmentModule;
