import { DepartmentInfo } from "@/types/department.type";
import { UserBase, UserRole } from "@/types/user.type";

/**
 * root state
 */
export interface RootState {
	loginTime: number;
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
