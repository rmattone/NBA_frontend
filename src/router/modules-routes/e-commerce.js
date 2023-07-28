const eCommerceChildRoutes = (prop) => [
  {
    path: '',
    name: prop + '.dashboard',
    meta: { auth: true, name: 'E-Commerce' },
    component: () => import('@/views/modules/e-commerce/DashboardPage.vue')
  },
  {
    path: 'dashboard-vendor',
    name: prop + '.dashboard.vendor',
    meta: { auth: true, name: 'Vendor Dashboard' },
    component: () => import('@/views/modules/e-commerce/DashboardVendor.vue')
  },
  {
    path: 'shop-main',
    name: prop + '.shop.main',
    meta: { auth: true, name: 'Shop Main' },
    component: () => import('@/views/modules/e-commerce/ShopMain.vue')
  },
  {
    path: 'shop-left-filter',
    name: prop + '.shop.left-filter',
    meta: { auth: true, name: 'Shop Left Filter' },
    component: () => import('@/views/modules/e-commerce/ShopLeftFilter.vue')
  },
  {
    path: 'shop-right-filter',
    name: prop + '.shop.right-filter',
    meta: { auth: true, name: 'Shop Right Filter' },
    component: () => import('@/views/modules/e-commerce/ShopRightFilter.vue')
  },
  {
    path: 'product-grid-view',
    name: prop + '.product.grid',
    meta: { auth: true, name: 'Product Grid View' },
    component: () => import('@/views/modules/e-commerce/ProductGrid.vue')
  },
  {
    path: 'product-list-view',
    name: prop + '.product.list',
    meta: { auth: true, name: 'Product List View' },
    component: () => import('@/views/modules/e-commerce/ProductList.vue')
  },
  {
    path: 'categories-list',
    name: prop + '.categories-list',
    meta: { auth: true, name: 'Categories List' },
    component: () => import('@/views/modules/e-commerce/CategoriesList.vue')
  },
  {
    path: 'product-detail',
    name: prop + '.product-detail',
    meta: { auth: true, name: 'Product Detail' },
    component: () => import('@/views/modules/e-commerce/ProductDetail.vue')
  },
  {
    path: 'product-detail-360',
    name: prop + '.product-detail-360',
    meta: { auth: true, name: 'Product Detail 360' },
    component: () => import('@/views/modules/e-commerce/ProductDetail360.vue')
  },
  {
    path: 'product-detail-3d',
    name: prop + '.product-detail-3d',
    meta: { auth: true, name: 'Product Detail 3d' },
    component: () => import('@/views/modules/e-commerce/ProductDetail3D.vue')
  },
  {
    path: 'order-process',
    name: prop + '.order-process',
    meta: { auth: true, name: 'Order Process' },
    component: () => import('@/views/modules/e-commerce/OrderProcess.vue')
  },
  {
    path: 'invoice',
    name: prop + '.invoice',
    meta: { auth: true, name: 'Invoice' },
    component: () => import('@/views/modules/e-commerce/InvoicePage.vue')
  },
  {
    path: 'wishlist',
    name: prop + '.wishlist',
    meta: { auth: true, name: 'Wishlist' },
    component: () => import('@/views/modules/e-commerce/WishlistPage.vue')
  },
  {
    path: 'user-profile',
    name: prop + '.user.profile',
    meta: { auth: true, name: 'User Profile' },
    component: () => import('@/views/modules/e-commerce/UserProfile.vue')
  },
  {
    path: 'user-list',
    name: prop + '.user.list',
    meta: { auth: true, name: 'User List' },
    component: () => import('@/views/modules/e-commerce/UserList.vue')
  }
]
export default [
  {
    path: '/e-commerce',
    name: 'e-commerce',
    component: () => import('@/layouts/modules/ECommerceLayout.vue'),
    children: eCommerceChildRoutes('e-commerce')
  }
]
