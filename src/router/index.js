import { createRouter, createWebHistory } from 'vue-router'

import nbaRoutes from './modules-routes/nba'

import store from '@/store'
import { getToken } from '@/utilities/auth' // get token from cookie
import DefaultLayout from '@/layouts/DefaultLayout.vue'
// import BoxedLayout from '@/layouts/menu-styles/BoxedLayout.vue'
// import HorizontalLayout from '@/layouts/menu-styles/HorizontalLayout.vue'
import BlankLayout from '@/layouts/guest/BlankLayout.vue'

const simpleAuthchildRoutes = (prefix) => [
  {
    path: 'login',
    name: prefix + '.login',
    meta: { auth: false, name: 'Login' },
    component: () => import('@/views/auth/default/SignIn.vue')
  },
  {
    path: 'register',
    name: prefix + '.register',
    meta: { auth: false, name: 'Register' },
    component: () => import('@/views/auth/simple/SignUp.vue')
  }
]

// Dashboard routes
const dashboardRoutes = () => [
  {
    path: '',
    name: 'home',
    meta: {
      auth: true,
      title: 'Página Inicial',
      isBanner: false,
      roles: []
    },
    component: () => import('@/views/nba/HomePage.vue')
  },
]
const myAccountRoutes = (prefix) => [
  {
    path: '',
    name: prefix + '.settings',
    meta: {
      auth: true,
      title: 'Minha Conta',
      icon: 'user',
      isBanner: false,
      roles: ['sudo', 'h', 'rH', 'c']
    },
    hidden: true,
    component: () => import('@/views/AccountSettings.vue')
  }
]

const errorRoutes = (prefix) => [
  // Error Pages
  {
    path: '404',
    name: prefix + '.404',
    meta: { auth: true, name: 'Error 404', isBanner: true },
    component: () => import('@/views/errors/Error404Page.vue')
  },
  {
    path: '500',
    name: prefix + '.500',
    meta: { auth: true, name: 'Error 500', isBanner: true },
    component: () => import('@/views/errors/Error500Page.vue')
  },
  {
    path: 'maintenance',
    name: prefix + '.maintenance',
    meta: { auth: true, name: 'Maintenance', isBanner: true },
    component: () => import('@/views/errors/MaintenancePage.vue')
  }
]

export const constantRoutes = [
  {
    path: '/account',
    name: 'account',
    component: DefaultLayout,
    children: myAccountRoutes('account'),
    hidden: false
  },
  {
    path: '/',
    name: 'dashboard',
    component: DefaultLayout,
    hidden: false,
    children: dashboardRoutes('default')
  },
  {
    path: '/simple-auth',
    name: 'simple-auth',
    hidden: true,
    component: BlankLayout,
    children: simpleAuthchildRoutes('simple.auth')
  },
  // Errors Pages
  {
    path: '/errors',
    name: 'errors',
    hidden: true,
    component: () => BlankLayout,
    children: errorRoutes('errors')
  }
]

export const asyncRoutes = [...nbaRoutes]

const router = createRouter({
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes: constantRoutes
})

router.beforeEach(async (to, from, next) => {
  try {
    const hasToken = getToken()
    const authRequired = to.meta.auth
    if (authRequired && !hasToken) {
      next({ name: 'simple.auth.login' })
    }
    const hasRoles = store.getters.roles && store.getters.roles.length > 0
    if (hasToken && !hasRoles) {
      const { roles } = await store.dispatch('user/getInfo')
      const accessRoutes = await store.dispatch('permissions/generateRoutes', roles)
      accessRoutes.forEach((route) => {
        router.addRoute(route)
      })
      next({ ...to, replace: true })
    } else {
      next()
    }
  } catch (error) {
    console.error('Error during navigation:', error)
    next(error)
  }
})

export default router
