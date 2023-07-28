<template>
  <b-card no-body :class="`card iq-product-custom-card ${!noHoverAction ? 'animate:hover-media' : ''}`">
    <div class="iq-product-hover-img position-relative animate:hover-media-wrap">
      <router-link :to="{ name: 'e-commerce.product-detail' }">
        <img :src="image" alt="product-details" class="img-fluid iq-product-img hover-media" loading="lazy" />
      </router-link>
      <div class="iq-product-card-hover-effect-1 iq-product-info" v-if="!noHoverAction">
        <a href="#" class="btn btn-icon iq-product-btn rounded-pill wishlist-btn">
          <span class="btn-inner">
            <icon-component type="dual-tone" icon-name="heart" :size="24"></icon-component>
          </span>
        </a>
      </div>
      <div class="iq-product-card-hover-effect-2 iq-product-info" v-if="!noHoverAction">
        <a href="#" class="btn btn-icon iq-product-btn rounded-pill cart-btn">
          <span class="btn-inner">
            <icon-component type="dual-tone" icon-name="cart" :size="24"></icon-component>
          </span>
        </a>
      </div>
      <div :class="`iq-ribbon-effect text-${ribbonVariant}`" v-if="isRibbon">
        <span>{{ ribbonText }}</span>
      </div>
    </div>
    <b-card-body>
      <div class="d-flex justify-content-between align-items-center mb-1">
        <router-link :to="{ name: 'e-commerce.product-detail' }" class="h6 iq-product-detail mb-0">
          {{ name }}
        </router-link>
        <div class="d-flex align-items-center" v-if="!noRatRew">
          <svg class="icon-24" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z" fill="#FFD329"></path>
          </svg>
          <h6 class="mb-0">{{ review }}</h6>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <h5 :class="`mb-0 ${rattingOrder ? 'order-1' : 'order-0'}`" v-if="!noPrice">${{ price }}</h5>
        <span class="order-0" v-if="!noRatRew">{{ rating }}k Ratings</span>
      </div>
      <div>
        <span class="text-muted" v-if="isQty">Qty: {{ qty }}</span>
      </div>
    </b-card-body>
  </b-card>
</template>
<script>
export default {
  props: {
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: {
      type: String,
      default: '0'
    },
    review: {
      type: String,
      default: '0'
    },
    rating: {
      type: String,
      default: '0'
    },
    ribbonText: {
      type: String,
      default: 'New'
    },
    rattingOrder: {
      type: Boolean,
      default: false
    },
    noRatRew: {
      type: Boolean,
      default: false
    },
    noPrice: {
      type: Boolean,
      default: false
    },
    isRibbon: {
      type: Boolean,
      default: false
    },
    ribbonVariant: {
      type: String,
      default: 'primary'
    },
    isQty: {
      type: Boolean,
      default: false
    },
    qty: {
      type: Number,
      default: 0
    },
    noHoverAction: {
      type: Boolean,
      default: false
    }
  }
}
</script>
