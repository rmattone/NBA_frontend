import { createRouter, createWebHistory } from 'vue-router'

import calendarRoutes from './modules-routes/calendar'
import avtachaRoutes from './modules-routes/avtacha'
import rhRoutes from './modules-routes/rh'
import tiRoutes from './modules-routes/ti'

import store from '@/store'
import { getToken } from '@/utilities/auth' // get token from cookie
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BlankLayout from '@/layouts/guest/BlankLayout.vue'

const simpleAuthchildRoutes = (prefix) => [
  {
    path: 'login',
    name: prefix + '.login',
    meta: { auth: false, name: 'Login' },
    component: () => import('@/views/auth/simple/SignIn.vue')
  },
  {
    path: 'register',
    name: prefix + '.register',
    meta: { auth: false, name: 'Register' },
    component: () => import('@/views/auth/simple/SignUp.vue')
  }
]

// Dashboard routes
const dashboardRoutes = (prefix) => [
  {
    path: '',
    name: prefix + '.dashboard',
    meta: {
      auth: true,
      title: 'Calendario',
      icon: 'calendar',
      isBanner: false,
      roles: ['sudo', 'h', 'rH', 'c']
    },
    component: () => import('@/views/calendar/MyCalendarPage.vue')
  }
  /* {
    path: '',
    name: prefix + '.dashboard',
    meta: {
      auth: true,
      icon: 'home',
      title: 'Home',
      isBanner: false,
      roles: ['sudo', 'h', 'rH', 'c']
    },
    component: () => import('@/views/dashboards/IndexPage.vue')
  } */
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
    hidden: true
  },
  {
    path: '/',
    name: 'dashboard',
    component: DefaultLayout,
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

export const asyncRoutes = [...calendarRoutes, ...avtachaRoutes, ...rhRoutes, ...tiRoutes]

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
    console.log(hasToken && !hasRoles)
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
