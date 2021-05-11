/**
 * 部门信息
 */
export interface DepartmentInfo {
	level: number;
	status: "OFF" | "ON";
	departCode: string;
	id: string;
	name: string;
	parent?: string;
}
