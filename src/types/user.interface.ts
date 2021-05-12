/**
 * 用户基本信息
 */
export interface UserBase {
	/**
	 * 用户名
	 */
	username: string;
	userId: string;
	/**
	 * 姓名
	 */
	realName: string;

	isManage: string;
	departId: string;
}

/**
 * 用户角色信息
 */
export interface UserRole {
	roleId: string;
	resource: number[];
	userId: string;
}

/**
 * 用户信息
 */
export interface UserInfo extends UserBase {
	status: string;
	phone: string;
	email: string;
}

/**
 * 用户信息
 */
export interface UserListItem extends UserInfo {
	roleId: string;
	id: string;
}
