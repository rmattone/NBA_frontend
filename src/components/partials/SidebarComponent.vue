<template>
  <!-- Sidebar Component Start Here-->
  <default-sidebar>
    <ul class="navbar-nav iq-main-menu" id="sidebar-menu">
      <side-menu isTag="router-link" title="Dashboard" icon="fa-solid fa-house" :route="{ to: 'home' }" ></side-menu>
      <side-menu title="NBA" icon="fa-solid fa-basketball" toggle-id="/nba" :caret-icon="true"
        :route="{ popup: 'false', to: '/nba' }" @onClick="toggle" :active="currentRoute.includes('nba')">
        <b-collapse tag="ul" class="sub-nav" id="menu-style" accordion="sidebar-menu"
          :visible="currentRoute.includes('nba')">
          <side-menu key="nba.teams" title="Teams" icon="fa-solid fa-city" :icon-size="18" icon-type="solid"
            miniTitle="T" :route="{ to: 'nba.teams' }"></side-menu>
          <side-menu key="nba.players" title="Players" icon="fa-solid fa-people-group" :icon-size="18" icon-type="solid"
            miniTitle="P" :route="{ to: 'nba.players' }"></side-menu>
        </b-collapse>
      </side-menu>
    </ul>
  </default-sidebar>
  <!-- Sidebar Component End Here-->
</template>

<script setup>
import DefaultSidebar from '@/components/custom/sidebar/DefaultSidebar.vue'
import SideMenu from '@/components/custom/nav/SideMenu.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
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
