/**
 * 公共函数
 */
export class CommonService {
	/**
	 * 对象赋值
	 * @param target
	 * @param resource
	 */
	public static revertData(target: any, resource: any) {
		if (!target || !resource) return;
		Object.keys(target).forEach((key) => {
			const value = resource[key];
			if (!value) return;
			if (target[key] instanceof Array) {
				target[key] = value.map((v: any) => ({ ...v }));
			}
			if (typeof target[key] === "string") {
				target[key] = value;
			}
		});
	}

	/**
	 * 生成树型结构数据
	 * @param sourceList 包含id 和 pid 的线性数据
	 * @param options 数据项配置 配置 keyName: 主键名称,parentKeyName: 父级键名称
	 */
	public static generateTreeData(
		sourceList: any[],
		options?: { keyName: string; parentKeyName: string; sortKey?: string }
	): any[] {
		if (!sourceList) {
			return [];
		}

		// key
		const keyName = options ? options.keyName : "id";
		// parentKey
		const parentKeyName = options ? options.parentKeyName : "pid";
		// sort
		const sortKeyName = options ? options.sortKey : undefined;
		/**
		 * 用当前节点去生成他的children节点
		 * @param any node
		 */
		const fun = (node: any) => {
			// 用找到的孩子节点去递归查找孙子节点
			let children = sourceList.filter(
				(x) => x[parentKeyName] === node[keyName]
			);
			if (sortKeyName) {
				children = children.sort((e1, e2) => e1[sortKeyName] - e2[sortKeyName]);
			}

			if (children.length) {
				node.children = children;
				children.map(fun);
			}
			return node;
		};
		// 如果有排序则根据排序键进行排序
		let rootList = CommonService.findRoot(sourceList, keyName, parentKeyName);

		if (sortKeyName) {
			rootList = rootList.sort((e1, e2) => e1[sortKeyName] - e2[sortKeyName]);
		}
		const treeData = rootList.map(fun);
		return treeData;
	}

	/**
	 * 查找数据源的所有根节点
	 * @param dataList 要查找的数据
	 * @param keyName 节点ID 标识
	 * @param parentKey 节点父ID 标识
	 */
	private static findRoot(
		dataList: any[],
		keyName: string,
		parentKey: string
	): any[] {
		const resultList = dataList.filter((x) => !x[parentKey]);

		dataList.filter((x) => !!x[parentKey]).forEach(findParent);

		/**
		 * 递归找最终的root节点
		 * @param 要去查找的节点
		 */
		function findParent(currentNode: any) {
			/**
			 * 用父ID去找自己的父亲节点
			 * 如果找到说明这个节点不是最终的祖先节点
			 * 否则这个节点就是祖先节点
			 */
			const parent = dataList.find(
				(k) => k[keyName] === currentNode[parentKey]
			);
			if (!parent) {
				if (resultList.indexOf(currentNode) < 0) {
					resultList.push(currentNode);
				}
			} else {
				findParent(parent);
			}
		}

		return resultList;
	}
}
