<script>
import { defineComponent } from 'vue'
import DiffList from '@/components/DiffList.vue'

export default defineComponent({
  name: 'ordr-view',

  components: { DiffList },

  data() {
    return {
      added: {
        'Асфальтная крошка': 10,
        'Слойка без хрени': 10,
        'Что такое помела': 10,
        'Помела что такое': 10,
        'Помела свежая': 10,
      },
      removed: {
        'Печенье с селедкой': 15,
        'Слойка с хреном': 10,
        'Хлеб с дырками': 10,
        'Мемы про чай': 10,
        'Вафли со вкусом парацетамола': 10,
        'WD-40': 10,
        'Торт сметанный': 10,
        'Эчпочмак татарский': 10,
        'Пельмени жареные': 10,
        'Дизельное топливо': 10,
      },
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
          <div class="col-3 lato small gray padvert">
            Наименование
          </div>
          <div class="col-3 lato small gray padvert">
            Количество
          </div>
          <div class="col-3 lato small gray padvert">
            Стоимость
          </div>
          <div class="col-3 lato small gray padvert">
            Изменения
          </div>
          <div class="line"></div>
        </div>

        <div class="row">
          <div class="col-3 lato small black padvert">
            Хлеб Подольский
          </div>
          <div class="col-3 lato small black padvert">
            10 штук
          </div>
          <div class="col-3 lato small black padvert">
            350 р
          </div>
          <div class="col-3 lato small red padvert">
            10 шт
          </div>
          <div class="line"></div>
        </div>

        <div class="row">
          <div class="col-3 lato small black padvert">
            Хрустящий бетон
          </div>
          <div class="col-3 lato small black padvert">
            10 штук
          </div>
          <div class="col-3 lato small black padvert">
            1500 р
          </div>
          <div class="col-3 lato small black padvert">
            без изменений
          </div>
          <div class="line"></div>
        </div>

        <div class="row">
          <div class="col-3 lato small black padvert">
            Пирожок с ничем
          </div>
          <div class="col-3 lato small black padvert">
            100 штук
          </div>
          <div class="col-3 lato small black padvert">
            10000 р
          </div>
          <div class="col-3 lato small green padvert">
            10 шт
          </div>
          <div class="line"></div>
        </div>

        <div class="row">
          <div class="col-3 lato small black padvert">
            Чай поставьте
          </div>
          <div class="col-3 lato small black padvert">
            100 штук
          </div>
          <div class="col-3 lato small black padvert">
            10000 р
          </div>
          <div class="col-3 lato small red padvert">
            10 шт
          </div>
        </div>
      </div>
    </div>
  </div>

  <diff-list :caption="'Убрано из заказа'" :color="'red'" :list="this.removed"></diff-list>
  <diff-list :caption="'Добавлено в заказ'" :color="'green'" :list="this.added"></diff-list>

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
  border-bottom: 1px solid #C1A97E;
}

.bottom {
  padding: 4em;
}
</style>
