import { createStore, createLogger } from 'vuex'
import setting from './setting'
import user from './custom/user'
import permissions from './custom/permissions'
import nba from './custom/nba'

const debug = process.env.NODE_ENV !== 'production'
export default createStore({
  state: {
    lang: 'en',
    signInPopup: false,
    signUpPopup: false,
    shareOffcanvas: false,
  },
  getters: {
    lang: (state) => state.lang,
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
    permissions: permissions,
    nba: nba
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
