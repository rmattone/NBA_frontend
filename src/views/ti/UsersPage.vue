<template>
  <b-row>
    <b-col sm="12">
      <div class="card">
        <div class="card-header d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Lista de Usuários</h4>
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
                  <th>Usuário</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>
                    {{ user.email }}
                  </td>
                  <td>
                    <span v-if="user.status == 'S'" class="badge bg-soft-success p-2 text-success">Ativo</span>
                    <span v-else class="badge bg-soft-danger p-2 text-danger">Inativo</span>
                  </td>
                  <td>
                    <div class="d-flex justify-content-evenly">
                      <b-button variant="info" @click="resetPassword(user.id)">
                        <i class="key-square">
                          <icon-component type="dual-tone" icon-name="key-square" :size="24"></icon-component>
                        </i>
                      </b-button>
                      <b-button variant="primary " @click="updateUser(user.id)">
                        <i class="pencil">
                          <icon-component type="dual-tone" icon-name="pencil" :size="24"></icon-component>
                        </i>
                      </b-button>

                      <b-button v-if="user.status == 'S'" variant="danger" @click="updateStatus('N', user.id)"> Inativar </b-button>
                      <b-button v-if="user.status == 'N'" variant="success" @click="updateStatus('S', user.id)"> Ativar </b-button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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
          <select-component :value="user.roles" mode="tags" :options="roles" class="form-control" :close-on-select="false" @change="updateUserRoles"></select-component>
        </b-col>
      </b-row>
    </form>
  </b-modal>
  <b-modal v-model="userResetPasswordModal" title="Redefinir Senha" size="lg" centered @ok="handleResetPassword">
    <form>
      <b-row>
        <b-col md="12" class="form-group">
          <label class="form-label" for="fname">Usuário:</label>
          {{ user.email }}
        </b-col>
        <b-col md="12" class="form-group">
          <label class="form-label" for="lname">Senha:</label>
          <input type="password" class="form-control" id="nesPassword" v-model="user.newPassword" />
        </b-col>
      </b-row>
    </form>
  </b-modal>
</template>

<script>
import { listUsers, getUser, updateUser, createUser } from '@/api/user.js'
import { fetchListPeople } from '@/api/people/people.js'
import router from '@/router'
import { ref } from 'vue'

export default {
  data() {
    return {
      userModal: ref(false),
      userResetPasswordModal: ref(false),
      users: [],
      people: [],
      user: {
        userId: null,
        email: '',
        roles: [],
        personId: null,
        newPassword: ''
      },
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
    listAllUsers() {
      listUsers().then((response) => {
        console.log(response)
        this.users = []
        response.forEach((element) => {
          this.users.push({
            id: element.id,
            email: element.email,
            status: element.status
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
    updateUser(userId) {
      this.setUser(userId)
      this.userModal = true
    },
    resetPassword(userId) {
      this.setUser(userId)
      this.userResetPasswordModal = true
    },
    setUser(userId = null) {
      this.user.userId = null
      this.user.email = ''
      this.user.personId = ''
      this.user.roles = []
      this.user.newPassword = ''
      if (userId != null) {
        getUser({ userId: userId }).then((response) => {
          console.log(response)
          this.user.userId = response.userId
          this.user.email = response.email
          this.user.personId = response.personId
          this.user.roles = response.profiles
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
    updateUserRoles(newValue) {
      this.user.roles = newValue
    },
    handleUserUpdate() {
      const userData = {
        email: this.user.email,
        personId: this.user.personId,
        profiles: this.user.roles
      }
      if (this.user.userId == null) {
        userData.status = 'S'
        createUser(userData).then((response) => {
          if (response) {
            this.listAllUsers()
            this.$toast.success(`Usuário criado com sucesso!`)
          } else {
            this.$toast.error(`Aconteceu algum erro.`)
          }
        })
      } else {
        updateUser(userData, this.user.userId).then((response) => {
          if (response) {
            this.listAllUsers()
            this.$toast.success(`Usuário atualizado com sucesso!`)
          } else {
            this.$toast.error(`Aconteceu algum erro.`)
          }
        })
      }
    },
    handleResetPassword() {
      const userData = {
        password: this.user.newPassword
      }
      if (this.user.userId == null) {
        this.$toast.error(`Usuário não definido.`)
      } else {
        updateUser(userData, this.user.userId).then((response) => {
          if (response) {
            this.listAllUsers()
            this.$toast.success(`Senha resetada com sucesso!`)
          } else {
            this.$toast.error(`Aconteceu algum erro.`)
          }
        })
      }
    }
  },
  mounted() {
    this.listAllUsers()
    this.listAllPeople()
    console.log(router.options)
  }
}
</script>
