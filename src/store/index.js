import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    result: [],
  },
  getters: {
    getResult(state){
      return state.result;
    }
  },
  mutations: {
    setResult(state, answer){
      state.result.push(answer);
    },
    again(state){
      state.result = [];
    }
  },
  actions: {
    again({ commit }){
      commit('again');
    }
  },
  modules: {
  }
})
