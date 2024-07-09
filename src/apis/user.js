import http from '@/utils/http'
export function newuserAPI({ username, password }) {
  const params = new URLSearchParams()
  params.append('username', username)
  params.append('password', password)

  return http({
    url: '/mcdl/newuser',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: params
  })
}
export function userLoginService({ username, password }) {
  const params = new URLSearchParams()
  params.append('username', username)
  params.append('password', password)

  return http({
    url: '/mcdl/login',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: params
  })
}
