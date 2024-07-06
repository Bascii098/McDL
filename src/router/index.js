import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/views/Layout/index.vue'
import cart from '@/views/cart/index.vue'
import Login from '@/views/Login/index.vue'
import menu from '@/views/menu/index.vue'
import order from '@/views/order/index.vue'
import Home from '@/views/Home/index.vue'
import profile from '@/views/profile/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: '/menu/:id',
          component: menu
        },
        {
          path: '/cart',
          component: cart
        },
        {
          path: '/profile',
          component: profile
          // children: [{}]
        },
        {
          path: '/order',
          component: order
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router
