import http from '@/utils/http'
export function getCategoryAPI() {
  return http({
    url: '/mcdl/foods/category'
  })
}
