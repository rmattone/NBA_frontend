<template>
  <loader-component :show="isLoader"></loader-component>
  <!-- Sidebar Component Start Here-->
  <sidebar-component></sidebar-component>
  <!-- Sidebar Component End Here-->
  <main class="main-content">
    <div :class="`position-relative  ${isBanner ? 'iq-banner ' + bannerStyle : ''}`">
      <!-- Header Component Start Here -->
      <header-component></header-component>
      <template v-if="isBanner">
        <!-- Sub Header Component Start Here-->
        <sub-header></sub-header>
        <!-- Sub Header Component End Here-->
      </template>
      <!-- Header Component End Here -->
    </div>

    <!-- Main Content Start Here -->
    <main-content-component>
      <!-- Router View For Pages -->
      <router-view></router-view>
    </main-content-component>
    <!-- Main Content Start Here -->

    <!-- Footer Component Start Here -->
    <footer-component></footer-component>
    <!-- Footer Component End Here -->
  </main>
  <!-- Live Customizer Component Start Here -->
  <!-- <setting-offcanvas></setting-offcanvas> -->
  <!-- Live Customizer Component End Here-->
</template>

<script setup>
// Library
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

// Custom Utility Functions
import { useShepherd } from '@/utilities/shepherd'
import { addClass, getQueryString } from '@/utilities/dom'
// Components
import HeaderComponent from '@/components/partials/HeaderComponent.vue'
import SubHeader from '@/components/custom/header/SubHeader.vue'
import SidebarComponent from '@/components/partials/SidebarComponent.vue'
import MainContentComponent from '@/components/partials/MainContentComponent.vue'
import FooterComponent from '@/components/partials/FooterComponent.vue'
// import SettingOffcanvas from '@/components/setting/SettingOffcanvas.vue'
import LoaderComponent from '@/components/custom/loader/LoaderComponent.vue'

const route = useRoute()
const store = useStore()
const isBanner = computed(() => route.meta.isBanner)
const bannerStyle = computed(() => store.getters['setting/header_banner'])
const isLoader = ref(true)

const checkTour = () => {
  const liveCustomizer = getQueryString('live-customizer')
  const tour = window.sessionStorage.getItem('tour')
  if (liveCustomizer !== 'open' ) {
    if (tour !== 'true') {
      return false
    }
  }
}
onMounted(() => {
  useShepherd(
    [
      {
        title: `<h4>Menu</h4>`,
        text: `<p class="mb-0">Check the content under Menu Style. Click to view all oavailable Menu Style options for you. </p>`,
        attachTo: {
          element: '#first-tour',
          on: 'right'
        },
        buttons: [
          {
            action() {
              return this.next()
            },
            text: 'Next'
          }
        ],
        id: 'first-tour'
      },
      {
        title: `<h4>Profile Setting</h4>`,
        text: `<p class="mb-0">Configure your Profile using Profile Settings. Edit, save and update your profile from here.</p>`,
        attachTo: {
          element: '#itemdropdown1',
          on: 'bottom'
        },
        buttons: [
          {
            action() {
              return this.back()
            },
            classes: 'shepherd-button-secondary',
            text: 'Back'
          },
          {
            action() {
              return this.next()
            },
            text: 'Next'
          }
        ],
        id: 'dropdown1'
      },
      {
        title: `<h4>Live Customizer</h4>`,
        text: `<p class="mb-0">Transform the entire look, color, style and appearance of using Live Customizer settings. Change and copy the settings from here. </p>`,
        attachTo: {
          element: '#settingbutton',
          on: 'right'
        },
        buttons: [
          {
            action() {
              return this.back()
            },
            classes: 'shepherd-button-secondary',
            text: 'Back'
          },
          {
            action() {
              window.sessionStorage.setItem('tour', 'true')
              return this.next()
            },
            text: 'Done'
          }
        ],
        id: 'title'
      }
    ],
    checkTour(),
    () => addClass('.shepherd-modal-overlay-container', 'shepherd-modal-is-visible')
  )
  setTimeout(() => {
    isLoader.value = false
  }, 300)
})
</script>


<style lang="scss">
@import '@/assets/modules/social-app/scss/social-app.scss';
@import '@/assets/modules/nba/nba.scss';
</style>