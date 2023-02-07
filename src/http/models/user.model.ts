export interface UserModel {
  id: string
  /**
   * 创建日期
   */
  createdAt: string
  /**
   * 更新日期
   */
  updatedAt: string
  /**
   * 用户名
   */
  username: string
  /**
   * 姓名
   */
  realname: string
}

export type QueryUserInput = Pick<UserModel, 'username' | 'createdAt'>

export interface RoleModel {
  /**
   * 角色名称
   */
  roleName?: string
  /**
   * 启用状态
   */
  status?: string
  /**
   * 备注
   */
  remark: string
  /**
   * 操作时间
   */
  createTime: string

}

export type QueryRoleInput = Omit<RoleModel, 'remark' | 'createTime'>

export interface DataType {
  /**
   * 时间
   */
  date: string
  /**
   * 名称
   */
  name: string
  /**
   * 创建时间
   */
  createTime?: string
}

export interface LoginInput {
  /**
   * 用户名
   */
  loginName: string
  /**
   * 密码
   */
  password: string

}
