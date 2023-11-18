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
  <h2 class="roboto small name">{{ name }}</h2>
  <p class="roboto small qty">{{ qty }}</p>
</template>

<style scoped>
.name {
  white-space: nowrap;
}
</style>
