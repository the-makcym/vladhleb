<script>
import { defineComponent } from 'vue'
import DiffElem from '@/components/DiffElem.vue'

export default defineComponent({
  name: 'added-diff-list',

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
        red: this.color == 'red'
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
        <div v-if="qty[0] > qty[2]">
          <diff-elem :name="name" :qty="qty[0] - qty[2]"></diff-elem>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.padvert {
  padding: 1em 0;
}
</style>
