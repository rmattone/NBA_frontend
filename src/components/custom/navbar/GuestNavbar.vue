<template>
    <nav :class="`nav navbar navbar-expand-xl navbar-light iq-navbar ${headerNavbar} ${navbarHide.join('')}`">
        <div class="container-fluid navbar-inner">
            <slot></slot>
            <div class=" d-none d-xl-block ms-auto">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'default.dashboard' }">
                            Página Inicial
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'default.dashboard' }">
                            Sobre Nós
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'default.dashboard' }">
                            Contato
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="d-flex align-items-center">
                <button id="navbar-toggle" class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon">
                        <span class="navbar-toggler-bar bar1 mt-1"></span>
                        <span class="navbar-toggler-bar bar2"></span>
                        <span class="navbar-toggler-bar bar3"></span>
                    </span>
                </button>
            </div>

            <div class="offcanvas offcanvas-end d-xl-none d-md-block" tabindex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <div class="navbar-brand ms-0">
                        <brand-logo :color="true"></brand-logo>
                        <h4 class="logo-title"><brand-name></brand-name></h4>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'default.dashboard' }">
                                Página Inicial
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'default.dashboard' }">
                                Sobre Nós
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'default.dashboard' }">
                                Contato
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
export default {
    components: {},
    setup(props, { emit }) {
        const store = useStore()
        const headerNavbar = computed(() => store.getters['setting/header_navbar'])
        const fontSize = computed(() => store.getters['setting/theme_font_size'])
        const fullScreen = ref(false)
        const isHidden = ref(false)

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
            emit
        }
    },
    props: {
        fullsidebar: { type: Boolean, default: false }
    }
}
</script>
  