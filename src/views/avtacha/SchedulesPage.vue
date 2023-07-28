<template>
  <b-row>
    <b-col sm="12">
      <div class="card">
        <div class="card-header d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Lista de Pessoas</h4>
          </div>
          <b-button variant="primary" @click="listAllSchedules">
            <i class="user-add">
              <icon-component type="dual-tone" icon-name="search" :size="24"></icon-component>
            </i>
            Atualizar
          </b-button>
        </div>
        <div class="card-body px-0">
          <div class="table-responsive text-center">
            <table id="" class="table table-striped table-hover table-bordered table-sm">
              <thead>
                <tr class="ligth">
                  <th>
                    <strong>Nome</strong>
                  </th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="schedule in schedules" :key="schedule.id">
                  <td>
                    <strong>{{ schedule.name }}</strong>
                  </td>
                  <td>
                    <span v-if="schedule.status == 'S'" class="badge bg-soft-success p-2 text-success">Ativo</span>
                    <span v-else class="badge bg-soft-danger p-2 text-danger">Inativo</span>
                  </td>
                  <td>
                    <div class="d-flex justify-content-evenly">
                      <router-link :to="{ name: 'avtacha.schedule.edit', params: { id: schedule.id } }">
                        <button class="btn btn-primary align-self-center">
                          <icon-component type="dual-tone" icon-name="pencil" :size="24"></icon-component>
                        </button>
                      </router-link>

                      <b-button v-if="schedule.status == 'S'" variant="danger" @click="updateStatus('N', schedule)"> Inativar </b-button>
                      <b-button v-if="schedule.status == 'N'" variant="success" @click="updateStatus('S', schedule)"> Ativar </b-button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="btn-toolbar justify-content-end px-3">
              <nav aria-label="Standard pagination example">
                <ul class="pagination">
                  <li class="page-item" :class="{ disabled: this.listPeopleQuery.page === 1 }">
                    <a class="page-link" href="#" aria-label="Previous" @click="changePage(1)" :disabled="this.listPeopleQuery.page === 1">
                      <span aria-hidden="true">«</span>
                    </a>
                  </li>

                  <li class="page-item" v-if="listPeopleQuery.page !== 1">
                    <a class="page-link" href="#" aria-label="Previous" @click="changePage(this.listPeopleQuery.page - 1)">
                      {{ this.listPeopleQuery.page - 1 }}
                    </a>
                  </li>

                  <li class="page-item active" aria-current="page">
                    <a class="page-link" href="#">
                      {{ this.listPeopleQuery.page }}
                    </a>
                  </li>

                  <li class="page-item" v-if="listPeopleQuery.page !== this.listPeopleQuery.lastPage">
                    <a class="page-link" href="#" aria-label="Next" @click="changePage(this.listPeopleQuery.page + 1)">
                      {{ this.listPeopleQuery.page + 1 }}
                    </a>
                  </li>

                  <li class="page-item" :class="{ disabled: this.listPeopleQuery.page === this.listPeopleQuery.lastPage }">
                    <a class="page-link" href="#" aria-label="Next" @click="changePage(this.listPeopleQuery.lastPage)" :disabled="this.listPeopleQuery.page === this.listPeopleQuery.lastPage">
                      <span aria-hidden="true">»</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { fetchListSchedules, updateSchedule } from '@/api/schedules/schedules.js'
// import { ref } from 'vue'

export default {
  data() {
    return {
      schedules: [],
      listPeopleQuery: {
        page: 1,
        perPage: 10,
        lastPage: null,
        total: null
      }
    }
  },
  methods: {
    listAllSchedules() {
      fetchListSchedules().then((response) => {
        this.listPeopleQuery.lastPage = response.last_page
        this.listPeopleQuery.total = response.total
        this.schedules = []
        response.data.forEach((element) => {
          this.schedules.push({
            id: element.scheduleId,
            name: element.name,
            status: element.status
          })
        })
      })
    },
    changePage(page) {
      this.listPeopleQuery.page = page
    },
    updateStatus(status, schedule) {
      updateSchedule({ status: status }, schedule.id).then((response) => {
        if (response) {
          schedule.status = status
          this.$toast.success(`Usuário atualizado com sucesso!`)
        } else {
          this.$toast.error(`Aconteceu algum erro.`)
        }
      })
    }
  },
  mounted() {
    this.listAllSchedules()
  }
}
</script>
