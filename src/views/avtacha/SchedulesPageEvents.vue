<template>
  <b-row>
    <b-col sm="12">
      <div class="card px-3">
        <div class="card-header d-flex justify-content-end">
          <b-button variant="soft-primary" @click="addEventsModal = true">
            <icon-component type="dual-tone" icon-name="table" :size="22"></icon-component>
            Adicionar eventos
          </b-button>
        </div>
        <div class="card-body px-0">
          <b-row>
            <b-col sm="3">
              <VCalendar trim-weeks :first-day-of-week="0" expanded :attributes="events" @dayclick="handleDayClick" title-position="left" :step="1"> </VCalendar>
            </b-col>
            <b-col sm="9">
              <b-row>
                <b-alert variant="warning rounded-0" show v-if="eventsDate.length == 0" class="text-center">
                  <span> Nenhum evento para o dia {{ getDateFormat(selectedDate) }} </span>
                </b-alert>
                <event-card-edit v-for="e in eventsDate" :key="e.eventId" :event-value="e" :institutions-value="institutions" :event-category-value="eventCategory" :roles-value="roles" :people-value="people" :callback-list-events="listAllEvents" :callback-list-date-events="getEventForDate"></event-card-edit>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-col>
  </b-row>
  <b-modal v-model="addEventsModal" title="Usuário" size="lg" centered @ok="handleCreateEvents">
    <form>
      <b-row>
        <b-col md="12" class="form-group">
          <label class="form-label" for="fname">Instituições:</label>
          <select-component :value="newEvents.institutions" mode="tags" :options="institutions" class="form-control" :close-on-select="false" @change="updateInstitutions"></select-component>
        </b-col>
        <b-col md="12" class="form-group">
          <label class="form-label" for="lname">Datas:</label>
          <flat-picker
            :config="{
              dateFormat: 'd/m/Y',
              mode: 'multiple'
            }"
            id="multidate-input"
            className="form-control"
            @on-change="updateSelectedDates"
            :v-model="newEvents.dates"
            mode="multiple"
            placeholder="Select Date">
          </flat-picker>
        </b-col>
        <b-col md="12" class="form-group">
          <label class="form-label" for="lname">Número de vagas pra cada evento:</label>
          <small>1 = 1 chefe e 1 p</small>
          <input class="form-control" type="number" :v-model="newEvents.nSlots" />
        </b-col>
        <b-col md="12" class="form-group">
          <label class="form-label" for="lname">Tipo de evento:</label>
          <select-component :value="newEvents.eventCategory" :options="eventCategory" @change="updateEventCategory" class="form-control"></select-component>
        </b-col>
      </b-row>
    </form>
  </b-modal>
</template>

<script>
import { listScheduleEvents } from '@/api/schedules/schedules'
import { fetchListInstitutions } from '@/api/institutions/institutions'
import { fetchListEventCategories } from '@/api/eventCategory/eventCategory'
import { fetchListEvents } from '@/api/calendar/calendar'
import { fetchListRoles } from '@/api/roles/roles'
import { fetchListPeople } from '@/api/people/people.js'
import { createEvents } from '@/api/events/events.js'
import EventCardEdit from '@/components/ofekCustom/EventCardEdit.vue'
import FlatPicker from 'vue-flatpickr-component'
import { ref } from 'vue'

export default {
  components: { EventCardEdit, FlatPicker },
  props: {
    id: {
      required: true
    }
  },
  data() {
    return {
      addEventsModal: ref(false),
      scheduleId: null,
      events: ref([]),
      selectedDate: ref(new Date()),
      eventsDate: ref([]),
      institutions: ref([]),
      eventCategory: ref([]),
      roles: ref([]),
      people: ref([]),
      newEvents: ref({
        institutions: [],
        dates: [],
        eventCategory: 1,
        nSlots: 2,
        scheduleId: null
      })
    }
  },
  methods: {
    listAllEvents() {
      this.events = []
      listScheduleEvents({
        scheduleId: this.scheduleId
      }).then((response) => {
        response.forEach((element) => {
          const date = new Date(element.date)
          date.setDate(date.getDate() + 1)
          var color = ''
          switch (element.eventCategoryId) {
            case 1:
            case 2:
              color = 'red'
              break

            case 3:
              color = 'green'
              break

            case 8:
            case 9:
            case 10:
              color = 'blue'
              break

            case 11:
              color = 'yellow'
              break

            default:
              break
          }
          const eventData = {
            key: element.eventId,
            bar: color,
            dates: date
          }
          this.events.push(eventData)
        })
      })
    },
    handleDayClick(date) {
      this.selectedDate.value = date
      this.getEventForDate(date.id)
    },
    getEventForDate(date) {
      this.eventsDate = []
      fetchListEvents({
        date: date,
        bWithDetails: 1
      }).then((response) => {
        response.forEach((element) => {
          this.eventsDate.push({
            eventId: element.eventId,
            eventCategoryId: element.eventCategoryId,
            classId: element.classId,
            date: element.date,
            startHour: element.startHour,
            endHour: element.endHour,
            institutionId: element.institutionId,
            note: element.note,
            slots: element.slots
          })
        })
      })
    },
    getDateFormat(date) {
      return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
    },
    listInstitutions() {
      fetchListInstitutions().then((response) => {
        response.forEach((element) => {
          this.institutions.push({
            value: element.institutionId,
            name: element.name
          })
        })
      })
    },
    listRoles() {
      fetchListRoles().then((response) => {
        response.forEach((element) => {
          this.roles.push({
            value: element.roleId,
            name: element.name
          })
        })
      })
    },
    listEventCategories() {
      fetchListEventCategories().then((response) => {
        response.forEach((element) => {
          this.eventCategory.push({
            value: element.eventCategoryId,
            name: element.name
          })
        })
      })
    },
    listAllPeople() {
      fetchListPeople().then((response) => {
        response.forEach((element) => {
          this.people.push({
            value: element.personId,
            name: element.name
          })
        })
      })
    },
    updateSelectedDates(dates) {
      var formatedDates = []
      dates.forEach((element) => {
        formatedDates.push(element.getFullYear() + '-' + (element.getMonth() + 1) + '-' + element.getDate())
      })
      this.newEvents.dates = formatedDates
    },
    updateInstitutions(newValue) {
      this.newEvents.institutions = newValue
    },
    updateEventCategory(newValue) {
      this.newEvents.eventCategory = newValue
    },
    handleCreateEvents() {
      this.newEvents.scheduleId = this.scheduleId
      createEvents(this.newEvents).then((response) => {
        if (response) {
          this.$toast.success(`Evento atualizado com sucesso!`)
          this.newEvents = {
            institutions: [],
            dates: [],
            eventCategory: 1,
            scheduleId: null
          }
          this.listAllEvents()
        } else {
          this.$toast.error(`Aconteceu algum erro.`)
        }
      })
    }
  },
  created() {
    this.scheduleId = this.id
  },
  mounted() {
    this.listAllEvents()
    this.listInstitutions()
    this.listEventCategories()
    this.listRoles()
    this.listAllPeople()
  }
}
</script>
