<script>
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useStateStore } from '@/stores/state'
import AddedDiffList from '@/components/AddedDiffList.vue'
import RemovedDiffList from '@/components/RemovedDiffList.vue'
import StatsBar from '../components/StatsBar.vue'
import OrdrRow from '../components/OrdrRow.vue'

export default defineComponent({
  name: 'ordr-view',

  components: { AddedDiffList, RemovedDiffList, StatsBar, OrdrRow },

  computed: {
    ...mapStores(useStateStore),

    total() {
      var res = 0;
      for (const [name, qty] of Object.entries(this.stateStore.prod)) {
        res += qty[0];
      }
      return res;
    },
    
    price() {
      var res = 0;
      for (const [name, qty] of Object.entries(this.stateStore.prod)) {
        res += qty[0] * qty[1];
      }
      return res;
    }
  }
})
</script>

<template>
  <div class="flex-row">
    <p class="padright lato small gray">Дата:</p>
    <p class="padright lato small black">Сегодня, 19 ноября 2023</p>
    <router-link to="ordr" class="flex-row padright">
      <div class="square">
        <div class="left-triangle"></div>
      </div>
      <p class="padleft lato small black">смотреть прошлые заказы</p>
    </router-link>
    <p class="padright lato small gray">|</p>
    <router-link to="/" class="flex-row padright">
      <p class="padright lato small black">вернуться</p>
      <div class="square">
        <div class="right-triangle"></div>
      </div>
    </router-link>
  </div>

  <div class="button-row">
    <router-link to="make">
      <p class="button make lato medium black">Изменить таблицу</p>
    </router-link>
    <router-link to="ordr">
      <p class="button pale-bg lato medium white">Оформить заказ</p>
    </router-link>
  </div>

  <div class="flex-row">
    <div class="order">
      <div class="container">
        <div class="row">
          <div class="col-5 lato small gray padvert">Наименование</div>
          <div class="col-2 lato small gray padvert">Количество</div>
          <div class="col-2 lato small gray padvert">Стоимость</div>
          <div class="col-2 lato small gray padvert">Изменения</div>
          <div class="line"></div>
        </div>

        <div v-for="(qty, name, idx) in this.stateStore.prod">
          <ordr-row :name="name" :qty="qty[0]" :price="qty[1]" :prev="qty[2]"></ordr-row>
        </div>
      </div>
    </div>

    <stats-bar
      :first_caption="'Общее количество товаров'"
      :first_value="this.stateStore.total"
      :second_caption="'Сумма закупок'"
      :second_value="this.stateStore.price + ' р'"
    ></stats-bar>
  </div>

  <removed-diff-list
    :caption="'Убрано из заказа'"
    :color="'red'"
    :list="this.stateStore.prod"
  ></removed-diff-list>
  <added-diff-list
    :caption="'Добавлено в заказ'"
    :color="'green'"
    :list="this.stateStore.prod"
  ></added-diff-list>

  <div class="bottom"></div>
</template>

<style scoped>
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}

.padleft {
  padding-left: 0.5em;
}

.padright {
  padding-right: 0.5em;
}

.padvert {
  padding: 0.5em 0;
}

.square {
  width: 1em;
  height: 1em;
  background-color: #c1a97e;
}

.left-triangle {
  margin-top: 0.1em;
  margin-right: 1em;
  border: 0.4em solid transparent;
  border-right: 0.4em solid black;
}

.right-triangle {
  margin-top: 0.1em;
  margin-left: 0.3em;
  border: 0.4em solid transparent;
  border-left: 0.4em solid black;
}

.button-row {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin: 2em 0;
}

.button {
  border-radius: 3em;
  padding: 0.5em 1.3em;
  margin-right: 0.8em;
}

.make {
  background-color: white;
  border: 2px solid #c1a97e;
}

.order {
  margin-right: 2em;
  padding: 1em 2em;
  width: 70%;
  background-color: #f5edde;
  box-sizing: border-box;
  border-radius: 21px;
}

.line {
  width: 100%;
  border-bottom: 1px solid #c1a97e;
}

.bottom {
  padding: 4em;
}
</style>
