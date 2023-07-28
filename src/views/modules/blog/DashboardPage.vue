<template>
  <div class="d-flex flex-wrap justify-content-between mb-4">
    <h3 class="mb-0">{{ $t('blog.sidebar.analytics-overview') }}</h3>
    <div class="dropdown">
      <a href="#" class="text-secondary dropdown-toggle" id="dropdownMenuButton22" data-bs-toggle="dropdown" aria-expanded="false">Last 30 Days</a>
      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton22" style="">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
  <b-row>
    <b-col lg="6" xl="3" md="6" v-for="(data, index) in items" :key="index">
      <b-card>
        <div class="text-center">
          <h2 class="text-primary mb-3">{{ data.blogCount }}</h2>
          <p class="text-dark">{{ data.blogView }}</p>
          <small>
            <span class="text-danger">{{ data.blogPercent }} </span>
            <span class="text-dark">{{ data.blogRatio }}</span>
          </small>
        </div>
      </b-card>
    </b-col>
    <b-col lg="8">
      <b-card no-body>
        <div class="flex-wrap card-header d-flex justify-content-between align-items-center">
          <div class="header-title">
            <b-card-title>{{ $t('blog.sidebar.followers') }}</b-card-title>
          </div>
          <ul class="nav nav-tabs nav-tunnel" v-slider-tab role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active d-flex align-items-center" @click="chartswitch('growth')" data-bs-toggle="tab" data-bs-target="#blog-chart-growth" data-chart="update" data-type="blog-chart-growth" type="button" role="tab" aria-controls="output" aria-selected="true">Growth</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link d-flex align-items-center" @click="chartswitch('fall')" data-bs-toggle="tab" data-bs-target="#blog-chart-fall" data-chart="update" data-type="blog-chart-fall" type="button" role="tab" aria-controls="profile" aria-selected="false">Fall</button>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <apexchart type="line" height="300" :options="growthChart.options" :series="growthChart.series" />
        </div>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex align-items-center justify-content-between">
          <b-card-title class="mb-0">
            {{ $t('blog.sidebar.users-traffic') }}
          </b-card-title>
        </b-card-header>
        <b-card-body class="card-thumbnail">
          <DataTable :data="BlogTable.data" :columns="BlogTable.columns" isColumnFilter="eCommerce-admin" />
        </b-card-body>
      </b-card>
      <h3 class="mb-4">{{ $t('blog.sidebar.trending-blog') }}</h3>
      <div class="overflow-hidden blog-analysis-slider position-relative slider-circle-btn trending-blogs">
        <Swiper
          class="p-0 m-0 swiper-wrapper list-inline"
          :slides-per-view="2"
          :space-between="32"
          :breakpoints="{
            320: { slidesPerView: 1 },
            550: { slidesPerView: 2 }
          }">
          <SwiperSlide class="card-slide" v-for="(data, index) in items2" :key="index">
            <div>
              <BlogCard :blogImage="data.blogImage" classname="" :blogDate="data.blogDate" :blogcontent="data.blogcontent" :blogcontent1="data.blogcontent1" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </b-col>
    <b-col lg="4">
      <b-card no-body>
        <b-card-header>
          <h4 class="mb-0">{{ $t('blog.sidebar.new-isitors') }}</h4>
        </b-card-header>
        <b-card-body>
          <b-row>
            <b-col lg="7" xl="6" md="6">
              <apexchart type="radialBar" height="185" :options="visitorchart.options" :series="visitorchart.series" />
            </b-col>
            <b-col lg="5" xl="6" md="6" class="p-0 d-flex align-items-center justify-content-center flex-column">
              <div class="d-flex align-items-center gap-3">
                <h4 class="text-primary mb-0">1,293</h4>
                <p class="mb-0">Daily</p>
              </div>
              <div class="d-flex align-items-center gap-3 my-4">
                <h4 class="text-primary mb-0">10,237</h4>
                <p class="mb-0">Monthly</p>
              </div>
              <div class="d-flex align-items-center gap-3">
                <h4 class="text-primary mb-0">11,293</h4>
                <p class="mb-0">Yearly</p>
              </div>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="card-thumbnail">
          <b-card-title>Top Social Media Shared</b-card-title>
        </b-card-header>
        <b-card-body class="card-thumbnail d-flex flex-column gap-4">
          <div class="d-flex justify-content-between align-items-center" v-for="(data, index) in social" :key="index">
            <div class="d-flex align-items-center gap-3">
              <img class="img-fluid avatar-50 rounded-circle" :src="data.socialIamge" alt="01" />
              <div>
                <h6 class="mb-0">{{ data.media }}</h6>
              </div>
            </div>
            <strong>{{ data.amount }}</strong>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header>
          <h4 class="mb-0">{{ $t('blog.sidebar.most-viewed-blog') }}</h4>
        </b-card-header>
        <b-card-body>
          <b-row>
            <b-col lg="12" xl="6" md="6">
              <apexchart class="blog-view-chart" height="185" type="radialBar" :options="viewchart.options" :series="viewchart.series" />
            </b-col>
            <b-col lg="12" xl="6" md="6" class="p-0 d-flex align-items-center justify-content-center">
              <div>
                <p class="d-flex align-items-center gap-2">
                  <icon-component type="solid" :size="14" icon-name="circle" class="text-primary"></icon-component>
                  Informative Blogs - 75%
                </p>
                <p class="d-flex align-items-center gap-2">
                  <icon-component type="solid" :size="14" icon-name="circle" class="text-info"></icon-component>
                  Food Blogs - 80%
                </p>
                <p class="d-flex align-items-center gap-2">
                  <icon-component type="solid" :size="14" icon-name="circle" class="text-warning"></icon-component>
                  Lifestyle Blogs - 85%
                </p>
              </div>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header>
          <div class="d-flex align-items-center justify-content-between">
            <b-card-title>{{ $t('blog.sidebar.devices') }}</b-card-title>
            <div class="dropdown">
              <svg width="20" id="dropdownMenuLink2" data-bs-toggle="dropdown" role="button" aria-expanded="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3" cy="12" r="3" fill="currentColor" />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
                <circle cx="21" cy="12" r="3" fill="currentColor" />
              </svg>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </div>
          </div>
        </b-card-header>
        <b-card-body>
          <apexchart type="bar" height="350" :options="activitychart.options" :series="activitychart.series" />
          <b-col lg="12" class="p-0 d-flex align-items-center justify-content-center">
            <div class="text-center d-flex justify-content-between">
              <p class="mx-2 d-flex align-items-center gap-2">
                <icon-component type="solid" :size="14" icon-name="circle" class="text-primary"></icon-component>
                Mobile - 85%
              </p>
              <p class="mx-2 d-flex align-items-center gap-2">
                <icon-component type="solid" :size="14" icon-name="circle" class="text-info"></icon-component>
                Laptop - 50%
              </p>
            </div>
          </b-col>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { getVariableColor } from '@/utilities/root-var'
