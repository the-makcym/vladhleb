<script>
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import LineChart from '@/charts/LineChart.vue'
import StatsBar from '../components/StatsBar.vue'

export default defineComponent({
  name: 'home-view',

  components: { LineChart, StatsBar }
})
</script>

<template>
  <div class="vis-row">
    <div class="chart-wrapper">
      <p class="lato black small">Общий объем заказов</p>
      <div class="sum">
        <p class="lato black large">925 000 Р</p>
      </div>
      <line-chart></line-chart>
    </div>

    <stats-bar
      :first_caption="'Общее количество товаров'"
      :first_value="'12380'"
      :second_caption="'Сумма закупок'"
      :second_value="'64 350 р'"
    ></stats-bar>
  </div>

  <div class="button-row">
    <router-link to="ordr">
      <p class="button navy-bg lato medium white">Создать новый заказ</p>
    </router-link>
    <router-link to="ordr">
      <p class="button prev lato medium">Просмотр предыдущего заказа</p>
    </router-link>
  </div>
</template>

<style scoped>
.vis-row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.chart-wrapper {
  margin: 2em 0;
  padding: 2em;
  width: 70%;
  background-color: #f5edde;
  box-sizing: border-box;
  border-radius: 21px;
}

.sum {
  padding-bottom: 1em;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}

.button-row {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-bottom: 3em;
}

.button {
  border-radius: 3em;
  padding: 0.5em 1.3em;
  margin-right: 0.8em;
}

.prev {
  background-color: white;
  border: 2px solid #c1a97e;
}
</style>
