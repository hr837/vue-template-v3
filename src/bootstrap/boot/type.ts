export type ReqType<T> = {
	/**
	 * 状态码
	 */
	code: number;
	data: T;
	/**
	 * 错误消息描述
	 */
	msg: string;
};

/**
 * 带分页的查询
 */
export type PageData<T> = {
	total: number;
	pages: number;
	items: T[];
};
