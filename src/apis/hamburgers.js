import http from '@/utils/http'
export function getHamburgersAPI() {
  return http({
    url: '/mcdl/foodsList/hamburgers'
  })
}
