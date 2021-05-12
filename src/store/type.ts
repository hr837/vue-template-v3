import { DepartmentInfo } from "@/types/department.interface";
import { UserBase, UserRole } from "@/types/user.interface";

/**
 * root state
 */
export interface RootState {
	loginTime: number;
	/**
	 * 当前路由 目录名称
	 */
	directory: string;
	dict: DictData;
}

export interface UserState extends UserBase, UserRole {
	token: string;
	departmentCode: string;
	departmentId: string;
	departmentName: string;
}

export interface DepartmentState {
	departmentList: DepartmentInfo[];
}

/**
 * 所有sotre state tree
 */
export interface AllState extends RootState {
	department: DepartmentState;
	user: UserState;
}
