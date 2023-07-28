<template>
  <div class="d-flex justify-content-between align-items-center flex-wrap mb-4 gap-3">
    <div class="d-flex flex-column">
      <h3>Quick Insights</h3>
      <p class="text-primary mb-0">Financial Dashboard</p>
    </div>
    <div class="d-flex justify-content-between align-items-center rounded flex-wrap gap-3">
      <div class="form-check form-switch mb-0 iq-status-switch">
        <input class="form-check-input" type="checkbox" id="iq-switch" value="true" v-model="checkOnline" />
        <label class="form-check-label" for="iq-switch"> {{ checkOnline ? 'Online' : 'Offline' }} </label>
      </div>
      <div class="form-group mb-0" style="width: 185px">
        <select-component name="days" v-model="selectDayValue" :options="selectDays" placeholder="Select" class="form-control"></select-component>
      </div>
      <div class="form-group mb-0">
        <flat-picker v-model="date" :config="{ mode: 'range', minDate: 'today', dateFormat: 'Y-m-d' }" name="date" placeholder="24 Jan 2022 to 23 Feb 2022" class="form-control"></flat-picker>
      </div>
      <b-button variant="primary">Analytics</b-button>
    </div>
  </div>
  <b-row>
    <b-col lg="3" md="6">
      <b-card class="card-block card-stretch card-height">
        <div class="d-flex align-items-start justify-content-between mb-2">
          <p class="mb-0 text-dark">Gross Volume</p>
          <b-badge tag="a" class="badge rounded-pill bg-soft-primary" href="javascript:void(0);"> View </b-badge>
        </div>
        <div class="mb-3">
          <h2 class="counter">$199,556</h2>
          <small>Last updated 1 hour ago.</small>
        </div>
        <div>
          <apexchart height="100%" type="bar" :options="grossVolume.options" :series="grossVolume.series" />
        </div>
      </b-card>
    </b-col>
    <b-col lg="3" md="6">
      <b-row class="row">
        <b-col cols="12">
          <analytics-widget title="USD Balance" button-text="Request Payout" amount="2590" description="Available to pay out."></analytics-widget>
        </b-col>
        <b-col cols="12">
          <analytics-widget title="No Of Payments" button-text="View" amount="367" description="Transactions this month"></analytics-widget>
        </b-col>
      </b-row>
    </b-col>
    <b-col lg="6" md="12">
      <b-card>
        <b-row>
          <b-col md="6" class="mb-5 mb-md-0">
            <div class="mb-5">
              <div class="mb-2 d-flex justify-content-between align-items-center">
                <span class="text-dark">Last Transaction</span>
                <b-badge tag="a" variant=" bg-soft-primary" pill href="javascript:void(0);">View Report</b-badge>
              </div>
              <div class="mb-2">
                <h2 class="counter">$58,556</h2>
                <small>This Month</small>
              </div>
            </div>
            <div>
              <div class="d-flex align-items-center gap-3 mb-3">
                <div class="bg-soft-primary avatar-60 rounded">
                  <icon-component type="dual-tone" icon-name="save" :size="35"></icon-component>
                </div>
                <div style="width: 100%">
                  <div class="d-flex justify-content-between">
                    <h6>Received</h6>
                    <h6 class="text-body">$5,674</h6>
                  </div>
                  <b-progress :value="70" variant="primary" class="bg-soft-primary shadow-none w-100" height="6px"></b-progress>
                </div>
              </div>
              <div class="d-flex align-items-center gap-3">
                <div class="bg-soft-primary avatar-60 rounded">
                  <icon-component type="dual-tone" icon-name="wallet" :size="35"></icon-component>
                </div>
                <div style="width: 100%">
                  <div class="d-flex justify-content-between">
                    <h6>Transferred</h6>
                    <h6 class="text-body">$1,624</h6>
                  </div>
                  <b-progress :value="33" variant="info" class="bg-soft-info shadow-none w-100" height="6px"></b-progress>
                </div>
              </div>
            </div>
          </b-col>
          <b-col md="6">
            <div class="iq-scroller-effect">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-dark">Send Money To</span>
                <!-- <router-link :to="{ name: 'table.border-table' }" class="badge rounded-pill bg-soft-primary"> All Contacts </router-link> -->
              </div>
              <div class="d-flex align-items-center iq-slider mb-4 gap-2">
                <div v-for="(item, index) in imgGroup" :key="index">
                  <img class="rounded-circle bg-soft-primary img-fluid avatar-40 mb-2" :src="item" alt="profile" loading="lazy" />
                </div>
              </div>
              <div>
                <div class="form-group">
                  <select-component name="account" v-model="selectAccountValue" :options="selectAccount" placeholder="Select Your Account " class="form-control"></select-component>
                </div>
                <div class="form-group">
                  <select-component name="account" v-model="selectAmountValue" :options="selectAmount" :taggable="true" placeholder="Enter Amount In USD " class="form-control"></select-component>
                </div>
              </div>
              <b-button variant="primary w-100 mt-2">Send Money</b-button>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
    <b-col lg="6" md="12">
      <b-card class="card-block card-stretch card-height">
        <template #header>
          <div class="d-flex justify-content-between flex-wrap">
            <h4 class="card-title">Net Volumes From Sales</h4>
            <b-dropdown variant="link text-secondary p-0" id="dropdown-1" text="This year">
              <b-dropdown-item>Year</b-dropdown-item>
              <b-dropdown-item>Month</b-dropdown-item>
              <b-dropdown-item>Week</b-dropdown-item>
            </b-dropdown>
          </div>
        </template>
        <apexchart height="100%" type="line" class="dashboard-line-chart" :options="netVolumeSale.options" :series="netVolumeSale.series" />
      </b-card>
    </b-col>
    <b-col lg="6" md="12">
      <b-card no-body>
        <nav class="tab-bottom-bordered">
          <div class="mb-0 nav nav-tabs justify-content-around" id="payment-tab-list">
            <tab-button tag="button" class="nav-link py-3" target="#payments" id="payments" :active="true">Payments</tab-button>
            <tab-button tag="button" class="nav-link py-3" target="#settlements" id="settlements">Settlements</tab-button>
            <tab-button tag="button" class="nav-link py-3" target="#refunds" id="refunds">Refunds</tab-button>
          </div>
          <!--  -->

          <!--  -->
        </nav>
        <div class="tab-content iq-tab-fade-up" id="payment-tab">
          <tab-pane id="payments" tab-for="#payments">
            <table-widget :list="tableList.payments"></table-widget>
          </tab-pane>
          <tab-pane id="settlements" tab-for="#settlements">
            <table-widget :list="tableList.settlements"></table-widget>
          </tab-pane>
          <tab-pane id="refunds" tab-for="#refunds">
            <table-widget :list="tableList.refunds"></table-widget>
          </tab-pane>
        </div>
        <div class="card-footer text-end">
          <a href="javascript:void(0);">
            <span class="me-2"> View all Settlements </span>
            <svg class="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import { ref, reactive, computed, watch } from 'vue'
