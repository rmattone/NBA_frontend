const socialAppChildRoutes = (prop) => [
  {
    path: '',
    name: prop + '.dashboard',
    meta: { auth: true, name: 'Social App', isBanner: true },
    component: () => import('@/views/modules/social-app/DashboardPage.vue')
  },
  {
    path: 'newsfeed',
    name: prop + '.newsfeed',
    meta: { auth: true, name: 'Newsfeed' },
    component: () => import('@/views/modules/social-app/NewsfeedPage.vue')
  },
  {
    path: 'friend-list',
    name: prop + '.friend-list',
    meta: { auth: true, name: 'Friend List' },
    component: () => import('@/views/modules/social-app/FriendList.vue')
  },
  {
    path: 'friend-request',
    name: prop + '.friend-request',
    meta: { auth: true, name: 'Friend Request' },
    component: () => import('@/views/modules/social-app/FriendRequest.vue')
  },
  {
    path: 'friend-profile',
    name: prop + '.friend-profile',
    meta: { auth: true, name: 'Friend Profile' },
    component: () => import('@/views/modules/social-app/FriendProfile.vue')
  },
  {
    path: 'profile-badges',
    name: prop + '.profile-badges',
    meta: { auth: true, name: 'Profile Badges' },
    component: () => import('@/views/modules/social-app/ProfileBadges.vue')
  },
  {
    path: 'profile-images',
    name: prop + '.profile-images',
    meta: { auth: true, name: 'Profile Images' },
    component: () => import('@/views/modules/social-app/ProfileImages.vue')
  },
  {
    path: 'profile-videos',
    name: prop + '.profile-videos',
    meta: { auth: true, name: 'Profile Video' },
    component: () => import('@/views/modules/social-app/ProfileVideos.vue')
  },
  {
    path: 'birthday',
    name: prop + '.birthday',
    meta: { auth: true, name: 'Birthday' },
    component: () => import('@/views/modules/social-app/BirthdayPage.vue')
  },
  {
    path: 'notification',
    name: prop + '.notification',
    meta: { auth: true, name: 'Notification' },
    component: () => import('@/views/modules/social-app/NotificationsPage.vue')
  },
  {
    path: 'account-setting',
    name: prop + '.account-setting',
    meta: { auth: true, name: 'Account Setting' },
    component: () => import('@/views/modules/social-app/AccountSetting.vue')
  },
  {
    path: 'event-list',
    name: prop + '.event-list',
    meta: { auth: true, name: 'Event List' },
    component: () => import('@/views/modules/social-app/EventList.vue')
  },
  {
    path: 'event-detail',
    name: prop + '.event-detail',
    meta: { auth: true, name: 'Event Detail' },
    component: () => import('@/views/modules/social-app/EventDetail.vue')
  },
  {
    path: 'group',
    name: prop + '.group-list',
    meta: { auth: true, name: 'Group' },
    component: () => import('@/views/modules/social-app/GroupList.vue')
  },
  {
    path: 'group-detail',
    name: prop + '.group-detail',
    meta: { auth: true, name: 'Group Detail' },
    component: () => import('@/views/modules/social-app/GroupDetail.vue')
  },
  {
    path: 'social-profile',
    name: prop + '.social-profile',
    meta: { auth: true, name: 'Social Profile' },
    component: () => import('@/views/modules/social-app/SocialProfile.vue')
  }
]
export default [
  {
    path: '/social-app',
    name: 'social-app',
    component: () => import('@/layouts/modules/SocialAppLayout.vue'),
    children: socialAppChildRoutes('social-app')
  }
]
