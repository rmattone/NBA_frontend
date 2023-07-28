import DefaultLayout from '@/layouts/DefaultLayout.vue'

const rhChildRoutes = (prefix) => [
  {
    path: '/rh/pessoas',
    name: prefix + '.pessoas',
    meta: {
      auth: true,
      title: 'Pessoas',
      icon: 'users',
      isBanner: false,
      roles: ['a', 'rA', 'sudo']
    },
    component: () => import('@/views/rh/PeoplePage.vue')
  }
]
export default [
  {
    path: '/rh',
    name: 'rh',
    meta: {
      title: 'RH',
      icon: 'user-group'
    },
    subMenu: true,
    component: DefaultLayout,
    children: rhChildRoutes('rh')
  }
]
