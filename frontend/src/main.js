import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/main.css'

import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'
// import UI from '@/components/UI'

const app = createApp(App)

app.use(router)

// UI.forEach((ui) => {
//   app.component(ui.name, ui)
// })

app.mount('#app')
import 'bootstrap/dist/js/bootstrap.js'
