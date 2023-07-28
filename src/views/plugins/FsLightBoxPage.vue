<template>
  <b-row>
    <b-col lg="12">
      <b-card>
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <div class="d-flex flex-wrap align-items-center">
            <div class="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
              <h4 class="me-2 h4">{{ $t('sidebar.fslightbox') }}</h4>
            </div>
          </div>
          <small
            >For more Information regarding fslightbox Plugin refer
            <a href="https://fslightbox.com/vue">Documentation</a>
          </small>
        </div>
      </b-card>
    </b-col>
  </b-row>
  <b-row>
    <b-col lg="12">
      <b-card>
        <b-card-title>{{ $t('sidebar.gallerys') }}</b-card-title>
        <b-card-body class="text-center">
          <div class="d-grid gap-card grid-cols-3 iq-fslightbox-img">
            <a v-for="(data, index) in galleries" :key="index" data-fslightbox="gallery" href="#" @click="toggler = !toggler">
              <img :src="data" class="img-fluid bg-soft-primary rounded" alt="profile-image" loading="lazy" />
            </a>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="12">
      <b-card>
        <b-card-title>{{ $t('sidebar.html5') }}</b-card-title>
        <b-card-body class="text-center">
          <div class="d-grid gap-card grid-cols-3 iq-fslightbox-img">
            <a data-fslightbox="gallery" v-for="(data, index) in videos" :key="index" href="#" @click="toggler1 = !toggler1">
              <img :src="data.img" class="img-fluid bg-soft-primary rounded" :alt="data.alt" loading="lazy" />
            </a>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="12">
      <b-card>
        <b-card-title>{{ $t('sidebar.youtube-video') }}</b-card-title>
        <b-card-body class="text-center">
          <div class="d-grid gap-card grid-cols-3 iq-fslightbox-img">
            <a data-fslightbox="gallery" v-for="(data, index) in youTube" :key="index" :href="data.videoLink">
              <img :src="data.img" class="img-fluid bg-soft-primary rounded" :alt="data.alt" style="height: 100%" loading="lazy" />
            </a>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
  <FsLightbox :toggler="toggler" :sources="[require('@/assets/images/pro/plugins/img6.jpeg'), require('@/assets/images/pro/plugins/img1.jpeg'), require('@/assets/images/pro/plugins/img2.jpg'), require('@/assets/images/pro/plugins/img3.jpeg'), require('@/assets/images/pro/plugins/img4.jpeg'), require('@/assets/images/pro/plugins/img5.jpeg')]" />
  <FsLightbox :toggler="toggler1" :sources="[require('@/assets/images/pro/plugins/video-1.mp4')]" />
</template>
<script>
import { ref } from 'vue'
import FsLightbox from 'fslightbox-vue/v3'
export default {
  components: { FsLightbox },
  setup() {
    const galleries = ref([require('@/assets/images/pro/plugins/img6.jpeg'), require('@/assets/images/pro/plugins/img1.jpeg'), require('@/assets/images/pro/plugins/img2.jpg'), require('@/assets/images/pro/plugins/img3.jpeg'), require('@/assets/images/pro/plugins/img4.jpeg'), require('@/assets/images/pro/plugins/img5.jpeg')])
    const videos = ref([
      { img: require('@/assets/images/pro/plugins/img7.jpg'), alt: 'Milk Bottle Beside a Tree' },
      { img: require('@/assets/images/pro/plugins/img8.jpg'), alt: 'Close-Up of Plant With Green Leaves' },
      { img: require('@/assets/images/pro/plugins/img9.jpg'), alt: 'Seagulls Flying Against Blue Sky' }
    ])
    const youTube = [
      { img: require(`@/assets/images/pro/plugins/img10.jpg`), videoLink: 'https://www.youtube.com/watch?v=3nQNiWdeH2Q', alt: 'Seagulls Flying Against Blue Sky' },
      { img: require(`@/assets/images/pro/plugins/img11.jpg`), videoLink: 'https://www.youtube.com/watch?v=TW9d8vYrVFQ', alt: 'Sky High - Fullscreen Lightbox' },
      { img: require(`@/assets/images/pro/plugins/img12.jpg`), videoLink: 'https://www.youtube.com/watch?v=zyXmsVwZqX4', alt: 'Why we lose - Fullscreen Lightbox' }
    ]
    return {
      galleries,
      videos,
      youTube,
      toggler: false,
      toggler1: false
      // gallery,
      // handleToggler
    }
  }
}
</script>
