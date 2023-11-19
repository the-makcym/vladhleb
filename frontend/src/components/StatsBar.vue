<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'stats-bar',

  props: {
    first_caption: '',
    first_value: '',
    second_caption: '',
    second_value: '',
  },
})
</script>

<template>
  <div class="wrapper">
    <p class="yeseva xxl pale">{{ first_value }}</p>
    <p class="lato small black">{{ first_caption }}</p>
    <p class="yeseva xxl blue">{{ second_value }}</p>
    <p class="lato small black">{{ second_caption }}</p>
  </div>
</template>

<style scoped>
.wrapper {
  text-align: left;
}
</style>