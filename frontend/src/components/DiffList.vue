<script>
import { defineComponent } from 'vue'
import DiffElem from '@/components/DiffElem.vue'

export default defineComponent({
  name: 'diff-list',

  components: { DiffElem },

  props: {
    caption: '',
    color: '',
    list: {}
  },

  computed: {
    colorClass() {
      return {
        green: this.color == 'green',
        red: this.color == 'red',
        blue: this.color == 'blue'
      }
    }
  },

  methods: {}
})
</script>

<template>
  <p class="lato large padvert" :class="colorClass">{{ caption }}</p>
  <div class="container">
    <div class="row">
      <div v-for="(qty, name, idx) in this.list" class="col">
        <diff-elem :name="name" :qty="qty"></diff-elem>
      </div>
    </div>
  </div>
</template>

<style scoped>
.padvert {
  padding: 1em 0;
}
</style>
