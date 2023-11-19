<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'diff-elem',

  props: {
    name: '',
    qty: 0
  }
})
</script>

<template>
  <div class="wrapper">
      <h2 class="lato small black name">{{ name }}</h2>
      <p class="lato small gray qty">{{ qty }} шт</p>
  </div>
</template>

<style scoped>
.name {
  white-space: nowrap;
  text-align: left;
}

.wrapper {
  padding: 1em;
  margin: 1em 0;
  display: inline-block;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: #f5edde;
}
</style>
