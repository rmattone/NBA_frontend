<template>
  <div class="d-grid gap-3 d-grid-template-1fr-19">
    <div class="col" v-for="(data, index) in items" :key="index">
      <ProfileImage :profileimagesimg="data.profileimagesimg" :fslightboximg="data.fslightboximg" :profileimageslike="data.profileimageslike" :profileimagescomment="data.profileimagescomment" :profileimagesshare="data.profileimagesshare" />
    </div>
  </div>
</template>
<script>
import ProfileImage from '@/components/modules/social-app/widgets/PorfileImage.vue'
export default {
  name: 'ProfileImages',
  components: {
    ProfileImage
  },
  setup() {
    const items = [
      {
        profileimagesimg: require('@/assets/modules/social-app/images/profile-event/19.png'),
        fslightboximg: require('@/assets/modules/social-app/images/profile-event/19.png'),
        profileimageslike: '60',
        profileimagescomment: '30',
        profileimagesshare: '10'
      },
      {
        profileimagesimg: require('@/assets/modules/social-app/images/profile-event/02.png'),
        fslightboximg: require('@/assets/modules/social-app/images/profile-event/02.png'),
        profileimageslike: '60',
        profileimagescomment: '30',
        profileimagesshare: '10'
      },
      {
        profileimagesimg: require('@/assets/modules/social-app/images/profile-event/03.png'),
        fslightboximg: require('@/assets/modules/social-app/images/profile-event/03.png'),
        profileimageslike: '60',
        profileimagescomment: '30',
        profileimagesshare: '10'
      },
      {
        profileimagesimg: require('@/assets/modules/social-app/images/profile-event/04.png'),
        fslightboximg: require('@/assets/modules/social-app/images/profile-event/04.png'),
        profileimageslike: '60',
        profileimagescomment: '30',
        profileimagesshare: '10'
      },
      {
        profileimagesimg: require('@/assets/modules/social-app/images/profile-event/05.png'),
        fslightboximg: require('@/assets/modules/social-app/images/profile-event/05.png'),
        profileimageslike: '60',
        profileimagescomment: '30',
        profileimagesshare: '10'
      },
      {
        profileimagesimg: require('@/assets/modules/social-app/images/profile-event/06.png'),
        fslightboximg: require('@/assets/modules/social-app/images/profile-event/06.png'),
        profileimageslike: '60',
        profileimagescomment: '30',
        profileimagesshare: '10'
      },
      {
        profileimagesimg: require('@/assets/modules/social-app/images/profile-event/07.png'),
        fslightboximg: require('@/assets/modules/social-app/images/profile-event/07.png'),
        profileimageslike: '60',
        profileimagescomment: '30',
        profileimagesshare: '10'
      },
      {
        profileimagesimg: require('@/assets/modules/social-app/images/profile-event/08.png'),
        fslightboximg: require('@/assets/modules/social-app/images/profile-event/08.png'),
        profileimageslike: '60',
        profileimagescomment: '30',
        profileimagesshare: '10'
      },
      {
        profileimagesimg: require('@/assets/modules/social-app/images/profile-event/09.png'),
        fslightboximg: require('@/assets/modules/social-app/images/profile-event/09.png'),
        profileimageslike: '60',
        profileimagescomment: '30',
        profileimagesshare: '10'
      },
      {
        profileimagesimg: require('@/assets/modules/social-app/images/profile-event/10.png'),
        fslightboximg: require('@/assets/modules/social-app/images/profile-event/10.png'),
        profileimageslike: '60',
        profileimagescomment: '30',
        profileimagesshare: '10'
      },
      {
        profileimagesimg: require('@/assets/modules/social-app/images/profile-event/11.png'),
        fslightboximg: require('@/assets/modules/social-app/images/profile-event/11.png'),
        profileimageslike: '60',
        profileimagescomment: '30',
        profileimagesshare: '10'
      },
      {
        profileimagesimg: require('@/assets/modules/social-app/images/profile-event/12.png'),
        fslightboximg: require('@/assets/modules/social-app/images/profile-event/12.png'),
        profileimageslike: '60',
        profileimagescomment: '30',
        profileimagesshare: '10'
      },
      {
        profileimagesimg: require('@/assets/modules/social-app/images/profile-event/13.png'),
        fslightboximg: require('@/assets/modules/social-app/images/profile-event/13.png'),
        profileimageslike: '60',
        profileimagescomment: '30',
        profileimagesshare: '10'
      },
      {
        profileimagesimg: require('@/assets/modules/social-app/images/profile-event/14.png'),
        fslightboximg: require('@/assets/modules/social-app/images/profile-event/14.png'),
        profileimageslike: '60',
        profileimagescomment: '30',
        profileimagesshare: '10'
      },
      {
        profileimagesimg: require('@/assets/modules/social-app/images/profile-event/15.png'),
        fslightboximg: require('@/assets/modules/social-app/images/profile-event/15.png'),
        profileimageslike: '60',
        profileimagescomment: '30',
        profileimagesshare: '10'
      }
    ]
    return {
      items
    }
  }
}
</script>
