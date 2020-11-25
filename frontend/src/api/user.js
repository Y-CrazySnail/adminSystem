import request from '@/utils/request'
import qs from 'qs'

const grant_type = 'password'

export function login(data) {
  console.log(data)
  return request({
    baseURL: process.env.VUE_APP_AUTH_API,
    url: '/oauth/token',
    method: 'post',
    data: qs.stringify({ grant_type: grant_type, username: data.username, password: data.password })
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
