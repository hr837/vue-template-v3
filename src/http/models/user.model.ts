export type UserModel = {
	id: string;
	/**
	 * 创建日期
	 */
	createdAt: string;
	/**
	 * 更新日期
	 */
	updatedAt: string;
	/**
	 * 用户名
	 */
	username: string;
	/**
	 * 姓名
	 */
	realname: string;
};

export type QueryUserInput = Pick<UserModel, "username" | "createdAt">;

export type RoleModel = {
	/**
	 * 角色名称
	 */
	roleName?: string;
	/**
	 * 启用状态
	 */
	status?: string;
	/**
	 * 备注
	 */
	remark: string;
	/**
	 * 操作时间
	 */
	createTime: string;

}

export type QueryRoleInput = Omit<RoleModel, 'remark' | 'createTime'>