<template>
  <div class="card-header border-bottom d-flex justify-content-between align-items-center rounded-0 p-3">
    <div class="d-flex align-items-center gap-3">
      <div class="d-block d-xl-none">
        <button class="btn btn-sm btn-primary rounded-pill btn-icon" data-toggle="sidebar" data-active="true">
          <span class="btn-inner">
            <svg width="20px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
            </svg>
          </span>
        </button>
      </div>
      <div class="position-relative">
        <img :src="require(`@/assets/modules/chat/images/${userProfileImg}`)" alt="users" class="img-fluid avatar-50 rounded-pill" loading="lazy" />
        <div :class="`iq-profile-badge ${statusidentify == 'online' ? 'bg-success' : 'bg-danger'}`"></div>
      </div>
      <div class="d-flex flex-column">
        <h5 class="mb-0">{{ userName }}</h5>
        <small class="text-capitalize">{{ status }}</small>
      </div>
    </div>
    <div class="dropdown d-inline-flex ms-auto">
      <span class="text-body d-inline-flex" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <svg class="icon-24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 20.6788C10 21.9595 11.0378 23 12.3113 23C13.5868 23 14.6265 21.9595 14.6265 20.6788C14.6265 19.3981 13.5868 18.3576 12.3113 18.3576C11.0378 18.3576 10 19.3981 10 20.6788ZM10 12.0005C10 13.2812 11.0378 14.3217 12.3113 14.3217C13.5868 14.3217 14.6265 13.2812 14.6265 12.0005C14.6265 10.7198 13.5868 9.67929 12.3113 9.67929C11.0378 9.67929 10 10.7198 10 12.0005ZM12.3113 5.64239C11.0378 5.64239 10 4.60192 10 3.3212C10 2.04047 11.0378 1 12.3113 1C13.5868 1 14.6265 2.04047 14.6265 3.3212C14.6265 4.60192 13.5868 5.64239 12.3113 5.64239Z" fill="#8A92A6"></path>
        </svg>
      </span>
      <ul class="dropdown-menu dropdown-menu-end" data-bs-popper="none">
        <li>
          <a class="dropdown-item d-flex gap-2" href="#">
            <span class="d-flex align-items-center">
              <icon-component type="dual-tone" icon-name="video" :size="20"></icon-component>
            </span>
            Video Calling
          </a>
        </li>
        <li>
          <a class="dropdown-item d-flex gap-2" href="#">
            <span class="d-flex align-items-center">
              <icon-component type="dual-tone" icon-name="call-ringing" :size="20"></icon-component>
            </span>
            Voice Calling
          </a>
        </li>
        <li>
          <a class="dropdown-item d-flex gap-2" href="#" v-b-modal.add-group-modal>
            <span class="d-flex align-items-center">
              <icon-component type="dual-tone" icon-name="chat" :size="20"></icon-component>
            </span>
            Add to Group
          </a>
        </li>
      </ul>
    </div>
  </div>
  <group-modal></group-modal>
</template>
<script>
import GroupModal from '@/components/modules/chat/widgets/GroupModal.vue'
export default {
  name: 'ChatHeader',
  components: {
    GroupModal
  },
  props: {
    type: String,
    imgChange: { default: '' },
    userProfileImg: { default: '' },
    userName: { default: '' },
    status: { default: '' },
    statusidentify: { default: '' }
  }
}
</script>
