<template>
  <b-card no-body>
    <b-card-body class="card-thumbnail">
      <div class="d-flex align-items-center iq-incoming-blogs">
        <img :src="`${blogImage}`" alt="02" class="img-fluid object-contain rounded me-0 mb-3 mb-md-0 me-md-3" loading="lazy" />
        <div class="d-flex flex-column justify-content-center">
          <small class="text-primary">
            {{ blogDate }}
          </small>
          <router-link :to="{ name: 'blog.detail' }" class="iq-title">
            <h4 v-b-tooltip.hover class="mt-2 mb-3 text-ellipsis short-2" data-bs-toggle="tooltip" :data-bs-original-title="blogheader">
              {{ blogheader }}
            </h4>
          </router-link>
          <div class="d-flex">
            <router-link :to="{ name: 'blog.detail' }" data-bs-toggle="tooltip" class="text-body text-ellipsis short-1 fs-6" :data-bs-original-title="blogsmall1">{{ blogsmall1 }}</router-link
            ><span class="ms-2 me-2"> | </span>
            <router-link :to="{ name: 'blog.detail' }" data-bs-toggle="tooltip" class="text-mute text-ellipsis short-1 fs-6" :data-bs-original-title="blogsmall2">{{ blogsmall2 }}</router-link>
          </div>
          <p class="my-4 text-ellipsis short-1">{{ blogcontent }}</p>
          <div>
            <a role="button" class="btn btn-primary" href="javascript:void(0)">Read More</a>
          </div>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>
<script>
export default {
  name: 'BlogList',
  props: {
    type: String,
    blogImage: { default: '' },
    blogDate: { default: '' },
    blogheader: { default: '' },
    blogsmall1: { default: '' },
    blogsmall2: { default: '' },
    blogcontent: { default: '' }
  }
}
</script>
