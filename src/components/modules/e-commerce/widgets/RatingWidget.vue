<template>
  <li class="d-flex mb-4 align-items-center">
    <div>
      <img :src="image" alt="story-img" class="img-fluid rounded object-contain avatar-90 iq-product-bg" loading="lazy" />
    </div>
    <div class="ms-4">
      <router-link :to="{ name: 'e-commerce.product-detail' }">
        <h5 class="iq-product-detail">{{ name }}</h5>
      </router-link>
      <div class="d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="me-2 h5" height="19" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z" fill="#FFD329"></path>
        </svg>
        <p>{{ rating }}</p>
      </div>
    </div>
    <div class="ms-auto iq-arrow-btn">
      <icon-component type="outlined" icon-name="chevron-right" :size="20"></icon-component>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    name: { type: String, required: true },
    rating: { type: String, required: true },
    image: { type: String, required: true }
  }
}
</script>
