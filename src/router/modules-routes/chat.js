const chatChildRoutes = (prop) => [
  {
    path: '',
    name: prop + '.chat-dashboard',
    meta: { auth: true, name: 'chat Dashboard' },
    component: () => import('@/views/modules/chat/MainPage.vue')
  }
]
export default [
  {
    path: '/chat',
    name: 'chat',
    component: () => import('@/layouts/modules/ChatLayout.vue'),
    children: chatChildRoutes('chat')
  }
]
