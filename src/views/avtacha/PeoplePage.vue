<template>
  <b-row>
    <b-col sm="12">
      <div class="card">
        <div class="card-header d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Lista de Pessoas</h4>
          </div>
          <b-button variant="primary" @click="listAllPeople">
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
                  <th :colspan="roles.length">
                    <strong>Papeis</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="person in people" :key="person.personId">
                  <td>
                    <strong>{{ person.name }}</strong>
                  </td>
                  <td v-for="role in roles" :key="role.value" class="">
                    <div class="d-flex justify-content-center">
                      <b-form-checkbox size="lg" :checked="isChecked(person, role.value)" @change="updateRole(person, role.value)">
                        {{ role.name }}
                      </b-form-checkbox>
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
import { fetchListPeople, updatePerson } from '@/api/people/people.js'
// import router from '@/router'
import { ref } from 'vue'

export default {
  data() {
    return {
      userModal: ref(false),
      users: [],
      people: [],
      user: {
        userId: null,
        email: '',
        roles: [],
        personId: null,
        newPassword: ''
      },
      listPeopleQuery: {
        page: 1,
        perPage: 10,
        lastPage: null,
        total: null
      },
      roles: [
        { value: 7, name: 'Sombra' },
        { value: 2, name: 'P' },
        { value: 1, name: 'Chefe' },
        { value: 5, name: 'Central' },
        { value: 6, name: 'Doutor' },
        { value: 4, name: 'Tio' },
        { value: 3, name: 'Auxiliar' }
      ]
    }
  },
  methods: {
    listAllPeople() {
      this.people = []
      fetchListPeople({
        page: this.listPeopleQuery.page,
        perPage: this.listPeopleQuery.perPage,
        bRoles: true
      }).then((response) => {
        const { data } = response
        this.listPeopleQuery.lastPage = response.last_page
        this.listPeopleQuery.total = response.total
        data.forEach((element) => {
          this.people.push({
            personId: element.personId,
            name: element.name,
            status: element.status,
            roles: element.roles
          })
        })
      })
    },
    changePage(page) {
      this.listPeopleQuery.page = page
      this.listAllPeople()
    },
    isChecked(person, role) {
      return person.roles.includes(role)
    },
    updateRole(person, role) {
      if (person.roles.includes(role)) {
        person.roles = person.roles.filter((r) => r !== role)
      } else {
        person.roles.push(role)
      }

      updatePerson({ roles: person.roles }, person.personId).then((response) => {
        if (response) {
          this.$toast.success(`Usuário atualizado com sucesso!`)
        } else {
          this.$toast.error(`Aconteceu algum erro.`)
        }
      })
    }
  },
  mounted() {
    this.listAllPeople()
  }
}
</script>
