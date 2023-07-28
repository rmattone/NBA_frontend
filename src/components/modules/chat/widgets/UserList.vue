<template>
  <li :class="`nav-item iq-chat-list ${className}`">
    <a :class="`nav-link px-0 d-flex gap-3 ${className}`" :data-bs-target="`#user-content-${id}`" data-bs-toggle="tab" type="button" role="tab" :aria-controls="`user-content-${id}`" aria-selected="true">
      <div class="position-relative ps-2">
        <img :src="require(`@/assets/modules/chat/images/${userProfileImg}`)" :alt="id" class="avatar-50 rounded-pill" loading="lazy" />
        <div :class="`iq-profile-badge ${status == 'online' ? 'bg-success' : 'bg-danger'}`"></div>
      </div>
      <div class="d-flex align-items-center w-100 iq-userlist-data">
        <div class="d-flex flex-grow-1 flex-column">
          <div class="d-flex align-items-center gap-1">
            <p class="mb-0 text-ellipsis short-1 flex-grow-1 iq-userlist-name">
              {{ userName }}
            </p>
            <small class="text-capitalize">{{ lastMessage }}</small>
          </div>
          <div class="d-flex align-items-center gap-2">
            <small class="text-ellipsis short-1 flex-grow-1">{{ userMessage }}</small>
            <span class="badge rounded-pill bg-warning" v-if="unreadMessage">{{ unreadMessage }}</span>
          </div>
        </div>
      </div>
    </a>
  </li>
</template>
<script>
export default {
  name: 'user-list',
  props: {
    type: String,
    userProfileImg: { default: '' },
    className: { default: '' },
    id: { default: '' },
    userName: { default: '' },
    lastMessage: { default: '' },
    userMessage: { default: '' },
    unreadMessage: { default: '' },
    status: { default: '' }
  }
}
</script>
