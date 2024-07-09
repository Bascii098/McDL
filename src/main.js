import { createApp } from 'vue'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
const app = createApp(App)
router.afterEach(() => {
  window.scrollTo(0, 0)
})
app.use(createPinia().use(persist))
app.use(createPinia())
app.use(router)

app.mount('#app')
