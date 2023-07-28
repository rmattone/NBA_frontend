<template>
  <div class="d-grid gap-3 d-grid-template-1fr-19">
    <div class="col" v-for="(data, index) in items" :key="index">
      <ProfileVideo :profilevideosrc="data.profilevideosrc" :title="data.title" :profilevideolike="data.profilevideolike" :profilevideocomment="data.profilevicomment" :profilevideoshare="data.profilevideoshare" />
    </div>
  </div>
</template>
<script>
import ProfileVideo from '@/components/modules/social-app/widgets/ProfileVideo.vue'
export default {
  name: 'ProfileVideos',
  components: {
    ProfileVideo
  },
  setup() {
    const items = [
      {
        profilevideosrc: 'https://www.youtube.com/embed/OGuX3lO5Gjs',
        profilevideolike: '60',
        profilevideocomment: '30',
        profilevideoshare: '10'
      },
      {
        profilevideosrc: 'https://www.youtube.com/embed/DL93L26UsI0',
        profilevideolike: '60',
        profilevideocomment: '30',
        profilevideoshare: '10'
      },
      {
        profilevideosrc: 'https://www.youtube.com/embed/gGUCCh8XedI',
        profilevideolike: '60',
        profilevideocomment: '30',
        profilevideoshare: '10'
      },
      {
        profilevideosrc: 'https://www.youtube.com/embed/1hUPsry0LjQ',
        profilevideolike: '60',
        profilevideocomment: '30',
        profilevideoshare: '10'
      },
      {
        profilevideosrc: 'https://www.youtube.com/embed/PHF0lmDBmXo',
        title: 'YouTub video:player',
        profievideodetai1: '60',
        profievidodetail2: '30',
        profilevideoshare: '10'
      },
      {
        profilevideosrc: 'https://www.youtube.com/embed/d1ri9sCseTk',
        title: 'YouTub video:player',
        profievideodetai1: '60',
        profievidodetail2: '30',
        profilevideoshare: '10'
      },
      {
        profilevideosrc: 'https://www.youtube.com/embed/J7tNLM2iBlE',
        profilevideolike: '60',
        profilevideocomment: '30',
        profilevideoshare: '10'
      },
      {
        profilevideosrc: 'https://www.youtube.com/embed/8yiFq4FYWlQ',
        profilevideolike: '60',
        profilevideocomment: '30',
        profilevideoshare: '10'
      },
      {
        profilevideosrc: 'https://www.youtube.com/embed/78mPwkO6aek',
        profilevideolike: '60',
        profilevideocomment: '30',
        profilevideoshare: '10'
      },
      {
        profilevideosrc: 'https://www.youtube.com/embed/3OMj6nqDuAA',
        profilevideolike: '60',
        profilevideocomment: '30',
        profilevideoshare: '10'
      },
      {
        profilevideosrc: 'https://www.youtube.com/embed/VeDdpy4CdeM',
        profilevideolike: '60',
        profilevideocomment: '30',
        profilevideoshare: '10'
      },
      {
        profilevideosrc: 'https://www.youtube.com/embed/XvtKsTbrPz0',
        profilevideodetail1: '60',
        profilevideocomment: '30',
        profilevideoshare: '10'
      },
      {
        profilevideosrc: 'https://www.youtube.com/embed/27hOzBaFbJU',
        profilevideodetail1: '60',
        profilevideocomment: '30',
        profilevideoshare: '10'
      },
      {
        profilevideosrc: 'https://www.youtube.com/embed/y1rglaseZ-k',
        profilevideodetail1: '60',
        profilevideocomment: '30',
        profilevideoshare: '10'
      },
      {
        profilevideosrc: 'https://www.youtube.com/embed/RntJ61yWrRI',
        profilevideodetail1: '60',
        profilevideocomment: '30',
        profilevideoshare: '10'
      },
      {
        profilevideosrc: 'https://www.youtube.com/embed/dVzFhSu5Mm8',
        profilevideodetail1: '60',
        profilevideocomment: '30',
        profilevideoshare: '10'
      },
      {
        profilevideosrc: 'https://www.youtube.com/embed/11uVhnjxjRA',
        profilevideodetail1: '60',
        profilevideocomment: '30',
        profilevideoshare: '10'
      },
      {
        profilevideosrc: 'https://www.youtube.com/embed/f-t7RA6gdjE',
        profilevideodetail1: '60',
        profilevideocomment: '30',
        profilevideoshare: '10'
      },
      {
        profilevideosrc: 'https://www.youtube.com/embed/dctRWhSabrU',
        profilevideodetail1: '60',
        profilevideocomment: '30',
        profilevideoshare: '10'
      },
      {
        profilevideosrc: 'https://www.youtube.com/embed/Onekf3kAMog',
        profilevideodetail1: '60',
        profilevideocomment: '30',
        profilevideoshare: '10'
      },
      {
        profilevideosrc: 'https://www.youtube.com/embed/--6zKnvpGGk',
        profilevideodetail1: '60',
        profilevideocomment: '30',
        profilevideoshare: '10'
      }
    ]
    return {
      items
    }
  }
}
</script>
