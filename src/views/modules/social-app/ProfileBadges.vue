<template>
  <b-row class="my-5">
    <div class="d-grid d-grid-template-1fr-22">
      <div class="col" v-for="(data, index) in items" :key="index">
        <ProfileBadgesWidget :profilebadgesimg="data.profilebadgesimg" :profilebadgestitle="data.profilebadgestitle" :profilebadgesdec="data.profilebadgesdec" :profilebadgessub="data.profilebadgessub" />
      </div>
    </div>
  </b-row>
</template>
<script>
import ProfileBadgesWidget from '@/components/modules/social-app/widgets/ProfileBadgeWidget.vue'
export default {
  name: 'profile-badges',
  components: {
    ProfileBadgesWidget
  },
  setup() {
    const items = [
      {
        profilebadgesimg: require('@/assets/modules/social-app/images/profile-badges/01.png'),
        profilebadgestitle: 'Gold User',
        profilebadgesdec: 'Richard McClintock, a Latin professor consectetur.',
        profilebadgessub: 'Unlock Jan 15th, 2020'
      },
      {
        profilebadgesimg: require('@/assets/modules/social-app/images/profile-badges/02.png'),
        profilebadgestitle: 'Gold User',
        profilebadgesdec: 'Richard McClintock, a Latin professor consectetur.',
        profilebadgessub: 'Unlock Jan 15th, 2020'
      },
      {
        profilebadgesimg: require('@/assets/modules/social-app/images/profile-badges/03.png'),
        profilebadgestitle: 'Gold User',
        profilebadgesdec: 'Richard McClintock, a Latin professor consectetur.',
        profilebadgessub: 'Unlock Jan 15th, 2020'
      },
      {
        profilebadgesimg: require('@/assets/modules/social-app/images/profile-badges/04.png'),
        profilebadgestitle: 'Gold User',
        profilebadgesdec: 'Richard McClintock, a Latin professor consectetur.',
        profilebadgessub: 'Unlock Jan 15th, 2020'
      },
      {
        profilebadgesimg: require('@/assets/modules/social-app/images/profile-badges/05.png'),
        profilebadgestitle: 'Gold User',
        profilebadgesdec: 'Richard McClintock, a Latin professor consectetur.',
        profilebadgessub: 'Unlock Jan 15th, 2020'
      },
      {
        profilebadgesimg: require('@/assets/modules/social-app/images/profile-badges/06.png'),
        profilebadgestitle: 'Gold User',
        profilebadgesdec: 'Richard McClintock, a Latin professor consectetur.',
        profilebadgessub: 'Unlock Jan 15th, 2020'
      },
      {
        profilebadgesimg: require('@/assets/modules/social-app/images/profile-badges/07.png'),
        profilebadgestitle: 'Gold User',
        profilebadgesdec: 'Richard McClintock, a Latin professor consectetur.',
        profilebadgessub: 'Unlock Jan 15th, 2020'
      },
      {
        profilebadgesimg: require('@/assets/modules/social-app/images/profile-badges/08.png'),
        profilebadgestitle: 'Gold User',
        profilebadgesdec: 'Richard McClintock, a Latin professor consectetur.',
        profilebadgessub: 'Unlock Jan 15th, 2020'
      },
      {
        profilebadgesimg: require('@/assets/modules/social-app/images/profile-badges/09.png'),
        profilebadgestitle: 'Gold User',
        profilebadgesdec: 'Richard McClintock, a Latin professor consectetur.',
        profilebadgessub: 'Unlock Jan 15th, 2020'
      },
      {
        profilebadgesimg: require('@/assets/modules/social-app/images/profile-badges/10.png'),
        profilebadgestitle: 'Gold User',
        profilebadgesdec: 'Richard McClintock, a Latin professor consectetur.',
        profilebadgessub: 'Unlock Jan 15th, 2020'
      },
      {
        profilebadgesimg: require('@/assets/modules/social-app/images/profile-badges/11.png'),
        profilebadgestitle: 'Gold User',
        profilebadgesdec: 'Richard McClintock, a Latin professor consectetur.',
        profilebadgessub: 'Unlock Jan 15th, 2020'
      },
      {
        profilebadgesimg: require('@/assets/modules/social-app/images/profile-badges/12.png'),
        profilebadgestitle: 'Gold User',
        profilebadgesdec: 'Richard McClintock, a Latin professor consectetur.',
        profilebadgessub: 'Unlock Jan 15th, 2020'
      }
    ]
    return {
      items
    }
  }
}
</script>
