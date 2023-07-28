<template>
  <b-row>
    <div class="col-lg-8 col-md-12">
      <b-row>
        <div class="col-lg-6 col-xl-3 col-md-6">
          <sales-card classname="bg-primary" sales="Total orders" amount="$9,300"></sales-card>
        </div>
        <div class="col-lg-6 col-xl-3 col-md-6">
          <sales-card classname="bg-info" sales="In Transit" amount="$1,599"></sales-card>
        </div>
        <b-col lg="6" xl="3" md="6">
          <sales-card classname="bg-primary" sales="Return Orders" amount="$1,120"></sales-card>
        </b-col>
        <b-col lg="6" xl="3" md="6">
          <sales-card classname="bg-info" sales="Pending Orders" amount="$2,921"></sales-card>
        </b-col>
      </b-row>
      <b-card>
        <template #header>
          <div class="d-flex align-items-center justify-content-between flex-wrap">
            <h4 class="card-title">Total Sales</h4>
            <div class="d-flex align-items-center">
              <div class="dropdown">
                <a href="#" class="text-secondary dropdown-toggle" id="dropdownMenuButton22" data-bs-toggle="dropdown" aria-expanded="false"> Month </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton22" style="">
                  <li><a class="dropdown-item" href="#">Month</a></li>
                  <li><a class="dropdown-item" href="#">Year</a></li>
                  <li><a class="dropdown-item" href="#">Week</a></li>
                </ul>
              </div>
            </div>
          </div>
        </template>
        <apexchart className="admin-chart-01" type="area" height="100%" :options="totalSales.options" :series="totalSales.series" />
      </b-card>
      <b-row>
        <b-col md="12">
          <div class="overflow-hidden card" data-aos="fade-up" data-aos-delay="600">
            <div class="card-header">
              <div class="header-title">
                <h4 class="card-title">Top Products</h4>
              </div>
            </div>
            <div class="px-0 card-body">
              <div class="table-responsive">
                <data-table :data="VendorTable.data" :columns="VendorTable.columns" isColumnFilter="eCommerce-admin" />
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
    <b-col lg="4" md="12">
      <b-row>
        <b-col lg="12" md="6">
          <visa-card name="Mike Smith" date="06/11" number="5789 **** ****  2847"></visa-card>
        </b-col>
        <b-col lg="12" md="6">
          <b-card title="Categories">
            <div class="flex-wrap d-flex align-items-center justify-content-between">
              <apexchart class="col-md-7 col-lg-7" :options="categories.options" :series="categories.series" height="185" type="radialBar" />

              <div class="d-grid gap col-md-5 col-lg-5">
                <div class="d-flex align-items-start">
                  <svg class="mt-2 text-primary" xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 24 24" fill="currentColor">
                    <g><circle cx="12" cy="12" r="8" fill="currentColor"></circle></g>
                  </svg>
                  <div class="ms-2">
                    <span class="mb-3">Electronics</span>
                    <h6 class="mb-0">44%</h6>
                  </div>
                </div>
                <div class="d-flex align-items-start">
                  <svg class="mt-2 text-info" xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 24 24" fill="currentColor">
                    <g><circle cx="12" cy="12" r="8" fill="currentColor"></circle></g>
                  </svg>
                  <div class="ms-2">
                    <span class="mb-3">Accessories</span>
                    <h6 class="mb-0">55%</h6>
                  </div>
                </div>
              </div>
            </div>
          </b-card>
        </b-col>
      </b-row>
      <b-card header-class="d-flex align-items-center justify-content-between">
        <template #header>
          <div class="d-flex align-items-center">
            <h4 class="mb-0 me-2">Tracking ID</h4>
            <h5 class="text-success mb-0">#4676658956</h5>
          </div>
          <svg class="icon-20 text-primary" width="20" id="dropdownMenuLink1" role="button" data-bs-toggle="dropdown" aria-expanded="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 8.5L12 15.5L5 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink1">
            <li><a class="dropdown-item" href="#">Delivery</a></li>
            <li><a class="dropdown-item" href="#">Shipping</a></li>
            <li><a class="dropdown-item" href="#">Package Arrived</a></li>
          </ul>
        </template>
        <div class="text-center pb-3">
          <small>Tuesday, 25 November</small>
        </div>
        <div class="d-flex align-items-center mb-3">
          <h6 class="mb-0 iq-tracking small">2:09 PM</h6>
          <div class="border-start ps-3 ms-3">
            <h6>Out For Delivery</h6>
            <small>Thane</small>
          </div>
        </div>
        <div class="d-flex align-items-center mb-3">
          <h6 class="mb-0 iq-tracking small">6:01 AM</h6>
          <div class="border-start ps-3 ms-3">
            <h6>Package arrived</h6>
            <small>Maharashtra</small>
          </div>
        </div>
        <div class="text-center pb-3">
          <small>Monday, 24 November</small>
        </div>
        <div class="d-flex align-items-center mb-3">
          <h6 class="mb-0 iq-tracking small">12:36 PM</h6>
          <div class="border-start ps-3 ms-3">
            <h6>Package arrived</h6>
            <small>Karnataka</small>
          </div>
        </div>
        <div class="d-flex align-items-center mb-3">
          <h6 class="mb-0 iq-tracking small">11:51 AM</h6>
          <div class="border-start ps-3 ms-3">
            <h6>11:51 AM</h6>
            <small>Karnataka</small>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <h6 class="mb-0 iq-tracking small">6:01 AM</h6>
          <div class="border-start ps-3 ms-3">
            <h6>Package arrived</h6>
            <small>Maharashtra</small>
          </div>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>
