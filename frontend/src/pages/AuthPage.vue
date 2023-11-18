<script>
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'auth-page',

  data() {
    return {
      isPasswdVis: false,
      loginValue: '',
      passwdValue: '',
      addresses: []
    }
  },

  mounted() {
    axios.get('api/addresses/').then(function (response) {
      this.addresses = response.data.addresses
    })
  }
})
</script>

<template>
  <div class="form-wrapper">
    <p class="padded inter large">Страница входа</p>
    <div class="field-row padded">
      <p class="inter large">Выберите адрес</p>
      <div class="field-wrapper">
        <select class="field inter medium">
          <option disabled selected>Выберите адрес</option>
          <option class="inter small" v-for="adrs in addresses">{{ adrs }}</option>
          <!-- <option class="inter small">Народный пр-к, 29 к3</option>
          <option class="inter small">Океанский пр-к, 29</option>
          <option class="inter small">Окатовая, 12а</option>
          <option class="inter small">Русская, 59/3</option>
          <option class="inter small">Луговая, 85в</option>
          <option class="inter small">Семеновская, 9</option>
          <option class="inter small">Терешковой, 29б</option>
          <option class="inter small">Пр-к 100-летия, 26</option>
          <option class="inter small">Нейбута, 88</option>
          <option class="inter small">Океанский, 13</option>
          <option class="inter small">Пр-к 100-летия, 68а</option>
          <option class="inter small">Сахалинская, 42</option>
          <option class="inter small">Пр-к 100-летия, 43</option>
          <option class="inter small">Кирова, 32 ст2</option>
          <option class="inter small">Русская, 40а</option>
          <option class="inter small">Крыгина, 15а</option> -->
        </select>
      </div>
    </div>
    <div class="field-row padded">
      <p class="inter large">Введите пароль</p>
      <div class="field-wrapper">
        <input
          v-if="isPasswdVis"
          type="text"
          spellcheck="false"
          class="field inter medium"
          v-model="passwdValue"
        />
        <input
          v-else
          type="password"
          spellcheck="false"
          class="field inter medium"
          v-model="passwdValue"
        />
        <div class="vis-wrapper">
          <input type="checkbox" @click="this.isPasswdVis = !this.isPasswdVis" />
          <p class="padded inter medium">Показать пароль</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 990px) {
  .form-wrapper {
    text-align: center;
    margin: auto;
    padding-top: 3em;
    width: 60vw;
  }

  .padded {
    padding: 5px;
  }

  .field-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .field-wrapper {
    width: 70%;
  }

  .field {
    width: 100%;
    padding: 3px 7px;
    box-sizing: border-box;
    border: 2px solid #000000;
    border-radius: 21px;
  }

  .vis-wrapper {
    position: absolute;
    padding: 3px 7px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
</style>
