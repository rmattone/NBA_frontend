<template>
  <div class="d-grid gap-3 d-grid-template-1fr-19">
    <div class="col" v-for="(data, index) in items" :key="index">
      <GroupWidget :Img="data.Img" :groupimg="data.groupimg" :grouptitle="data.grouptitle" :groupdec="data.groupdec" :grouppost="data.grouppost" :grouppostnumber="data.grouppostnumber" :groupmember="data.groupmember" :groupmembernumber="data.groupmembernumber" :groupvisit="data.groupvisit" :groupvisitnumber="data.groupvisitnumber" :groupavatarimg="data.groupavatarimg" :groupavatarimg1="data.groupavatarimg1" :groupavatarimg2="data.groupavatarimg2" :groupavatarimg3="data.groupavatarimg3" :groupavatarimg4="data.groupavatarimg4" :groupavatarimg5="data.groupavatarimg5" />
    </div>
  </div>
</template>
<script>
import GroupWidget from '@/components/modules/social-app/widgets/GroupWidget.vue'
export default {
  name: 'GroupList',
  components: {
    GroupWidget
  },
  setup() {
    const items = [
      {
        Img: require('@/assets/modules/social-app/images/profile-event/01.png'),
        groupimg: require('@/assets/modules/social-app/images/group/01.jpg'),
        grouptitle: 'Designer',
        groupdec: 'Lorem Ipsum data',
        grouppost: 'Post',
        grouppostnumber: '600',
        groupmember: 'Member',
        groupmembernumber: '320',
        groupvisit: 'Visit',
        groupvisitnumber: '1.2k',
        groupavatarimg: require('@/assets/modules/social-app/images/avatar/01.png'),
        groupavatarimg1: require('@/assets/modules/social-app/images/avatar/02.png'),
        groupavatarimg2: require('@/assets/modules/social-app/images/avatar/03.png'),
        groupavatarimg3: require('@/assets/modules/social-app/images/avatar/04.png'),
        groupavatarimg4: require('@/assets/modules/social-app/images/avatar/05.png'),
        groupavatarimg5: require('@/assets/modules/social-app/images/avatar/06.png')
      },
      {
        Img: require('@/assets/modules/social-app/images/profile-event/02.png'),
        groupimg: require('@/assets/modules/social-app/images/group/02.jpg'),
        grouptitle: 'R & D',
        groupdec: 'Lorem Ipsum data',
        grouppost: 'Post',
        grouppostnumber: '300',
        groupmember: 'Member',
        groupmembernumber: '210',
        groupvisit: 'Visit',
        groupvisitnumber: '1.1k',
        groupavatarimg: require('@/assets/modules/social-app/images/avatar/01.png'),
        groupavatarimg1: require('@/assets/modules/social-app/images/avatar/02.png'),
        groupavatarimg2: require('@/assets/modules/social-app/images/avatar/03.png'),
        groupavatarimg3: require('@/assets/modules/social-app/images/avatar/04.png'),
        groupavatarimg4: require('@/assets/modules/social-app/images/avatar/05.png'),
        groupavatarimg5: require('@/assets/modules/social-app/images/avatar/06.png')
      },
      {
        Img: require('@/assets/modules/social-app/images/profile-event/03.png'),
        groupimg: require('@/assets/modules/social-app/images/group/03.jpg'),
        grouptitle: 'Graphics',
        groupdec: 'Lorem Ipsum data',
        grouppost: 'Post',
        grouppostnumber: '320',
        groupmember: 'Member',
        groupmembernumber: '100',
        groupvisit: 'Visit',
        groupvisitnumber: '1.0k',
        groupavatarimg: require('@/assets/modules/social-app/images/avatar/01.png'),
        groupavatarimg1: require('@/assets/modules/social-app/images/avatar/02.png'),
        groupavatarimg2: require('@/assets/modules/social-app/images/avatar/03.png'),
        groupavatarimg3: require('@/assets/modules/social-app/images/avatar/04.png'),
        groupavatarimg4: require('@/assets/modules/social-app/images/avatar/05.png'),
        groupavatarimg5: require('@/assets/modules/social-app/images/avatar/06.png')
      },
      {
        Img: require('@/assets/modules/social-app/images/profile-event/04.png'),
        groupimg: require('@/assets/modules/social-app/images/group/04.jpg'),
        grouptitle: 'Developer',
        groupdec: 'Lorem Ipsum data',
        grouppost: 'Post',
        grouppostnumber: '800',
        groupmember: 'Member',
        groupmembernumber: '480',
        groupvisit: 'Visit',
        groupvisitnumber: '2.2k',
        groupavatarimg: require('@/assets/modules/social-app/images/avatar/01.png'),
        groupavatarimg1: require('@/assets/modules/social-app/images/avatar/02.png'),
        groupavatarimg2: require('@/assets/modules/social-app/images/avatar/03.png'),
        groupavatarimg3: require('@/assets/modules/social-app/images/avatar/04.png'),
        groupavatarimg4: require('@/assets/modules/social-app/images/avatar/05.png'),
        groupavatarimg5: require('@/assets/modules/social-app/images/avatar/06.png')
      },
      {
        Img: require('@/assets/modules/social-app/images/profile-event/05.png'),
        groupimg: require('@/assets/modules/social-app/images/group/05.jpg'),
        grouptitle: 'Tester',
        groupdec: 'Lorem Ipsum data',
        grouppost: 'Post',
        grouppostnumber: '200',
        groupmember: 'Member',
        groupmembernumber: '100',
        groupvisit: 'Visit',
        groupvisitnumber: '32',
        groupavatarimg: require('@/assets/modules/social-app/images/avatar/01.png'),
        groupavatarimg1: require('@/assets/modules/social-app/images/avatar/02.png'),
        groupavatarimg2: require('@/assets/modules/social-app/images/avatar/03.png'),
        groupavatarimg3: require('@/assets/modules/social-app/images/avatar/04.png'),
        groupavatarimg4: require('@/assets/modules/social-app/images/avatar/05.png'),
        groupavatarimg5: require('@/assets/modules/social-app/images/avatar/06.png')
      },
      {
        Img: require('@/assets/modules/social-app/images/profile-event/06.png'),
        groupimg: require('@/assets/modules/social-app/images/group/06.jpg'),
        grouptitle: 'Events',
        groupdec: 'Lorem Ipsum data',
        grouppost: 'Post',
        grouppostnumber: '1000',
        groupmember: 'Member',
        groupmembernumber: '500',
        groupvisit: 'Visit',
        groupvisitnumber: '3.2k',
        groupavatarimg: require('@/assets/modules/social-app/images/avatar/01.png'),
        groupavatarimg1: require('@/assets/modules/social-app/images/avatar/02.png'),
        groupavatarimg2: require('@/assets/modules/social-app/images/avatar/03.png'),
        groupavatarimg3: require('@/assets/modules/social-app/images/avatar/04.png'),
        groupavatarimg4: require('@/assets/modules/social-app/images/avatar/05.png'),
        groupavatarimg5: require('@/assets/modules/social-app/images/avatar/06.png')
      },
      {
        Img: require('@/assets/modules/social-app/images/profile-event/07.png'),
        groupimg: require('@/assets/modules/social-app/images/group/07.jpg'),
        grouptitle: 'Coder',
        groupdec: 'Lorem Ipsum data',
        grouppost: 'Post',
        grouppostnumber: '300',
        groupmember: 'Member',
        groupmembernumber: '220',
        groupvisit: 'Visit',
        groupvisitnumber: '25k',
        groupavatarimg: require('@/assets/modules/social-app/images/avatar/01.png'),
        groupavatarimg1: require('@/assets/modules/social-app/images/avatar/02.png'),
        groupavatarimg2: require('@/assets/modules/social-app/images/avatar/03.png'),
        groupavatarimg3: require('@/assets/modules/social-app/images/avatar/04.png'),
        groupavatarimg4: require('@/assets/modules/social-app/images/avatar/05.png'),
        groupavatarimg5: require('@/assets/modules/social-app/images/avatar/06.png')
      },
      {
        Img: require('@/assets/modules/social-app/images/profile-event/08.png'),
        groupimg: require('@/assets/modules/social-app/images/group/08.jpg'),
        grouptitle: 'Themes',
        groupdec: 'Lorem Ipsum data',
        grouppost: 'Post',
        grouppostnumber: '1200',
        groupmember: 'Member',
        groupmembernumber: '800',
        groupvisit: 'Visit',
        groupvisitnumber: '3.2k',
        groupavatarimg: require('@/assets/modules/social-app/images/avatar/01.png'),
        groupavatarimg1: require('@/assets/modules/social-app/images/avatar/02.png'),
        groupavatarimg2: require('@/assets/modules/social-app/images/avatar/03.png'),
        groupavatarimg3: require('@/assets/modules/social-app/images/avatar/04.png'),
        groupavatarimg4: require('@/assets/modules/social-app/images/avatar/05.png'),
        groupavatarimg5: require('@/assets/modules/social-app/images/avatar/06.png')
      },
      {
        Img: require('@/assets/modules/social-app/images/profile-event/01.png'),
        groupimg: require('@/assets/modules/social-app/images/group/09.jpg'),
        grouptitle: 'Review',
        groupdec: 'Lorem Ipsum data',
        grouppost: 'Post',
        grouppostnumber: '300',
        groupmember: 'Member',
        groupmembernumber: '1000',
        groupvisit: 'Visit',
        groupvisitnumber: '4.5k',
        groupavatarimg: require('@/assets/modules/social-app/images/avatar/01.png'),
        groupavatarimg1: require('@/assets/modules/social-app/images/avatar/02.png'),
        groupavatarimg2: require('@/assets/modules/social-app/images/avatar/03.png'),
        groupavatarimg3: require('@/assets/modules/social-app/images/avatar/04.png'),
        groupavatarimg4: require('@/assets/modules/social-app/images/avatar/05.png'),
        groupavatarimg5: require('@/assets/modules/social-app/images/avatar/06.png')
      }
    ]
    return {
      items
    }
  }
}
</script>
