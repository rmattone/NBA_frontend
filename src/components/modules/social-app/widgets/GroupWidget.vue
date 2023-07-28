<template>
  <b-card no-body class="mb-0 group-card">
    <div class="top-bg-image">
      <img :src="`${Img}`" class="img-fluid w-100" alt="group-bg" loading="lazy" />
    </div>
    <b-card-body class="text-center">
      <div class="group-icon">
        <img :src="`${groupimg}`" alt="profile-img" class="rounded-circle img-fluid avatar-120" loading="lazy" />
      </div>
      <div class="group-info pt-3 pb-3">
        <h4>
          <router-link :to="{ name: 'social-app.group-detail' }">{{ grouptitle }}</router-link>
        </h4>
        <p>{{ groupdec }}</p>
      </div>
      <div class="group-details d-inline-block pb-3">
        <ul class="d-flex align-items-center justify-content-between list-inline m-0 p-0 gap-3">
          <li>
            <p class="mb-0">{{ grouppost }}</p>
            <h6>{{ grouppostnumber }}</h6>
          </li>
          <li>
            <p class="mb-0">{{ groupmember }}</p>
            <h6>{{ groupmembernumber }}</h6>
          </li>
          <li>
            <p class="mb-0">{{ groupvisit }}</p>
            <h6>{{ groupvisitnumber }}</h6>
          </li>
        </ul>
      </div>
      <div class="group-member mb-3">
        <div class="iq-media-group">
          <a href="#" class="iq-media">
            <img class="img-fluid avatar-40 rounded-circle" :src="`${groupavatarimg}`" alt="img1" loading="lazy" />
          </a>
          <a href="#" class="iq-media">
            <img class="img-fluid avatar-40 rounded-circle" :src="`${groupavatarimg1}`" alt="img2" loading="lazy" />
          </a>
          <a href="#" class="iq-media">
            <img class="img-fluid avatar-40 rounded-circle" :src="`${groupavatarimg2}`" alt="img3" loading="lazy" />
          </a>
          <a href="#" class="iq-media">
            <img class="img-fluid avatar-40 rounded-circle" :src="`${groupavatarimg3}`" alt="img4" loading="lazy" />
          </a>
          <a href="#" class="iq-media">
            <img class="img-fluid avatar-40 rounded-circle" :src="`${groupavatarimg4}`" alt="img5" loading="lazy" />
          </a>
          <a href="#" class="iq-media">
            <img class="img-fluid avatar-40 rounded-circle" :src="`${groupavatarimg5}`" alt="img6" loading="lazy" />
          </a>
        </div>
      </div>
      <button type="submit" class="btn btn-primary d-block w-100">Join</button>
    </b-card-body>
  </b-card>
</template>
<script>
export default {
  name: 'GroupList',
  props: {
    type: String,
    Img: { default: '' },
    groupimg: { default: '' },
    grouptitle: { default: '' },
    groupdec: { default: '' },
    grouppost: { default: '' },
    grouppostnumber: { default: '' },
    groupmember: { default: '' },
    groupmembernumber: { default: '' },
    groupvisit: { default: '' },
    groupvisitnumber: { default: '' },
    groupavatarimg: { default: '' },
    groupavatarimg1: { default: '' },
    groupavatarimg2: { default: '' },
    groupavatarimg3: { default: '' },
    groupavatarimg4: { default: '' },
    groupavatarimg5: { default: '' }
  }
}
</script>
