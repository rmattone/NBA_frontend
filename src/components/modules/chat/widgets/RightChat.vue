<template>
  <div class="iq-message-body iq-current-user">
    <div class="chat-profile">
      <img :src="require(`@/assets/modules/chat/images/${userImg}`)" alt="chat-user" class="avatar-40 rounded-pill" loading="lazy" />
    </div>
    <div class="iq-chat-text">
      <small class="iq-chating p-0">{{ username }}, {{ messageTime }}</small>
      <div class="d-flex align-items-center justify-content-end">
        <div :class="`iq-chating-content d-flex align-items-cente ${Image == 'true' ? 'iq-image' : ''}`">
          <p class="mr-2 mb-0">{{ message }}</p>
          <div class="d-grid iq-group-image gap-3" v-if="groupImages == 'true'">
            <a data-fslightbox="gallery" v-for="(data, index) in items" :key="index" href="#" @click="toggler = !toggler">
              <img :src="data" class="avatar-130 rounded" alt="profile-image" loading="lazy" />
            </a>
          </div>

          <div class="" v-if="singleImage == 'true'">
            <a>
              <img src="@/assets/modules/chat/images/05.png" class="rounded iq-single-image" alt="chat-user" loading="lazy" />
            </a>
          </div>
          <span class="badge rounded-pill bg-warning">{{ unreadMessage }}</span>
        </div>
      </div>
    </div>
  </div>
  <FsLightbox :toggler="toggler" :sources="[require('@/assets/modules/chat/images/05.png')]" />
</template>
<script>
import { ref } from 'vue'
import FsLightbox from 'fslightbox-vue/v3'
export default {
  components: { FsLightbox },
  props: {
    type: String,
    userImg: { default: '' },
    username: { default: '' },
    messageTime: { default: '' },
    message: { default: '' },
    unreadMessage: { default: '' },
    groupImages: { default: '' },
    singleImage: { default: '' },
    Image: { default: '' }
  },
  setup() {
    const items = ref([require('@/assets/modules/chat/images/01.png'), require('@/assets/modules/chat/images/02.png'), require('@/assets/modules/chat/images/03.png'), require('@/assets/modules/chat/images/04.png')])
    return {
      items,
      toggler: false
    }
  }
}
</script>
