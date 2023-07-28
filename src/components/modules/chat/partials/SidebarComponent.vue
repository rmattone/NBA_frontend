<template>
  <aside class="sidebar sidebar-chat sidebar-base left-bordered border-end shadow-none" data-sidebar="responsive">
    <chat-profile-card></chat-profile-card>
    <div class="sidebar-body pt-0 data-scrollbar mb-5 pb-5">
      <ul class="nav navbar-nav iq-main-menu mb-5 pb-5" id="sidebar-menu">
        <div class="p-3 d-flex justify-content-between">
          <div class="dropdown">
            <button class="btn btn-sm btn-border rounded-pill d-flex align-items-center dropdown-toggle" id="meet_now" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <icon-component type="dual-tone" icon-name="video" :size="16"></icon-component>
              <span class="ms-2">{{ $t('chat.sidebar.video-call') }}</span>
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="meet_now">
              <li><a class="dropdown-item" href="#">Create Room</a></li>
              <li><a class="dropdown-item" href="#">Join Room</a></li>
            </ul>
          </div>
          <div class="dropdown">
            <button class="btn btn-sm btn-border rounded-pill d-flex align-items-center dropdown-toggle" id="new_chat" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <icon-component type="dual-tone" icon-name="pencil" :size="16"></icon-component>
              <span class="ms-2">{{ $t('chat.sidebar.new-chat') }}</span>
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="new_chat">
              <li><a class="dropdown-item" href="#">New Message</a></li>
              <li><a class="dropdown-item" href="#">Create Group</a></li>
            </ul>
          </div>
        </div>
        <!-- <li class="nav-item static-item">
          <a class="nav-link static-item disabled" href="#" tabindex="-1">
            <span class="default-icon">My Contacts</span>
            <span class="mini-icon">+</span>
          </a>
        </li> -->
        <li class="nav-item static-item">
          <a class="nav-link static-item disabled text-start" href="#" tabindex="-1">
            <span class="default-icon">My Contacts</span>
            <span class="mini-icon">+</span>
          </a>
        </li>
        <user-list id="101" className="active" status="online" userName="Ellyse Perry" lastMessage="today" userProfileImg="avatar/03.png" userMessage="I have share some media you can enjoy." />
        <user-list id="102" userName="Faf Du Plessis" lastMessage="today" unreadMessage="5" userProfileImg="avatar/01.png" userMessage="What are you doing?" />
        <user-list id="103" userName="Brendon McCullum" lastMessage="yesterday" userProfileImg="avatar/04.png" userMessage="You have time for my task?" />
        <user-list id="104" userName="Wade Johnson" lastMessage="yesterday" userProfileImg="avatar/06.png" userMessage="I want some teachnic for fast code can you help?" />
        <user-list id="105" userName="Arlene Cyrus" status="online" lastMessage="20-03-2021" userProfileImg="avatar/05.png" userMessage="How are you?" />
        <user-list id="106" userName="Darlene Warner" status="online" lastMessage="10-03-2021" userProfileImg="avatar/09.png" userMessage="I have share some media you can enjoy." />
        <user-list id="107" userName="Jenny Wilson" lastMessage="01-03-2021" userProfileImg="avatar/11.png" userMessage="You have time for for my task?" />
        <user-list id="108" userName="Devon Lane" status="online" lastMessage="25-02-2021" userProfileImg="avatar/12.png" userMessage="What are you doing?" />
        <user-list id="109" userName="Christopher" lastMessage="23-01-2021" userProfileImg="avatar/08.png" userMessage="You have time for for my task?" />
        <user-list id="110" userName="Rachel Green" status="online" lastMessage="04-12-2020" userProfileImg="avatar/07.png" userMessage="I want some teachnic for fast code can you help?" />
        <li class="nav-item static-item">
          <a class="nav-link static-item disabled" href="#" tabindex="-1">
            <span class="default-icon">Other</span>
            <span class="mini-icon">O</span>
          </a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link d-flex align-items-center gap-2" target="_blank" :to="{ name: 'animated.auth.login' }">
            <i class="icon">
              <icon-component type="dual-tone" icon-name="entry" :size="20"></icon-component>
            </i>
            <span class="item-name">Sign Out</span>
          </router-link>
        </li>
        <li class="nav-item mb-5 pb-5">
          <router-link class="nav-link d-flex align-items-center gap-2" :to="{ name: '' }">
            <i class="icon">
              <icon-component type="dual-tone" icon-name="exclamation-circle" :size="20"></icon-component>
            </i>
            <span class="item-name">Help</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="sidebar-footer"></div>
  </aside>
</template>
<script>
import Scrollbar from 'smooth-scrollbar'
import UserList from '@/components/modules/chat/widgets/UserList.vue'
import ChatProfileCard from '@/components/modules/chat/widgets/ChatProfileCard.vue'
export default {
  name: 'chat-sidebar',
  components: {
    UserList,
    ChatProfileCard
  },
  props: {
    minisidebar: { type: Boolean, default: false }
  },
  mounted() {
    this.SmoothScrollbar()
  },
  methods: {
    SmoothScrollbar() {
      const elementExistMain = document.querySelector('.data-scrollbar')
      if (elementExistMain) {
        Scrollbar.init(document.querySelector('.data-scrollbar'), {
          continuousScrolling: false
        })
      }
    },
    SidebarMini() {
      this.$emit('makeminisidebar', !this.minisidebar)
    }
  }
}
</script>
