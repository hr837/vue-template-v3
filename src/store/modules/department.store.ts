import { DepartmentInfo } from "@/types/department.interface";
import { Module } from "vuex";
import { DepartmentState, RootState } from "../type";

import { RequestParams } from "@gopowerteam/http-request";
import { firstValueFrom } from "rxjs";
import { CommonService } from "@/utils/common.service";

const createDepartmentService = () => import("@/services/department.service");

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
			console.log("mutation");
			state.departmentList = list;
		},
	},
	actions: {
		async refreshDeptData({ commit }) {
			const { DepartmentService } = await createDepartmentService();
			const service = new DepartmentService();
			return firstValueFrom(service.query(new RequestParams())).then((data) => {
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
		 * 根据ID查询父级部门信息
		 * @param state
		 * @returns
		 */
		queryParentDepartment(state) {
			return (departentId: string) => {
				return state.departmentList.find((x) => x.parentId === departentId);
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
