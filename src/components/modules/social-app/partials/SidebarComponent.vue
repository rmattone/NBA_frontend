<template>
  <!-- Sidebar Component Start Here-->
  <default-sidebar>
    <template #profile-card>
      <profile-card></profile-card>
    </template>
    <hr class="hr-horizontal" />
    <ul class="navbar-nav iq-main-menu" id="e-commerce">
      <side-menu title="SOCIAL" :static-item="true"></side-menu>
      <side-menu isTag="router-link" title="Dashboard" icon="view-grid" miniTitle="D" :route="{ to: 'social-app.dashboard' }"></side-menu>
      <hr class="hr-horizontal" />
      <side-menu title="PAGES" :static-item="true"></side-menu>
      <side-menu isTag="router-link" title="Newsfeed" icon="document" miniTitle="N" :route="{ to: 'social-app.newsfeed' }">
        <template #title>
          Newsfeed
          <b-badge variant="info" pill>45</b-badge>
        </template>
      </side-menu>
      <side-menu title="Friends" icon="users" miniTitle="F" toggle-id="friends" :caret-icon="true" :route="{ popup: 'false', to: 'social-app.friends' }" @onClick="toggle" :active="currentRoute.includes('social-app.friends')">
        <b-collapse tag="ul" class="sub-nav" id="friends" accordion="social-app" :visible="currentRoute.includes('social-app.friends')">
          <side-menu isTag="router-link" title="Friends List" icon="circle" :icon-size="10" icon-type="solid" miniTitle="FL" :route="{ to: 'social-app.friend-list' }"></side-menu>
          <side-menu isTag="router-link" title="Friends Request" icon="circle" :icon-size="10" icon-type="solid" miniTitle="FR" :route="{ to: 'social-app.friend-request' }"></side-menu>
          <side-menu isTag="router-link" title="Friends Profile" icon="circle" :icon-size="10" icon-type="solid" miniTitle="FP" :route="{ to: 'social-app.friend-profile' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Profile" icon="user" miniTitle="P" toggle-id="profile" :caret-icon="true" :route="{ popup: 'false', to: 'social-app.profile' }" @onClick="toggle" :active="currentRoute.includes('social-app.profile')">
        <b-collapse tag="ul" class="sub-nav" id="profile" accordion="social-app" :visible="currentRoute.includes('social-app.profile')">
          <side-menu isTag="router-link" title="Profile Badges" icon="circle" :icon-size="10" icon-type="solid" miniTitle="PB" :route="{ to: 'social-app.profile-badges' }"></side-menu>
          <side-menu isTag="router-link" title="Profile Images" icon="circle" :icon-size="10" icon-type="solid" miniTitle="PI" :route="{ to: 'social-app.profile-images' }"></side-menu>
          <side-menu isTag="router-link" title="Profile Video" icon="circle" :icon-size="10" icon-type="solid" miniTitle="PV" :route="{ to: 'social-app.profile-videos' }"></side-menu>
          <side-menu isTag="router-link" title="Birthday" icon="circle" :icon-size="10" icon-type="solid" miniTitle="B" :route="{ to: 'social-app.birthday' }"></side-menu>
          <side-menu isTag="router-link" title="Notifications" icon="circle" :icon-size="10" icon-type="solid" miniTitle="N" :route="{ to: 'social-app.notification' }"></side-menu>
          <side-menu isTag="router-link" title="Account Setting" icon="circle" :icon-size="10" icon-type="solid" miniTitle="A" :route="{ to: 'social-app.account-setting' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Events" icon="square-i" miniTitle="E" toggle-id="events" :caret-icon="true" :route="{ popup: 'false', to: 'social-app.events' }" @onClick="toggle" :active="currentRoute.includes('social-app.events')">
        <b-collapse tag="ul" class="sub-nav" id="events" accordion="social-app" :visible="currentRoute.includes('social-app.events')">
          <side-menu isTag="router-link" title="Events List" icon="circle" :icon-size="10" icon-type="solid" miniTitle="EL" :route="{ to: 'social-app.event-list' }"></side-menu>
          <side-menu isTag="router-link" title="Events Details" icon="circle" :icon-size="10" icon-type="solid" miniTitle="ED" :route="{ to: 'social-app.event-detail' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Groups" icon="user-group" miniTitle="G" toggle-id="groups" :caret-icon="true" :route="{ popup: 'false', to: 'social-app.group' }" @onClick="toggle" :active="currentRoute.includes('social-app.group')">
        <b-collapse tag="ul" class="sub-nav" id="groups" accordion="social-app" :visible="currentRoute.includes('social-app.group')">
          <side-menu isTag="router-link" title="Groups List" icon="circle" :icon-size="10" icon-type="solid" miniTitle="GL" :route="{ to: 'social-app.group-list' }"></side-menu>
          <side-menu isTag="router-link" title="Groups Details" icon="circle" :icon-size="10" icon-type="solid" miniTitle="GD" :route="{ to: 'social-app.group-detail' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Social Profile" icon="brief-case" miniTitle="S" :route="{ to: 'social-app.social-profile' }"></side-menu>
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
