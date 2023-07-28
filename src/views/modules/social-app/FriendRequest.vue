<template>
  <BRow>
    <BCol sm="12">
      <BCard class="friend-request-card" no-body>
        <BCardHeader class="d-flex justify-content-between">
          <div class="header-title">
            <BCardTitle>
              {{ $t('social-app.sidebar.friend-request') }}
            </BCardTitle>
          </div>
        </BCardHeader>
        <BCardBody>
          <ul class="request-list list-inline m-0 p-0">
            <div class="col" v-for="(data, index) in items" :key="index">
              <FriendRequestWidget :friendrequestimg="data.friendrequestimg" :classname="data.classname" :friendrequest="data.friendrequest" :friendrequesttitle="data.friendreqesttite" :friendrequestdec="data.friendrequestdec" />
            </div>
          </ul>
        </BCardBody>
      </BCard>
      <BCard class="friend-request-card" no-body>
        <BCardHeader class="d-flex justify-content-between">
          <div class="header-title">
            <BCardTitle>{{ $t('social-app.sidebar.people') }}</BCardTitle>
          </div>
        </BCardHeader>
        <BCardBody>
          <ul class="request-list m-0 p-0">
            <div class="col" v-for="(data, index) in items1" :key="index">
              <FriendRequestWidget :friendrequestimg="data.friendrequestimg" :classname="data.classname" :newfriendrequest="data.newfriendrequest" :friendrequesttitle="data.friendrequesttitle" :friendrequestdec="data.friendrequestdec" />
            </div>
          </ul>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</template>
