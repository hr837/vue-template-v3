import { ElNotification } from 'element-plus'
import {
  type AdapterResponse,
  RequestService,
  type ResponseInterceptor,
  setup,
} from '@gopowerteam/request'
import { AxiosAdapter } from '@gopowerteam/request/adapters'
import type { App } from 'vue'
import { TokenService } from '@/http/extends/token.service'
import { appConfig } from '@/config/app.config'
class StatusInterceptors implements ResponseInterceptor {
  exec(respone: AdapterResponse) {
    return respone.status < 400
  }
}

class SuccessInterceptors implements ResponseInterceptor {
  exec(response: AdapterResponse) {
    return response.data
  }
}

class ErrorInterceptors implements ResponseInterceptor {
  exec(response: AdapterResponse) {
    return response.data
  }
}

class ExceptionInterceptors implements ResponseInterceptor {
  exec(response: AdapterResponse) {
    const defaultError = '服务通讯连接失败'
    const messageList: { [key: number]: string | undefined } = {
      400: '请求参数错误',
      405: '请求服务方法错误',
      500: '服务器内部错误',
      403: '没有权限，请重新登陆',
    }
    if (response) {
      const responseMessage = (response.data || {}).message
      const errorMessage = responseMessage || messageList[response.status] || defaultError
      ElNotification.error(errorMessage)
    }
    switch (response.status) {
      case 401:
        onResponse401()
        break
    }
  }
}

function onResponse401() {
  // 登录过期处理
  // userAction.logout();
  // 跳转根页面
  // location.href = "/";
}

/** 配置服务端信息 */
const setupHttp = () =>
  setup({
    gateway: appConfig.http.gateway,
    adapter: new AxiosAdapter(),
    qs: {
      arrayFormat: 'repeat',
      skipNulls: true,
      allowDots: true,
      encodeValuesOnly: true,
      encode: true,
    },
    interceptors: {
      status: new StatusInterceptors(),
      success: new SuccessInterceptors(),
      error: new ErrorInterceptors(),
      exception: new ExceptionInterceptors(),
    },
    plugins: [new TokenService()],
  })

export default {
  install(app: App) {
    setupHttp()
    app.config.globalProperties.$http = RequestService.getInstance()
  },
}
