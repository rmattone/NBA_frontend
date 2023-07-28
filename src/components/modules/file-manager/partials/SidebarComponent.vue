<template>
  <!-- Sidebar Component Start Here-->
  <default-sidebar>
    <template #profile-card>
      <profile-card></profile-card>
    </template>
    <hr class="hr-horizontal" />
    <ul class="navbar-nav iq-main-menu" id="e-commerce">
      <side-menu title="APPOINTMENT" :static-item="true"></side-menu>
      <side-menu isTag="router-link" title="Dashboard" icon="view-grid" miniTitle="D" :route="{ to: 'file-manager.dashboard' }"></side-menu>
      <hr class="hr-horizontal" />
      <side-menu title="PAGES" :static-item="true"></side-menu>
      <side-menu isTag="router-link" title="Images" icon="photograph" miniTitle="I" :route="{ to: 'file-manager.image-folder' }"></side-menu>
      <side-menu isTag="router-link" title="Videos" icon="start" miniTitle="V" :route="{ to: 'file-manager.video-folder' }"></side-menu>
      <side-menu isTag="router-link" title="Documents" icon="document" miniTitle="D" :route="{ to: 'file-manager.document-folder' }"></side-menu>
      <side-menu isTag="router-link" title="All Files" icon="folder" miniTitle="AF" :route="{ to: 'file-manager.all-files' }">
        <template #title>
          All Files
          <b-badge variant="warning text-white" pill>21</b-badge>
        </template>
      </side-menu>
      <side-menu isTag="router-link" title="Trash" icon="trash" miniTitle="T" :route="{ to: 'file-manager.trash' }"></side-menu>
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