<script>
import FriendRequestWidget from '@/components/modules/social-app/widgets/FriendRequest.vue'
export default {
  name: 'FriendRequest',
  components: {
    FriendRequestWidget
  },
  setup() {
    const items = [
      {
        friendrequestimg: require('@/assets/modules/social-app/images/avatar/01.png'),
        classname: 'border-bottom mb-3 pb-3',
        friendrequest: 'true',
        friendreqesttite: 'Jaques Amole',
        friendrequestdec: '40  friends'
      },
      {
        friendrequestimg: require('@/assets/modules/social-app/images/avatar/02.png'),
        classname: 'border-bottom mb-3 pb-3',
        friendrequest: 'true',
        friendreqesttite: 'Lucy Tania',
        friendrequestdec: '12  friends'
      },
      {
        friendrequestimg: require('@/assets/modules/social-app/images/avatar/03.png'),
        classname: 'border-bottom mb-3 pb-3',
        friendrequest: 'true',
        friendreqesttite: 'Val Adictorian',
        friendrequestdec: '0  friends'
      },
      {
        friendrequestimg: require('@/assets/modules/social-app/images/avatar/04.png'),
        classname: 'border-bottom mb-3 pb-3',
        friendrequest: 'true',
        friendreqesttite: 'Manny Petty',
        friendrequestdec: '3  friends'
      },
      {
        friendrequestimg: require('@/assets/modules/social-app/images/avatar/05.png'),
        classname: 'border-bottom mb-3 pb-3',
        friendrequest: 'true',
        friendreqesttite: 'Marsha Mello',
        friendrequestdec: '15  friends'
      },
      {
        friendrequestimg: require('@/assets/modules/social-app/images/avatar/06.png'),
        classname: 'border-bottom mb-3 pb-3',
        friendrequest: 'true',
        friendreqesttite: 'Caire Innet',
        friendrequestdec: '8  friends'
      },
      {
        friendrequestimg: require('@/assets/modules/social-app/images/avatar/07.png'),
        classname: 'border-bottom mb-3 pb-3',
        friendrequest: 'true',
        friendreqesttite: 'Gio Metric',
        friendrequestdec: '10  friends'
      },
      {
        friendrequestimg: require('@/assets/modules/social-app/images/avatar/08.png'),
        classname: 'border-bottom mb-3 pb-3',
        friendrequest: 'true',
        friendreqesttite: 'Chris P. Cream',
        friendrequestdec: '18  friends'
      },
      {
        friendrequestimg: require('@/assets/modules/social-app/images/avatar/09.png'),
        classname: 'border-bottom mb-3 pb-3',
        friendrequest: 'true',
        friendreqesttite: 'Paul Misunda',
        friendrequestdec: '6  friends'
      },
      {
        friendrequestimg: require('@/assets/modules/social-app/images/avatar/10.png'),
        classname: 'border-bottom mb-3 pb-3',
        friendrequest: 'true',
        friendreqesttite: 'Reanne Carnation',
        friendrequestdec: '12  friends'
      }
    ]
    const items1 = [
      {
        friendrequestimg: require('@/assets/modules/social-app/images/avatar/01.png'),
        classname: 'border-bottom mb-3 pb-3',
        newfriendrequest: 'true',
        friendrequesttitle: 'Jen Youfelct',
        friendrequestdec: '4 friends'
      },
      {
        friendrequestimg: require('@/assets/modules/social-app/images/avatar/02.png'),
        classname: 'border-bottom mb-3 pb-3',
        newfriendrequest: 'true',
        friendrequesttitle: 'Cooke Edoh',
        friendrequestdec: '20  friends'
      },
      {
        friendrequestimg: require('@/assets/modules/social-app/images/avatar/03.png'),
        classname: 'border-bottom mb-3 pb-3',
        newfriendrequest: 'true',
        friendrequesttitle: 'Earl E. Riser',
        friendrequestdec: '30  friends'
      },
      {
        friendrequestimg: require('@/assets/modules/social-app/images/avatar/04.png'),
        classname: 'border-bottom mb-3 pb-3',
        newfriendrequest: 'true',
        friendrequesttitle: 'Cliff Diver',
        friendrequestdec: '5  friends'
      },
      {
        friendrequestimg: require('@/assets/modules/social-app/images/avatar/05.png'),
        classname: 'border-bottom mb-3 pb-3',
        newfriendrequest: 'true',
        friendrequesttitle: 'Cliff Diver',
        friendrequestdec: '15  friends'
      },
      {
        friendrequestimg: require('@/assets/modules/social-app/images/avatar/06.png'),
        classname: 'border-bottom mb-3 pb-3',
        newfriendrequest: 'true',
        friendrequesttitle: 'Vinny Gret',
        friendrequestdec: '50  friends'
      },
      {
        friendrequestimg: require('@/assets/modules/social-app/images/avatar/07.png'),
        classname: 'border-bottom mb-3 pb-3',
        newfriendrequest: 'true',
        friendrequesttitle: 'Paul Samic',
        friendrequestdec: '6  friends'
      },
      {
        friendrequestimg: require('@/assets/modules/social-app/images/avatar/08.png'),
        classname: 'border-bottom mb-3 pb-3',
        newfriendrequest: 'true',
        friendrequesttitle: 'Gustav Wind',
        friendrequestdec: '14  friends'
      },
      {
        friendrequestimg: require('@/assets/modules/social-app/images/avatar/09.png'),
        classname: 'border-bottom mb-3 pb-3',
        newfriendrequest: 'true',
        friendrequesttitle: 'Minnie Strone',
        friendrequestdec: '16  friends'
      },
      {
        friendrequestimg: require('@/assets/modules/social-app/images/avatar/10.png'),
        classname: 'border-bottom mb-3 pb-3',
        newfriendrequest: 'true',
        friendrequesttitle: 'Ray Volver',
        friendrequestdec: '9  friends'
      },
      {
        friendrequestimg: require('@/assets/modules/social-app/images/avatar/11.png'),
        newfriendrequest: 'true',
        friendrequesttitle: 'Jen Trification',
        friendrequestdec: '42  friends'
      }
    ]
    return {
      items,
      items1
    }
  }
}
</script>
