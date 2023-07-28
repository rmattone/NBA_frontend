<template>
  <b-row>
    <b-col sm="12">
      <h3 class="card-title my-3">
        {{ $t('social-app.sidebar.notification') }}
      </h3>
    </b-col>
    <b-col sm="12">
      <div class="col" v-for="(data, index) in items" :key="index">
        <NotificationWidget :notificationimg="data.notificationimg" :notificationtitle="data.notificationtitle" :notificationsvg="data.notificationsvg" :notificationcolor="data.notificationcolor" :notificationdefault="data.notificationdefault" />
      </div>
    </b-col>
  </b-row>
</template>
<script>
import NotificationWidget from '@/components/modules/social-app/widgets/NotificationWidget.vue'
export default {
  name: 'NotificationPage',
  components: {
    NotificationWidget
  },
  setup() {
    const items = [
      {
        notificationimg: require('@/assets/modules/social-app/images/avatar/01.png'),
        notificationtitle: 'Paige Turner Posted in UI/UX Community',
        notificationsvg: '1',
        notificationcolor: 'primary',
        notificationdefault: '30  ago'
      },
      {
        notificationimg: require('@/assets/modules/social-app/images/avatar/02.png'),
        notificationtitle: 'Anne Fibbiyon Like Your Post',
        notificationsvg: '2',
        notificationcolor: 'danger',
        notificationdefault: '15 ago'
      },
      {
        notificationimg: require('@/assets/modules/social-app/images/avatar/03.png'),
        notificationtitle: 'Barry Cuda add Story',
        notificationsvg: '1',
        notificationcolor: 'primary',
        notificationdefault: '40  ago'
      },
      {
        notificationimg: require('@/assets/modules/social-app/images/avatar/04.png'),
        notificationtitle: 'Cliff Hanger posted a comment on your status update',
        notificationsvg: '3',
        notificationcolor: 'success',
        notificationdefault: '42 ago'
      },
      {
        notificationimg: require('@/assets/modules/social-app/images/avatar/16.png'),
        notificationtitle: "Rick O'Shea posted a comment on your photo",
        notificationsvg: '3',
        notificationcolor: 'success',
        notificationdefault: '50  ago'
      },
      {
        notificationimg: require('@/assets/modules/social-app/images/avatar/05.png'),
        notificationtitle: 'Brock Lee Sent a Friend Request',
        notificationsvg: '4',
        notificationcolor: 'warning',
        notificationdefault: '1 hour ago'
      },
      {
        notificationimg: require('@/assets/modules/social-app/images/avatar/06.png'),
        notificationtitle: 'Ira Membrit shared your status update',
        notificationsvg: '6',
        notificationcolor: 'info',
        notificationdefault: '1 hour ago'
      },
      {
        notificationimg: require('@/assets/modules/social-app/images/avatar/11.png'),
        notificationtitle: 'Paul Molive and 3 ther have Birthday Today',
        notificationsvg: '5',
        notificationcolor: 'danger',
        notificationdefault: '3 hour ago'
      },
      {
        notificationimg: require('@/assets/modules/social-app/images/avatar/07.png'),
        notificationtitle: 'Petey Cruiser Sent a Friend request',
        notificationsvg: '4',
        notificationcolor: 'warning',
        notificationdefault: '1 day ago'
      },
      {
        notificationimg: require('@/assets/modules/social-app/images/avatar/08.png'),
        notificationtitle: 'Bob Frapples and 45 other Like Your Pst on timeline',
        notificationsvg: '2',
        notificationcolor: 'danger',
        notificationdefault: '1 week ago'
      },
      {
        notificationimg: require('@/assets/modules/social-app/images/avatar/12.png'),
        notificationtitle: 'Maya Didas share Your Post',
        notificationsvg: '6',
        notificationcolor: 'info',
        notificationdefault: '1 month ago'
      },
      {
        notificationimg: require('@/assets/modules/social-app/images/avatar/09.png'),
        notificationtitle: 'Sal Monella Add Photo with You',
        notificationsvg: '1',
        notificationcolor: 'primary',
        notificationdefault: '1 month ago'
      },
      {
        notificationimg: require('@/assets/modules/social-app/images/avatar/10.png'),
        notificationtitle: 'Barb Dwyer commented on your new profile status',
        notificationsvg: '3',
        notificationcolor: 'success',
        notificationdefault: '2 month ago'
      },
      {
        notificationimg: require('@/assets/modules/social-app/images/avatar/13.png'),
        notificationtitle: 'Terry Aki commented on your new profile status',
        notificationsvg: '3',
        notificationcolor: 'success',
        notificationdefault: '2 month ago'
      },
      {
        notificationimg: require('@/assets/modules/social-app/images/avatar/14.png'),
        notificationtitle: 'Paige Turner Posted in Development Community',
        notificationsvg: '1',
        notificationcolor: 'primary',
        notificationdefault: '3 month ago'
      }
    ]
    return {
      items
    }
  }
}
</script>
