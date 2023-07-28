const blogChildRoutes = (prop) => [
  {
    path: 'blog-dashboard',
    name: prop + '.dashboard',
    meta: { auth: true, name: 'Blog Dashboard' },
    component: () => import('@/views/modules/blog/DashboardPage.vue')
  },
  {
    path: 'main',
    name: prop + '.main',
    meta: { auth: true, name: 'Blog Main', isBanner: true },
    component: () => import('@/views/modules/blog/BlogMain.vue')
  },
  {
    path: 'detail',
    name: prop + '.detail',
    meta: { auth: true, name: 'Blog Details', isBanner: true },
    component: () => import('@/views/modules/blog/BlogDetail.vue')
  },
  {
    path: 'grid',
    name: prop + '.grid',
    meta: { auth: true, name: 'Blog Grid' },
    component: () => import('@/views/modules/blog/BlogGrid.vue')
  },
  {
    path: 'list',
    name: prop + '.list',
    meta: { auth: true, name: 'Blog List' },
    component: () => import('@/views/modules/blog/BlogList.vue')
  },
  {
    path: 'trending',
    name: prop + '.trending',
    meta: { auth: true, name: 'Blog Trending' },
    component: () => import('@/views/modules/blog/BlogTrending.vue')
  },
  {
    path: 'category',
    name: prop + '.category',
    meta: { auth: true, name: 'Blog Category' },
    component: () => import('@/views/modules/blog/BlogCategory.vue')
  },
  {
    path: 'comment',
    name: prop + '.comment',
    meta: { auth: true, name: 'Blog Comment' },
    component: () => import('@/views/modules/blog/BlogComment.vue')
  }
]
export default [
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/layouts/modules/BlogLayout.vue'),
    children: blogChildRoutes('blog')
  }
]
