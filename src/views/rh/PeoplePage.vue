<template>
  <b-row>
    <b-col sm="12">
      <div class="card">
        <div class="card-header d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Lista de Pessoas</h4>
          </div>
          <b-button variant="primary" @click="createUser">
            <i class="user-add">
              <icon-component type="dual-tone" icon-name="user-add" :size="24"></icon-component>
            </i>
            Adicionar
          </b-button>
        </div>
        <div class="card-body px-0">
          <div class="table-responsive text-center">
            <table id="user-list-table" class="table table-striped" role="grid">
              <thead>
                <tr class="ligth">
                  <th>Nome</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="person in people" :key="person.personId">
                  <td>
                    {{ person.name }}
                  </td>
                  <td>
                    <span v-if="person.status == 'S'" class="badge bg-soft-success p-2 text-success">Ativo</span>
                    <span v-else class="badge bg-soft-danger p-2 text-danger">Inativo</span>
                  </td>
                  <td>
                    <div class="d-flex justify-content-evenly">
                      <b-button variant="primary " @click="updateUser(person.personId)" class="disabled">
                        <i class="pencil">
                          <icon-component type="dual-tone" icon-name="pencil" :size="24"></icon-component>
                        </i>
                      </b-button>

                      <b-button v-if="person.status == 'S'" variant="danger" class="disabled" @click="updateStatus('N', person.id)"> Inativar </b-button>
                      <b-button v-if="person.status == 'N'" variant="success" class="disabled" @click="updateStatus('S', person.id)"> Ativar </b-button>
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
  <b-modal v-model="userModal" title="Usuário" size="lg" centered @ok="handleUserUpdate">
    <form>
      <b-row>
        <b-col md="12" class="form-group">
          <label class="form-label" for="fname">Usuário:</label>
          <input type="text" class="form-control" id="fname" v-model="user.email" />
        </b-col>
        <b-col md="12" class="form-group">
          <label class="form-label" for="lname">Pessoa:</label>
          <select-component :value="user.personId" :options="people" class="form-control" @change="updateUserPersonId"></select-component>
        </b-col>
        <b-col md="12" class="form-group">
          <label class="form-label" for="lname">Roles:</label>
          <!-- <select-component :value="user.roles" mode="tags" :options="roles" class="form-control"
                        :close-on-select="false" @change="updateUserRoles"></select-component> -->
        </b-col>
      </b-row>
    </form>
  </b-modal>
</template>

<script>
import { getUser, updateUser, createUser } from '@/api/user.js'
import { fetchListPeople } from '@/api/people/people.js'
import router from '@/router'
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
      }
    }
  },
  methods: {
    listAllPeople() {
      this.people = []
      fetchListPeople({
        page: this.listPeopleQuery.page,
        perPage: this.listPeopleQuery.perPage
      }).then((response) => {
        const { data } = response
        this.listPeopleQuery.lastPage = response.last_page
        this.listPeopleQuery.total = response.total
        data.forEach((element) => {
          this.people.push({
            personId: element.personId,
            name: element.name,
            status: element.status
          })
        })
        console.log(this.listPeopleQuery)
      })
    },
    updateUser(userId) {
      this.setUser(userId)
      this.userModal = true
    },
    setUser(userId = null) {
      this.user.userId = null
      this.user.email = ''
      this.user.personId = ''
      this.user.newPassword = ''
      if (userId != null) {
        getUser({ userId: userId }).then((response) => {
          console.log(response)
          this.user.userId = response.userId
          this.user.email = response.email
          this.user.personId = response.personId
        })
      }
    },
    createUser() {
      this.setUser()
      this.userModal = true
    },
    updateStatus(status, userId) {
      updateUser({ status: status }, userId).then((response) => {
        console.log(response)
        if (response) {
          this.users.filter(function (user) {
            return user.id == userId
          })[0].status = status
          const statusDescription = status == 'S' ? 'ativado' : 'desativado'
          this.$toast.success(`Usuário ${statusDescription} com sucesso!`)
        } else {
          this.$toast.error(`Aconteceu algum erro.`)
        }
      })
    },
    updateUserPersonId(newValue) {
      this.user.personId = newValue
    },
    handleUserUpdate() {
      const userData = {
        email: this.user.email,
        personId: this.user.personId
      }
      if (this.user.userId == null) {
        userData.status = 'S'
        createUser(userData).then((response) => {
          if (response) {
            this.listAllPeople()
            this.$toast.success(`Usuário criado com sucesso!`)
          } else {
            this.$toast.error(`Aconteceu algum erro.`)
          }
        })
      } else {
        updateUser(userData, this.user.userId).then((response) => {
          if (response) {
            this.listAllPeople()
            this.$toast.success(`Usuário atualizado com sucesso!`)
          } else {
            this.$toast.error(`Aconteceu algum erro.`)
          }
        })
      }
    },
    changePage(page) {
      this.listPeopleQuery.page = page
      this.listAllPeople()
    }
  },
  mounted() {
    this.listAllPeople()
    console.log(router.options)
  }
}
</script>
