<template>
  <b-col sm="6">
    <div class="card">
      <div class="card-body">
        <form>
          <b-row>
            <b-col md="12" class="form-group">
              <label class="form-label" for="lname">Data:</label>
              <flat-picker v-model="eventData.date" className="form-control"></flat-picker>
            </b-col>
            <b-col md="12" class="form-group">
              <label class="form-label" for="fname">Instituição:</label>
              <select-component :value="eventData.institutionId" :options="institutions" class="form-control" @change="updateInstitutionId"></select-component>
            </b-col>
            <b-col md="6" class="form-group">
              <label class="form-label" for="fname">Horário Inicio:</label>
              <input type="text" class="form-control" v-model="eventData.startHour" v-mask="timeMask" />
            </b-col>
            <b-col md="6" class="form-group">
              <label class="form-label" for="fname">Horário Fim:</label>
              <input type="text" class="form-control" v-model="eventData.endHour" v-mask="timeMask" />
            </b-col>
            <b-col md="12" class="form-group">
              <label class="form-label" for="fname">Tipo:</label>
              <select-component :value="eventData.eventCategoryId" :options="eventCategory" class="form-control" @change="updateEventCategoryId"></select-component>
            </b-col>
            <b-col md="12" class="form-group">
              <label class="form-label" for="fname">Observação:</label>
              <input type="text" class="form-control" v-model="eventData.note" />
            </b-col>
            <b-col md="12" class="form-group">
              <div class="d-flex justify-content-end mb-1">
                <label class="form-label me-auto">Pessoas:</label>
                <b-button variant="soft-primary" @click="handleAddSlot(eventData.slots)">
                  <icon-component type="dual-tone" icon-name="user-add" :size="22"></icon-component>
                </b-button>
              </div>
              <div class="card mb-2" v-for="slot in eventData.slots" :key="slot.eventHasPerson">
                <div class="card-body p-1">
                  <b-row>
                    <b-col sm="5">
                      <select-component :value="slot.roleId" :options="roles" class="form-control" @change="updateRoleId($event, slot)"></select-component>
                    </b-col>
                    <b-col sm="5">
                      <select-component :value="slot.personId" :options="people" class="form-control" @change="updatePersonId($event, slot)"></select-component>
                    </b-col>
                    <b-col sm="2">
                      <div class="d-grid gap-2 h-100">
                        <b-button variant="soft-danger" @click="deleteSlot(slot)" vertical-align="center">
                          <icon-component type="dual-tone" icon-name="trash" :size="16"></icon-component>
                        </b-button>
                      </div>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </b-col>
          </b-row>
          <div class="d-flex justify-content-center">
            <b-button variant="success" @click="handleUpdateEvent">
              <icon-component type="dual-tone" icon-name="save" :size="22"></icon-component>
              Salvar
            </b-button>
          </div>
        </form>
      </div>
    </div>
  </b-col>
</template>

<script>
import FlatPicker from 'vue-flatpickr-component'
import { ref } from 'vue'
import { updateEvent } from '@/api/events/events'

export default {
  components: {
    FlatPicker
  },
  props: {
    eventValue: {
      required: true,
      type: Object
    },
    institutionsValue: {
      required: true,
      type: Array
    },
    eventCategoryValue: {
      required: true,
      type: Array
    },
    rolesValue: {
      required: true,
      type: Array
    },
    peopleValue: {
      required: true,
      type: Array
    },
    callbackListEvents: { required: true },
    callbackListDateEvents: { required: true }
  },
  data() {
    return {
      eventData: ref({}),
      institutions: ref([]),
      eventCategory: ref([]),
      roles: ref([]),
      people: ref([]),
      timeMask: '00:00'
    }
  },
  methods: {
    updateInstitutionId(newValue) {
      this.eventData.institutionId = newValue
    },
    updateEventCategoryId(newValue) {
      this.eventData.eventCategoryId = newValue
    },
    handleUpdateEvent() {
      const eventInfo = {
        date: this.eventData.date,
        startHour: this.eventData.startHour,
        endHour: this.eventData.endHour,
        eventCategoryId: this.eventData.eventCategoryId,
        institutionId: this.eventData.institutionId,
        note: this.eventData.note,
        slots: this.eventData.slots,
        classId: this.eventData.classId
      }
      updateEvent(eventInfo, this.eventData.eventId).then((response) => {
        if (response) {
          this.$toast.success(`Evento atualizado com sucesso!`)
          this.$props.callbackListEvents()
          this.$props.callbackListDateEvents()
        } else {
          this.$toast.error(`Aconteceu algum erro.`)
        }
      })
    },
    handleAddSlot(slots) {
      slots.push({
        personId: null,
        roleId: null
      })
    },
    updatePersonId(personId, slot) {
      slot.personId = personId
    },
    updateRoleId(roleId, slot) {
      slot.roleId = roleId
    },
    deleteSlot(slotToDelete) {
      const index = this.eventData.slots.findIndex((slot) => slot === slotToDelete)
      if (index !== -1) {
        this.eventData.slots.splice(index, 1)
      }
    }
  },
  mounted() {
    this.eventData = this.eventValue
    this.institutions = this.institutionsValue
    this.eventCategory = this.eventCategoryValue
    this.roles = this.rolesValue
    this.people = this.peopleValue
  }
}
</script>
