export class FilterService {
	/**
	 * 转换状态
	 * @param status
	 * @returns
	 */
	convertState(status: string) {
		let value = "";
		switch (status) {
			case "OFF":
				value = "禁用";
				break;
			case "ON":
				value = "启用";
				break;
		}
		return value;
	}
}
