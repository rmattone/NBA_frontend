<template>
  <b-card class="text-center" no-body>
    <b-card-header class="card-thumbnail">
      <img :src="`${categoryimage}`" alt="post-category" class="img-fluid" loading="lazy" />
    </b-card-header>
    <b-card-body class="card-thumbnail">
      <div class="d-flex flex-column">
        <router-link :to="{ name: 'blog.detail' }" class="h5 mb-0 iq-product-detail mb-2">{{ categoryname }}</router-link>
        <span class="text-muted">{{ postcount }} Post</span>
      </div>
    </b-card-body>
  </b-card>
</template>
<script>
export default {
  name: 'CategoryCard',
  props: {
    type: String,
    categoryimage: { default: '' },
    categoryname: { default: '' },
    postcount: { default: '' }
  }
}
</script>
