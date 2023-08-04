<template>
  <default-navbar>
    <b-col lg="3 navbar-brand">
      <router-link :to="{ name: 'default.dashboard' }" class="d-flex">
        <brand-logo></brand-logo>
        <h4 class="logo-title "><brand-name></brand-name></h4>
        <!-- <h4 class="logo-title d-none d-sm-block"><brand-name></brand-name></h4> -->
      </router-link>
    </b-col>
    <horizontal-menu></horizontal-menu>
  </default-navbar>
</template>

<script setup>
import DefaultNavbar from '@/components/custom/navbar/DefaultNavbar.vue'
import HorizontalMenu from '@/components/custom/navbar/HorizontalMenu.vue'
</script>
