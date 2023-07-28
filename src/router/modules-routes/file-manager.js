const fileManagerChildRoutes = (prop) => [
  {
    path: '',
    name: prop + '.dashboard',
    meta: { auth: true, name: 'File Manager' },
    component: () => import('@/views/modules/file-manager/DashboardPage.vue')
  },
  {
    path: 'image-folder',
    name: prop + '.image-folder',
    meta: { auth: true, name: 'Image Folder' },
    component: () => import('@/views/modules/file-manager/ImageFolder.vue')
  },
  {
    path: 'video-folder',
    name: prop + '.video-folder',
    meta: { auth: true, name: 'Video Folder' },
    component: () => import('@/views/modules/file-manager/VideoFolder.vue')
  },
  {
    path: 'document-folder',
    name: prop + '.document-folder',
    meta: { auth: true, name: 'Document Folder' },
    component: () => import('@/views/modules/file-manager/DocumentFolder.vue')
  },
  {
    path: 'all-files',
    name: prop + '.all-files',
    meta: { auth: true, name: 'All Files' },
    component: () => import('@/views/modules/file-manager/AllFiles.vue')
  },
  {
    path: 'trash',
    name: prop + '.trash',
    meta: { auth: true, name: 'Trash' },
    component: () => import('@/views/modules/file-manager/TrashPage.vue')
  }
]
export default [
  {
    path: '/file-manager',
    name: 'file-manager',
    component: () => import('@/layouts/modules/FileManagerLayout.vue'),
    children: fileManagerChildRoutes('file-manager')
  }
]
