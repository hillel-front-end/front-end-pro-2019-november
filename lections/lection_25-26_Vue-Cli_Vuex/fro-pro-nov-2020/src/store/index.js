import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "Valera",
    data: [1,2,3,5,6],
    content: 'Conetent'
  },
  getters: {
    getName(state) {
      return state.name;
    },
    getFilterData(state) {
      return state.data.filter(item => item >= 2);
    }
  },
  mutations: {
    setName(state, value) {
      state.name = value;
    },
    setData(state, payload) {
      state.data = payload;
    }
  },
  actions: {
    asyncSetName({commit}, value) {
      setTimeout(() => {
        const response = [124, 2, 7, 14];
        commit('setData', response)

      }, 5000);
    }
  }
})
