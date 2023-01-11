import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedElement: null,
    actions: [],
  },
  getters: {
  },
  mutations: {
    setSelectedElement(state, element) {
      state.selectedElement = element;
    },
    setActions(state, actions) {
      state.actions = actions;
    },
  },
  actions: {
  },
  modules: {
  }
})
