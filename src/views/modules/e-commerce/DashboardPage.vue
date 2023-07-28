<template>
  <b-row>
    <b-col lg="8">
      <b-card>
        <template #header>
          <div class="d-flex justify-content-between flex-wrap">
            <h4 class="card-title">Revenue</h4>
            <b-dropdown variant="link text-secondary p-0" id="dropdown-1" text="Month">
              <b-dropdown-item>Year</b-dropdown-item>
              <b-dropdown-item>Month</b-dropdown-item>
              <b-dropdown-item>Week</b-dropdown-item>
            </b-dropdown>
          </div>
        </template>
        <apexchart class="admin-chart-01" type="area" height="100%" :options="revenue.options" :series="revenue.series" />
      </b-card>
    </b-col>
    <b-col lg="4">
      <b-row>
        <b-col lg="6">
          <analytic-widget amount="$5254" title="Total Earning"></analytic-widget>
        </b-col>
        <b-col lg="6">
          <analytic-widget amount="$4955" title="Monthly Earning"></analytic-widget>
        </b-col>
        <b-col lg="6">
          <analytic-widget amount="$4,434" title="Total Refunds"></analytic-widget>
        </b-col>
        <b-col lg="6">
          <analytic-widget amount="80%" title="Profit Margin"></analytic-widget>
        </b-col>
      </b-row>
    </b-col>
    <b-col lg="8">
      <b-row>
        <b-col lg="3" md="6">
          <sales-card classname="bg-primary" sales="Weekly Sales" amount="$14,434"></sales-card>
        </b-col>
        <b-col lg="3" md="6">
          <sales-card classname="bg-info" sales="Total Sales" amount="$44,434"></sales-card>
        </b-col>
        <b-col lg="3" md="6">
          <analytic-growth day="This Year" amount="$55,4343" status="-10%"></analytic-growth>
        </b-col>
        <b-col lg="3" md="6">
          <analytic-growth day="Today" amount="$1,434" status="+60%"></analytic-growth>
        </b-col>
      </b-row>
    </b-col>
    <b-col lg="4">
      <b-card title="Customer Gender">
        <div class="flex-wrap d-flex align-items-center justify-content-between">
          <apexchart type="radialBar" height="185" :options="gender.options" :series="gender.series" class="col-md-7 col-lg-7" />
          <div class="d-grid gap col-md-5 col-lg-5">
            <div class="d-flex align-items-start">
              <icon-component type="solid" icon-name="circle" class="text-primary" :size="10"></icon-component>
              <div class="ms-2">
                <span class="mb-3">Male Customer</span>
                <h6 class="mb-0">44%</h6>
              </div>
            </div>
            <div class="d-flex align-items-start">
              <icon-component type="solid" icon-name="circle" class="text-info" :size="10"></icon-component>
              <div class="ms-2">
                <span class="mb-3">Female Customer</span>
                <h6 class="mb-0">55%</h6>
              </div>
            </div>
          </div>
        </div>
      </b-card>
    </b-col>
    <b-col md="12" lg="8">
      <b-row>
        <b-col md="12">
          <div class="overflow-hidden card">
            <div class="flex-wrap card-header d-flex align-items-center justify-content-between flex-wrap">
              <div class="header-title">
                <h4 class="card-title">Top Sellers</h4>
              </div>
              <div class="d-flex align-items-center">
                <b-dropdown variant="link text-secondary p-0" id="dropdown-1" text="Profiles">
                  <b-dropdown-item>Profiles</b-dropdown-item>
                  <b-dropdown-item>Country</b-dropdown-item>
                  <b-dropdown-item>Product</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
            <div class="px-0 card-body">
              <div class="table-responsive">
                <data-table :data="TopSellerTable.data" :columns="TopSellerTable.columns" data-table="eCommerce-admin" isColumnFilter="e-Commerce-admin" />
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="6" md="6">
          <most-widget title="Best Selling Product" product-name="Jacket" :amount="56.0" :image="require('@/assets/modules/e-commerce/images/product/04.png')" :isProfit="true"></most-widget>
        </b-col>
        <b-col lg="6" md="6">
          <most-widget title="Most Viewed" product-name="Bags" :amount="56.0" :image="require('@/assets/modules/e-commerce/images/product/09.png')" :isLoss="true"></most-widget>
        </b-col>
      </b-row>
    </b-col>
    <b-col lg="4" md="12">
      <b-card title="Top Rated" body-class="d-flex flex-column">
        <ul class="list-inline m-0 p-0">
          <rating-widget :name="item.name" :rating="item.rating" :image="item.image" v-for="(item, index) in ratings" :key="index"></rating-widget>
        </ul>
        <router-link :to="{ name: 'e-commerce.categories-list' }" class="btn btn-primary align-self-center">
          <div class="d-flex align-items-center gap-2">
            <span>See All Reviews</span>
            <icon-component type="outlined" icon-name="chevron-right" :size="20"></icon-component>
          </div>
        </router-link>
      </b-card>
    </b-col>
  </b-row>
