<template>
  <b-row>
    <b-col lg="8">
      <h3 class="mb-4">Appointments Overview</h3>
      <b-row class="row-cols-1 row-cols-md-2 row-cols-lg-4">
        <div class="col">
          <analytics-widget :value="1206" description="All" variant="primary" icon="document"></analytics-widget>
        </div>
        <div class="col">
          <analytics-widget :value="2455" description="New" variant="primary" icon="users"></analytics-widget>
        </div>
        <div class="col">
          <analytics-widget value="12 / 4" description="Today" variant="success" icon="calendar"></analytics-widget>
        </div>
        <div class="col">
          <analytics-widget :value="1200" description="Cancelled" variant="danger" icon="call-off"></analytics-widget>
        </div>
      </b-row>
      <b-card>
        <template #header>
          <div class="flex-wrap d-flex justify-content-between align-items-center">
            <div class="header-title">
              <h4 class="card-title">Appointments</h4>
            </div>
            <div class="d-flex align-items-center align-self-center mt-2 mt-sm-0">
              <div class="d-flex align-items-center text-primary">
                <icon-component type="solid" icon-name="circle" :size="12"></icon-component>
                <div class="ms-2">
                  <span class="text-secondary">Booked</span>
                </div>
              </div>
              <div class="d-flex align-items-center ms-3 text-info">
                <icon-component type="solid" icon-name="circle" :size="12"></icon-component>
                <div class="ms-2">
                  <span class="text-secondary">Cancelled</span>
                </div>
              </div>
            </div>
            <b-dropdown variant="link text-secondary p-0" id="dropdown-1" text="This year">
              <b-dropdown-item>Year</b-dropdown-item>
              <b-dropdown-item>Month</b-dropdown-item>
              <b-dropdown-item>Week</b-dropdown-item>
            </b-dropdown>
          </div>
        </template>
        <apexchart height="350" type="line" :options="appointChart.options" :series="appointChart.series" />
      </b-card>
    </b-col>
    <b-col lg="4">
      <b-card title="Date">
        <div class="course-picker">
          <flat-picker v-model="dateBasic" className="d-none" :config="flatpickr"></flat-picker>
        </div>
      </b-card>
      <b-card title="Appointments Booked">
        <b-row class="align-items-center">
          <b-col md="7  mb-lg-0 mb-3" sm="12">
            <apexchart height="180" type="donut" :options="appointmentBooked.options" :series="appointmentBooked.series" />
          </b-col>
          <b-col md="5" sm="12">
            <div class="d-flex flex-column">
              <div class="d-flex align-items-center gap-2">
                <icon-component type="solid" icon-name="circle" :size="12"></icon-component>
                <div>
                  <h6 class="mb-0">Dentist</h6>
                  <span>80%</span>
                </div>
              </div>
              <div class="d-flex align-items-center mt-3 gap-2">
                <icon-component type="solid" icon-name="circle" :size="12"></icon-component>
                <div>
                  <h6 class="mb-0">Surgeon</h6>
                  <span>80%</span>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
  </b-row>
  <b-row>
    <b-col lg="8" md="6" sm="12">
      <b-card body-class="px-0">
        <template #header>
          <h4>Doctors</h4>
        </template>
        <div class="table-responsive">
          <b-table-simple id="doctors-table" striped class="mb-0">
            <b-thead>
              <b-th class="ps-3">User</b-th>
              <b-th>Email</b-th>
              <b-th>Contact No.</b-th>
              <b-th class="pe-3">More Detail</b-th>
            </b-thead>
            <b-tbody>
              <b-tr v-for="(item, index) in list" :key="index">
                <b-td>
                  <div class="d-flex align-items-center">
                    <img class="rounded img-fluid avatar-40 me-3" :src="item.img" alt="profile" loading="lazy" />
                    <h6 class="mb-0">{{ item.name }}</h6>
                  </div>
                </b-td>
                <b-td> {{ item.email }} </b-td>
                <b-td>{{ item.contact }}</b-td>
                <b-td>
                  <a href="#">View</a>
                </b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
        </div>
      </b-card>
    </b-col>
    <b-col lg="4" md="6" sm="12">
      <div class="card">
        <div class="flex-wrap card-header d-flex justify-content-between">
          <div class="header-title">
            <h4>Upcoming Appointments</h4>
            <p class="mb-0">
              <svg class="me-2" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#17904b" d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" />
              </svg>
              16% this month
            </p>
          </div>
        </div>
        <div class="card-body">
          <div class="d-flex profile-media align-items-top" v-for="(item, index) in timeline" :key="index">
            <div class="mt-1 profile-dots-pills border-primary"></div>
            <div class="ms-4">
              <h6 class="mb-1">
                {{ item.name }} - <span class="text-primary">{{ item.position }}</span>
              </h6>
              <span class="mb-0">{{ item.time }}</span>
            </div>
          </div>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { getVariableColor } from '@/utilities/root-var'
