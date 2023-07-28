import DefaultLayout from '@/layouts/DefaultLayout.vue'

const calendarChildRoutes = (prefix) => [
  {
    path: '',
    name: prefix + '.home',
    meta: {
      auth: true,
      title: 'Calendario',
      icon: 'calendar',
      isBanner: false,
      roles: []
    },
    component: () => import('@/views/calendar/MyCalendarPage.vue')
  }
]
export default [
  {
    path: '/calendar',
    name: 'calendar',
    hidden: false,
    component: DefaultLayout,
    children: calendarChildRoutes('calendar')
  }
]
