import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/views/Layout/index.vue'
import cart from '@/views/cart/index.vue'
import Login from '@/views/Login/index.vue'
import menu from '@/views/menu/index.vue'
import order from '@/views/order/index.vue'
import category from '@/views/category/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: layout
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/menu',
      component: menu,
      children: [
        {
          path: '',
          component: category
        }
      ]
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/order',
      component: order
    }
  ]
})

export default router
