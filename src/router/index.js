import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiciosView from '../views/ServiciosView.vue'
import ContactoView from '../views/ContactoView.vue'
import DiagnosticoView from '../views/DiagnosticoView.vue'
import DescargasParcialesView from '../views/DescargasParcialesView.vue'
import LocalizacionFallasView from '../views/LocalizacionFallasView.vue'
import FallasCubiertaView from '../views/FallasCubiertaView.vue'
import TrazaRutaView from '../views/TrazaRutaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: ServiciosView
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactoView
    },
    {
      path: '/servicios/diagnostico',
      name: 'diagnostico',
      component: DiagnosticoView
    },
    {
      path: '/servicios/descargas-parciales',
      name: 'descargas-parciales',
      component: DescargasParcialesView
    },
    {
      path: '/servicios/localizacion-fallas',
      name: 'localizacion-fallas',
      component: LocalizacionFallasView
    },
    {
      path: '/servicios/fallas-cubierta',
      name: 'fallas-cubierta',
      component: FallasCubiertaView
    },
    {
      path: '/servicios/traza-ruta',
      name: 'traza-ruta',
      component: TrazaRutaView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
