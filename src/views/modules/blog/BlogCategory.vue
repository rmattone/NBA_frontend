<template>
  <div>
    <h4 class="mb-0">{{ $t('blog.sidebar.category') }}</h4>
  </div>
  <ul class="nav iq-nav-category mt-3 mb-3 justify-content-start bg-transparent" id="pills-tab" role="tablist">
    <li class="nav-item me-3" role="presentation">
      <a class="nav-link active" id="pills-no-1-tab" data-bs-toggle="pill" href="" data-bs-target="#pills-no-1" role="tab" aria-controls="pills-no-1" aria-selected="true">All</a>
    </li>
    <li class="nav-item me-3" role="presentation">
      <a class="nav-link" id="pills-no-2-tab" data-bs-toggle="pill" data-bs-target="#pills-no-2" href="" role="tab" aria-controls="pills-no-2" aria-selected="false">Popular</a>
    </li>
    <li class="nav-item me-3" role="presentation">
      <a class="nav-link" id="pills-no-3-tab" data-bs-toggle="pill" data-bs-target="#pills-no-3" href="" role="tab" aria-controls="pills-no-3" aria-selected="false">Latest</a>
    </li>
  </ul>
  <div class="tab-content mt-3" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-no-1" role="tabpanel" aria-labelledby="pills-no-1">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 mt-4">
        <div class="col" v-for="(data, index) in items" :key="index">
          <CategoryCard :categoryname="data.categoryname" :categoryimage="data.categoryimage" :postcount="data.postcount" />
        </div>
      </div>
      <div class="text-center">
        <b-button variant="primary">Load More</b-button>
      </div>
    </div>
    <div class="tab-pane fade" id="pills-no-2" role="tabpanel" aria-labelledby="pills-no-2">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 mt-4">
        <div class="col" v-for="(data, index) in items1" :key="index">
          <CategoryCard :categoryname="data.categoryname" :categoryimage="data.categoryimage" :postcount="data.postcount" />
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="pills-no-3" role="tabpanel" aria-labelledby="pills-no-3">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 mt-4">
        <div class="col" v-for="(data, index) in items2" :key="index">
          <CategoryCard :categoryname="data.categoryname" :categoryimage="data.categoryimage" :postcount="data.postcount" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CategoryCard from '@/components/modules/blog/widgets/CategoryCard.vue'
