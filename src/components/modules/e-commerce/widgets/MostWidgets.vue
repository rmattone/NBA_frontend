<template>
  <b-card header-class="d-flex justify-content-between align-items-center">
    <template #header>
      <h4 class="mb-0">{{ title }}</h4>
      <div class="dropdown">
        <span role="button" id="product-view" data-bs-toggle="dropdown" aria-expanded="false">
          <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="3" r="2.5" fill="currentColor" />
            <circle cx="2.5" cy="10" r="2.5" fill="currentColor" />
            <circle cx="2.5" cy="17" r="2.5" fill="currentColor" />
          </svg>
        </span>
        <ul class="dropdown-menu" aria-labelledby="product-view">
          <li><a class="dropdown-item" href="#">Wishlist</a></li>
          <li><a class="dropdown-item" href="#">Advertise</a></li>
          <li><a class="dropdown-item" href="#">Notification Preference</a></li>
        </ul>
      </div>
    </template>
    <div class="d-flex selling-card align-items-center gap-4">
      <img :src="image" alt="user-profile" class="img-fluid rounded bg-soft-secondary w-50" loading="lazy" />
      <div class="selling-details">
        <h5 class="mb-3 text-secondary">{{ productName }}</h5>
        <h4 class="mb-3">${{ amount }}</h4>
        <h6 class="text-danger mb-0" v-if="isLoss">
          <svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 23C36 23 33.5601 19.3978 32.0329 17.3799C30.124 14.8575 27.6667 15.3843 23.5 17.0741C16.3645 19.968 20.0197 9.68336 12.6667 10.3062C2.66667 11.1531 8.5 1.84458 1 1" stroke="#B34400" />
          </svg>
          3.76%
        </h6>
        <h6 class="text-success mb-0" v-if="isProfit">
          <svg width="37" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 23C1 23 3.43987 19.3978 4.96706 17.3799C6.87605 14.8575 9.33333 15.3843 13.5 17.0741C20.6355 19.968 16.9803 9.68336 24.3333 10.3062C34.3333 11.1531 28.5 1.84458 36 1" stroke="#1AA053"></path>
          </svg>
          5.76%
        </h6>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    productName: {
      type: String,
      default: ''
    },
    amount: {
      type: Number,
      default: 0
    },
    isProfit: {
      type: Boolean,
      default: false
    },
    isLoss: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped></style>
