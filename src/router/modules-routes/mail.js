const mailChildRoutes = (prop) => [
  {
    path: '',
    name: prop + '.mail-dashboard',
    meta: { auth: true, name: 'mail', isBanner: true },
    component: () => import('@/views/modules/mail/MailPage.vue')
  },
  {
    path: 'mail-compose',
    name: prop + '.email-compose',
    meta: { auth: true, name: 'Email Compose', isBanner: false },
    component: () => import('@/views/modules/mail/MailCompose.vue')
  }
]
export default [
  {
    path: '/mail',
    name: 'mail',
    component: () => import('@/layouts/modules/MailLayout.vue'),
    children: mailChildRoutes('mail')
  }
]
