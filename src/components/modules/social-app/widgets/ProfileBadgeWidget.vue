<template>
  <b-card class="profile-badges mb-0">
    <div class="iq-badges text-left">
      <div class="badges-icon">
        <img class="avatar-80 rounded" :src="`${profilebadgesimg}`" alt="" loading="lazy" />
      </div>
      <h5 class="mb-2">{{ profilebadgestitle }}</h5>
      <p>{{ profilebadgesdec }}</p>
      <span class="text-uppercase">{{ profilebadgessub }}</span>
    </div>
  </b-card>
</template>
<script>
export default {
  name: 'ProfileBadgesWidget',
  props: {
    type: String,
    profilebadgesimg: { default: '' },
    profilebadgestitle: { default: '' },
    profilebadgesdec: { default: '' },
    profilebadgessub: { default: '' }
  }
}
</script>
