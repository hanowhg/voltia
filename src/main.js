import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import './assets/main.scss'
import App from './App.vue'

const app = createApp(App)

app.use(PrimeVue, {
  ripple: true
})

app.mount('#app')
