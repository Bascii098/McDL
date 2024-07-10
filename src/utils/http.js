import axios from 'axios'
// import { useUserStore } from '@/stores/user'
// import { useRouter } from 'vue-router'
// 创建axios实例
const http = axios.create({
  baseURL: 'http://127.0.0.1:3007',
  timeout: 5000
})

// axios请求拦截器
http.interceptors.request.use(
  (config) => {
    return config
  },
  (e) => Promise.reject(e)
)

// axios响应式拦截器
http.interceptors.response.use(
  (res) => {
    // console.log(res)
    // const router = useRouter()
    // const userStore = useUserStore()
    // ElMessage({
    //   type: 'warning',
    //   message: res.data?.message
    // })
    // if (res.data?.status === 1) {
    //   userStore.clearUserInfo()
    //   router.push('/login')
    // }
    return res.data
  },
  (e) => {
    return Promise.reject(e)
  }
)

export default http
