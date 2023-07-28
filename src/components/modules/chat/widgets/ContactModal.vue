<template>
  <!-- contact list modal -->
  <b-modal id="contact-list-modal" title="Contacts list" hide-footer>
    <div class="nav">
      <div class="form-group input-group search-input w-100">
        <b-form-input type="search" class="form-control" placeholder="Search" />
        <span class="input-group-text">
          <icon-component type="outlined" icon-name="search" :size="24"></icon-component>
        </span>
      </div>
    </div>
    <h5 class="mb-0">A</h5>
    <div>
      <div class="d-flex justify-content-between align-items-center my-3">
        <div class="d-flex align-items-center gap-3">
          <img src="@/assets/modules/chat/images/avatar/03.png" alt="chat-user" class="avatar-50 rounded-pill" loading="lazy" />
          <h6 class="mb-0">Anna Sthesia</h6>
        </div>
        <b-button variant="primary">UnBlock</b-button>
      </div>
      <div class="d-flex justify-content-between align-items-center my-3" v-for="(data, index) in contact" :key="index">
        <div class="d-flex align-items-center gap-3">
          <img :src="data.image" alt="chat-user" class="avatar-50 rounded-pill" loading="lazy" />
          <h6 class="mb-0">{{ data.name }}</h6>
        </div>
        <b-button variant="outline-primary">Block</b-button>
      </div>
    </div>
  </b-modal>
</template>
<script>
export default {
  name: 'ContactModal',
  setup() {
    const contact = [
      {
        image: require('@/assets/modules/chat/images/avatar/01.png'),
        name: 'Ashutosh Turner'
      },
      {
        image: require('@/assets/modules/chat/images/avatar/04.png'),
        name: 'Andrew Tye'
      },
      {
        image: require('@/assets/modules/chat/images/avatar/06.png'),
        name: 'Aaron Finch'
      },
      {
        image: require('@/assets/modules/chat/images/avatar/12.png'),
        name: 'AB de Villiers'
      }
    ]
    return {
      contact
    }
  }
}
</script>
