<template>
  <div>
    <b-row>
      <b-col lg="8">
        <div class="overflow-hidden blog-data-slider slider-circle-btn position-relative">
          <Swiper
            class="p-0 m-0 mb-2 swiper-wrapper list-inline"
            :modules="modules"
            :slide-per-view="1"
            :space-between="32"
            :navigation="{
              nextEl: '#blog-tranding-next',
              prevEl: '#blog-tranding-prev'
            }">
            <SwiperSlide v-for="(data, index) in items1" :key="index">
              <IncomingBlog :blogImage="data.blogImage" :blogDate="data.blogDate" :blogheader="data.blogheader" :blogsData1="data.blogsData1" :blogsData2="data.blogsData2" />
            </SwiperSlide>
          </Swiper>
          <div class="swiper-button swiper-button-next" id="blog-tranding-next"></div>
          <div class="swiper-button swiper-button-prev" id="blog-tranding-prev"></div>
        </div>
      </b-col>
      <b-col lg="4">
        <b-card no-body>
          <b-card-header>
            <b-card-title>{{ $t('blog.sidebar.author') }}</b-card-title>
          </b-card-header>
          <b-card-body class="card-thumbnail">
            <div class="d-flex align-items-center">
              <img class="img-fluid rounded-circle avatar-130" src="@/assets/modules/blog/images/blog-avatar/01.png" alt="user-img" />
              <div class="ms-3">
                <h6 class="mb-3">Loren Banks</h6>
                <div class="d-flex justify-content-start align-items-center">
                  <span class="text-primary">Travel </span>
                  <span class="mx-2"> | </span>
                  <span class="d-flex align-items-center gap-2">
                    <icon-component type="solid" :size="18" icon-name="star" color="#FFD329"></icon-component>
                    <span>4.2</span>
                  </span>
                </div>
                <p class="my-4">Elit vitae neque velit mattis elementum egestas non, Sem eget.</p>
                <div class="d-flex gap-3">
                  <a href="javascript:void(0)">
                    <svg class="icon-24" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.9998 12C23.9998 5.37234 18.6273 0 12.0007 0C5.37201 0 0 5.37218 0 12C0 18.6268 5.37217 24 12.0007 24C18.6275 24 23.9998 18.6268 23.9998 12Z" fill="#3D83D9"></path>
                      <path d="M9.06396 9.07227H6.28613V17.011H9.06396V9.07227Z" fill="white"></path>
                      <path d="M7.67514 5.10254C6.80501 5.10254 6.12388 5.90215 6.32007 6.80286C6.43403 7.32607 6.86083 7.74668 7.38588 7.85212C8.28124 8.03193 9.06397 7.35414 9.06397 6.49153C9.06397 5.72568 8.44333 5.10254 7.67514 5.10254Z" fill="white"></path>
                      <path d="M18.1938 11.511C18.0069 10.0148 17.2585 9.07227 15.2358 9.07227C13.8002 9.07227 13.2293 9.29619 12.9001 9.92284V9.07227H10.6514V17.011H12.9656V12.8554C12.9656 11.818 13.1622 11.0344 14.4449 11.0344C15.7092 11.0344 15.8108 11.9988 15.8108 12.9228V17.0112H18.1939C18.1938 17.0112 18.2379 11.8608 18.1938 11.511Z" fill="white"></path>
                    </svg>
                  </a>
                  <a href="javascript:void(0)">
                    <svg class="icon-24" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24.0002 11.9992C24.0002 5.37225 18.6279 0 12 0C5.37242 0 0 5.37225 0 11.9992C0 18.6262 5.37242 24 12 24C18.6281 24 24.0002 18.6262 24.0002 11.9992Z" fill="#395196"></path>
                      <path d="M13.0575 9.15703V8.02035C13.0575 7.46672 13.427 7.33737 13.6857 7.33737C13.9452 7.33737 15.2811 7.33737 15.2811 7.33737V4.90325L13.0846 4.89355C10.6466 4.89355 10.093 6.71004 10.093 7.87296V9.15703H8.68359V12.0004H10.1052C10.1052 15.2223 10.1052 19.1073 10.1052 19.1073H12.9477C12.9477 19.1073 12.9477 15.1827 12.9477 12.0004H15.0575L15.317 9.15703H13.0575V9.15703Z" fill="white"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col>
        <div>
          <div class="d-flex justify-content-between mb-4">
            <h3 class="mb-0">{{ $t('blog.sidebar.trending-blog') }}</h3>
            <router-link :to="{ name: 'blog.detail' }" class="text-body">View All</router-link>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6" v-for="(data, index) in items" :key="index">
              <BlogCard :blogImage="data.blogImage" :blogDate="data.blogDate" :blogcontent="data.blogcontent" :blogcontent1="data.blogcontent1" />
            </div>
          </div>
        </div>
      </b-col>
      <b-col lg="4">
        <div class="d-flex justify-content-between mb-4">
          <h3 class="mb-0">{{ $t('blog.sidebar.top-category') }}</h3>
          <router-link :to="{ name: 'blog.detail' }" class="text-body">View All</router-link>
        </div>
        <b-row class="row-cols-1 row-cols-md-2">
          <div class="col">
            <b-card no-body>
              <div class="card-thumbnail">
                <img src="@/assets/modules/blog/images/blog-dashboard/09.png" class="img-fluid object-cover iq-top-categories" alt="Top-Categories" loading="lazy" />
                <div class="text-center">
                  <h5 class="text-ellipsis short-1">Food</h5>
                  <small>6542 Post</small>
                </div>
              </div>
            </b-card>
          </div>
          <div class="col">
            <b-card no-body>
              <div class="card-thumbnail">
                <img src="@/assets/modules/blog/images/blog-dashboard/10.png" class="img-fluid object-cover iq-top-categories" alt="01" loading="lazy" />
                <div class="text-center">
                  <h5 class="text-ellipsis short-1">Travel</h5>
                  <small>3545 Post</small>
                </div>
              </div>
            </b-card>
          </div>
          <div class="col">
            <b-card no-body>
              <div class="card-thumbnail">
                <img src="@/assets/modules/blog/images/blog-dashboard/11.png" class="img-fluid object-cover iq-top-categories" alt="01" loading="lazy" />
                <div class="text-center">
                  <h5 class="text-ellipsis short-1">Workspace</h5>
                  <small>1565 Post</small>
                </div>
              </div>
            </b-card>
          </div>
          <div class="col">
            <b-card no-body>
              <div class="card-thumbnail">
                <img src="@/assets/modules/blog/images/blog-dashboard/12.png" class="img-fluid object-cover iq-top-categories" alt="01" loading="lazy" />
                <div class="text-center">
                  <h5 class="text-ellipsis short-1">Photography</h5>
                  <small>8985 Post</small>
                </div>
              </div>
            </b-card>
          </div>
        </b-row>
        <b-card no-body>
          <b-card-header>
            <b-card-title>{{ $t('blog.sidebar.suggest-writter') }}</b-card-title>
          </b-card-header>
          <b-card-body class="d-flex flex-column gap-4">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <img class="img-fluid me-3 avatar-50 rounded-circle" src="@/assets/modules/blog/images/blog-avatar/02.png" alt="01" />
                <div>
                  <h6>Jane Cooper</h6>
                  <small class="text-ellipsis short-1">Lorem ipsum dolor consectetur sit amet.</small>
                </div>
              </div>
              <div class="d-flex align-items-center gap-2">
                <icon-component type="solid" :size="18" icon-name="star" color="#FFD329"></icon-component>
                2.5
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <img class="img-fluid me-3 avatar-50 rounded-circle" src="@/assets/modules/blog/images/blog-avatar/03.png" alt="01" />
                <div>
                  <h6>Wade Warren</h6>
                  <small class="text-ellipsis short-1">Lorem ipsum dolor consectetur sit amet.</small>
                </div>
              </div>
              <div class="d-flex align-items-center gap-2">
                <icon-component type="solid" :size="18" icon-name="star" color="#FFD329"></icon-component>
                5.0
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <img class="img-fluid me-3 avatar-50 rounded-circle" src="@/assets/modules/blog/images/blog-avatar/04.png" alt="01" />
                <div>
                  <h6>Jacob Jones</h6>
                  <small class="text-ellipsis short-1">Lorem ipsum dolor consectetur sit amet.</small>
                </div>
              </div>
              <div class="d-flex align-items-center gap-2">
                <icon-component type="solid" :size="18" icon-name="star" color="#FFD329"></icon-component>
                3.5
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <img class="img-fluid me-3 avatar-50 rounded-circle" src="@/assets/modules/blog/images/blog-avatar/05.png" alt="01" />
                <div>
                  <h6>Cody Fisher</h6>
                  <small class="text-ellipsis short-1">Lorem ipsum dolor consectetur sit amet.</small>
                </div>
              </div>
              <div class="d-flex align-items-center gap-2">
                <icon-component type="solid" :size="18" icon-name="star" color="#FFD329"></icon-component>
                4.8
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <img class="img-fluid me-3 avatar-50 rounded-circle" src="@/assets/modules/blog/images/blog-avatar/06.png" alt="01" />
                <div>
                  <h6>Dianne Russell</h6>
                  <small class="text-ellipsis short-1">Lorem ipsum dolor consectetur sit amet.</small>
                </div>
              </div>
              <div class="d-flex align-items-center gap-2">
                <icon-component type="solid" :size="18" icon-name="star" color="#FFD329"></icon-component>
                2.4
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <img class="img-fluid me-3 avatar-50 rounded-circle" src="@/assets/modules/blog/images/blog-avatar/04.png" alt="01" />
                <div>
                  <h6>Jacob Jones</h6>
                  <small class="text-ellipsis short-1">Lorem ipsum dolor consectetur sit amet.</small>
                </div>
              </div>
              <div class="d-flex align-items-center gap-2">
                <icon-component type="solid" :size="18" icon-name="star" color="#FFD329"></icon-component>
                3.5
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="row-cols-1">
      <div class="d-flex pb-4 align-items-center justify-content-between">
        <h4 class="mb-0">Upcoming Blogs</h4>
        <router-link :to="{ name: 'blog.detail' }" class="text-body">View All</router-link>
      </div>
      <div class="overflow-hidden upcoming-blog-slider position-relative slider-circle-btn">
        <Swiper
          class="p-0 m-0 mb-4 swiper-wrapper list-inline"
          :modules="modules"
          :slide-per-view="2"
          :space-between="32"
          :navigation="{
            nextEl: '#blog-upcomming-next',
            prevEl: '#blog-upcomming-prev'
          }"
          :breakpoints="{
            320: { slidesPerView: 1 },
            550: { slidesPerView: 1 },
            991: { slidesPerView: 2 },
            1400: { slidesPerView: 2 },
            1500: { slidesPerView: 2 },
            1920: { slidesPerView: 3 },
            2040: { slidesPerView: 3 },
            2440: { slidesPerView: 3 }
          }">
          <SwiperSlide v-for="(data, index) in items2" :key="index">
            <UpcomingBlog :blogImage="data.blogImage" :blogDate="data.blogDate" :blogheader="data.blogheader" :blogsData1="data.blogsData1" :blogsData2="data.blogsData2" />
          </SwiperSlide>
        </Swiper>
        <div class="swiper-button swiper-button-next" id="blog-upcomming-next"></div>
        <div class="swiper-button swiper-button-prev" id="blog-upcomming-prev"></div>
      </div>
    </b-row>
  </div>
