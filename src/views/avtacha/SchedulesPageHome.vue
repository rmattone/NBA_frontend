<template>
  <b-row>
    <b-col sm="12">
      <div class="card">
        <div class="card-header d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Editar Escala {{ scheduleId }}</h4>
          </div>
          <router-link :to="{ name: 'avtacha.escalas' }">
            <button class="btn btn-primary align-self-center">
              <icon-component type="dual-tone" icon-name="chevron-arrow-left" :size="24"></icon-component>
              Voltar
            </button>
          </router-link>
        </div>
        <div class="card-body px-3">
          <nav>
            <div class="mb-3 nav nav-tabs nav-iconly gap-3" id="nav-tab3" role="tablist">
              <button class="nav-link active" id="pro-nav-home-tab" data-bs-toggle="tab" data-bs-target="#pro-nav-home" type="button" role="tab" aria-controls="pro-nav-home" aria-selected="true">
                <icon-component type="dual-tone" icon-name="setting" :size="24"></icon-component>
                Configurações
              </button>
              <button class="nav-link" id="pro-nav-profile-tab" data-bs-toggle="tab" data-bs-target="#pro-nav-profile" type="button" role="tab" aria-controls="pro-nav-profile" aria-selected="false">
                <icon-component type="dual-tone" icon-name="table" :size="24"></icon-component>
                Eventos
              </button>
              <button class="nav-link" id="pro-nav-contact-tab" data-bs-toggle="tab" data-bs-target="#pro-nav-contact" type="button" role="tab" aria-controls="pro-nav-contact" aria-selected="false" :disabled="true">
                <icon-component type="dual-tone" icon-name="chart-pie" :size="24"></icon-component>
                Dados
              </button>
            </div>
          </nav>
        </div>
      </div>
      <div class="tab-content iq-tab-fade-up" id="nav-tab-content">
        <div class="tab-pane fade show active" id="pro-nav-home" role="tabpanel" aria-labelledby="pro-nav-home-tab">
          <schedules-page-settings :id="scheduleId"></schedules-page-settings>
        </div>
        <div class="tab-pane fade" id="pro-nav-profile" role="tabpanel" aria-labelledby="pro-nav-profile-tab">
          <schedules-page-events :id="scheduleId"></schedules-page-events>
        </div>
        <div class="tab-pane fade" id="pro-nav-contact" role="tabpanel" aria-labelledby="pro-nav-contact-tab">
          <p>Dados</p>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
// import { ref } from 'vue'
import SchedulesPageSettings from './SchedulesPageSettings.vue'
import SchedulesPageEvents from './SchedulesPageEvents.vue'

export default {
  components: { SchedulesPageSettings, SchedulesPageEvents },
  data() {
    return {
      scheduleId: this.$route.params.id
    }
  },
  methods: {},
  mounted() {
    console.log(this.scheduleId)
  }
}
</script>
