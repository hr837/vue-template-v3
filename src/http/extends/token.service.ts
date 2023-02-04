import type { RequestPlugin, RequestSendOptions } from '@gopowerteam/request'

export class TokenService implements RequestPlugin {
  /**
   * 前置Token
   * @param options
   */
  public before(options: RequestSendOptions) {
    const token = sessionStorage.getItem('token')
    if (token) {
      options.headers = {
        ...options.headers,
        'X-UserToken': `bearer ${token}`,
      }
    }
  }
}
