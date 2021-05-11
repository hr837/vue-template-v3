import { DepartmentInfo } from "@/types/department.interface";
import { Module } from "vuex";
import { DepartmentState, RootState } from "../type";
import { DepartmentService } from "@/services/department.service";
import { RequestParams } from "@gopowerteam/http-request";
import { firstValueFrom } from "rxjs";
import { CommonService } from "@/utils/common.service";

const service = new DepartmentService();

const departmentModule: Module<DepartmentState, RootState> = {
	namespaced: true,
	state: () => ({
		departmentList: [
			{
				departCode: "oooooo",
				id: "1",
				level: 0,
				name: "东风财务",
				status: "ON",
			},
		],
	}),
	mutations: {
		updateDepartmentList(state, list: DepartmentInfo[]) {
			state.departmentList = list;
		},
	},
	actions: {
		refreshDeptData({ commit }) {
			return firstValueFrom(service.query(new RequestParams())).then((data) => {
				commit("updateDepartmentList", data);
				return true;
			});
		},
	},
	getters: {
		/**
		 * 根据ID查询部门信息
		 * @param state
		 * @returns
		 */
		queryDepartmentInfo(state) {
			return (departentId: string) => {
				return state.departmentList.find((x) => x.id === departentId);
			};
		},
		/**
		 * 根据ID查询部门信息
		 * @param state
		 * @returns
		 */
		queryParmentDepartment(state) {
			return (departentId: string) => {
				return state.departmentList.find((x) => x.parent === departentId);
			};
		},
		/**
		 * 部门树数据
		 * @param state
		 * @returns
		 */
		departmentTreeData(state) {
			return CommonService.generateTreeData(state.departmentList, {
				keyName: "id",
				parentKeyName: "parentId",
			});
		},
	},
};

export default departmentModule;
