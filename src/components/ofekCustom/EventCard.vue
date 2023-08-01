<template>
  <b-col sm="5">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">{{ event.institutionName }} - {{ event.categoryName }}</h4>
      </div>
      <hr class="mb-0" />
      <div class="card-body">
        <li class="d-flex mb-4 align-items-center">
          <b-row>
            <p class="mb-0">Data</p>
            <h5>{{ event.date.split('-').reverse().join('/') }}</h5>
          </b-row>
          <b-row>
            <p class="ofek-flex-end mb-0">Horário</p>
            <h5 class="ofek-flex-end">{{ event.startHour }} até {{ event.endHour }}</h5>
          </b-row>
        </li>
        <table id="user-list-table" class="table table-striped table-sm" role="grid">
          <thead>
            <tr class="ligth ofek-text-align-center">
              <th>Função</th>
              <th>Nome</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="role in event.slots" :key="role.id" class="ofek-text-align-center">
              <td>{{ role.roleName }}</td>
              <td>{{ role.personName }}</td>
              <td>
                <b-button variant="soft-success" v-if="role.arrActions.join" @click="openModalJoin(role.eventHasPerson)" class="p-1">
                  <icon-component type="dual-tone" icon-name="entry" :size="22"></icon-component>
                </b-button>
                <b-button variant="soft-danger" v-if="role.arrActions.exit && role.isUser" @click="openModalExit(role.eventHasPerson)" class="p-1">
                  <icon-component type="dual-tone" icon-name="exit" :size="22"></icon-component>
                </b-button>
              </td>
            </tr>
          </tbody>
        </table>
        <li class="d-flex align-items-center" v-if="event.description">
          <h4 class="card-title">Observações</h4>
        </li>
      </div>
    </div>
    <b-modal v-model="modalJoin" title="Atenção!" size="lg" centered @ok="requestJoinEvent">
      <strong> Ao confirmar você será escalado para o evento. </strong>
    </b-modal>
    <b-modal v-model="modalExit" title="Atenção!" size="lg" centered @ok="requestExitEvent">
      <strong> Ao confirmar você sairá do evento.</strong>
    </b-modal>
  </b-col>
</template>

<script>
import { joinEvent, exitEvent } from '@/api/calendar/calendar'
import { useToast } from 'vue-toastification'
import { ref } from 'vue'

export default {
  name: 'event-card',
  props: {
    event: {
      type: Object
    },
    arrFn: {
      type: Array
    }
  },
  setup(props) {
    const toastComponent = useToast()
    const modalJoin = ref(false)
    const modalExit = ref(false)
    const selectedId = ref(null)

    function requestJoinEvent() {
      joinEvent(selectedId.value).then((response) => {
        if (response) {
          toastComponent.success(`Você foi escalado com sucesso!`)
          props.arrFn.forEach((fn) => fn())
        } else {
          toastComponent.error(`Aconteceu algum erro. Tente novamente mais tarde.`)
        }
      })
    }

    function requestExitEvent() {
      exitEvent(selectedId.value).then((response) => {
        if (response) {
          toastComponent.success(`Você saiu deste evento com sucesso!`)
          props.arrFn.forEach((fn) => fn())
        } else {
          toastComponent.error(`Aconteceu algum erro. Tente novamente mais tarde`)
        }
      })
    }

    function openModalJoin(id) {
      selectedId.value = id
      modalJoin.value = true
    }

    function openModalExit(id) {
      selectedId.value = id
      modalExit.value = true
    }

    return {
      modalJoin,
      modalExit,
      openModalJoin,
      openModalExit,
      requestJoinEvent,
      requestExitEvent
    }
  }
}
</script>

<style lang="scss" scoped>
.ofek-flex-end {
  justify-content: flex-end;
  display: flex;
}

.ofek-text-align-center {
  text-align: center;
}

.ofek-btn {
  padding: 4px;
}
</style>
