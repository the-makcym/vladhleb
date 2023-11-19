<script>
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useStateStore } from '@/stores/state'
import StatsBar from '../components/StatsBar.vue'
import MakeRow from '../components/MakeRow.vue'

export default defineComponent({
  name: 'make-view',

  components: { StatsBar, MakeRow },

  computed: {
    ...mapStores(useStateStore),
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
    <router-link to="ordr">
      <p class="button pale-bg lato medium black">Подтвердить</p>
    </router-link>
  </div>

  <div class="flex-row">
    <div class="order">
      <div class="container">
        <div class="row padvert">
          <div class="col-5 lato small gray">Наименование</div>
          <div class="col-2 lato small gray">Количество</div>
          <div class="col-2 lato small gray">Стоимость</div>
          <div class="col-2"></div>
          <div class="line"></div>
        </div>

        <div v-for="(qty, name, idx) in this.stateStore.prod">
          <make-row :name="name" :qty="qty[0]" :price="qty[1]" @inc="this.stateStore.inc(name)"
            @red="this.stateStore.red(name)"></make-row>
        </div>
      </div>
    </div>

    <stats-bar :first_caption="'Общее количество товаров'" :first_value="this.stateStore.total"
      :second_caption="'Сумма закупок'" :second_value="this.stateStore.price + ' р'"></stats-bar>
  </div>
</template>

<style scoped>
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

/*  */

.flex-row {
  /* margin-top: 3em; */
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
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

.button {
  border-radius: 3em;
  padding: 0.5em 1.3em;
  margin-right: 0.8em;
  background-color: white;
  border: 2px solid #c1a97e;
}
</style>
