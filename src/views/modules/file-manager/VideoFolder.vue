<template>
  <div class="border-bottom pb-3 d-flex align-items-center justify-content-between">
    <h5>{{ $t('file-manager.sidebar.video') }}</h5>
    <b-button variant="primary" v-b-modal.exampleModal>
      <div class="d-flex justify-content-center">
        <svg width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.4" d="M21.3309 7.44251C20.9119 7.17855 20.3969 7.1552 19.9579 7.37855L18.4759 8.12677C17.9279 8.40291 17.5879 8.96129 17.5879 9.58261V15.4161C17.5879 16.0374 17.9279 16.5948 18.4759 16.873L19.9569 17.6202C20.1579 17.7237 20.3729 17.7735 20.5879 17.7735C20.8459 17.7735 21.1019 17.7004 21.3309 17.5572C21.7499 17.2943 21.9999 16.8384 21.9999 16.339V8.66179C21.9999 8.1623 21.7499 7.70646 21.3309 7.44251Z" fill="currentColor"></path>
          <path d="M11.9051 20H6.11304C3.69102 20 2 18.3299 2 15.9391V9.06091C2 6.66904 3.69102 5 6.11304 5H11.9051C14.3271 5 16.0181 6.66904 16.0181 9.06091V15.9391C16.0181 18.3299 14.3271 20 11.9051 20Z" fill="currentColor"></path>
        </svg>
        <p class="ms-3 mb-0">Add Video</p>
      </div>
    </b-button>
  </div>
  <h4 class="py-3 mb-0">{{ $t('file-manager.sidebar.recently-viewed') }}</h4>
  <b-row class="row-cols-1 row-cols-md-2 row-cols-lg-4">
    <div class="col" v-for="(data, index) in items" :key="index">
      <video-widget :videoChange="data.videoChange" :imageDate="data.imageDate" :imgName="data.imgName" :imgLink="data.imgLink" :imgChange="data.imgChange" />
    </div>
  </b-row>
  <h3 class="my-3">{{ $t('file-manager.sidebar.all-videos') }}</h3>
  <b-row class="row-cols-1 row-cols-md-2 row-cols-lg-4">
    <div class="col" v-for="(data, index) in items1" :key="index">
      <video-widget :videoChange="data.videoChange" :imageDate="data.imageDate" :imgName="data.imgName" :imgLink="data.imgLink" :imgChange="data.imgChange" />
    </div>
  </b-row>
  <b-modal id="exampleModal" size="lg">
    <b-row>
      <b-col lg="12">
        <b-card no-body>
          <b-card-body class="text-center">
            <!-- <Dashboard id="drag-drop-area" /> -->
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-modal>
</template>
<script>
import { ref } from 'vue'
import VideoWidget from '@/components/modules/file-manager/widgets/VideoWidget.vue'
// import Dashboard from '@/components/custom/pro/uppy/uppy'
export default {
  name: 'video-folder',
  components: {
    VideoWidget
    // Dashboard
  },
  setup() {
    const items = [
      {
        imageDate: 'Dec 13, 2020',
        imgName: '1234725783.mp4',
        imgLink: 'just now',
        imgChange: require('@/assets/modules/file-manager/images/8.png'),
        videoChange: require(`@/assets/images/pro/plugins/video-2.mp4`)
      },
      {
        imageDate: 'Dec 13, 2020',
        imgName: '25783.mkv',
        imgLink: '2 day ago',
        imgChange: require('@/assets/modules/file-manager/images/7.png'),
        videoChange: require(`@/assets/images/pro/plugins/video-2.mp4`)
      },
      {
        imageDate: 'Dec 13, 2020',
        imgName: '25783.mkv',
        imgLink: 'a month ago',
        imgChange: require('@/assets/modules/file-manager/images/2.png'),
        videoChange: require(`@/assets/images/pro/plugins/video-2.mp4`)
      },
      {
        imageDate: 'Dec 13, 2020',
        imgName: '49895383.jpg',
        imgLink: 'a month ago',
        imgChange: require('@/assets/modules/file-manager/images/1.png'),
        videoChange: require(`@/assets/images/pro/plugins/video-2.mp4`)
      },
      {
        imageDate: 'Dec 13, 2020',
        imgName: '25767483.mkv',
        imgLink: 'just now',
        imgChange: require('@/assets/modules/file-manager/images/6.png'),
        videoChange: require(`@/assets/images/pro/plugins/video-2.mp4`)
      },
      {
        imageDate: 'Dec 13, 2020',
        imgName: '123472578.mp4',
        imgLink: '2 day ago',
        imgChange: require('@/assets/modules/file-manager/images/5.png'),
        videoChange: require(`@/assets/images/pro/plugins/video-2.mp4`)
      },
      {
        imageDate: 'Dec 13, 2020',
        imgName: '2598783.mkv',
        imgLink: 'a month ago',
        imgChange: require('@/assets/modules/file-manager/images/4.png'),
        videoChange: require(`@/assets/images/pro/plugins/video-2.mp4`)
      },
      {
        imageDate: 'Dec 13, 2020',
        imgName: 'Video-25783.mkv',
        imgLink: '2 day ago',
        imgChange: require('@/assets/modules/file-manager/images/8.png'),
        videoChange: require(`@/assets/images/pro/plugins/video-2.mp4`)
      }
    ]
    const items1 = [
      {
        imageDate: 'Dec 13, 2020',
        imgName: '1234725783.mp4',
        imgLink: 'just now',
        imgChange: require('@/assets/modules/file-manager/images/5.png'),
        videoChange: require(`@/assets/images/pro/plugins/video-2.mp4`)
      },
      {
        imageDate: 'Dec 13, 2020',
        imgName: '25783.mkv',
        imgLink: '2 day ago',
        imgChange: require('@/assets/modules/file-manager/images/6.png'),
        videoChange: require(`@/assets/images/pro/plugins/video-2.mp4`)
      },
      {
        imageDate: 'Dec 13, 2020',
        imgName: '25783.mkv',
        imgLink: 'a month ago',
        imgChange: require('@/assets/modules/file-manager/images/7.png'),
        videoChange: require(`@/assets/images/pro/plugins/video-2.mp4`)
      },
      {
        imageDate: 'Dec 13, 2020',
        imgName: '25783.mkv',
        imgLink: '2 day ago',
        imgChange: require('@/assets/modules/file-manager/images/8.png'),
        videoChange: require(`@/assets/images/pro/plugins/video-2.mp4`)
      },
      {
        imageDate: 'Dec 13, 2020',
        imgName: '1234725783.mp4',
        imgLink: 'just now',
        imgChange: require('@/assets/modules/file-manager/images/1.png'),
        videoChange: require(`@/assets/images/pro/plugins/video-2.mp4`)
      },
      {
        imageDate: 'Dec 13, 2020',
        imgName: '25783.mkv',
        imgLink: '2 day ago',
        imgChange: require('@/assets/modules/file-manager/images/2.png'),
        videoChange: require(`@/assets/images/pro/plugins/video-2.mp4`)
      },
      {
        imageDate: 'Dec 13, 2020',
        imgName: '25783.mkv',
        imgLink: 'a month ago',
        imgChange: require('@/assets/modules/file-manager/images/8.png'),
        videoChange: require(`@/assets/images/pro/plugins/video-2.mp4`)
      },
      {
        imageDate: 'Dec 13, 2020',
        imgName: '25783.mkv',
        imgLink: '2 day ago',
        imgChange: require('@/assets/modules/file-manager/images/4.png'),
        videoChange: require(`@/assets/images/pro/plugins/video-2.mp4`)
      }
    ]
    const toggler = ref(false)
    return {
      items,
      items1,
      toggler
    }
  }
}
</script>
