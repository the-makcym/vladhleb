<script>
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'main-page',

  data() {
    return {}
  }
})
</script>

<template>
  <div class="sidebar">
    <img src="../assets/logo.png" class="logo" />
  </div>

  <div class="wrapper">
    <div class="padded">
      <h1 class="yeseva navy extralarge">Магазин</h1>
      <h2 class="lato black medium">Лакомка, Проспект 100-летия Владивостока, 43</h2>
    </div>

    <div class="line"></div>

    <RouterView />
  </div>
</template>

<style scoped>
.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  width: 8%;
  padding: 0 0.5vw;
  text-align: center;
}

.logo {
  width: 100%;
  user-select: none;
}

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
  border-bottom: 2px solid #c1a97e;
}
</style>
