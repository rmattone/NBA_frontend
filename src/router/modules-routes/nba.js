import DefaultLayout from '@/layouts/DefaultLayout.vue'

const nbaChildRoutes = (prefix) => [
  {
    path: '/nba',
    name: prefix + '.dashboard',
    meta: {
      auth: false,
      title: 'Dashboard',
      icon: 'setting',
      isBanner: false,
      roles: ['sudo']
    },
    component: () => import('@/views/nba/HomePage.vue')
  },
  {
    path: '/nba/teams',
    name: prefix + '.teams',
    meta: {
      auth: false,
      title: 'Teams',
      isBanner: false,
      roles: ['sudo']
    },
    component: () => import('@/views/nba/TeamsPage.vue')
  },
  {
    path: '/nba/teams/:id',
    name: prefix + '.team',
    meta: {
      auth: false,
      title: 'Team',
      isBanner: false,
      roles: ['sudo']
    },
    component: () => import('@/views/nba/TeamsDetails.vue')
  },
  {
    path: '/nba/players',
    name: prefix + '.players',
    meta: {
      auth: false,
      title: 'Players',
      icon: 'setting',
      isBanner: false,
      roles: ['sudo']
    },
    component: () => import('@/views/nba/PlayersPage.vue')
  },
  {
    path: '/nba/player/:id',
    name: prefix + '.player',
    meta: {
      auth: false,
      title: 'Players',
      icon: 'setting',
      isBanner: false,
      roles: ['sudo']
    },
    component: () => import('@/views/nba/PlayersDetails.vue')
  },
]
export default [
  {
    path: '/nba',
    name: 'nba',
    meta: {
      title: 'nba',
      icon: 'adjustment'
    },
    subMenu: false,
    component: DefaultLayout,
    children: nbaChildRoutes('nba')
  },
]
