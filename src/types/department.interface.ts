/**
 * 部门信息
 */
export interface DepartmentInfo {
	level: number;
	status: EnableStatus;
	departCode: string;
	id: string;
	name: string;
	parentId?: string;
}
