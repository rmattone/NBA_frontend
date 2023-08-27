<template>
  <section class="login-content">
    <b-row class="m-0 align-items-center bg-white h-100">
      <b-col md="6">
        <b-row class="justify-content-center">
          <b-col md="10">
            <b-card class="card-transparent shadow-none d-flex justify-content-center mb-0 auth-card iq-auth-form">
              <router-link :to="{ name: 'default.dashboard' }" class="navbar-brand d-flex align-items-center mb-3">
                <brand-logo></brand-logo>
                <h4 class="logo-title ms-3 mb-0" data-setting="app_name"><brand-name></brand-name></h4>
              </router-link>
              <h2 class="mb-2 text-center">Fazer Login</h2>
              <form @submit.prevent="handleLogin">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label for="email" class="form-label">Usuário</label>
                      <input type="text" class="form-control" id="email" aria-describedby="email" placeholder=" " v-model="loginForm.email"/>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label for="password" class="form-label">Senha</label>
                      <input type="password" class="form-control" id="password" aria-describedby="password" placeholder=" " v-model="loginForm.password"/>
                    </div>
                  </div>
                  <div class="col-lg-12 d-flex justify-content-end">
                    <!-- <router-link :to="{ name: 'auth.reset-password' }">Forgot Password?</router-link> -->
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <button type="submit" class="btn btn-primary">Sign In</button>
                </div>
                <!-- <p class="mt-3 text-center">Don’t have an account? <router-link :to="{ name: 'auth.register' }">Click here to sign up.</router-link></p> -->
              </form>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
      <div class="col-md-6 d-md-block d-none bg-primary p-0 vh-100 overflow-hidden">
        <img src="@/assets/images/auth/centro.jpg" class="img-fluid gradient-main animated-scaleX" alt="images" loading="lazy" />
      </div>
    </b-row>
  </section>
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
        email: 'admin@admin.com',
        password: '2DH<bZdn'
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
          console.log('login success');
          this.$router.push('/admin')
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
