<template>
  <b-card class="mb-0">
    <div class="card-thumbnail">
      <div class="d-flex align-items-center iq-upcoming-blogs">
        <img :src="`${blogImage}`" alt="02" class="img-fluid object-cover rounded me-0 me-md-3 mb-3 mb-md-0" loading="lazy" />
        <div class="d-flex flex-column justify-content-center">
          <small class="text-primary">
            {{ blogDate }}
          </small>
          <router-link :to="{ name: 'blog.detail' }" class="iq-title">
            <h4 v-b-tooltip.hover class="mt-2 mb-3 text-ellipsis short-1" :title="blogheader" data-bs-toggle="tooltip">
              {{ blogheader }}
            </h4>
          </router-link>
          <div class="d-flex mb-4">
            <router-link :to="{ name: 'blog.detail' }" :title="blogsData1" class="iq-blog-adventure text-ellipsis short-1">{{ blogsData1 }}</router-link
            ><span class="ms-2 me-2"> | </span>
            <router-link :to="{ name: 'blog.detail' }" :title="blogsData2" class="iq-blog-adventure text-ellipsis short-1 text-primary">{{ blogsData2 }}</router-link>
          </div>
          <div>
            <b-button variant="primary">Notify Me</b-button>
          </div>
        </div>
      </div>
    </div>
  </b-card>
</template>
<script>
export default {
  name: 'UpcomingBlog',
  props: {
    type: String,
    blogImage: { default: '' },
    blogDate: { default: '' },
    blogheader: { default: '' },
    blogsData1: { default: '' },
    blogsData2: { default: '' }
  }
}
</script>
