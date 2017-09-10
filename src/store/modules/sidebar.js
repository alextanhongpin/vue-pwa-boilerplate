export default {
  namespaced: true,
  state: {
    isOpen: false
  },
  getters: {
    isOpen (state) {
      return state.isOpen
    }
  },
  mutations: {
    toggle (state) {
      state.isOpen = !state.isOpen

      // Disable scroll
      document.body.style.overflow = state.isOpen ? 'hidden' : 'auto'
    }
  },
  actions: {
    toggle ({commit}) {
      commit('toggle')
    }
  }
}
