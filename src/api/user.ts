import { LoginParams, MoocResponseConfig, UserInfo } from '@/types'
import axios from '@/utils/axios'

// user login 用户登录
export function userLogin (params: LoginParams): Promise<MoocResponseConfig<string>> {
  const { account, password } = params
  if (account && password) {
    return axios.get('/api/mock/user/login.json')
  } else {
    const result = { code: -1, msg: '用户名或密码错误', data: null }
    return Promise.resolve(result)
  }
}

// user register 用户注册
export function userRegister (params: LoginParams): Promise<MoocResponseConfig<string>> {
  const { account, password } = params
  if (account && password) {
    return axios.get('/api/mock/user/register.json')
  } else {
    const result = { code: -1, msg: '用户名或密码不能为空', data: null }
    return Promise.resolve(result)
  }
}

// get user info 获取用户详情
export function getUserInfo (token: string): Promise<MoocResponseConfig<UserInfo>> {
  return axios.get(`/api/mock/user/info.json?token=${token}`)
}