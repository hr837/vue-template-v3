import type {
  AdapterResponse,
  RequestPlugin,
  RequestSendOptions,
} from '@gopowerteam/request'
import type { Ref } from 'vue'
import { ref } from 'vue'

export class PageService implements RequestPlugin {
  pageIndex = ref(1)
  pageSize = ref(10)
  pageSizeOpts: number[] = [5, 10, 20, 30]
  pageLayouts: (
    | 'PrevJump'
    | 'PrevPage'
    | 'JumpNumber'
    | 'NextPage'
    | 'NextJump'
    | 'Sizes'
    | 'FullJump'
    | 'Total'
  )[] = [
      'PrevJump',
      'PrevPage',
      'JumpNumber',
      'NextPage',
      'NextJump',
      'Sizes',
      'FullJump',
      'Total',
    ]

  total: Ref<number> = ref(100)

  /**
 * 构造函数
 * @param index
 * @param size
 */
  constructor(index = 1, size = 10) {
    this.pageIndex.value = index
    this.pageSize.value = size
  }

  /**
 * 重置操作
 */
  reset(): void {
    this.pageIndex.value = 1
  }

  /**
 * 前置操作
 * @param options
 */
  before(options: RequestSendOptions) {
    options.paramsQuery = {
      ...options.paramsQuery,
      pageNum: this.pageIndex.value - 1,
      pageSize: this.pageSize.value,
    }
  }

  /**
 * 后置操作
 * @param response
 */
  after(response: AdapterResponse) {
    this.total.value = Number(response.data?.data?.total)
  }

  /**
 * 更新PageSize
 * @param val
 */
  updatePageSize(val: number) {
    this.pageSize.value = val
  }

  /**
 * 更新PageIndex
 * @param val
 */
  updatePageIndex(val: number) {
    this.pageIndex.value = val
  }
}
