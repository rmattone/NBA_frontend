<template>
  <!-- Sidebar Component Start Here-->
  <default-sidebar>
    <template #profile-card>
      <profile-card></profile-card>
    </template>
    <hr class="hr-horizontal" />
    <ul class="navbar-nav iq-main-menu" id="e-commerce">
      <side-menu title="MAIL" :static-item="true"></side-menu>
      <side-menu isTag="router-link" title="Mail" icon="message" miniTitle="M" :route="{ to: 'mail.mail-dashboard' }"></side-menu>
      <side-menu isTag="router-link" title="Email Component" icon="pencil" miniTitle="MC" :route="{ to: 'mail.email-compose' }"></side-menu>
      <side-menu title="Starred" icon="star" miniTitle="BF"></side-menu>
      <side-menu title="Sent" icon="location-arrow" miniTitle="BF"></side-menu>
      <side-menu title="Draft" icon="file" miniTitle="BF"></side-menu>
      <hr class="hr-horizontal" />
      <side-menu title="PAGES" :static-item="true"></side-menu>
      <side-menu title="Sign Out" icon="exit" miniTitle="BF"></side-menu>
      <side-menu title="Help" icon="exclamation-circle" miniTitle="BF"></side-menu>
    </ul>
  </default-sidebar>
  <!-- Sidebar Component End Here-->
</template>

<script>
import { ref } from 'vue'
import DefaultSidebar from '@/components/custom/sidebar/DefaultSidebar.vue'
import SideMenu from '@/components/custom/nav/SideMenu.vue'
import ProfileCard from '@/components/custom/sidebar/ProfileCard.vue'
export default {
  components: { DefaultSidebar, SideMenu, ProfileCard },
  setup() {
    const visible = ref(false)
    const openMenu = () => {
      visible.value = !visible.value
    }
    return { visible, openMenu }
  }
}
</script>

<style></style>
