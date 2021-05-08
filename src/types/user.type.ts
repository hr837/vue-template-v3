/**
 * 用户基本信息
 */
export interface UserBase {
	/**
	 * 用户名
	 */
	userName: string;
	userId: string;
	/**
	 * 姓名
	 */
	realName: string;
}

/**
 * 用户角色信息
 */
export interface UserRole {
	roleId: string[];
	isManage: "YES" | "NO";
	resource: number[];
	userId: string;
}