</template>
<script>
import BlogCard from '@/components/modules/blog/widgets/BlogCard.vue'
import UpcomingBlog from '@/components/modules/blog/widgets/UpcomingBlog.vue'
import IncomingBlog from '@/components/modules/blog/widgets/IncomingBlog.vue'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
export default {
  name: 'BlogMain',
  components: {
    BlogCard,
    UpcomingBlog,
    IncomingBlog,
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation],
      items: [
        {
          blogImage: require('@/assets/modules/blog/images/blog-dashboard/07.png'),
          blogDate: '02 Dec 2021',
          blogcontent: 'The Expierience: If more of us valued food and cheer and song above hoarded gold.',
          blogcontent1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat...'
        },
        {
          blogImage: require('@/assets/modules/blog/images/blog-dashboard/05.png'),
          blogDate: '02 Dec 2021',
          blogcontent: 'The Ultimate Travel Guide: What To Do, See & Eat.',
          blogcontent1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat...'
        },
        {
          blogImage: require('@/assets/modules/blog/images/blog-dashboard/06.png'),
          blogDate: '03 Aug 2021',
          blogcontent: 'WIT AND DELIGHT: The Advice From A Twenty Something',
          blogcontent1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat...'
        },
        {
          blogImage: require('@/assets/modules/blog/images/blog-dashboard/07.png'),
          blogDate: '02 Dec 2021',
          blogcontent: 'The Foreign and Domestic Culinary Adventures: An Art',
          blogcontent1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat...'
        }
      ],
      items1: [
        {
          blogImage: require('@/assets/modules/blog/images/blog-dashboard/01.png'),
          blogDate: '14 Dec 2021',
          blogheader: 'Summer Cocktails and Mocktails',
          blogsData1: 'Food',
          blogsData2: 'Simmons'
        },
        {
          blogImage: require('@/assets/modules/blog/images/blog-dashboard/13.png'),
          blogDate: '20 Dec 2021',
          blogheader: 'Curious About Vegan Skincare?',
          blogsData1: 'Lifestyle',
          blogsData2: 'Jenny Wilson'
        },
        {
          blogImage: require('@/assets/modules/blog/images/blog-dashboard/14.png'),
          blogDate: '22 Dec 2021',
          blogheader: 'Foods for a Healthy System',
          blogsData1: 'Health',
          blogsData2: 'Jane cooper'
        }
      ],
      items2: [
        {
          blogImage: require('@/assets/modules/blog/images/blog-dashboard/02.png'),
          blogDate: '14 Dec 2021',
          blogheader: 'How to Make Green Bean',
          blogsData1: 'Food',
          blogsData2: 'Simmons'
        },
        {
          blogImage: require('@/assets/modules/blog/images/blog-dashboard/03.png'),
          blogDate: '20 Dec 2021',
          blogheader: 'Curious About Vegan Skincare?',
          blogsData1: 'Lifestyle',
          blogsData2: 'Jenny Wilson'
        },
        {
          blogImage: require('@/assets/modules/blog/images/blog-dashboard/04.png'),
          blogDate: '20 Dec 2021',
          blogheader: 'Foods for a Healthy System',
          blogsData1: 'Health',
          blogsData2: 'Jane cooper'
        },
        {
          blogImage: require('@/assets/modules/blog/images/blog-dashboard/02.png'),
          blogDate: '14 Dec 2021',
          blogheader: 'How to Make Green Bean',
          blogsData1: 'Food',
          blogsData2: 'Simmons'
        },
        {
          blogImage: require('@/assets/modules/blog/images/blog-dashboard/03.png'),
          blogDate: '20 Dec 2021',
          blogheader: 'Curious About Vegan Skincare?',
          blogsData1: 'Lifestyle',
          blogsData2: 'Jenny Wilson'
        }
      ],
      slideroptions: {
        centeredSlides: false,
        loop: false,
        slidesPerView: 4,
        autoplay: false,
        spaceBetween: 32,
        breakpoints: {
          320: { slidesPerView: 1 },
          550: { slidesPerView: 1 },
          991: { slidesPerView: 1 },
          1400: { slidesPerView: 1 },
          1500: { slidesPerView: 1 },
          1920: { slidesPerView: 1 },
          2040: { slidesPerView: 1 },
          2440: { slidesPerView: 1 }
        },
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      }
    }
  }
}
</script>