export default {
  name: 'BlogCategory',
  components: { CategoryCard },
  setup() {
    return {
      items: [
        {
          categoryname: 'Food',
          categoryimage: require('@/assets/modules/blog/images/blog-list/02.png'),
          postcount: '5458'
        },
        {
          categoryname: 'Workspace',
          categoryimage: require('@/assets/modules/blog/images/blog-list/04.png'),
          postcount: '6542'
        },
        {
          categoryname: 'Card',
          categoryimage: require('@/assets/modules/blog/images/blog-list/05.png'),
          postcount: '3265'
        },
        {
          categoryname: 'Workspace',
          categoryimage: require('@/assets/modules/blog/images/blog-list/04.png'),
          postcount: '1546'
        },
        {
          categoryname: 'Card',
          categoryimage: require('@/assets/modules/blog/images/blog-list/05.png'),
          postcount: '3265'
        },
        {
          categoryname: 'Card',
          categoryimage: require('@/assets/modules/blog/images/blog-list/05.png'),
          postcount: '3265'
        },
        {
          categoryname: 'Workspace',
          categoryimage: require('@/assets/modules/blog/images/blog-list/04.png'),
          postcount: '500'
        },
        {
          categoryname: 'Food',
          categoryimage: require('@/assets/modules/blog/images/blog-list/02.png'),
          postcount: '4623'
        },
        {
          categoryname: 'Card',
          categoryimage: require('@/assets/modules/blog/images/blog-list/05.png'),
          postcount: '4623'
        },
        {
          categoryname: 'Food',
          categoryimage: require('@/assets/modules/blog/images/blog-list/02.png'),
          postcount: '500'
        },
        {
          categoryname: 'Food',
          categoryimage: require('@/assets/modules/blog/images/blog-list/02.png'),
          postcount: '5458 '
        },
        {
          categoryname: 'Card',
          categoryimage: require('@/assets/modules/blog/images/blog-list/05.png'),
          postcount: '3265'
        },
        {
          categoryname: 'Workspace',
          categoryimage: require('@/assets/modules/blog/images/blog-list/04.png'),
          postcount: '6542'
        },
        {
          categoryname: 'Food',
          categoryimage: require('@/assets/modules/blog/images/blog-list/02.png'),
          postcount: '365'
        },
        {
          categoryname: 'Workspace',
          categoryimage: require('@/assets/modules/blog/images/blog-list/04.png'),
          postcount: '1546'
        },
        {
          categoryname: 'Card',
          categoryimage: require('@/assets/modules/blog/images/blog-list/05.png'),
          postcount: '4623'
        }
      ],
      items1: [
        {
          categoryname: 'Animals',
          categoryimage: require('@/assets/modules/blog/images/blog-list/10.png'),
          postcount: '5458 '
        },
        {
          categoryname: 'Entertainment',
          categoryimage: require('@/assets/modules/blog/images/blog-list/11.png'),
          postcount: '6542'
        },
        {
          categoryname: 'Health',
          categoryimage: require('@/assets/modules/blog/images/blog-list/12.png'),
          postcount: '3265'
        },
        {
          categoryname: 'Music',
          categoryimage: require('@/assets/modules/blog/images/blog-list/13.png'),
          postcount: '365'
        },
        {
          categoryname: 'Entertainment',
          categoryimage: require('@/assets/modules/blog/images/blog-list/11.png'),
          postcount: '3265'
        },
        {
          categoryname: 'Music',
          categoryimage: require('@/assets/modules/blog/images/blog-list/13.png'),
          postcount: '365'
        },
        {
          categoryname: 'Animals',
          categoryimage: require('@/assets/modules/blog/images/blog-list/10.png'),
          postcount: '500'
        },
        {
          categoryname: 'Health',
          categoryimage: require('@/assets/modules/blog/images/blog-list/12.png'),
          postcount: '4623'
        },
        {
          categoryname: 'Animals',
          categoryimage: require('@/assets/modules/blog/images/blog-list/10.png'),
          postcount: '4623'
        },
        {
          categoryname: 'Business',
          categoryimage: require('@/assets/modules/blog/images/blog-list/14.png'),
          postcount: '500'
        },
        {
          categoryname: 'Entertainment',
          categoryimage: require('@/assets/modules/blog/images/blog-list/11.png'),
          postcount: '5458 '
        },
        {
          categoryname: 'Music',
          categoryimage: require('@/assets/modules/blog/images/blog-list/13.png'),
          postcount: '3265'
        },
        {
          categoryname: 'Animals',
          categoryimage: require('@/assets/modules/blog/images/blog-list/10.png'),
          postcount: '6542'
        },
        {
          categoryname: 'Health',
          categoryimage: require('@/assets/modules/blog/images/blog-list/12.png'),
          postcount: '365'
        },
        {
          categoryname: 'Business',
          categoryimage: require('@/assets/modules/blog/images/blog-list/14.png'),
          postcount: '1546'
        },
        {
          categoryname: 'Health',
          categoryimage: require('@/assets/modules/blog/images/blog-list/12.png'),
          postcount: '4623'
        }
      ],
      items2: [
        {
          categoryname: 'Sports',
          categoryimage: require('@/assets/modules/blog/images/blog-list/15.png'),
          postcount: '5458 '
        },
        {
          categoryname: 'News',
          categoryimage: require('@/assets/modules/blog/images/blog-list/16.png'),
          postcount: '6542'
        },
        {
          categoryname: 'Cars',
          categoryimage: require('@/assets/modules/blog/images/blog-list/17.png'),
          postcount: '3265'
        },
        {
          categoryname: 'Movies',
          categoryimage: require('@/assets/modules/blog/images/blog-list/18.png'),
          postcount: '1546'
        },
        {
          categoryname: 'Fashion',
          categoryimage: require('@/assets/modules/blog/images/blog-list/19.png'),
          postcount: '3265'
        },
        {
          categoryname: 'Business',
          categoryimage: require('@/assets/modules/blog/images/blog-list/14.png'),
          postcount: '365'
        },
        {
          categoryname: 'News',
          categoryimage: require('@/assets/modules/blog/images/blog-list/16.png'),
          postcount: '500'
        },
        {
          categoryname: 'Movie',
          categoryimage: require('@/assets/modules/blog/images/blog-list/18.png'),
          postcount: '4623'
        },
        {
          categoryname: 'Cars',
          categoryimage: require('@/assets/modules/blog/images/blog-list/17.png'),
          postcount: '4623'
        },
        {
          categoryname: 'Fashion',
          categoryimage: require('@/assets/modules/blog/images/blog-list/19.png'),
          postcount: '500'
        },
        {
          categoryname: 'News',
          categoryimage: require('@/assets/modules/blog/images/blog-list/16.png'),
          postcount: '5458 '
        },
        {
          categoryname: 'Sports',
          categoryimage: require('@/assets/modules/blog/images/blog-list/15.png'),
          postcount: '3265'
        },
        {
          categoryname: 'Music',
          categoryimage: require('@/assets/modules/blog/images/blog-list/13.png'),
          postcount: '6542'
        },
        {
          categoryname: 'Movie',
          categoryimage: require('@/assets/modules/blog/images/blog-list/18.png'),
          postcount: '365'
        },
        {
          categoryname: 'Fashion',
          categoryimage: require('@/assets/modules/blog/images/blog-list/19.png'),
          postcount: '1546'
        },
        {
          categoryname: 'News',
          categoryimage: require('@/assets/modules/blog/images/blog-list/16.png'),
          postcount: '4623'
        }
      ]
    }
  }
}
</script>
