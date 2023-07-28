<template>
  <b-card no-body :class="`rounded ${classname}`">
    <div class="event-images">
      <a href="#">
        <img :src="`${Img}`" class="img-fluid" alt="Responsive image" loading="lazy" />
      </a>
    </div>
    <b-card-body>
      <div class="d-flex gap-3">
        <div class="date-of-event">
          <span>{{ eventcardmonths }}</span>
          <h5>{{ eventcarddate }}</h5>
        </div>
        <div class="events-detail">
          <h5>
            <router-link :to="{ name: 'social-app.event-detail' }">{{ eventcardtitle }}</router-link>
          </h5>
          <p>{{ eventcarddec }}</p>
          <div class="event-member">
            <div class="iq-media-group">
              <a href="#" class="iq-media">
                <img class="img-fluid avatar-40 rounded-circle" :src="require(`@/assets/modules/social-app/images/avatar/${eventcardimg1}`)" alt="img1" loading="lazy" />
              </a>
              <a href="#" class="iq-media">
                <img class="img-fluid avatar-40 rounded-circle" :src="require(`@/assets/modules/social-app/images/avatar/${eventcardimg2}`)" alt="img2" loading="lazy" />
              </a>
              <a href="#" class="iq-media">
                <img class="img-fluid avatar-40 rounded-circle" :src="require(`@/assets/modules/social-app/images/avatar/${eventcardimg3}`)" alt="img3" loading="lazy" />
              </a>
              <a href="#" class="iq-media">
                <img class="img-fluid avatar-40 rounded-circle" :src="require(`@/assets/modules/social-app/images/avatar/${eventcardimg4}`)" alt="img4" loading="lazy" />
              </a>
              <a href="#" class="iq-media">
                <img class="img-fluid avatar-40 rounded-circle" :src="require(`@/assets/modules/social-app/images/avatar/${eventcardimg5}`)" alt="img5" loading="lazy" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>
<script>
export default {
  name: 'EventWidget',
  props: {
    type: String,
    Img: { default: '' },
    classname: { default: '' },
    eventcarddate: { default: '' },
    eventcardmonths: { default: '' },
    eventcardtitle: { default: '' },
    eventcarddec: { default: '' },
    eventcardimg1: { default: '' },
    eventcardimg2: { default: '' },
    eventcardimg3: { default: '' },
    eventcardimg4: { default: '' },
    eventcardimg5: { default: '' }
  }
}
</script>
