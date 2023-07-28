<template>
  <loader-component :show="isLoader"></loader-component>
  <!-- Sidebar Component Start Here-->
  <sidebar-component></sidebar-component>
  <!-- Sidebar Component End Here-->
  <!-- Main Content Start Here -->
  <main class="main-content">
    <main-content-component className="p-0">
      <!-- Router View For Pages -->
      <router-view></router-view>
    </main-content-component>
  </main>
  <!-- Main Content Start Here -->
</template>

<script setup>
// Library
import { ref, onMounted, onUnmounted } from 'vue'

// Custom Utility Functions
import { addClass, removeClass } from '@/utilities/dom'

//component
import SidebarComponent from '@/components/modules/chat/partials/SidebarComponent.vue'
import MainContentComponent from '@/components/partials/MainContentComponent.vue'
import LoaderComponent from '@/components/custom/loader/LoaderComponent.vue'
const isLoader = ref(true)
onMounted(() => {
  addClass(document.body, 'iq-chat-theme')
  setTimeout(() => {
    isLoader.value = false
  }, 300)
})
onUnmounted(() => {
  removeClass(document.body, 'iq-chat-theme')
})
</script>

<style lang="scss">
@import '@/assets/modules/chat/scss/chat.scss';
</style>
