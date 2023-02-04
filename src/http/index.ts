import { showNotify } from 'vant'
import {
  type AdapterResponse,
  type ResponseInterceptor,
  setup,
} from '@gopowerteam/request'
import { AxiosAdapter } from '@gopowerteam/request/adapters'
import { TokenService } from '~/http/extends/token.service'
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
      const errorMessage
        = responseMessage || messageList[response.status] || defaultError
      showNotify({
        type: 'danger',
        message: errorMessage,
      })
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

export default function () {
  // 配置服务端信息
  setup({
    gateway: import.meta.env.VITE_HTTP_GETWAY,
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
}
