<script>
import { defineComponent } from 'vue'
import DiffList from '@/components/DiffList.vue'

export default defineComponent({
  name: 'order-page',

  components: { DiffList },

  data() {
    return {
      added: {
        'асфальтная крошка': 10
      },
      removed: {
        'печенье с селедкой': 15
      },
      diffs: {
        'слойка с хреном': 10,
        'слойка с хрено': 10,
        'слойка с хрен': 10,
        'слойка с хре': 10,
        'слойка с хр': 10,
        'слойка с х': 10,
        'слойка без хреном': 10,
        'слойка без хрено': 10,
        'слойка без хрен': 10,
        'слойка без хре': 10,
        'слойка без хр': 10,
        'слойка без х': 10
      }
    }
  }
})
</script>

<template>
  <div class="wrapper">
    <div class="padded">
      <h1 class="roboto extralarge">Лакомка</h1>
      <h2 class="roboto medium">Проспект 100-летия Владивостока, 43</h2>
    </div>

    <div class="line"></div>

    <div class="padded container text-center">
      <div class="row justify-content-start">
        <div class="roboto small gray col-3">Номер заказа</div>
        <div class="roboto small gray col-3">Дата / Время</div>
        <div class="roboto small gray col-3">Тип дня</div>
      </div>
    </div>

    <hr />

    <diff-list :caption="'Добавлено в заказ'" :color="'green'" :list="this.added"></diff-list>
    <diff-list :caption="'Убрано из заказа'" :color="'red'" :list="this.removed"></diff-list>
    <diff-list :caption="'Изменено'" :color="'blue'" :list="this.diffs"></diff-list>
  </div>
</template>

<style scoped>
.wrapper {
  margin: auto;
  padding-top: 3em;
  width: 80vw;
}

.padded {
  margin: 0.8em;
}

.line {
  width: 100%;
  border-bottom: 2px solid black;
}
</style>
