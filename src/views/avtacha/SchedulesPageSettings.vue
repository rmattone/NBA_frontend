<template>
  <b-row>
    <b-col sm="12">
      <div class="card px-3">
        <div class="card-body px-0">
          <div class="d-flex justify-content-end">
            <b-button variant="success" @click="handleUpdateSchedule" class="me-2">
              <icon-component type="dual-tone" icon-name="save" :size="22"></icon-component>
              Salvar
            </b-button>
            <b-button variant="primary" @click="getScheduleInfos">
              <icon-component type="outlined" icon-name="search" :size="22"></icon-component>
              Atualizar
            </b-button>
          </div>
          <form>
            <b-row>
              <b-col md="12" class="form-group">
                <label class="form-label" for="fname">Nome:</label>
                <input type="text" class="form-control" id="fname" v-model="schedule.name" />
              </b-col>
              <b-col md="4" class="form-group">
                <label class="form-label" for="lname">Status:</label>
                <br />
                <div class="d-grid gap-2">
                  <b-button v-if="schedule.status == 'S'" variant="danger" class="" @click="updateStatus('N')"> Inativar </b-button>
                  <b-button v-if="schedule.status == 'N'" variant="success" @click="updateStatus('S')"> Ativar </b-button>
                </div>
              </b-col>
              <b-col md="4" class="form-group">
                <label class="form-label" for="lname">Departamento:</label><br />
                Avtacha
              </b-col>
              <b-col md="4" class="form-group">
                <label class="form-label" for="dayLimit">Limite para se desescalar:</label>
                <input type="tel" class="form-control" id="dayLimit" v-model="schedule.dayLimit" />
              </b-col>
              <b-col md="12" class="form-group">
                <label class="form-label" for="lname">Perfis que podem visualizar:</label>
                <select-component :value="schedule.profiles" mode="tags" :options="roles" class="form-control" :close-on-select="false" @change="updateSchedulesProfiles"></select-component>
              </b-col>
            </b-row>
          </form>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { getSchedule, updateSchedule } from '@/api/schedules/schedules'

export default {
  props: {
    id: {
      required: true
    }
  },
  data() {
    return {
      schedule: {
        scheduleId: null,
        name: '',
        status: '',
        departmentId: 1,
        dayLimit: null,
        profiles: []
      },
      departments: [
        { value: 1, name: 'Avtacha' },
        { value: 2, name: 'Hadracha' },
        { value: 3, name: 'KM' },
        { value: 4, name: 'Moda' }
      ],
      roles: [
        { value: 1, name: 'Rosh TI' },
        { value: 2, name: 'Protetor' },
        { value: 3, name: 'Chefe' },
        { value: 4, name: 'Avtacha' },
        { value: 5, name: 'Rosh Avtacha' },
        { value: 6, name: 'Hadracha' },
        { value: 7, name: 'Rosh Hadracha' },
        { value: 8, name: 'KM' },
        { value: 9, name: 'Rosh KM' },
        { value: 10, name: 'KK' }
      ]
    }
  },
  methods: {
    getScheduleInfos() {
      getSchedule(this.schedule.scheduleId).then((response) => {
        this.schedule.name = response.name
        this.schedule.status = response.status
        this.schedule.departmentId = response.departmentId
        this.schedule.dayLimit = response.dayLimit
        this.schedule.profiles = response.profiles
      })
    },
    updateScheduleDepartmentId(newValue) {
      this.schedule.departmentId = newValue
    },
    updateSchedulesProfiles(newValue) {
      this.schedule.profiles = newValue
      console.log(this.schedule)
    },
    updateStatus(status) {
      this.schedule.status = status
    },
    handleUpdateSchedule() {
      const scheduleData = {
        name: this.schedule.name,
        status: this.schedule.status,
        departmentId: this.schedule.departmentId,
        profiles: this.schedule.profiles,
        dayLimit: this.schedule.dayLimit
      }
      updateSchedule(scheduleData, this.schedule.scheduleId).then((response) => {
        if (response) {
          this.$toast.success(`Usuário atualizado com sucesso!`)
        } else {
          this.$toast.error(`Aconteceu algum erro.`)
        }
      })
    }
  },
  created() {
    this.schedule.scheduleId = this.id
  },
  mounted() {
    this.getScheduleInfos()
  }
}
</script>