import { Swiper, SwiperSlide } from 'swiper/vue'
import BlogCard from '@/components/modules/blog/widgets/BlogCard.vue'
import DataTable from '@/components/DataTable.vue'
import img1 from '@/assets/modules/blog/images/blog-avatar/06.png'
import img2 from '@/assets/modules/blog/images/blog-avatar/02.png'
import img3 from '@/assets/modules/blog/images/blog-avatar/03.png'
import img4 from '@/assets/modules/blog/images/blog-avatar/04.png'

export default {
  name: 'DashboardPage',
  components: {
    Swiper,
    SwiperSlide,
    BlogCard,
    DataTable
  },
  setup() {
    const store = useStore()
    const themeColor = computed(() => store.getters['setting/theme_color'].colors)
    const colors = ref(null)
    const chartColors = ref(null)
    const colorsChange = () => {
      const newColors = getVariableColor()
      colors.value = [newColors.primary, newColors.info]
    }
    colorsChange()
    watch(
      themeColor,
      () => {
        colorsChange()
        growthChart.value = {
          ...growthChart.value,
          options: {
            ...growthChart.value.options,
            colors: colors.value,
            markers: {
              ...growthChart.value.options.markers,
              strokeColors: colors.value
            }
          }
        }
      },
      { deep: true }
    )
    watch(
      themeColor,
      () => {
        colorsChange()
        visitorchart.value = {
          ...visitorchart.value,
          options: {
            ...visitorchart.value.options,
            colors: colors.value
          }
        }
      },
      { deep: true }
    )
    watch(
      themeColor,
      () => {
        colorsChange()
        activitychart.value = {
          ...activitychart.value,
          options: {
            ...activitychart.value.options,
            colors: colors.value
          }
        }
      },
      { deep: true }
    )
    const chartColorsChange = () => {
      const newColors = getVariableColor()
      chartColors.value = [newColors.primary, newColors.warning, newColors.info]
    }
    chartColorsChange()
    watch(
      themeColor,
      () => {
        chartColorsChange()
        viewchart.value = {
          ...viewchart.value,
          options: {
            ...viewchart.value.options,
            colors: chartColors.value
          }
        }
      },
      { deep: true }
    )
    const items = [
      {
        blogCount: '862.2k',
        blogView: 'Last 7 Days Follower Growth',
        blogPercent: '10%',
        blogRatio: 'Decrease from last week'
      },
      {
        blogCount: '4.1M',
        blogView: 'Last 30 Days Follower Growth',
        blogPercent: '24%',
        blogRatio: 'Decrease from last week'
      },
      {
        blogCount: '143.7k',
        blogView: 'Average Daily Growth',
        blogPercent: '10%',
        blogRatio: 'Change'
      },
      {
        blogCount: '4.2M',
        blogView: 'Average Monthly Growth',
        blogPercent: '10%',
        blogRatio: 'Change'
      }
    ]

    const BlogTable = {
      data: [
        {
          user: {
            img: img1,
            name: 'Oscar Phelps'
          },
          email: 'oscarp@example.com',
          number: '(307) 555-0133',
          detail: '28'
        },
        {
          user: {
            img: img2,
            name: 'Joy Mason'
          },
          email: 'joy_mason@example.com',
          number: '(319) 555-0115',
          detail: '65'
        },
        {
          user: {
            img: img3,
            name: 'Clinette Mark'
          },
          email: 'Clinette64@example.com',
          number: '(603) 555-0123',
          detail: '48'
        },
        {
          user: {
            img: img4,
            name: 'Marie Clark'
          },
          email: 'clark.marie@example.com',
          number: '(629) 555-0129',
          detail: '25'
        }
      ],
      columns: [
        {
          title: 'User',
          data: 'user',
          render: function (data) {
            return ' <div class="d-flex align-items-center"><a href=""><div class="d-flex align-items-center gap-3"><img class="img-fluid avatar-50 rounded-circle" src="' + data.img + '" alt="profile" loading="lazy" /><div><span class="fw-bold">' + data.name + '</span><p class="text-body mb-0">' + data.name + '</p></div></div></a></div>'
          }
        },
        {
          title: 'Email',
          data: 'email'
        },
        {
          title: 'Contac No:',
          data: 'number'
        },
        {
          title: 'More Detail',
          data: 'detail'
        }
      ]
    }
    const items2 = [
      {
        blogImage: require('@/assets/modules/blog/images/app/01.png'),
        classname: '',
        blogDate: '02 Dec 2021',
        blogcontent: 'The Expierience: Travel Tales From India and Abroad.',
        blogcontent1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat...'
      },
      {
        blogImage: require('@/assets/modules/blog/images/app/02.png'),
        classname: '',
        blogDate: '02 Dec 2021',
        blogcontent: 'The Ultimate Travel Guide: What To Do, See & Eat.',
        blogcontent1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat...'
      },
      {
        blogImage: require('@/assets/modules/blog/images/app/01.png'),
        classname: '',
        blogDate: '02 Dec 2021',
        blogcontent: 'The Expierience: Travel Tales From India and Abroad.',
        blogcontent1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat...'
      },
      {
        blogImage: require('@/assets/modules/blog/images/app/02.png'),
        classname: '',
        blogDate: '02 Dec 2021',
        blogcontent: 'The Ultimate Travel Guide: What To Do, See & Eat.',
        blogcontent1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat...'
      }
    ]
    const social = [
      {
        socialIamge: require('@/assets/modules/blog/images/blog-avatar/02.png'),
        media: 'Facebook',
        amount: '87k'
      },
      {
        socialIamge: require('@/assets/modules/blog/images/blog-avatar/03.png'),
        media: 'Whatsapp',
        amount: '48k'
      },
      {
        socialIamge: require('@/assets/modules/blog/images/blog-avatar/04.png'),
        media: 'UC Community',
        amount: '36k'
      },
      {
        socialIamge: require('@/assets/modules/blog/images/blog-avatar/05.png'),
        media: 'Twitter',
        amount: '30k'
      },
      {
        socialIamge: require('@/assets/modules/blog/images/blog-avatar/06.png'),
        media: 'Instagram',
        amount: '65k'
      }
    ]
    const growthChart = ref({
      series: [
        {
          name: 'Desktops',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        {
          name: 'Mobile',
          data: [10, 82, 75, 68, 47, 60, 49, 91, 108]
        }
      ],

      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
          animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            dynamicAnimation: {
              enabled: true,
              speed: 400
            }
          },
          toolbar: {
            show: false
          }
        },
        colors: colors.value,
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 3
        },
        grid: {
          show: true,
          strokeDashArray: 7
        },
        markers: {
          size: 6,
          colors: '#FFFFFF',
          strokeColors: colors.value,
          strokeWidth: 2,
          strokeOpacity: 0.9,
          strokeDashArray: 0,
          fillOpacity: 0,
          shape: 'circle',
          radius: 2,
          offsetX: 0,
          offsetY: 0
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        legend: {
          show: false
        }
      }
    })
    const visitorchart = ref({
      series: [72.5],
      options: {
        chart: {
          height: 185,
          type: 'radialBar'
        },
        colors: colors.value,
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: '60%'
            },
            dataLabels: {
              showOn: 'always',
              name: {
                show: false
              },
              value: {
                fontSize: '24px',
                show: true,
                formatter: function (val) {
                  return '+' + val + '%'
                }
              }
            }
          }
        },

        stroke: {
          lineCap: 'smooth'
        }
      }
    })
    const viewchart = ref({
      series: [65, 70, 78],
      options: {
        chart: {
          height: 185,
          type: 'radialBar'
        },
        colors: chartColors.value,
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '13px',
                show: true
              },
              value: {
                fontSize: '16px',
                show: true
              }
            },
            hollow: {
              size: '25%'
            },
            track: {
              margin: 8,
              strokeWidth: '70%'
            }
          }
        },
        labels: ['Info Blogs', 'Food Blogs', 'Lifestyle Blogs']
      }
    })
    const activitychart = ref({
      series: [
        {
          // name: 'PRODUCT A',
          data: [20, 70, 35, 24, 60, 50, 20]
        },
        {
          // name: 'PRODUCT B',
          data: [60, 20, 70, 80, 20, 43, 30]
        }
      ],

      options: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: true
          }
        },
        yaxis: {
          show: true,
          tickAmount: 6,
          min: 0,
          max: 120
        },
        xaxis: {
          categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        legend: {
          show: false
        },
        grid: {
          show: true,
          strokeDashArray: 7
        },
        colors: colors.value,
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 4,
            columnWidth: '18%'
          }
        },
        dataLabels: {
          enabled: false
        }
      }
    })
    return {
      items,
      items2,
      growthChart,
      visitorchart,
      social,
      viewchart,
      activitychart,
      BlogTable
    }
  },
  methods: {
    chartswitch(val) {
      switch (val) {
        case 'fall':
          this.growthChart.series = [
            {
              name: 'Desktops',
              data: [20, 51, 65, 21, 39, 42, 62, 51, 18]
            },
            {
              name: 'Mobile',
              data: [80, 62, 55, 58, 87, 50, 49, 41, 16]
            }
          ]
          break
        default:
          this.growthChart.series = [
            {
              name: 'Desktops',
              data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            },
            {
              name: 'Mobile',
              data: [10, 82, 75, 68, 47, 60, 49, 91, 108]
            }
          ]
          break
      }
    }
  }
}
</script>
