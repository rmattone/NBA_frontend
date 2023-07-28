<template>
  <div class="chat-header">
    <div class="d-flex nav nav-link align-items-center gap-3 pt-3 flex-nowrap">
      <div class="position-relative">
        <div class="avatar-60 rounded-pill text-primary btn-icon bg-body">
          <svg width="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"></rect>
            <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"></rect>
            <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"></rect>
            <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"></rect>
          </svg>
        </div>
        <span class="iq-profile-badge bg-success"></span>
      </div>
      <div class="d-flex w-100 justify-content-between align-items-center">
        <div class="d-flex flex-column gap-1">
          <div class="d-flex align-items-center gap-1">
            <h5 class="mb-0 text-ellipsis short-1">Ross Taylor</h5>
            <div class="dropdown d-inline-flex ms-auto">
              <span class="text-body d-inline-flex" id="chat-setting" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <icon-component type="outlined" icon-name="setting" :size="20"></icon-component>
              </span>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="chat-setting" data-bs-popper="none">
                <li>
                  <a class="dropdown-item d-flex gap-2" href="#" v-b-modal.audio-video-modal>
                    <span class="d-flex">
                      <icon-component type="dual-tone" icon-name="video" :size="20"></icon-component>
                    </span>
                    Audio & Video
                  </a>
                </li>
                <li>
                  <a class="dropdown-item d-flex gap-2" href="#" v-b-modal.calling-modal>
                    <span class="d-flex">
                      <icon-component type="dual-tone" icon-name="call-ringing" :size="20"></icon-component>
                    </span>
                    Calling
                  </a>
                </li>
                <li>
                  <a class="dropdown-item d-flex gap-2" href="#" v-b-modal.message-modal>
                    <span class="d-flex">
                      <icon-component type="dual-tone" icon-name="chat" :size="20"></icon-component>
                    </span>
                    Message
                  </a>
                </li>
                <li>
                  <a class="dropdown-item d-flex gap-2" href="#" v-b-modal.contact-list-modal>
                    <span class="d-flex">
                      <icon-component type="dual-tone" icon-name="user-group" :size="20"></icon-component>
                    </span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <small class="text-ellipsis short-1"> Set a status </small>
        </div>
      </div>
    </div>
    <div class="sidebar-toggle d-block d-xl-none" data-toggle="sidebar" data-active="true">
      <i class="icon">
        <!-- <icon-component type="outlined" icon-name="search" :size="20"></icon-component> -->
      </i>
    </div>
    <div class="nav">
      <div class="form-group input-group search-input px-3 mt-3 mb-2 w-100">
        <input type="search" class="form-control" placeholder="Search" id="header-search" />
        <span class="input-group-text">
          <icon-component type="outlined" icon-name="search" :size="24"></icon-component>
        </span>
      </div>
    </div>
    <nav class="mb-3">
      <div class="nav nav-tabs iq-chat-tab">
        <button class="nav-link d-flex flex-column align-items-center gap-2 active">
          <icon-component type="dual-tone" icon-name="chat" :size="24"></icon-component>
          <span>{{ $t('chat.sidebar.chat') }}</span>
        </button>
        <button class="nav-link d-flex flex-column align-items-center gap-2">
          <icon-component type="dual-tone" icon-name="call-ringing" :size="24"></icon-component>
          <span>{{ $t('chat.sidebar.call') }}</span>
        </button>
        <button class="nav-link d-flex flex-column align-items-center gap-2">
          <icon-component type="dual-tone" icon-name="video" :size="24"></icon-component>
          <span>{{ $t('chat.sidebar.video') }}</span>
        </button>
        <button class="nav-link d-flex flex-column align-items-center gap-2">
          <icon-component type="dual-tone" icon-name="user-group" :size="24"></icon-component>
          <span>{{ $t('chat.sidebar.friends') }}</span>
        </button>
      </div>
    </nav>
  </div>
  <video-call-modal></video-call-modal>
  <call-modal></call-modal>
  <message-modal></message-modal>
  <contact-modal></contact-modal>
</template>
<script setup>
import VideoCallModal from '@/components/modules/chat/widgets/VideoCallModal.vue'
import CallModal from '@/components/modules/chat/widgets/CallModal.vue'
import MessageModal from '@/components/modules/chat/widgets/MessageModal.vue'
import ContactModal from '@/components/modules/chat/widgets/ContactModal.vue'
</script>
