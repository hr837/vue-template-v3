import validator from "async-validator";

export class ValidatorService {
	/**
	 * 自定义验证器
	 * @param data
	 * @param descriptor
	 * @param callback
	 */
	static validate(data: any, descriptor: any) {
		const schema = new validator(descriptor);
		const process = new Promise((reslove, reject) => {
			schema.validate(data, undefined, (errors, fields) => {
				// 验证失败
				if (errors) {
					reject({
						errors,
						fields,
					});
				}
				// 验证成功
				reslove(true);
			});
		});
		return process;
	}

	// 验证正则列表
	static regex = {
		// 手机号
		phoneNumber: /^1[3456789]\d{9}$/,
		// 身份证
		idCard: /(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$)|(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)/,
		// 金额
		money: /(^[1-9](\d+)?(\.\d{1,2})?$)|(^(0){1}$)|(^\d\.\d{1,2}?$)/,
		// 电话号
		callNumber: /(^\d{7}|\d{4}-\{7,8}$)/,
		//只输入数字
		allNumber: /[^\d]/g,
		// 中文姓名
		chineseName: /^[\u4E00-\u9FA5A-Za-z\s]+(·[\u4E00-\u9FA5A-Za-z]+)*$/,
	};

	/**
	 * 验证中文姓名
	 */
	static chineseName(rule: any, value: any, callback: (err?: Error) => void) {
		if (ValidatorService.regex.chineseName.test(value) || !value) {
			callback();
		} else {
			callback(new Error("请输入正确的姓名"));
		}
	}

	/**
	 * 验证手机号
	 */
	static phoneNumber(rule: any, value: any, callback: (err?: Error) => void) {
		if (ValidatorService.regex.phoneNumber.test(value) || !value) {
			callback();
		} else {
			callback(new Error("请输入正确的手机号"));
		}
	}
	/**
	 * 验证电话号
	 */
	static callNumber(rule: any, value: any, callback: (err?: Error) => void) {
		if (ValidatorService.regex.callNumber.test(value) || !value) {
			callback();
		} else {
			callback(new Error("请输入正确的电话号"));
		}
	}
	/**
	 * 验证数字
	 */
	static allNumber(rule: any, value: any, callback: (err?: Error) => void) {
		if (ValidatorService.regex.allNumber.test(value) || !value) {
			callback(new Error("请输入数字"));
		} else {
			callback();
		}
	}

	/**
	 * 验证身份证
	 */
	static idCard(rule: any, value: any, callback: (err?: Error) => void) {
		if (ValidatorService.regex.idCard.test(value) || !value) {
			callback();
		} else {
			callback(new Error("请输入正确的身份证号码"));
		}
	}

	/**
	 * 验证金额
	 */
	static money(rule: any, value: any, callback: (err?: Error) => void) {
		if (ValidatorService.regex.money.test(value) || !value) {
			callback();
		} else {
			callback(new Error("请输入正确格式的金额"));
		}
	}

	static empty(rule: any, value: any, callback: (err?: Error) => void) {
		callback();
	}

	static dynamicVerification(type: string) {
		switch (type) {
			case "STRING":
				return this.chineseName;
				break;
			case "INTEGER":
				return this.allNumber;
				break;
			case "DOUBLE":
				return this.money;
				break;
			case "phoneNumber":
				return this.phoneNumber;
				break;
			case "":
				return this.empty;
		}
	}
}
