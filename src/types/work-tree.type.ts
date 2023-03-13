export interface TreeData {
  name: string
  /** 子路径 */
  path?: string
  /** 子元素 */
  children?: TreeData[]
}

export interface MenuData extends TreeData {
  /** 菜单图标 */
  icon?: string
}
