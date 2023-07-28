<template>
  <!-- add to group modal -->
  <b-modal id="add-group-modal" title="Add to Group" hide-footer>
    <b-row>
      <b-col lg="12">
        <div class="nav">
          <div class="form-group input-group search-input w-100">
            <input type="search" class="form-control" placeholder="Search" />
            <span class="input-group-text">
              <icon-component type="outlined" icon-name="search" :size="24"></icon-component>
            </span>
          </div>
        </div>
        <h4>People</h4>
        <div class="form-check p-0" v-for="(data, index) in group" :key="index">
          <div class="d-flex justify-content-between align-items-center my-3">
            <label class="d-flex align-items-center gap-3 form-check-label" :for="data.groupid">
              <img :src="data.Image" alt="chat-user" class="avatar-50 rounded-pill" loading="lazy" />
              <span class="d-flex flex-column">
                <span class="h6 mb-0">{{ data.name }}</span>
                <span class="mb-0 text-lowercase">{{ data.email }}</span>
              </span>
            </label>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" :id="data.groupid" />
            </div>
          </div>
        </div>
      </b-col>
      <div class="col-lg-12 text-center">
        <div class="border-top pt-3">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Done</button>
        </div>
      </div>
    </b-row>
  </b-modal>
</template>
<script>
export default {
  name: 'GroupModal',
  setup() {
    const group = [
      {
        Image: require('@/assets/modules/chat/images/avatar/03.png'),
        name: 'Ellyse Perry',
        email: 'ellyse@gmail.com',
        groupid: 'group-people-1'
      },
      {
        Image: require('@/assets/modules/chat/images/avatar/01.png'),
        name: 'Faf Du Plessis',
        email: 'plessis@gmail.com',
        groupid: 'group-people-2'
      },
      {
        Image: require('@/assets/modules/chat/images/avatar/04.png'),
        name: 'Brendon McCullum',
        email: 'mccullum@gmail.com',
        groupid: 'group-people-3'
      },
      {
        Image: require('@/assets/modules/chat/images/avatar/06.png'),
        name: 'Wade Johnson',
        email: 'johnson@gmail.com',
        groupid: 'group-people-4'
      },
      {
        Image: require('@/assets/modules/chat/images/avatar/05.png'),
        name: 'Arlene Cyrus',
        email: 'arlene@gmail.com',
        groupid: 'group-people-5'
      },
      {
        Image: require('@/assets/modules/chat/images/avatar/09.png'),
        name: 'Darlene Warner',
        email: 'darlene@gmail.com',
        groupid: 'group-people-6'
      },
      {
        Image: require('@/assets/modules/chat/images/avatar/11.png'),
        name: 'Jenny Wilson',
        email: 'jenny@gmail.com',
        groupid: 'group-people-7'
      },
      {
        Image: require('@/assets/modules/chat/images/avatar/12.png'),
        name: 'Devon Lane',
        email: 'devonlane@gmail.com',
        groupid: 'group-people-8'
      },
      {
        Image: require('@/assets/modules/chat/images/avatar/08.png'),
        name: 'Christopher',
        email: 'christopher@gmail.com',
        groupid: 'group-people-9'
      }
    ]
    return {
      group
    }
  }
}
</script>
