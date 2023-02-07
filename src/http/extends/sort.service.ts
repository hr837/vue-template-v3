import type { RequestPlugin, RequestSendOptions } from '@gopowerteam/request'
/**
 * 排序方式
 */
export const OrderSetting = {
  ascending: 'asc',
  descending: 'desc',
}

export type OrderType = keyof typeof OrderSetting

export class SortService implements RequestPlugin {
  sort: any = {}

  constructor(data?: any) {
    if (data)
      this.sort = data
  }

  /**
   * 更新排序
   * @param key 排序关键字
   * @param value 排序方式
   */
  update(key: string, value: OrderType) {
    this.sort = {}
    if (key && value)
      this.sort[key] = OrderSetting[value]
  }

  /**
   * 移除排序项
   * @param key 排序关键字
   */
  remove(key: string) {
    // 过滤
    const items: any[] = Object.keys(this.sort).filter(k => k !== key) as any[]

    this.sort = {}

    // 判断排序项是否存在
    if (items) {
      items.forEach(([k, v]) => {
        this.sort[k] = v
      })
    }
  }

  before(params: RequestSendOptions) {
    params.paramsQuery = {
      ...params.paramsQuery,
      sort: JSON.stringify(this.sort),
    }
  }

  // after(response: AdapterResponse) {
  //   //
  // }

  /**
   * 重置分页数据
   */
  reset() {
    this.sort = {}
  }

  /**
   * 转换排序对象为字符串
   */
  stringify(value: SortService | any): string[] {
    if (typeof value !== 'object')
      return []

    if (value instanceof SortService)
      value = value.sort

    return Object.entries(value).map(([k, v]) => `${k}.${v}`)
  }
}