import { useStore } from 'vuex'
import FlatPicker from 'vue-flatpickr-component'
import { getVariableColor } from '@/utilities/root-var'
import TableWidget from '@/components/widgets/dashboard/TableWidget.vue'
import AnalyticsWidget from '@/components/widgets/AnalyticsWidget.vue'
export default {
  components: {
    FlatPicker,
    TableWidget,
    AnalyticsWidget
  },
  setup() {
    const date = ref('')
    const checkOnline = ref(true)
    const selectDayValue = ref('30')
    const selectDays = ref([
      {
        name: 'Past 30 Days',
        value: '30'
      },
      {
        name: 'Past 60 Days',
        value: '60'
      },
      {
        name: 'Past 90 Days',
        value: '90'
      },
      {
        name: 'Past 1 year',
        value: '365'
      },
      {
        name: 'Past 2 year',
        value: '730'
      }
    ])
    const selectAccountValue = ref('')
    const selectAccount = ref([
      {
        name: '5521000120354',
        value: '5521000120354'
      },
      {
        name: '5521000125145',
        value: '5521000125145'
      },
      {
        name: '5521000129665',
        value: '5521000129665'
      }
    ])
    const selectAmountValue = ref('')
    const selectAmount = ref([
      {
        name: '100',
        value: '100'
      },
      {
        name: '200',
        value: '200'
      },
      {
        name: '500',
        value: '500'
      }
    ])
    const imgGroup = ref([require('@/assets/images/table/1.png'), require('@/assets/images/table/2.png'), require('@/assets/images/table/3.png'), require('@/assets/images/table/4.png'), require('@/assets/images/table/5.png')])
    const tableList = reactive({
      payments: [
        {
          amount: '$1,833',
          transation_id: 'hui_vxnnjigakm',
          date: '1 Hour Ago',
          status: 1
        },
        {
          amount: '$1,204',
          transation_id: 'hui_uwsxaiuhhs',
          date: '23 Days Ago',
          status: 1
        },
        {
          amount: '$2,833',
          transation_id: 'hui_taxrcfzhny',
          date: '1 Mounth Ago',
          status: 1
        },
        {
          amount: '$2,235',
          transation_id: 'hui_pknfotsmhl',
          date: '1 Mounth Ago',
          status: 1
        },
        {
          amount: '$2,442',
          transation_id: 'hui_xqgczqbgto',
          date: '3 Mounth Ago',
          status: 1
        },
        {
          amount: '$1,924',
          transation_id: 'hui_eoasrkizdw',
          date: '4 Mounth Ago',
          status: 1
        }
      ],
      settlements: [
        {
          amount: '$2,298',
          transation_id: 'hui_ufsoishqbw',
          date: '7 Days Ago',
          status: 1
        },
        {
          amount: '$2,032',
          transation_id: 'hui_fescijfgbb',
          date: '23 Days',
          status: 1
        },
        {
          amount: '$1,514',
          transation_id: 'hui_eihghndltk',
          date: '1 month ago',
          status: 1
        },
        {
          amount: '$1,425',
          transation_id: 'hui_bvihnfpdfq',
          date: '2 month ago',
          status: 1
        },
        {
          amount: '$2,838',
          transation_id: 'hui_afrtmvdyjp',
          date: '2 month ago',
          status: 1
        },
        {
          amount: '$2,613',
          transation_id: 'hui_jterqcvjxz',
          date: '5 month ago',
          status: 1
        }
      ],
      refunds: [
        {
          amount: '$2,866',
          transation_id: 'hui_odqethdqye',
          date: '3 Days Ago',
          status: 0
        },
        {
          amount: '$1,637',
          transation_id: 'hui_nmngvsosnh',
          date: '22 Days Ago',
          status: 3
        },
        {
          amount: '$2,922',
          transation_id: 'hui_uikgtphcpo',
          date: '1 month ago',
          status: 3
        },
        {
          amount: '$2,563',
          transation_id: 'hui_cieqrdyqkp',
          date: '2 month ago',
          status: 0
        },
        {
          amount: '$2,334',
          transation_id: 'hui_wmdvzpfavx',
          date: '3 month ago',
          status: 3
        },
        {
          amount: '$2,632',
          transation_id: 'hui_jplpprjzbr',
          date: '5 month ago',
          status: 2
        }
      ]
    })
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
        grossVolume.value = {
          ...grossVolume.value,
          options: {
            ...grossVolume.value.options,
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
        netVolumeSale.value = {
          ...netVolumeSale.value,
          options: {
            ...netVolumeSale.value.options,
            colors: colors.value,
            markers: {
              ...netVolumeSale.value.options.markers,
              strokeColors: colors.value
            }
          }
        }
      },
      { deep: true }
    )

    const grossVolume = ref({
      series: [
        {
          name: 'Successful deals',
          data: [30, 50, 35, 60, 40, 60, 60]
        },
        {
          name: 'Failed deals',
          data: [40, 50, 55, 50, 30, 80, 30]
        }
      ],
      options: {
        chart: {
          type: 'bar',
          height: '100%',
          stacked: true,
          toolbar: {
            show: false
          }
        },
        colors: colors.value,
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '28%',
            endingShape: 'rounded',
            borderRadius: 3
          }
        },
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 3,
          colors: ['transparent']
        },
        grid: {
          show: true,
          strokeDashArray: 7
        },
        xaxis: {
          categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          labels: {
            minHeight: 20,
            maxHeight: 20,
            style: {
              colors: '#8A92A6'
            }
          }
        },
        yaxis: {
          title: {
            text: ''
          },
          labels: {
            minWidth: 20,
            maxWidth: 20,
            style: {
              colors: '#8A92A6'
            }
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return '$ ' + val + ' thousands'
            }
          }
        },
        responsive: [
          {
            breakpoint: 1025,
            options: {
              chart: {
                height: 130
              }
            }
          }
        ]
      }
    })
    const netVolumeSale = ref({
      series: [
        {
          name: 'Sales',
          data: [10, 82, 75, 68, 47, 60, 49, 91, 108]
        }
      ],
      options: {
        colors: colors.value,
        chart: {
          height: '100%',
          type: 'line',
          toolbar: {
            show: false
          }
        },
        forecastDataPoints: {
          count: 3
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
          },
          tooltip: {
            enabled: false
          }
        }
      }
    })

    return {
      colors,
      date,
      checkOnline,
      selectDays,
      selectAccount,
      selectAmount,
      selectDayValue,
      selectAccountValue,
      selectAmountValue,
      imgGroup,
      tableList,
      grossVolume,
      netVolumeSale
    }
  }
}
</script>
