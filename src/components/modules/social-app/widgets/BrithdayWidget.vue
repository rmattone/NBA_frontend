<template>
  <b-card>
    <div class="d-block d-md-flex align-items-center justify-content-between text-center text-md-start">
      <div class="d-block d-md-flex align-items-center my-3 my-md-0 gap-3">
        <a href="#">
          <img :src="require(`@/assets/modules/social-app/images/avatar/${birthdayimg}`)" class="img-fluid avatar-130" alt="profile-img" loading="lazy" />
        </a>
        <div class="friend-info mt-md-0 mt-3">
          <h5 class="mb-0">{{ birthdaytitle }}</h5>
          <p class="mb-0">{{ birthdaydate }}</p>
        </div>
      </div>
      <b-button variant="primary">Create Card</b-button>
    </div>
  </b-card>
</template>
<script>
export default {
  name: 'BrithdayWidget',
  props: {
    type: String,
    birthdayimg: { default: '' },
    birthdaytitle: { default: '' },
    birthdaydate: { default: '' }
  }
}
</script>
