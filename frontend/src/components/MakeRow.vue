<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'make-row',

  props: {
    name: '',
    qty: 0,
    price: 0
  }
})
</script>

<template>
  <div class="row padvert">
    <div class="col-5 lato small black">{{ name }}</div>
    <div class="col-2 lato small black flex-row">{{ qty }} шт</div>
    <div class="col-2 lato small black">{{ qty * price }} р</div>
    <div class="col-2">
      <img src="../assets/inc.png" class="ico" @click="$emit('inc')" />
      <img src="../assets/red.png" class="ico" @click="$emit('red')" />
    </div>
    <div class="line"></div>
  </div>
</template>

<style scoped>
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}

.padvert {
  padding: 0.5em 0;
}

.line {
  width: 100%;
  border-bottom: 1px solid #c1a97e;
}

.ico {
  margin: 0 0.4em;
}
</style>
