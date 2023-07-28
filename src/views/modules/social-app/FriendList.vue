<template>
  <b-row>
    <b-col md="6" v-for="(data, index) in items" :key="index">
      <FriendListWidget :Img="data.Img" :friendlistImg="data.friendlistImg" :friendlisttitle="data.friendlisttitle" :friendlistsubtitle="data.friendlistsubtitle" :friendlistdec="data.friendlistdec" />
    </b-col>
  </b-row>
</template>
<script>
import FriendListWidget from '@/components/modules/social-app/widgets/FriendListWidget.vue'
export default {
  name: 'FriendList',
  components: {
    FriendListWidget
  },
  setup() {
    const items = [
      {
        Img: require('@/assets/modules/social-app/images/friend-list/01.png'),
        friendlistImg: require('@/assets/modules/social-app/images/avatar/01.png'),
        friendlisttitle: 'Anna Sthesia',
        friendlistsubtitle: '@designer',
        friendlistdec: 'Lorem Ipsum is simply dummy text of the'
      },
      {
        Img: require('@/assets/modules/social-app/images/friend-list/02.png'),
        friendlistImg: require('@/assets/modules/social-app/images/avatar/02.png'),
        friendlisttitle: 'Paul Molive',
        friendlistsubtitle: '@developer',
        friendlistdec: 'Lorem Ipsum is simply dummy text of the'
      },
      {
        Img: require('@/assets/modules/social-app/images/friend-list/03.png'),
        friendlistImg: require('@/assets/modules/social-app/images/avatar/03.png'),
        friendlisttitle: 'Anna Mull',
        friendlistsubtitle: '@designer',
        friendlistdec: 'Lorem Ipsum is simply dummy text of the'
      },
      {
        Img: require('@/assets/modules/social-app/images/friend-list/04.png'),
        friendlistImg: require('@/assets/modules/social-app/images/avatar/04.png'),
        friendlisttitle: 'Paige Turner',
        friendlistsubtitle: '@tester',
        friendlistdec: 'Lorem Ipsum is simply dummy text of the'
      },
      {
        Img: require('@/assets/modules/social-app/images/friend-list/05.png'),
        friendlistImg: require('@/assets/modules/social-app/images/avatar/05.png'),
        friendlisttitle: 'Bob Frapples',
        friendlistsubtitle: '@developer',
        friendlistdec: 'Lorem Ipsum is simply dummy text of the'
      },
      {
        Img: require('@/assets/modules/social-app/images/friend-list/06.png'),
        friendlistImg: require('@/assets/modules/social-app/images/avatar/06.png'),
        friendlisttitle: 'Barb Ackue',
        friendlistsubtitle: '@grapficsr',
        friendlistdec: 'Lorem Ipsum is simply dummy text of the'
      },
      {
        Img: require('@/assets/modules/social-app/images/friend-list/07.png'),
        friendlistImg: require('@/assets/modules/social-app/images/avatar/07.png'),
        friendlisttitle: 'Greta Life',
        friendlistsubtitle: '@fashion',
        friendlistdec: 'Lorem Ipsum is simply dummy text of the'
      },
      {
        Img: require('@/assets/modules/social-app/images/friend-list/08.png'),
        friendlistImg: require('@/assets/modules/social-app/images/avatar/08.png'),
        friendlisttitle: 'Ira Membrit',
        friendlistsubtitle: '@designer',
        friendlistdec: 'Lorem Ipsum is simply dummy text of the'
      },
      {
        Img: require('@/assets/modules/social-app/images/friend-list/01.png'),
        friendlistImg: require('@/assets/modules/social-app/images/avatar/09.png'),
        friendlisttitle: 'Pete Sariya',
        friendlistsubtitle: '@designer',
        friendlistdec: 'Lorem Ipsum is simply dummy text of the'
      },
      {
        Img: require('@/assets/modules/social-app/images/friend-list/02.png'),
        friendlistImg: require('@/assets/modules/social-app/images/avatar/10.png'),
        friendlisttitle: 'Monty Carlo',
        friendlistsubtitle: '@designer',
        friendlistdec: 'Lorem Ipsum is simply dummy text of the'
      },
      {
        Img: require('@/assets/modules/social-app/images/friend-list/03.png'),
        friendlistImg: require('@/assets/modules/social-app/images/avatar/01.png'),
        friendlisttitle: 'Ed Itorial',
        friendlistsubtitle: '@testen',
        friendlistdec: 'Lorem Ipsum is simply dummy text of the'
      },
      {
        Img: require('@/assets/modules/social-app/images/friend-list/04.png'),
        friendlistImg: require('@/assets/modules/social-app/images/avatar/02.png'),
        friendlisttitle: 'Paul Issy',
        friendlistsubtitle: '@r&d',
        friendlistdec: 'Lorem Ipsum is simply dummy text of the'
      },
      {
        Img: require('@/assets/modules/social-app/images/friend-list/05.png'),
        friendlistImg: require('@/assets/modules/social-app/images/avatar/03.png'),
        friendlisttitle: 'Rick Shaw',
        friendlistsubtitle: '@coder',
        friendlistdec: 'Lorem Ipsum is simply dummy text of the'
      },
      {
        Img: require('@/assets/modules/social-app/images/friend-list/06.png'),
        friendlistImg: require('@/assets/modules/social-app/images/avatar/04.png'),
        friendlisttitle: 'Ben Effit',
        friendlistsubtitle: '@designer',
        friendlistdec: 'Lorem Ipsum is simply dummy text of the'
      },
      {
        Img: require('@/assets/modules/social-app/images/friend-list/07.png'),
        friendlistImg: require('@/assets/modules/social-app/images/avatar/05.png'),
        friendlisttitle: 'Justin Case',
        friendlistsubtitle: '@designer',
        friendlistdec: 'Lorem Ipsum is simply dummy text of the'
      },
      {
        Img: require('@/assets/modules/social-app/images/friend-list/08.png'),
        friendlistImg: require('@/assets/modules/social-app/images/avatar/06.png'),
        friendlisttitle: 'Aaron Ottix',
        friendlistsubtitle: '@designer',
        friendlistdec: 'Lorem Ipsum is simply dummy text of the'
      }
    ]
    return {
      items
    }
  }
}
</script>
