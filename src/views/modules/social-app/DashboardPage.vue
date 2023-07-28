<template>
  <b-row>
    <b-col lg="8">
      <b-card no-body>
        <b-card-header>
          <div class="d-flex justify-content-between align-items-center flex-wrap">
            <h4 class="mb-0">{{ $t('social-app.sidebar.profile-statistics') }}</h4>
            <div class="dropdown">
              <a href="#" class="text-secondary dropdown-toggle" id="dropdownMenuButton22" data-bs-toggle="dropdown" aria-expanded="false"> Everything </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton22" style="">
                <li><a class="dropdown-item" href="#">Everything</a></li>
                <li><a class="dropdown-item" href="#">Social</a></li>
                <li><a class="dropdown-item" href="#">Live Streaming</a></li>
              </ul>
            </div>
          </div>
        </b-card-header>
        <b-card-body>
          <b-row class="row-cols-xl-4 row-cols-md-2 row-cols-1">
            <div class="col" v-for="(data, index) in social" :key="index">
              <b-card class="bg-body shadow-none mb-xl-0">
                <div class="d-flex align-items-center">
                  <div class="me-3">
                    <b-button variant="sm bg-white rounded-circle p-2">
                      <img :src="data.mediaImage" alt="01" class="img-fluid avatar-30 object-contain" />
                    </b-button>
                  </div>
                  <div>
                    <small>{{ data.name }}</small>
                    <h4 class="mb-0">{{ data.count }}</h4>
                  </div>
                </div>
              </b-card>
            </div>
          </b-row>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header>
          <div class="d-flex justify-content-between align-items-center flex-wrap">
            <h4 class="mb-0">{{ $t('social-app.sidebar.requests') }}</h4>
            <div class="dropdown">
              <a href="#" class="text-secondary dropdown-toggle" id="dropdownMenuButton22" data-bs-toggle="dropdown" aria-expanded="false"> Month </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton22" style="">
                <li><a class="dropdown-item" href="#">Everything</a></li>
                <li><a class="dropdown-item" href="#">Social</a></li>
                <li><a class="dropdown-item" href="#">Live Streaming</a></li>
              </ul>
            </div>
          </div>
        </b-card-header>
        <b-card-body>
          <apexchart height="300" type="line" :series="overallchart.series" :options="overallchart.options" />
        </b-card-body>
      </b-card>
      <b-row>
        <b-col lg="6">
          <b-card class="card-block card-stretch card-height" no-body>
            <b-card-header>
              <h4 class="mb-0">{{ $t('social-app.sidebar.profile-reach') }}</h4>
            </b-card-header>
            <b-card-body>
              <div class="d-flex border-bottom pb-3 align-items-center iq-social-keyMetrics">
                <h6 class="iq-key-metrics mb-0">Clicks</h6>
                <div class="iq-drive-progress d-flex align-items-center">
                  <span class="key-number">10k</span>
                  <b-progress :max="0" class="key-progress shadow-none w-50">
                    <b-progress-bar :value="40" variant="primary"></b-progress-bar>
                  </b-progress>
                  <span class="ms-3">12k</span>
                </div>
              </div>
              <div class="d-flex border-bottom py-3 align-items-center iq-social-keyMetrics">
                <h6 class="iq-key-metrics mb-0">Likes</h6>
                <div class="iq-drive-progress d-flex align-items-center">
                  <span class="key-number">680</span>
                  <b-progress :max="0" class="key-progress shadow-none w-50">
                    <b-progress-bar :value="60" variant="primary"></b-progress-bar>
                  </b-progress>
                  <span class="ms-3">520</span>
                </div>
              </div>
              <div class="d-flex border-bottom py-3 align-items-center iq-social-keyMetrics">
                <h6 class="iq-key-metrics mb-0">Followers</h6>
                <div class="iq-drive-progress d-flex align-items-center">
                  <span class="key-number">8k</span>
                  <b-progress :max="0" class="key-progress shadow-none w-50">
                    <b-progress-bar :value="20" variant="primary"></b-progress-bar>
                  </b-progress>
                  <span class="ms-3">121k</span>
                </div>
              </div>
              <div class="d-flex pt-3 align-items-center iq-social-keyMetrics">
                <h6 class="iq-key-metrics mb-0">Impressions</h6>
                <div class="iq-drive-progress d-flex align-items-center">
                  <span class="key-number">369</span>
                  <b-progress :max="80" class="key-progress shadow-none w-50">
                    <b-progress-bar :value="20" variant="primary"></b-progress-bar>
                  </b-progress>
                  <span class="ms-3">10k</span>
                </div>
              </div>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col lg="6">
          <b-row class="row-cols-1 row-cols-md-2">
            <div class="col">
              <b-card class="card-block card-stretch card-height text-center" no-body>
                <b-card-header>
                  <h2 class="card-title">20k</h2>
                </b-card-header>
                <b-card-body class="px-0">
                  <span>Enagaged Users</span>
                  <apexchart height="150" type="area" :series="userchart.series" :options="userchart.options" />
                </b-card-body>
              </b-card>
            </div>
            <div class="col">
              <b-card class="card-block card-stretch card-height text-center" no-body>
                <b-card-header>
                  <h2 class="card-title">12.2k</h2>
                </b-card-header>
                <b-card-body class="px-0">
                  <span>Page Impression</span>
                  <apexchart height="150" type="area" :series="socialchart.series" :options="socialchart.options" />
                </b-card-body>
              </b-card>
            </div>
          </b-row>
        </b-col>
      </b-row>
    </b-col>
    <b-col lg="4">
      <b-card no-body>
        <b-card-header>
          <div class="d-flex align-items-center">
            <h4 class="me-3 mb-0">{{ $t('social-app.sidebar.suggesion') }}</h4>
            <div>
              <span class="btn btn-sm btn-icon btn-soft-primary text-primary rounded-pill">3</span>
            </div>
          </div>
        </b-card-header>
        <b-card-body>
          <div class="d-flex mb-3 pb-3 border-bottom">
            <img src="@/assets/modules/social-app/images/avatar/12.png" alt="01" class="img-fluid rounded-circle avatar-60 me-3" />
            <div>
              <div class="d-flex align-items-center">
                <h5 class="mb-0">Wade Warren</h5>
                <small class="ms-2">wants to add you to friends</small>
              </div>
              <div class="d-flex align-items-center mt-2">
                <a href="#" class="small">Accept</a>
                <a href="#" class="ms-3 text-body small">Decline</a>
              </div>
            </div>
          </div>
          <div class="d-flex">
            <img src="@/assets/modules/social-app/images/avatar/14.png" alt="02" class="img-fluid rounded-circle avatar-60 me-3" />
            <div>
              <div class="d-flex align-items-center">
                <h5 class="mb-0">Jenny Wilson</h5>
                <small class="ms-2">wants to add you to friends</small>
              </div>
              <div class="d-flex align-items-center mt-2">
                <a href="#" class="small">Accept</a>
                <a href="#" class="ms-3 text-body small">Decline</a>
              </div>
            </div>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex align-items-center justify-content-between">
          <div class="header-title">
            <b-card-title>{{ $t('social-app.sidebar.key') }}</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <div class="iq-social-user-details">
            <div class="col" v-for="(data, index) in items" :key="index">
              <User :userName="data.userName" :userAvatar="data.userAvatar" :userComment="data.userComment" />
            </div>
          </div>
          <div class="text-center mt-3">
            <div class="btn btn-primary btn-sm">View All</div>
          </div>
        </b-card-body>
      </b-card>
      <b-card>
        <b-card-body class="text-center">
          <div class="iq-media-group-1">
            <a href="#" class="iq-media-1">
              <div class="icon">
                <img src="@/assets/modules/social-app/images/avatar/10.png" alt="01" class="img-fluid rounded-circle avatar-48" />
              </div>
            </a>
            <a href="#" class="iq-media-1">
              <div class="icon">
                <img src="@/assets/modules/social-app/images/avatar/25.png" alt="01" class="img-fluid rounded-circle avatar-48" />
              </div>
            </a>
            <a href="#" class="iq-media-1">
              <div class="icon">
                <img src="@/assets/modules/social-app/images/avatar/06.png" alt="01" class="img-fluid rounded-circle avatar-48" />
              </div>
            </a>
            <a href="#" class="iq-media-1">
              <div class="icon">
                <img src="@/assets/modules/social-app/images/avatar/27.png" alt="01" class="img-fluid rounded-circle avatar-48" />
              </div>
            </a>
            <a href="#" class="iq-media-1">
              <div class="icon">
                <img src="@/assets/modules/social-app/images/avatar/15.png" alt="01" class="img-fluid rounded-circle avatar-48" />
              </div>
            </a>
            <a href="#" class="iq-media-1">
              <div class="icon">
                <img src="@/assets/modules/social-app/images/avatar/19.png" alt="01" class="img-fluid rounded-circle avatar-48" />
              </div>
            </a>
            <a href="#" class="iq-media-1">
              <div class="icon">
                <img src="@/assets/modules/social-app/images/avatar/05.png" alt="01" class="img-fluid rounded-circle avatar-48" />
              </div>
            </a>
            <a href="#" class="iq-media-1">
              <div class="icon">
                <img src="@/assets/modules/social-app/images/avatar/01.png" alt="01" class="img-fluid rounded-circle avatar-48" />
              </div>
            </a>
          </div>
          <div class="d-flex justify-content-center align-items-center mt-4">
            <h5>184.3k</h5>
            <h6 class="ms-2">Followers</h6>
          </div>
          <span>Active now on your profile</span>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { getVariableColor } from '@/utilities/root-var'
