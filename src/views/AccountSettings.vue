<template>
<!--   <b-row>
    <b-col sm="12">
      <div class="card">
        <div class="card-body px-3">
          <div class="mt-2">
            <h6 class="mb-1">Usuário:</h6>
            <p>
              {{ this.user.email }}
            </p>
          </div>
          <div class="mt-2">
            <h6 class="mb-1">Nome:</h6>
            <p>
              {{ this.people.filter((person) => person.value === this.user.personId).map((person) => person.name)[0] }}
            </p>
          </div>
          <div class="mt-2">
            <h6 class="mb-1">Perfis:</h6>
            <p>
              <span v-for="roleId in this.user.roles" class="badge bg-soft-primary p-2" :key="roleId">
                {{ this.roles.filter((role) => role.value === roleId).map((role) => role.name)[0] }}
              </span>
            </p>
          </div>
          <div class="mt-2">
            <b-button variant="primary" @click="resetPassword">
              <i class="key-square">
                <icon-component type="dual-tone" icon-name="key-square" :size="24"></icon-component>
              </i>
              Alterar Senha
            </b-button>
          </div>
        </div>
      </div>
    </b-col>
  </b-row>
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
  </b-modal> -->
  <div></div>
</template>

<script>
/* import { getUser, updateUser, getInfo } from '@/api/user.js'
import { fetchListPeople } from '@/api/people/people.js'
import { ref } from 'vue'
import store from '@/store'

export default {
  data() {
    return {
      userResetPasswordModal: ref(false),
      user: {
        userId: null,
        email: '',
        roles: [],
        personId: null,
        newPassword: ''
      },
      people: [],
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
    setUserId() {
      const token = store.getters.token
      getInfo(token).then((response) => {
        this.user.userId = response.id
        this.setUser(this.user.userId)
      })
    },
    resetPassword() {
      this.userResetPasswordModal = true
    },
    setUser(userId = null) {
      getUser({ userId: userId }).then((response) => {
        console.log(response)
        this.user.userId = response.userId
        this.user.email = response.email
        this.user.personId = response.personId
        this.user.personName = this.people.filter((person) => person.value == response.personId)

        this.user.roles = response.profiles
      })
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
    }
  },
  mounted() {
    this.listAllPeople()
    this.setUserId()
  }
} */
</script>
