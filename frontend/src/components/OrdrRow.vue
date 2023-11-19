<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ordr-row',

  props: {
    name: '',
    qty: 0,
    price: 0,
    prev: 0
  }
})
</script>

<template>
  <div class="row">
    <div class="col-5 lato small black padvert">{{ name }}</div>
    <div class="col-2 lato small black padvert">{{ qty }} шт</div>
    <div class="col-2 lato small black padvert">{{ price }} р</div>
    <div class="col-2 lato small padvert" :class="{ green: qty >= prev, red: qty < prev }">
      {{ qty - prev }} шт
    </div>
    <div class="line"></div>
  </div>
</template>

<style scoped>
.padvert {
  padding: 0.5em 0;
}

.line {
  width: 100%;
  border-bottom: 1px solid #c1a97e;
}
</style>
