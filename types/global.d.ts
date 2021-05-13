interface Window {
	appConfig: any;
}

/**
 * 启用状态
 */
type EnableStatus = "OFF" | "ON";
/**
 * 是否状态
 */
type YesNo = "YES" | "NO";

interface DictData {
	[key: string]: DictItem[];
}
interface DictItem {
	/**
	 * 英文code
	 */
	code: string;
	/**
	 * 中文汉字
	 */
	value: string;
}

/**
 * 资源类型
 */
type ResourceType = "DIRECTORY" | "MENU" | "CONTROL";
