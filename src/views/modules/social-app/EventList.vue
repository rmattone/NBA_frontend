<template>
  <div class="d-grid gap-3 d-grid-template-1fr-19">
    <div class="col" v-for="(data, index) in items" :key="index">
      <EventWidget :eventcardmonths="data.eventcardmonths" :Img="data.Img" :eventcarddate="data.eventcarddate" :eventcardtitle="data.eventcardtitle" :eventcarddec="data.eventcarddec" :eventcardimg1="data.eventcardimg1" :eventcardimg2="data.eventcardimg2" :eventcardimg3="data.eventcardimg3" :eventcardimg4="data.eventcardimg4" :eventcardimg5="data.eventcardimg5" :classname="data.classname" />
    </div>
  </div>
</template>
<script>
import EventWidget from '@/components/modules/social-app/widgets/EventWidget.vue'
export default {
  name: 'EventList',
  components: {
    EventWidget
  },
  setup() {
    const items = [
      {
        eventcardmonths: 'Jan',
        Img: require('@/assets/modules/social-app/images/profile-event/19.png'),
        eventcarddate: '01',
        eventcardtitle: 'New Year Celibration',
        eventcarddec: 'Lorem Ipsum is simply dummy text',
        eventcardimg1: '01.png',
        eventcardimg2: '02.png',
        eventcardimg3: '03.png',
        eventcardimg4: '04.png',
        eventcardimg5: '05.png',
        classname: 'mb-0'
      },
      {
        eventcardmonths: 'Jan',
        Img: require('@/assets/modules/social-app/images/profile-event/02.png'),
        eventcarddate: '24',
        eventcardtitle: 'Birthday Celibration',
        eventcarddec: 'Lorem Ipsum is simply dummy text',
        eventcardimg1: '01.png',
        eventcardimg2: '02.png',
        eventcardimg3: '03.png',
        eventcardimg4: '04.png',
        eventcardimg5: '05.png',
        classname: 'mb-0'
      },
      {
        eventcardmonths: 'Jan',
        Img: require('@/assets/modules/social-app/images/profile-event/03.png'),
        eventcarddate: '26',
        eventcardtitle: 'Republic Day',
        eventcarddec: 'Lorem Ipsum is simply dummy text',
        eventcardimg1: '01.png',
        eventcardimg2: '02.png',
        eventcardimg3: '03.png',
        eventcardimg4: '04.png',
        eventcardimg5: '05.png',
        classname: 'mb-0'
      },
      {
        eventcardmonths: 'Feb',
        Img: require('@/assets/modules/social-app/images/profile-event/04.png'),
        eventcarddate: '04',
        eventcardtitle: 'Meetings & Conventions',
        eventcarddec: 'Lorem Ipsum is simply dummy text',
        eventcardimg1: '01.png',
        eventcardimg2: '02.png',
        eventcardimg3: '03.png',
        eventcardimg4: '04.png',
        eventcardimg5: '05.png',
        classname: 'mb-0'
      },
      {
        eventcardmonths: 'March',
        Img: require('@/assets/modules/social-app/images/profile-event/05.png'),
        eventcarddate: '01',
        eventcardtitle: 'Fun Events and Festivals',
        eventcarddec: 'Lorem Ipsum is simply dummy text',
        eventcardimg1: '01.png',
        eventcardimg2: '02.png',
        eventcardimg3: '03.png',
        eventcardimg4: '04.png',
        eventcardimg5: '05.png',
        classname: 'mb-0'
      },
      {
        eventcardmonths: 'March',
        Img: require('@/assets/modules/social-app/images/profile-event/06.png'),
        eventcarddate: '10',
        eventcardtitle: 'Atlanta Retail Show',
        eventcarddec: 'Lorem Ipsum is simply dummy text',
        eventcardimg1: '01.png',
        eventcardimg2: '02.png',
        eventcardimg3: '03.png',
        eventcardimg4: '04.png',
        eventcardimg5: '05.png',
        classname: 'mb-0'
      },
      {
        eventcardmonths: 'March',
        Img: require('@/assets/modules/social-app/images/profile-event/07.png'),
        eventcarddate: '14',
        eventcardtitle: 'Holi in the City',
        eventcarddec: 'Lorem Ipsum is simply dummy text',
        eventcardimg1: '01.png',
        eventcardimg2: '02.png',
        eventcardimg3: '03.png',
        eventcardimg4: '04.png',
        eventcardimg5: '05.png',
        classname: 'mb-0'
      },
      {
        eventcardmonths: 'Mar',
        Img: require('@/assets/modules/social-app/images/profile-event/08.png'),
        eventcarddate: '16',
        eventcardtitle: 'Insurance Innovators',
        eventcarddec: 'Lorem Ipsum is simply dummy text',
        eventcardimg1: '01.png',
        eventcardimg2: '02.png',
        eventcardimg3: '03.png',
        eventcardimg4: '04.png',
        eventcardimg5: '05.png',
        classname: 'mb-0'
      },
      {
        eventcardmonths: 'Apr',
        Img: require('@/assets/modules/social-app/images/profile-event/09.png'),
        eventcarddate: '12',
        eventcardtitle: 'BIG 5G Event',
        eventcarddec: 'Lorem Ipsum is simply dummy text',
        eventcardimg1: '01.png',
        eventcardimg2: '02.png',
        eventcardimg3: '03.png',
        eventcardimg4: '04.png',
        eventcardimg5: '05.png',
        classname: 'mb-3'
      }
    ]
    return {
      items
    }
  }
}
</script>
