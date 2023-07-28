import { createStore, createLogger } from 'vuex'
import setting from './setting'
import user from './custom/user'
import permissions from './custom/permissions'

const debug = process.env.NODE_ENV !== 'production'
export default createStore({
  state: {
    lang: 'en',
    signInPopup: false,
    signUpPopup: false,
    shareOffcanvas: false,
    dropdowns: {
      carts: [
        {
          image: require('@/assets/images/shapes/01.png'),
          product_name: 'Biker’s Jacket',
          price: '$56.00'
        },
        {
          image: require('@/assets/images/shapes/02.png'),
          product_name: 'Casual Shoes',
          price: '$56.00'
        },
        {
          image: require('@/assets/images/shapes/03.png'),
          product_name: 'Knitted Shrug',
          price: '$56.00'
        },
        {
          image: require('@/assets/images/shapes/04.png'),
          product_name: 'Blue Handbag',
          price: '$56.00'
        },
        {
          image: require('@/assets/images/shapes/01.png'),
          product_name: 'Biker’s Jacket',
          price: '$56.00'
        },
        {
          image: require('@/assets/images/shapes/02.png'),
          product_name: 'Casual Shoes',
          price: '$56.00'
        },
        {
          image: require('@/assets/images/shapes/03.png'),
          product_name: 'Knitted Shrug',
          price: '$56.00'
        },
        {
          image: require('@/assets/images/shapes/04.png'),
          product_name: 'Blue Handbag',
          price: '$56.00'
        }
      ],
      days: [],
      DEFAULT: []
    }
  },
  getters: {
    lang: (state) => state.lang,
    carts: (state) => state.dropdowns.carts,
    signInPopup: (state) => state.signInPopup,
    signUpPopup: (state) => state.signUpPopup,
    shareOffcanvas: (state) => state.shareOffcanvas,
    roles: (state) => state.user.roles,
    token: (state) => state.user.token,
    permission_routes: (state) => state.permissions.routes
  },
  mutations: {
    langChangeCommit(state, payload) {
      state.lang = payload
    },
    openModalCommit(state, payload) {
      state[payload.name] = payload.value
    },
    openBottomCanvasCommit(state, payload) {
      state[payload.name] = payload.value
    }
  },
  actions: {
    openModalAction({ commit }, payload) {
      commit('openModalCommit', payload)
    },
    openBottomCanvasAction({ commit }, payload) {
      commit('openBottomCanvasCommit', payload)
    },
    langChangeAction(context, payload) {
      context.commit('langChangeCommit', payload)
    }
  },
  modules: {
    setting: setting,
    user: user,
    permissions: permissions
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
