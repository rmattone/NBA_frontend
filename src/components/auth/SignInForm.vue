<template>
  <b-card>
    <h3 class="text-center">Fazer Login</h3>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label class="form-label" for="email-id">Usuário</label>
        <input type="text" class="form-control mb-0" id="email-id" v-model="loginForm.email" />
      </div>
      <div class="form-group">
        <label class="form-label" for="password">Senha</label>
        <input type="password" class="form-control mb-0" id="password" v-model="loginForm.password" />
      </div>
      <div class="d-flex justify-content-end align-items-center mb-3">
        <!-- <router-link :to="{ name: 'animated.auth.reset-password' }">Esqueci minha senha</router-link> -->
      </div>
      <div class="text-center pb-3">
        <button type="submit" class="btn btn-primary">Entrar</button>
      </div>
    </form>
  </b-card>
</template>

<script>
export default {
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        email: '',
        password: ''
      },
      loginRules: {
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  methods: {
    handleLogin() {
      this.$store
        .dispatch('user/login', this.loginForm)
        .then(() => {
          this.$router.push({ name: 'default.dashboard' })
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
