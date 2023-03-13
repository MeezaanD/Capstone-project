import { createStore } from 'vuex'
import axios from 'axios'
const nightcrawler = "https://nightcrawler-capstone.onrender.com/"

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    asc: true,
    message: null
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, values) {
      state.products = values
    },
    setProduct(state, values) {
      state.users = values
    },
    setMessage(state, message) {
      state.message = message
    }
  },
  actions: {
    async getProducts(context) {
      const res = await axios 
      .get(`${nightcrawler}products`)
      let { results, err } = await res.data;
      if (results) {
        context.commit('setProducts', results)
      } else {
        context.commit('setMessage', err)
      } 
    }
  },
  modules: {
  }
})
