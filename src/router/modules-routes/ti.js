import DefaultLayout from '@/layouts/DefaultLayout.vue'

const tiChildRoutes = (prefix) => [
  {
    path: '/ti/user',
    name: prefix + '.user',
    meta: {
      auth: true,
      title: 'Usuários',
      icon: 'user-group',
      isBanner: false,
      roles: ['sudo']
    },
    component: () => import('@/views/ti/UsersPage.vue')
  }
]
export default [
  {
    path: '/ti',
    name: 'ti',
    meta: {
      title: 'TI',
      icon: 'adjustment'
    },
    subMenu: true,
    component: DefaultLayout,
    children: tiChildRoutes('ti')
  }
]
