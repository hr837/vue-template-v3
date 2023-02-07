import { RequestMethod, type RequestPlugin, RequestService } from '@gopowerteam/request'
import type { LoginInput, QueryRoleInput, QueryUserInput, RoleModel, UserModel } from '../models/user.model'
export class UserService {
  // 请求实例
  private request = RequestService.getInstance()

  /**
   * 创建管理员
   */
  public findUser(
    requestBody: QueryUserInput,
    requestPlugins: RequestPlugin[] = [],
  ): Promise<UserModel[]> {
    // 请求数据
    return this.request.send(
      {
        path: '/api/manage-service/system/user',
        method: RequestMethod.Post,
        paramsBody: requestBody,
      },
      requestPlugins,
    )
  }

  /**
   * 获取用户信息
   */
  public getUserInfo(
    userId: string,
    requestPlugins: RequestPlugin[] = [],
  ): Promise<any> {
    // 请求数据
    return this.request.send(
      {
        path: '/manage-service/system/user/{id}',
        method: RequestMethod.Get,
        paramsPath: { id: userId },
      },
      requestPlugins,
    )
  }

  /**
   * 角色列表数据
   */
  public getRoleList(
    requestBody: QueryRoleInput,
    requestPlugins: RequestPlugin[] = [],
  ): Promise<RoleModel> {
    // 请求数据
    return this.request.send(
      {
        path: 'manage-service/system/role/list',
        method: RequestMethod.Get,
        paramsQuery: requestBody,
      },
      requestPlugins,
    )
  }

  /**
   * 获取token
   */
  public getToken(
    requestBody: LoginInput,
    requestPlugins: RequestPlugin[] = [],
  ): Promise<any> {
    // 请求数据
    return this.request.send(
      {
        path: 'cgrzzl-oauth/auth/getToken',
        method: RequestMethod.Post,
        paramsBody: requestBody,
      },
      requestPlugins,
    )
  }
}