<script setup>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { getVariableColor } from '@/utilities/root-var'
import SalesCard from '@/components/modules/e-commerce/widgets/SalesCard.vue'
import VisaCard from '@/components/modules/e-commerce/widgets/VisaCard.vue'
import DataTable from '@/components/DataTable.vue'
// export default {
//   components: {
//     SalesCard,
//     VisaCard
//   },
// setup() {
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
    totalSales.value = {
      ...totalSales.value,
      options: {
        ...totalSales.value.options,
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
    categories.value = {
      ...categories.value,
      options: {
        ...categories.value.options,
        colors: colors.value
      }
    }
  },
  { deep: true }
)
const totalSales = ref({
  series: [
    {
      name: 'total',
      data: [30, 60, 20, 60, 25, 80, 40, 94, 80, 85, 70]
    }
  ],
  options: {
    chart: {
      fontFamily: '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      height: '100%',
      type: 'area',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: false
      }
    },
    colors: colors.value,
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    yaxis: {
      show: true,
      labels: {
        show: true,
        minWidth: 19,
        maxWidth: 19,
        style: {
          colors: '#8A92A6'
        },
        offsetX: -5
      },
      axisBorder: {
        show: false
      }
    },
    legend: {
      show: false
    },
    xaxis: {
      labels: {
        minHeight: 22,
        maxHeight: 22,
        show: true,
        style: {
          colors: '#8A92A6'
        }
      },
      lines: {
        show: false // or just here to disable only x axis grids
      },
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    grid: {
      show: true,
      strokeDashArray: 3
    },
    responsive: [
      {
        breakpoint: 1399,
        options: {
          chart: {
            height: 320
          }
        }
      }
    ],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        shadeIntensity: 0,
        gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
        inverseColors: true,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 50, 80],
        colors: ['#3a57e8']
      }
    },
    tooltip: {
      enabled: true
    }
  }
})
const categories = ref({
  series: [44, 55],
  options: {
    chart: {
      height: 185,
      type: 'radialBar'
    },
    colors: colors.value,
    plotOptions: {
      radialBar: {
        inverseOrder: false,
        endAngle: 360,
        hollow: {
          margin: 5,
          size: '50%',
          background: 'transparent',
          imageWidth: 150,
          imageHeight: 150,
          imageClipped: true,
          position: 'front',
          dropShadow: {
            enabled: false,
            blur: 3,
            opacity: 0.5
          }
        },
        track: {
          show: true,
          background: '#f2f2f2',
          strokeWidth: '70%',
          opacity: 1,
          margin: 6,
          dropShadow: {
            enabled: false,
            blur: 3,
            opacity: 0.5
          }
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: '16px',
            fontWeight: 600,
            offsetY: -10
          },
          value: {
            show: true,
            fontSize: '14px',
            fontWeight: 400,
            offsetY: 16,
            formatter: function (val) {
              return val + '%'
            }
          }
        }
      }
    },
    labels: ['Electronics', 'Accessories']
  }
})

const VendorTable = {
  data: [
    {
      rank: '101',
      profile: {
        name: 'Riban Sun Glasses',
        desc: 'Glasses'
      },
      seller: 'GOL',
      sales: '4,863',
      revenue: '25,916'
    },
    {
      rank: '118',
      profile: {
        name: 'Danim Jeans',
        desc: 'Pants'
      },
      seller: 'EMZ',
      sales: '875',
      revenue: '13,989'
    },
    {
      rank: '148',
      profile: {
        name: 'Winter Suit & Jacket',
        desc: 'Cloths'
      },
      seller: 'FLK',
      sales: '1548',
      revenue: '14,437'
    },
    {
      rank: '179',
      profile: {
        name: 'Lofer',
        desc: 'Shoes'
      },
      seller: 'EBY',
      sales: '752',
      revenue: '8,015'
    }
  ],
  columns: [
    {
      title: 'Rank',
      data: 'rank'
    },
    {
      title: 'Profiles',
      data: 'profile',
      render: function (data) {
        return '<h6>' + data.name + '</h6><p className="mb-0">' + data.desc + '</p>'
      }
    },
    {
      title: 'Seller',
      data: 'seller'
    },
    {
      title: 'Sales',
      data: 'sales'
    },
    {
      title: 'Revenue',
      data: 'revenue'
    }
  ]
}
</script>
