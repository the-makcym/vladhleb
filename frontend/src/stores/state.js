import { defineStore } from 'pinia'

export const useStateStore = defineStore('state', {
  state: () => ({
    list: {
      'Хлеб Подольский': [10, 50, 0],
      'Батон Нарезной': [10, 50, 0],
      'Мой Зерновой Хлеб': [10, 50, 0],
      'Хлеб Совитал фруктовый': [10, 50, 0],
      'Хлеб Зерновой': [10, 50, 0],
      'Хлеб Ржаное чудо': [10, 50, 0],
      'Ролл пшеничный': [10, 50, 10],
      'Ролл пшеничный сырный': [10, 50, 30],
      'Булочка для гамбургера': [10, 50, 0],
      'Булочка для хотдога': [10, 50, 20],
      'Кекс Ромовый с шоколадом': [10, 50, 10],
      'Плюшка Московская': [10, 50, 0],
      'Слойка Приморская с брусникой': [10, 50, 10],
      'Пирог Купеческий': [10, 50, 0],
      'Пирог Венский с персиком': [10, 50, 40],
    }
  }),

  getters: {
    prod: (state) => state.list,

    total: (state) => {
      var res = 0;
      for (const [name, qty] of Object.entries(state.list)) {
        res += qty[0];
      }
      return res;
    },

    price: (state) => {
      var res = 0;
      for (const [name, qty] of Object.entries(state.list)) {
        res += qty[0] * qty[1];
      }
      return res;
    },
  },

  actions: {
    inc(name) {
      this.list[name][0]++;
    },
    red(name) {
      this.list[name][0]--;
    }
  }
})
