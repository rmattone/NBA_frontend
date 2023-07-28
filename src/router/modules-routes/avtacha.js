import DefaultLayout from '@/layouts/DefaultLayout.vue'

const avtachaChildRoutes = (prefix) => [
  {
    path: '/avtacha/escalas',
    name: prefix + '.escalas',
    meta: {
      auth: true,
      title: 'Escalas',
      icon: 'document',
      isBanner: false,
      roles: ['a', 'rA', 'sudo']
    },
    component: () => import('@/views/avtacha/SchedulesPage.vue')
  },
  {
    path: '/avtacha/edit/:id',
    name: prefix + '.schedule.edit',
    meta: {
      auth: true,
      title: 'Escala',
      isBanner: false,
      roles: ['a', 'rA', 'sudo']
    },
    hidden: true,
    component: () => import('@/views/avtacha/SchedulesPageHome.vue')
  },
  {
    path: '/avtacha/pessoas',
    name: prefix + '.pessoas',
    meta: {
      auth: true,
      title: 'Pessoas',
      icon: 'users',
      isBanner: false,
      roles: ['a', 'rA', 'sudo']
    },
    component: () => import('@/views/avtacha/PeoplePage.vue')
  }
]
export default [
  {
    path: '/avtacha',
    name: 'avtacha',
    meta: {
      title: 'Avtacha',
      icon: 'view-grid'
    },
    subMenu: true,
    component: DefaultLayout,
    children: avtachaChildRoutes('avtacha')
  }
]
