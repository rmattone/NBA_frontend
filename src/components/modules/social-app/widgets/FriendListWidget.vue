<template>
  <b-card class="card-block card-stretch card-height friend-list-card" no-body>
    <div class="profile-page p-0">
      <div class="profile-header-image">
        <div class="cover-container">
          <img :src="`${Img}`" alt="profile-bg" class="rounded img-fluid w-100" loading="lazy" />
        </div>
        <div class="profile-info p-4">
          <div class="user-detail">
            <div class="d-flex flex-wrap justify-content-between align-items-start">
              <div class="profile-detail d-flex gap-4">
                <div class="profile-img">
                  <img :src="`${friendlistImg}`" alt="profile-img" class="avatar-130 img-fluid rounded-pill border" loading="lazy" />
                </div>
                <div class="user-data-block">
                  <h4>
                    <a href="javascript:void(0)">{{ friendlisttitle }}</a>
                  </h4>
                  <h6>{{ friendlistsubtitle }}</h6>
                  <p>{{ friendlistdec }}</p>
                </div>
              </div>
              <b-button variant="primary">Following</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-card>
</template>
<script>
export default {
  name: 'FriendListWidget',
  props: {
    type: String,
    Img: { default: '' },
    friendlistImg: { default: '' },
    friendlisttitle: { default: '' },
    friendlistsubtitle: { default: '' },
    friendlistdec: { default: '' }
  }
}
</script>
