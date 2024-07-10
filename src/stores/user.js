import { defineStore } from 'pinia'
import { ref } from 'vue'

// 用户模块
export const useUserStore = defineStore(
  'big-user',
  () => {
    const token = ref('') // 定义 token
    const setToken = (t) => (token.value = t) // 设置 token
    const clearUserInfo = () => {
      token.value = null
    }
    return { token, setToken, clearUserInfo }
  },
  {
    persist: true // 持久化
  }
)
