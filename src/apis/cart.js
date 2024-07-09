import http from '@/utils/http'
export function getfoodsAPI({ name, num, price }) {
  return http({
    url: `/my/addcart`,
    method: 'POST',
    data: {
      name,
      num,
      price
    }
  })
}