import User from '@/components/modules/social-app/widgets/User.vue'
export default {
  name: 'soaial-app-dashboard',
  components: {
    User
  },
  setup() {
    const store = useStore()
    const themeColor = computed(() => store.getters['setting/theme_color'].colors)
    const colors = ref(null)
    const colorsChange = () => {
      const newColors = getVariableColor()
      colors.value = [newColors.primary, newColors.info]
    }
    colorsChange()
    watch(
      themeColor,
      () => {
        colorsChange()
        overallchart.value = {
          ...overallchart.value,
          options: {
            ...overallchart.value.options,
            colors: colors.value,
            markers: {
              ...overallchart.value.options.markers,
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
        userchart.value = {
          ...userchart.value,
          options: {
            ...userchart.value.options,
            colors: colors.value
          }
        }
      },
      { deep: true }
    )

    const socialChartColors = ref(null)
    const socialColorsChange = () => {
      const newColors = getVariableColor()
      socialChartColors.value = [newColors.info]
    }
    socialColorsChange()
    watch(
      themeColor,
      () => {
        colorsChange()
        socialchart.value = {
          ...socialchart.value,
          options: {
            ...socialchart.value.options,
            colors: socialChartColors.value
          }
        }
      },
      { deep: true }
    )
    const social = [
      {
        mediaImage: require('@/assets/modules/social-app/images/media/01.png'),
        name: 'Followers',
        count: '280k'
      },
      {
        mediaImage: require('@/assets/modules/social-app/images/media/02.png'),
        name: 'Join',
        count: '10k'
      },
      {
        mediaImage: require('@/assets/modules/social-app/images/media/03.png'),
        name: 'Subscribers',
        count: '2.9M'
      },
      {
        mediaImage: require('@/assets/modules/social-app/images/media/04.png'),
        name: 'Like',
        count: '210k'
      }
    ]
    const items = [
      { userName: 'Cameron Williamson', userAvatar: require('@/assets/modules/social-app/images/avatar/13.png'), userComment: '@Naoerville' },
      { userName: 'Guy Hawkins', userAvatar: require('@/assets/modules/social-app/images/avatar/06.png'), userComment: '@hawkins' },
      { userName: 'Jacob Jones', userAvatar: require('@/assets/modules/social-app/images/avatar/27.png'), userComment: '@Austin' },
      { userName: 'Darlene Robertson', userAvatar: require('@/assets/modules/social-app/images/avatar/28.png'), userComment: '@Fairfiels' }
    ]
    const overallchart = ref({
      series: [
        {
          name: 'Profiles',
          data: [40, 55, 25, 60, 30, 85, 60, 75, 57]
        }
      ],
      options: {
        colors: colors.value,
        chart: {
          toolbar: {
            show: false
          }
        },
        forecastDataPoints: {
          count: 2
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
          tooltip: {
            enabled: false
          }
        },
        yaxis: {
          tickAmount: 5,
          min: 0,
          max: 100
        },
        responsive: [
          {
            breakpoint: 1399,
            options: {
              chart: {
                height: 230
              },
              xaxis: {
                minHeight: 20,
                maxHeight: 20
              }
            }
          }
        ]
      }
    })
    const userchart = ref({
      series: [
        {
          name: 'series1',
          data: [10, 35, 20, 50, 70]
        }
      ],
      options: {
        chart: {
          height: 150,
          type: 'area',
          sparkline: {
            enabled: true
          },
          group: 'sparklines'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 3,
          curve: 'smooth'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.3
          }
        },
        colors: colors.value,
        xaxis: {
          type: 'datetime',
          categories: ['2018-08-19T00:00:00', '2018-09-19T01:30:00', '2018-10-19T02:30:00', '2018-11-19T01:30:00', '2018-12-19T01:30:00']
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
          enabled: false
        }
      }
    })
    const socialchart = ref({
      series: [
        {
          name: 'series1',
          data: [70, 50, 20, 35, 10]
        }
      ],
      options: {
        chart: {
          height: 150,
          type: 'area',
          sparkline: {
            enabled: true
          },
          group: 'sparklines'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 3,
          curve: 'smooth'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.5
          }
        },
        colors: socialChartColors.value,

        xaxis: {
          type: 'datetime',
          categories: ['2018-08-19T00:00:00', '2018-09-19T01:30:00', '2018-10-19T02:30:00', '2018-11-19T01:30:00', '2018-12-19T01:30:00']
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
          enabled: false
        }
      }
    })
    return {
      social,
      overallchart,
      userchart,
      socialchart,
      items
    }
  }
}
</script>
