<template>
  <!-- Sidebar Component Start Here-->
  <default-sidebar>
    <template #profile-card>
      <profile-card></profile-card>
    </template>
    <hr class="hr-horizontal" />
    <ul class="navbar-nav iq-main-menu" id="e-commerce">
      <side-menu title="Blog" :static-item="true"></side-menu>
      <side-menu isTag="router-link" title="Dashboard" icon="view-grid" miniTitle="D" :route="{ to: 'blog.dashboard' }"></side-menu>
      <side-menu title="Blog" icon="document" miniTitle="B" toggle-id="blog-main" :caret-icon="true" :route="{ popup: 'false', to: 'blog.main' }" @onClick="toggle" :active="currentRoute.includes('blog.main')">
        <b-collapse tag="ul" class="sub-nav" id="blog-main" accordion="blog" :visible="currentRoute.includes('blog.main')">
          <side-menu isTag="router-link" title="Blog Main" icon="circle" :icon-size="10" icon-type="solid" miniTitle="BM" :route="{ to: 'blog.main' }"></side-menu>
          <side-menu isTag="router-link" title="Blog Details" icon="circle" :icon-size="10" icon-type="solid" miniTitle="BD" :route="{ to: 'blog.detail' }"></side-menu>
          <side-menu isTag="router-link" title="Blog List" icon="circle" :icon-size="10" icon-type="solid" miniTitle="BL" :route="{ to: 'blog.list' }"></side-menu>
          <side-menu isTag="router-link" title="Blog Grid" icon="circle" :icon-size="10" icon-type="solid" miniTitle="BG" :route="{ to: 'blog.grid' }"></side-menu>
          <side-menu isTag="router-link" title="Blog Tranding" icon="circle" :icon-size="10" icon-type="solid" miniTitle="BT" :route="{ to: 'blog.trending' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu isTag="router-link" title="Comment List" icon="document" miniTitle="CL" :route="{ to: 'blog.comment' }"></side-menu>
      <side-menu isTag="router-link" title="Blog Category" icon="cart" miniTitle="BC" :route="{ to: 'blog.category' }"></side-menu>
      <hr class="hr-horizontal" />
      <side-menu title="PAGES" :static-item="true"></side-menu>
      <side-menu title="Sign Out" icon="exit" miniTitle="BF"></side-menu>
      <side-menu title="Help" icon="exclamation-circle" miniTitle="BF"></side-menu>
    </ul>
  </default-sidebar>
  <!-- Sidebar Component End Here-->
</template>

<script setup>
import { ref } from 'vue'
import DefaultSidebar from '@/components/custom/sidebar/DefaultSidebar.vue'
import SideMenu from '@/components/custom/nav/SideMenu.vue'
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
