<template>
  <b-card :class="{ classname }" no-body>
    <b-card-header class="card-thumbnail">
      <img alt="02" :src="`${blogImage}`" :class="`img-fluid w-100 rounded object-cover ${masonrycard == 'false' ? 'iq-trending-blog' : ''}`" loading="lazy" />
    </b-card-header>
    <div class="card-thumbnail">
      <div>
        <small class="text-primary">
          {{ blogDate }}
        </small>
        <router-link :to="{ name: 'blog.detail' }" class="iq-title">
          <h4 v-b-tooltip.hover.top="'Tooltip!'" class="mt-2 mb-3 text-ellipsis short-2" :title="blogcontent" data-bs-toggle="tooltip">
            {{ blogcontent }}
          </h4>
        </router-link>
        <div class="d-flex">
          <router-link :to="{ name: 'blog.detail' }" class="iq-blog-adventure"> Travel </router-link>
          <span class="mx-3"> | </span>
          <router-link :to="{ name: 'blog.detail' }" class="iq-blog-adventure text-primary"> Jenny Wilson </router-link>
        </div>
        <p class="my-4 text-ellipsis short-2">{{ blogcontent1 }}</p>
        <div>
          <router-link :to="{ name: 'blog.detail' }" role="button" class="btn btn-primary">Read More</router-link>
        </div>
      </div>
    </div>
  </b-card>
</template>
<script>
export default {
  name: 'BlogCard',
  props: {
    blogImage: { type: String },
    classname: { type: String, default: '' },
    blogcontent: { type: String, default: '' },
    blogcontent1: { type: String, default: '' },
    blogDate: { type: String, default: '' },
    masonrycard: { type: String, default: '' }
  }
}
</script>
