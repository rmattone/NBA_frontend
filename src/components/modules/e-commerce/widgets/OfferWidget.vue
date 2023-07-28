<template>
  <div class="product-grid-item bg-soft-secondary mb-0 card">
    <div class="card-body">
      <div class="offer-card row">
        <div class="col-6 d-flex flex-column justify-content-center">
          <h4 class="pb-2">Get Up TO {{ discount }}%</h4>
          <h6 class="pb-3">For The Holiday Session</h6>
          <a href="">Shop now</a>
        </div>
        <div class="col-6">
          <img :src="image" alt="product-details" class="img-fluid" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    discount: {
      type: [Number, String],
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped></style>