</template>
<script setup>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { getVariableColor } from '@/utilities/root-var'
import SalesCard from '@/components/modules/e-commerce/widgets/SalesCard.vue'
import AnalyticWidget from '@/components/modules/e-commerce/widgets/AnalyticWidget.vue'
import RatingWidget from '@/components/modules/e-commerce/widgets/RatingWidget.vue'
import AnalyticGrowth from '@/components/modules/e-commerce/widgets/AnalyticGrowth.vue'
import MostWidget from '@/components/modules/e-commerce/widgets/MostWidgets.vue'
import DataTable from '@/components/DataTable.vue'

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
    revenue.value = {
      ...revenue.value,
      options: {
        ...revenue.value.options,
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
    gender.value = {
      ...gender.value,
      options: {
        ...gender.value.options,
        colors: colors.value
      }
    }
  },
  { deep: true }
)

const TopSellerTable = {
  data: [
    {
      rank: '#179',
      profiles: { name: 'Marie Clark', username: '@mclark' },
      revenue: '$8,015',
      sales: '752'
    },
    {
      rank: '#118',
      profiles: { name: 'James Mason', username: '@jamesM' },
      revenue: '$13,989',
      sales: '875'
    },
    {
      rank: '#148',
      profiles: { name: 'Elon Musk', username: '@musk' },
      revenue: '$14,437',
      sales: '1548'
    },
    {
      rank: '#101',
      profiles: { name: 'Jacob Jones', username: '@jones' },
      revenue: '$25,916',
      sales: '4,863'
    }
  ],
  columns: [
    {
      title: 'Rank',
      data: 'rank',
      render: function (data) {
        return '<strong>' + data + '</strong>'
      }
    },
    {
      title: 'Profiles',
      data: 'profiles',
      render: function (data) {
        return '<h6>' + data.name + '</h6><p className="mb-0">' + data.username + '</p>'
      }
    },
    { title: 'Revenue', data: 'revenue' },
    { title: 'Sales', data: 'sales' }
  ]
}
const ratings = [
  {
    image: require('@/assets/modules/e-commerce/images/product/04.png'),
    name: "Biker's Jacket",
    rating: '3.5'
  },
  {
    image: require('@/assets/modules/e-commerce/images/product/06.png'),
    name: 'Blue side bag',
    rating: '3.5'
  },
  {
    image: require('@/assets/modules/e-commerce/images/product/07.png'),
    name: 'Pink Sweater',
    rating: '3.5'
  },
  {
    image: require('@/assets/modules/e-commerce/images/product/02.png'),
    name: 'Casual Shoes',
    rating: '3.5'
  },
  {
    image: require('@/assets/modules/e-commerce/images/product/05.png'),
    name: 'Blue Shrug',
    rating: '3.5'
  },
  {
    image: require('@/assets/modules/e-commerce/images/product/10.png'),
    name: 'Pink bag',
    rating: '3.5'
  }
]
const revenue = {
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
}
const gender = {
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
}
</script>
