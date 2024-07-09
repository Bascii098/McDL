import http from '@/utils/http'
const userInfo = localStorage.getItem('big-user')
const token = JSON.parse(userInfo).token
export function addcartAPI({ name, num, price, imgurl }) {
  return http({
    url: `/my/addcart`,
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {
      name,
      num,
      price,
      imgurl
    }
  })
}
export function getcartAPI() {
  return http({
    url: '/my/getcart',
    headers: {
      Authorization: token,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
