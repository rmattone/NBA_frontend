<template>
  <nav :class="`nav navbar navbar-expand-xl navbar-light iq-navbar ${headerNavbar} ${navbarHide.join('')}`">
    <div class="container-fluid navbar-inner">
      <slot></slot>
      <div class="d-flex align-items-center">
        <button id="navbar-toggle" class="navbar-toggler" type="button" v-b-toggle.navbarSupportedContent aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="border: 0;">
          <span class="navbar-toggler-icon">
            <span class="navbar-toggler-bar bar1 mt-1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </span>
        </button>
      </div>
      <b-collapse class="navbar-collapse" id="navbarSupportedContent" @show="emit('menuOpen')" @hide="emit('menuClose')">
        <ul class="mb-2 navbar-nav ms-auto align-items-center navbar-list mb-xl-0">
          <slot name="navbar-buttons-start"></slot>
          <li class="nav-item iq-full-screen d-none d-xl-block" id="fullscreen-item">
            <a href="#" class="nav-link ps-3" id="btnFullscreen">
              <b-button variant="primary btn-icon" pill size="sm" @click="openFullScreen">
                <span class="btn-inner">
                  <svg :class="fullScreen ? 'normal-screen d-none' : 'normal-screen'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5528 5.99656L13.8595 10.8961" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M14.8016 5.97618L18.5524 5.99629L18.5176 9.96906" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M5.8574 18.896L10.5507 13.9964" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M9.60852 18.9164L5.85775 18.8963L5.89258 14.9235" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <svg :class="fullScreen ? 'full-normal-screen' : 'full-normal-screen d-none'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7542 10.1932L18.1867 5.79319" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M17.2976 10.212L13.7547 10.1934L13.7871 6.62518" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M10.4224 13.5726L5.82149 18.1398" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M6.74391 13.5535L10.4209 13.5723L10.3867 17.2755" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </span>
              </b-button>
            </a>
          </li>
          <li class="nav-item dropdown" id="itemdropdown1">
            <a class="py-0 nav-link d-flex align-items-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <b-button variant="primary btn-icon" pill size="sm">
                <span class="btn-inner">
                  <icon-component type="dual-tone" icon-name="user" :size="24"></icon-component>
                </span>
              </b-button>
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item">{{ username }}</a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><a class="dropdown-item" href="#" @click="logout">Logout</a></li>
            </ul>
          </li>
          <slot name="navbar-buttons-end"></slot>
        </ul>
      </b-collapse>
    </div>
  </nav>
</template>
<script>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
export default {
  components: {},
  methods: {
    async logout() {
      this.$store
        .dispatch('user/logout')
        .then(() => {
          this.$router.push({ name: 'simple.auth.login' })

          this.loading = false
        })
        .catch((e) => {
          console.log('erro: ' + e)
          this.loading = false
        })
    }
  },
  setup(props, { emit }) {
    const store = useStore()
    const headerNavbar = computed(() => store.getters['setting/header_navbar'])
    const fontSize = computed(() => store.getters['setting/theme_font_size'])
    const fullScreen = ref(false)
    const isHidden = ref(false)
    const username = store.state.user.name

    const openFullScreen = () => {
      if (fullScreen.value) {
        fullScreen.value = false
        document.exitFullscreen()
      } else {
        fullScreen.value = true
        document.documentElement.requestFullscreen()
      }
    }

    const onscroll = () => {
      const yOffset = document.documentElement.scrollTop
      const navbar = document.querySelector('.navs-sticky')
      if (navbar !== null) {
        if (yOffset >= 100) {
          navbar.classList.add('menu-sticky')
        } else {
          navbar.classList.remove('menu-sticky')
        }
      }
    }

    const navbarHide = computed(() => store.getters['setting/navbar_show'])

    const carts = computed(() => store.getters.carts)

    onMounted(() => {
      window.addEventListener('scroll', onscroll())
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', onscroll())
    })
    return {
      headerNavbar,
      openFullScreen,
      fontSize,
      fullScreen,
      isHidden,
      carts,
      navbarHide,
      username,
      emit
    }
  },
  props: {
    fullsidebar: { type: Boolean, default: false }
  }
}
</script>
