<template>
  <!-- Sidebar Component Start Here-->
  <default-sidebar>
    <template #profile-card>
      <profile-card></profile-card>
    </template>
    <hr class="hr-horizontal" />
    <!--     <ul class="navbar-nav iq-main-menu" id="e-commerce">
      <side-menu title="E-COMMERCE" :static-item="true"></side-menu>
      <side-menu isTag="router-link" title="Admin Dashboard" icon="home" miniTitle="AD" :route="{ to: 'e-commerce.dashboard' }"></side-menu>
      <side-menu isTag="router-link" title="Vendor Dashboard" icon="chart-square-bar" miniTitle="VD" :route="{ to: 'e-commerce.dashboard.vendor' }"></side-menu>
      <side-menu title="Shop" icon="view-grid" miniTitle="SP" toggle-id="shop-main" :caret-icon="true" :route="{ popup: 'false', to: 'e-commerce.shop' }" @onClick="toggle" :active="currentRoute.includes('e-commerce.shop')">
        <b-collapse tag="ul" class="sub-nav" id="shop-main" accordion="e-commerce" :visible="currentRoute.includes('e-commerce.shop')">
          <side-menu isTag="router-link" title="Shop Main" icon="circle" :icon-size="10" icon-type="solid" miniTitle="SM" :route="{ to: 'e-commerce.shop.main' }"></side-menu>
          <side-menu isTag="router-link" title="Shop - Left Filter" icon="circle" :icon-size="10" icon-type="solid" miniTitle="SL" :route="{ to: 'e-commerce.shop.left-filter' }"></side-menu>
          <side-menu isTag="router-link" title="Shop - Right Filter" icon="circle" :icon-size="10" icon-type="solid" miniTitle="SR" :route="{ to: 'e-commerce.shop.right-filter' }"></side-menu>
          <side-menu isTag="router-link" title="Product Grid View" icon="circle" :icon-size="10" icon-type="solid" miniTitle="PG" :route="{ to: 'e-commerce.product.grid' }"></side-menu>
          <side-menu isTag="router-link" title="Product List View" icon="circle" :icon-size="10" icon-type="solid" miniTitle="PL" :route="{ to: 'e-commerce.product.list' }"></side-menu>
          <side-menu isTag="router-link" title="Category List" icon="circle" :icon-size="10" icon-type="solid" miniTitle="CL" :route="{ to: 'e-commerce.categories-list' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Product Details" icon="square-i" toggle-id="product-detail" miniTitle="PD" :caret-icon="true" :route="{ popup: 'false', to: 'e-commerce.product' }" @onClick="toggle" :active="currentRoute.includes('e-commerce.product')">
        <b-collapse tag="ul" class="sub-nav" id="product-detail" accordion="e-commerce" :visible="currentRoute.includes('e-commerce.product')">
          <side-menu isTag="router-link" title="Product Detail" icon="circle" :icon-size="10" icon-type="solid" miniTitle="P" :route="{ to: 'e-commerce.product-detail' }"></side-menu>
          <side-menu isTag="router-link" title="3D Product Detail" icon="circle" :icon-size="10" icon-type="solid" miniTitle="3D" :route="{ to: 'e-commerce.product-detail-360' }"></side-menu>
          <side-menu isTag="router-link" title="360 Product Detail" icon="circle" :icon-size="10" icon-type="solid" miniTitle="360" :route="{ to: 'e-commerce.product-detail-3d' }"></side-menu>
        </b-collapse>
      </side-menu>
      <hr class="hr-horizontal" />
      <side-menu title="PAGES" :static-item="true"></side-menu>
      <side-menu isTag="router-link" title="Order Process" icon="bag" miniTitle="OP" :route="{ to: 'e-commerce.order-process' }"></side-menu>
      <side-menu isTag="router-link" title="Invoice" icon="document" miniTitle="I" :route="{ to: 'e-commerce.invoice' }"></side-menu>
      <side-menu isTag="router-link" title="Wishlist" icon="heart" miniTitle="W" :route="{ to: 'e-commerce.wishlist' }"></side-menu>
      <side-menu isTag="router-link" title="User Profile" icon="user" miniTitle="UP" :route="{ to: 'e-commerce.user.profile' }"></side-menu>
      <side-menu isTag="router-link" title="User List" icon="user-group" miniTitle="UL" :route="{ to: 'e-commerce.user.list' }"></side-menu>
      <hr class="hr-horizontal" />
      <side-menu title="PAGES" :static-item="true"></side-menu>
      <side-menu title="Sign Out" icon="exit" miniTitle="BF"></side-menu>
      <side-menu title="Help" icon="exclamation-circle" miniTitle="BF"></side-menu>
    </ul> -->
  </default-sidebar>
  <!-- Sidebar Component End Here-->
</template>

<script setup>
import { ref } from 'vue'
import DefaultSidebar from '@/components/custom/sidebar/DefaultSidebar.vue'
// import SideMenu from '@/components/custom/nav/SideMenu.vue'
import ProfileCard from '@/components/custom/sidebar/ProfileCard.vue'
import { useRoute } from 'vue-router'
const currentRoute = ref('')
const route = useRoute()
const toggle = (route) => {
  if (route === currentRoute.value && route.includes('.')) {
    const menu = currentRoute.value.split('.')
    return (currentRoute.value = menu[menu.length - 2])
  }
  if (route !== currentRoute.value && currentRoute.value.includes(route)) {
    return (currentRoute.value = '')
  }
  if (route !== currentRoute.value) {
    return (currentRoute.value = route)
  }
  if (route === currentRoute.value) {
    return (currentRoute.value = '')
  }
  return (currentRoute.value = '')
}
toggle(route.name)
</script>

<style></style>
