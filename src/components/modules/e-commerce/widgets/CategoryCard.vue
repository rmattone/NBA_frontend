<template>
  <b-col v-for="(item, index) in list" :key="index">
    <b-card class="iq-product-custom-card">
      <div class="iq-product-hover-img position-relative">
        <img src="@/e-commerce/assets/images/{{item.image}}" alt="product-details" class="img-fluid iq-product-img" loading="lazy" />
      </div>
      <div class="d-flex flex-column">
        <a href="./product-detail.html" class="h5 mb-0 iq-product-detail">{{ item.name }}</a>
        <span class="text-muted">{{ item.price }}</span>
      </div>
    </b-card>
  </b-col>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    name: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true }
  }
}
</script>
