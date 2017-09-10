export default {
  namespaced: true,
  state: {
    isLoading: false
  },
  getters: {
    isLoading (state) {
      return state.isLoading
    }
  },
  mutations: {
    pageDidLoad (state) {
      state.isLoading = false
    },
    pageOnLoad (state) {
      state.isLoading = true
    }
  },
  actions: {
    pageDidLoad ({ commit }) {
      commit('pageDidLoad')
    },
    pageOnLoad ({ commit }) {
      commit('pageOnLoad')
    }
  }
}
