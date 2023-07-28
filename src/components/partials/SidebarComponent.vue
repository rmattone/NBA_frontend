<template>
  <!-- Sidebar Component Start Here-->
  <default-sidebar>
    <ul class="navbar-nav iq-main-menu" id="sidebar-menu">
      <div v-for="route in permissions" :key="route.path" :item="route" :base-path="route.path">
        <side-menu v-if="!route.hidden && route.children.length == 1 && !route.subMenu" isTag="router-link" :title="route.children[0].meta.title" :icon="route.children[0].meta.icon" :route="{ to: route.children[0].name }"></side-menu>

        <side-menu v-if="(route.children.length > 1 || (route.subMenu && route.children.length == 1)) && !route.hidden" :title="route.meta.title" :icon="route.meta.icon" :toggle-id="route.path" :caret-icon="true" :route="{ popup: 'false', to: route.path }" @onClick="toggle" :active="currentRoute.includes(route.path)">
          <b-collapse tag="ul" class="sub-nav" id="menu-style" accordion="sidebar-menu" :visible="currentRoute.includes(route.path)">
            <side-menu
              v-for="subRoute in route.children.filter(function (item) {
                return !item.hidden
              })"
              :key="subRoute.name"
              :title="subRoute.meta.title"
              :icon="subRoute.meta.icon"
              :icon-size="18"
              icon-type="solid"
              miniTitle="H"
              :route="{ to: subRoute.name }"></side-menu>
          </b-collapse>
        </side-menu>
      </div>
      <!-- <div v-for="route in myAccountRoute" :key="route.path" :item="route" :base-path="route.path">
        <side-menu isTag="router-link" :title="route.children[0].meta.title" :icon="route.children[0].meta.icon" :route="{ to: route.children[0].name }"></side-menu>
      </div> -->
    </ul>
  </default-sidebar>
  <!-- Sidebar Component End Here-->
</template>

<script setup>
import DefaultSidebar from '@/components/custom/sidebar/DefaultSidebar.vue'
import SideMenu from '@/components/custom/nav/SideMenu.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import store from '@/store'

const permissions = store.getters.permission_routes
/* const myAccountRoute = permissions.filter(function (el) {
  return el.name == 'account'
}) */
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
