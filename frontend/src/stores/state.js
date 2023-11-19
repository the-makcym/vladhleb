import { defineStore } from 'pinia'
import axios from 'axios'

export const useStateStore = defineStore('state', {
  state: () => ({
    addresses: [],
    history: [100000, 90000, 125000, 100000, 150000, 190000, 170000]
  }),

  getters: {
    adrs: (state) => {
      if (state.addresses.length == 0) {
        axios.get('api/addresses/').then(function (response) {
          state.addresses = response.data.addresses
        })
      }
      return state.addresses
    }
  },

  actions: {
    aboba() {}
  }
})
