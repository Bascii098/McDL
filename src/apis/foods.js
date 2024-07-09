import http from '@/utils/http'
export function getfoodsAPI(query) {
  return http({
    url: `/mcdl/foodsList/${query}`
  })
}
export function getfoodsdetailAPI(id) {
  return http({
    url: `/mcdl/foodsdetail/${id}`
  })
}
