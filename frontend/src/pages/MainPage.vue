<script>
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router'


export default defineComponent({
  name: 'main-page',

  data() {
    return {
    }
  },
})
</script>

<template>
  <div class="sidebar">
    <img src="" alt="">
    <img src="" alt="">
    <p class="lato black small">Товары</p>
    <img src="" alt="">
    <p class="lato black small">Отчеты</p>
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
  border-bottom: 2px solid #C1A97E;
}
</style>