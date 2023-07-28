<template>
  <b-card class="iq-incoming-blogs" no-body>
    <div class="card-thumbnail">
      <b-row class="align-items-center">
        <b-col md="9">
          <img :src="`${blogImage}`" alt="02" class="img-fluid me-0 mb-3 mb-md-0 iq-blog-img" loading="lazy" />
        </b-col>
        <b-col md="3" class="ps-md-2">
          <div class="d-flex flex-column justify-content-center">
            <small class="text-primary">
              {{ blogDate }}
            </small>
            <router-link :to="{ name: 'blog.detail' }" class="iq-title">
              <h4 v-b-tooltip.hover class="mt-2 mb-3 text-ellipsis short-2" :title="blogheader" data-bs-toggle="tooltip">
                {{ blogheader }}
              </h4>
            </router-link>
            <div class="d-flex mb-3">
              <router-link :to="{ name: 'blog.detail' }" :title="blogsData1" data-bs-toggle="tooltip" class="iq-blog-adventure text-ellipsis short-1">{{ blogsData1 }}</router-link
              ><span class="ms-2 me-2"> | </span>
              <router-link :to="{ name: 'blog.detail' }" :title="blogsData" data-bs-toggle="tooltip" class="iq-blog-adventure text-ellipsis short-1 text-primary">{{ blogsData2 }}</router-link>
            </div>
            <div>
              <b-button variant="primary">Read More</b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-card>
</template>
<script>
export default {
  name: 'IncomingBlog',
  props: {
    type: String,
    imgChange: { default: '' },
    blogImage: { default: '' },
    blogDate: { default: '' },
    blogheader: { default: '' },
    blogsData: { default: '' },
    blogsData1: { default: '' },
    blogsData2: { default: '' }
  }
}
</script>
