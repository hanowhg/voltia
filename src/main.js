import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import router from './router'
import './assets/main.scss'
import App from './App.vue'

const app = createApp(App)

app.use(PrimeVue, {
  ripple: true
})
app.use(router)

app.mount('#app')
