/**
 * 系统菜单
 */

export interface MenuItem {
	icon: string;
	id: number;
	level: number;
	name: string;
	parent: number;
	sort: number;
	/**
	 * 菜单类型
	 * DIRECTORY：目录
	 * MENU：菜单
	 * CONTROL：控件
	 */
	type: "DIRECTORY" | "MENU" | "CONTROL";
	/**
	 * 对应前端路由
	 */
	url: string;
}
