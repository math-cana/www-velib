import connectAPI from '@/services/connectAPI'
import { createStore } from 'vuex'

export default createStore({
  state: {
    controler: new connectAPI(),
    donneVelib: {},
    maStation:{},
    donnee:{}
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
