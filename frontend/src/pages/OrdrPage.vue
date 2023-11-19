<script>
import DiffList from '@/components/DiffList.vue'

export default {
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
}
</script>

<template>
  <div class="status">
    <p class="lato small gray">Дата:</p>
    <p class="lato small black">Сегодня, 19 ноября 2023</p>
  </div>

  <diff-list :caption="'Добавлено в заказ'" :color="'green'" :list="this.added"></diff-list>
  <diff-list :caption="'Убрано из заказа'" :color="'red'" :list="this.removed"></diff-list>
</template>

<style scoped>
.status {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}
</style>
