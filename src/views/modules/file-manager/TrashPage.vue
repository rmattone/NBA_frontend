<template>
  <div class="border-bottom pb-3 d-flex align-items-center justify-content-between">
    <h5>{{ $t('file-manager.sidebar.trash') }}</h5>
    <b-button variant="primary restore-btn">
      <div class="d-flex justify-content-center">
        <svg width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.4" d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z" fill="currentColor"></path>
          <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"></path>
        </svg>
        <p class="ms-3 mb-0">Restore All</p>
      </div>
    </b-button>
  </div>
  <h4 class="py-3 mb-0">{{ $t('file-manager.sidebar.document') }}</h4>
  <b-row class="row-cols-1 row-cols-md-2 row-cols-lg-4">
    <div class="col" v-for="(data, index) in documents" :key="index">
      <document-widget :imageDate="data.imageDate" :imgName="data.imgName" :imgLink="data.imgLink" :imgChange="data.imgChange" :imgMb="data.imgMb" :docType="data.docType" :docName="data.docName" @click="docview(data.value)" />
    </div>
  </b-row>
  <h3 class="my-3">{{ $t('file-manager.sidebar.image') }}</h3>
  <b-row class="row-cols-1 row-cols-md-2 row-cols-lg-4">
    <div class="col" v-for="(data, index) in images" :key="index">
      <image-widget :imageDate="data.imageDate" :imgName="data.imgName" :imgLink="data.imgLink" :imgChange="data.imgChange" />
    </div>
  </b-row>
  <h3 class="my-3">{{ $t('file-manager.sidebar.videos') }}</h3>
  <b-row class="row-cols-1 row-cols-md-2 row-cols-lg-4">
    <div class="col" v-for="(data, index) in videos" :key="index">
      <video-widget :videoChange="data.videoChange" :imageDate="data.imageDate" :imgName="data.imgName" :imgLink="data.imgLink" :imgChange="data.imgChange" :imgMb="data.imgMb" :docType="data.docType" :docName="data.docName" />
    </div>
  </b-row>
  <!-- Modal -->
  <b-modal id="file-documents">
    <div id="resolte-contaniner" style="height: 500px; overflow: auto">
      <iframe class="w-100 h-100" :src="url" />
    </div>
  </b-modal>
</template>
<script>
import { ref } from 'vue'
import DocumentWidget from '@/components/modules/file-manager/widgets/DocumentWidget.vue'
import ImageWidget from '@/components/modules/file-manager/widgets/ImageWidget.vue'
import VideoWidget from '@/components/modules/file-manager/widgets/VideoWidget.vue'

export default {
  name: 'trash-view',
  components: {
    DocumentWidget,
    ImageWidget,
    VideoWidget
  },
  setup() {
    const url = ref(null)
    const docview = (val) => {
      url.value = val
    }
    const documents = [
      {
        imageDate: 'Dec 13, 2020',
        dropdown: 'true',
        imgName: 'Doc-123472578.pdf',
        imgLink: 'just now',
        imgChange: require('@/assets/modules/file-manager/images/pdf.svg'),
        imgMb: '5mb',
        docType: 'PDF',
        docName: 'demo.pdf',
        value: 'https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/doc-files/demo.pdf'
      },
      {
        imageDate: 'Dec 13, 2020',
        dropdown: 'true',
        imgName: 'Doc-25783.pptx',
        imgLink: '2 days ago',
        imgChange: require('@/assets/modules/file-manager/images/ppt.svg'),
        imgMb: '2mb',
        docType: 'PPTX',
        docName: 'demo.pptx',
        value: 'https://view.officeapps.live.com/op/view.aspx?src=https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/doc-files/demo.pptx'
      },
      {
        imageDate: 'Dec 13, 2020',
        dropdown: 'true',
        imgName: 'abc-25783.doc',
        imgLink: 'a month ago',
        imgChange: require('@/assets/modules/file-manager/images/word.svg'),
        imgMb: '7mb',
        docType: 'DOCX',
        docName: 'demo.docx',
        value: 'https://view.officeapps.live.com/op/view.aspx?src=https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/doc-files/demo.docx'
      },
      {
        imageDate: 'Dec 13, 2020',
        dropdown: 'true',
        imgName: 'xyz-25783.xlsx',
        imgLink: '2 days ago',
        imgChange: require('@/assets/modules/file-manager/images/excel.svg'),
        imgMb: '12mb',
        docType: 'XLSX',
        docName: 'demo.xlsx',
        value: 'https://view.officeapps.live.com/op/view.aspx?src=https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/doc-files/demo.xlsx'
      }
    ]
    const images = [
      {
        imageDate: 'Dec 13, 2020',
        imgName: '1234725783',
        imgLink: 'just now',
        imgChange: require('@/assets/modules/file-manager/images/5.png')
      },
      {
        imageDate: 'Dec 13, 2020',
        imgName: '25783',
        imgLink: '2 day ago',
        imgChange: require('@/assets/modules/file-manager/images/6.png')
      },
      {
        imageDate: 'Dec 13, 2020',
        imgName: '49895383',
        imgLink: 'a month ago',
        imgChange: require('@/assets/modules/file-manager/images/7.png')
      },
      {
        imageDate: 'Dec 13, 2020',
        imgName: '4509853',
        imgLink: '2 day ago',
        imgChange: require('@/assets/modules/file-manager/images/8.png')
      }
    ]
    const videos = [
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
      }
    ]
    return {
      documents,
      images,
      videos,
      docview,
      url
    }
  }
}
</script>
