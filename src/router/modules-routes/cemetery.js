import DefaultLayout from '@/layouts/DefaultLayout.vue'

const cemeteryChildRoutes = (prefix) => [
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
    component: () => import('@/views/cemetery/PeoplePage.vue')
  }
]
export default [
  {
    path: '/cemiterio',
    name: 'cemiterio',
    meta: {
      title: 'cemiterio',
      icon: 'adjustment'
    },
    subMenu: false,
    component: DefaultLayout,
    children: cemeteryChildRoutes('cemiterio')
  }
]
