import Vuex from 'vuex'
import Vue from 'vue'

// Model-specific modules
import sidebar from './modules/sidebar'
import login from './modules/login'
import page from './modules/page'

import router from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    sidebar,
    login,
    page
  },
  state: {
    isAuthorized: false
  },
  mutations: {
    setRoute (state, value) {
      router.push(value)
    },
    replaceRoute (state, value) {
      router.replace(value)
    },
    setAuthorized (state) {
      state.isAuthorized = true
    },
    logout (state) {
      state.isAuthorized = false
    }
  },
  getters: {
    isAuthorized (state) {
      return state.isAuthorized
    }
  },
  actions: {
    logout ({ commit }) {
      window.alert('logging out')
      commit('logout')
      commit('setRoute', '/login')
      commit('sidebar/toggle')
    }
  }
})

const whitelistedUrls = ['/login', '/listings']
const defaultRoute = '/listings'

// Manage the route to check if the user is authorized or not
router.beforeEach((to, from, next) => {
  // Fake slow timeout
  // window.setTimeout(() => {}, 5000)
  const isFromIndex = from.path === '/'
  const isToIndex = to.path === '/'
  const isUserAuthorized = store.state.isAuthorized

  if (isUserAuthorized && (to.path === '/login' || to.path === '/register')) {
    return next(from.path)
  }

  if (!isUserAuthorized) {
    if (isFromIndex && isToIndex) {
      return next(defaultRoute)
    }
    if (whitelistedUrls.includes(to.path)) {
      return next()
    } else {
      return next(false)
    }
  }
  next()
})

export default store
