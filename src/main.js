import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import i18n from './i18n'

// Library Components
import VueSweetalert2 from 'vue-sweetalert2'
import VueApexCharts from 'vue3-apexcharts'
import BootstrapVue3 from 'bootstrap-vue-3'
import Toast, { useToast } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import VueMask from '@devindex/vue-mask'
import CounterUp from 'vue3-autocounter'

// Custom Components & Directives
import globalComponent from './plugins/global-components'
import globalDirective from './plugins/global-directive'
import globalMixin from './plugins/global-mixin'
require('waypoints/lib/noframework.waypoints.min')

import VCalendar from 'v-calendar'
import 'v-calendar/style.css'

const app = createApp(App)
app.use(store).use(router).use(i18n)

// Library Components
app.use(VueSweetalert2)
app.use(VueApexCharts)
app.use(BootstrapVue3)
app.use(Toast)
app.use(VueMask)
app.component('counter-up', CounterUp)

// Custom Components & Directives
app.use(globalComponent)
app.use(globalDirective)
app.mixin(globalMixin)
app.config.globalProperties.$toast = useToast()

app.use(VCalendar)
app.mount('#app')

export default app
