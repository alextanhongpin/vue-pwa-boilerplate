export default {
  namespaced: true,
  state: {
    email: '',
    password: '',
    IS_ENTER_KEY: 13
  },
  getters: {
    email (state) {
      return state.email
    },
    password (state) {
      return state.password
    }
  },
  mutations: {
    setEmail (state, value) {
      state.email = value
    },
    setPassword (state, value) {
      state.password = value
    },
    clearForm (state) {
      state.email = ''
      state.password = ''
    }
  },
  actions: {
    onChangeEmail ({ commit }, evt) {
      const email = evt.currentTarget.value
      commit('setEmail', email)
    },
    onChangePassword ({ commit }, evt) {
      const password = evt.currentTarget.value
      commit('setPassword', password)
    },
    onEnter ({ dispatch, state }, evt) {
      if (evt.keyCode === state.IS_ENTER_KEY) {
        dispatch('onSubmitLogin')
      }
    },
    onSubmitLogin ({ commit, state }, evt) {
      const isValidEmail = state.email === ''
      const isValidPassword = state.password === ''

      if (!(isValidEmail && isValidPassword)) {
        window.alert('The email or password you entered is incorrect')
        return
      }
      commit('clearForm')
      // Set authorized
      commit('setAuthorized', null, { root: true })
      // Set the route to home
      commit('setRoute', '/', { root: true })
    }
  }
}
