<template>
  <div class="card iq-product-list-view">
    <div class="card-body d-flex flex-wrap justify-content-between">
      <div class="iq-product-list-left-side d-flex gap-3 flex-wrap align-items-center justify-content-center justify-content-sm-center">
        <img :src="image" alt="product-details" class="img-fluid trending-img iq-product-img" loading="lazy" />
        <div class="iq-list-view-left text-center text-sm-start">
          <router-link :to="{ name: 'e-commerce.product-detail' }" class="h5 d-block mb-3 iq-product-detail">{{ name }}</router-link>
          <h4 class="mb-3">${{ amount }}</h4>
          <div>
            <div class="d-flex align-items-center">
              <svg class="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z" fill="#FFD329"></path>
              </svg>
              <h6 class="mb-0">{{ review }}</h6>
              <small class="ms-2">{{ review }}k Review</small>
            </div>
          </div>
          <qty-button v-model="qty"></qty-button>
        </div>
      </div>
      <div class="iq-list-view-right d-flex flex-column justify-content-center align-items-end d-block align-items-center align-items-sm-end mx-sm-0 mx-auto">
        <div>
          <span class="badge rounded-pill p-2 px-3 bg-soft-success" v-if="inStock">In Stock</span>
          <span class="badge rounded-pill p-2 px-3 bg-soft-danger" v-else>out of Stock</span>
        </div>
        <div class="d-flex flex-column text-end">
          <span>{{ deliveryDate }}</span>
        </div>
        <div class="iq-list-options d-flex align-items-end gap-2">
          <button class="btn btn-info d-flex align-items-center wishlist-btn gap-2">
            <span class="btn-inner d-flex">
              <icon-component type="dual-tone" icon-name="heart" :size="20"></icon-component>
            </span>
            Wishlist
          </button>
          <button class="btn btn-primary d-flex align-items-center cart-btn gap-2">
            <span class="btn-inner d-flex">
              <icon-component type="dual-tone" icon-name="cart" :size="20"></icon-component>
            </span>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    image: { type: String, required: true },
    deliveryDate: { type: String, default: 'Delivery by, Thu Jan 30' },
    inStock: { type: Boolean, default: false },
    review: { type: String, default: '3.5' },
    amount: { type: [String, Number], default: 0 },
    name: { type: String, required: true }
  },
  setup() {
    const qty = ref(0)
    return { qty }
  }
}
</script>

<style lang="scss" scoped></style>
