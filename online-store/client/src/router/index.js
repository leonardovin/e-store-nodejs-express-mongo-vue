import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Cart from '@/components/Carrinho'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})
