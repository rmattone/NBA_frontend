import DefaultLayout from '@/layouts/DefaultLayout.vue'

const tiChildRoutes = (prefix) => [
  {
    path: '/cemiterio/administracao',
    name: prefix + '.administracao',
    meta: {
      auth: true,
      title: 'Administração',
      icon: 'setting',
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
    subMenu: false,
    component: DefaultLayout,
    children: tiChildRoutes('ti')
  }
]
