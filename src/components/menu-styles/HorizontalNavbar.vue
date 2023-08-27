<template>
  <guest-navbar>
    <b-col lg="3">
      <router-link :to="{ name: 'default.dashboard' }" class="d-flex">
        <brand-logo></brand-logo>
        <h4 class="logo-title "><brand-name></brand-name></h4>
      </router-link>
    </b-col>
  </guest-navbar>
</template>

<script setup>
import GuestNavbar from '@/components/custom/navbar/GuestNavbar.vue'
</script>
