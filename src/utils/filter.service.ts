import { DictService } from "./dict.service";

export class FilterService {
	/**
	 * 转换字典数据
	 * @param 字典code
	 */
	dictConvert(code: string, key: string) {
		if (!code || !key) {
			return "";
		}
		return DictService.getDictName(code, key);
	}
}