import FlatPicker from 'vue-flatpickr-component'
import AnalyticsWidget from '@/components/modules/appointment/widgets/AnalyticsWidget.vue'

const dateBasic = ref('')
const flatpickr = ref({
  inline: true,
  minDate: 'today',
  dateFormat: 'Y-m-d'
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
    appointChart.value = {
      ...appointChart.value,
      options: {
        ...appointChart.value.options,
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
    appointmentBooked.value = {
      ...appointmentBooked.value,
      options: {
        ...appointmentBooked.value.options,
        colors: colors.value
      }
    }
  },
  { deep: true }
)
const appointChart = ref({
  series: [
    {
      name: 'Booked',
      data: [7, 4, 9, 4, 7, 3, 8]
    },
    {
      name: 'Canceled',
      data: [3, 5, 3, 7, 4, 6, 9]
    }
  ],
  options: {
    colors: colors.value,
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      width: 3,
      dashArray: 0
    },
    grid: {
      show: true,
      strokeDashArray: 3
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    }
  }
})
const appointmentBooked = ref({
  series: [40, 15],
  options: {
    chart: {
      height: 180,
      type: 'donut'
    },
    labels: ['Dentist', 'Surgeon'],
    colors: colors.value,
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
        donut: {
          size: '70%',
          labels: {
            show: true,
            total: {
              show: true,
              color: '#BCC1C8',
              fontSize: '18px',
              fontFamily: 'Inter',
              fontWeight: 600
            },
            value: {
              show: true,
              fontSize: '25px',
              fontFamily: 'Inter',
              fontWeight: 700,
              color: '#8F9FBC'
            }
          }
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      lineCap: 'round'
    },
    grid: {
      padding: {
        bottom: 0
      }
    },
    legend: {
      position: 'bottom',
      offsetY: 8,
      show: false
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 268
          }
        }
      }
    ]
  }
})
const timeline = ref([
  { name: 'Cameron Williamson', position: 'Dentist', time: '11 Jul 8:10 PM' },
  { name: 'Brooklyn Simmons', position: 'Orthopedic', time: '11 Jul 11 PM' },
  { name: 'Leslie Alexander', position: 'Neurology', time: '11 Jul 1:21 AM' },
  { name: 'Robbin Doe', position: 'ENT', time: '11 Jul 4:30 AM' },
  { name: 'Jane Cooper', position: 'Cardiologist', time: '11 Jul 4:50 AM' }
])
const list = ref([
  { img: require('@/assets/modules/appointment/images/avatars/01.png'), name: 'Elnora obrien', email: 'sara.cruz@example.com', contact: '(270) 555-0117' },
  { img: require('@/assets/modules/appointment/images/avatars/02.png'), name: 'Jonathan Bradley', email: 'kenzi.lawson@example.com', contact: '(319) 555-0115' },
  { img: require('@/assets/modules/appointment/images/avatars/03.png'), name: 'Katherine Romero', email: 'felicia.reid@example.com', contact: '(629) 555-0129' },
  { img: require('@/assets/modules/appointment/images/avatars/04.png'), name: 'Logan Wolfe', email: 'georgia.young@example.com', contact: '(603) 555-0123' },
  { img: require('@/assets/modules/appointment/images/avatars/05.png'), name: 'Oscar Phelps', email: 'alma.lawson@example.com', contact: '(307) 555-0133' }
])
</script>
