<template>
  <div class="d-flex justify-content-between mb-4">
    <h4 class="mb-0">{{ $t('blog.sidebar.blog-trend') }}</h4>
    <div class="dropdown d-flex align-items-center">
      Sorting By:
      <div class="dropdown">
        <a href="#" class="text-secondary dropdown-toggle" id="dropdownMenuButton22" data-bs-toggle="dropdown" aria-expanded="false">Name</a>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton22" style="">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
  </div>
  <b-row>
    <b-col lg="4" v-for="(data, index) in items" :key="index">
      <BlogCard :blogImage="data.blogImage" :blogDate="data.blogDate" :blogcontent="data.blogcontent" :blogcontent1="data.blogcontent1" />
    </b-col>
  </b-row>
  <div class="text-center">
    <router-link :to="{ name: 'blog.detail' }" class="btn btn-primary">Load More</router-link>
  </div>
</template>
<script>
import BlogCard from '@/components/modules/blog/widgets/BlogCard.vue'
export default {
  name: 'BlogTreading',
  components: {
    BlogCard
  },
  setup() {
    return {
      items: [
        {
          blogImage: require('@/assets/modules/blog/images/blog-categories/02.png'),
          blogDate: '02 Dec 2021',
          blogcontent: 'The Ultimate Travel Guide: What To Do, See & Eat.',
          blogcontent1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          blogImage: require('@/assets/modules/blog/images/blog-grid/15.png'),
          blogDate: '02 Dec 2021',
          blogcontent: 'The Cheapest Destinations of All Time, A list of Beauty and Budget.',
          blogcontent1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          blogImage: require('@/assets/modules/blog/images/blog-grid/18.png'),
          blogDate: '02 Dec 2021',
          blogcontent: 'The Foreign and Domestic Culinary Adventures: An Art',
          blogcontent1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          blogImage: require('@/assets/modules/blog/images/blog-grid/17.png'),
          blogDate: '11 Dec 2021',
          blogcontent: 'Paranomal and Ghost Experience: The man behind the musical',
          blogcontent1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          blogImage: require('@/assets/modules/blog/images/blog-grid/16.png'),
          blogDate: '02 Dec 2021',
          blogcontent: 'The Expierience: Travel Tales From India and Abroad.',
          blogcontent1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          blogImage: require('@/assets/modules/blog/images/blog-grid/19.png'),
          blogDate: '03 Aug 2021',
          blogcontent: 'WIT AND DELIGHT: The Advice From A Twenty Something',
          blogcontent1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
      ]
    }
  }
}
</script>
