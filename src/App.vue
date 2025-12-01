<script setup>
import { ref, onMounted } from 'vue'
import MainLayout from './layouts/MainLayout.vue'
import HomeView from './views/HomeView.vue'
import ServiciosView from './views/ServiciosView.vue'
import ContactoView from './views/ContactoView.vue'
import DiagnosticoView from './views/DiagnosticoView.vue'
import DescargasParcialesView from './views/DescargasParcialesView.vue'
import LocalizacionFallasView from './views/LocalizacionFallasView.vue'
import FallasCubiertaView from './views/FallasCubiertaView.vue'
import TrazaRutaView from './views/TrazaRutaView.vue'

const currentView = ref('home')

const updateView = () => {
  const hash = window.location.hash
  if (hash === '#/servicios') {
    currentView.value = 'servicios'
  } else if (hash === '#/contacto') {
    currentView.value = 'contacto'
  } else if (hash === '#/servicios/diagnostico') {
    currentView.value = 'diagnostico'
  } else if (hash === '#/servicios/descargas-parciales') {
    currentView.value = 'descargas-parciales'
  } else if (hash === '#/servicios/localizacion-fallas') {
    currentView.value = 'localizacion-fallas'
  } else if (hash === '#/servicios/fallas-cubierta') {
    currentView.value = 'fallas-cubierta'
  } else if (hash === '#/servicios/traza-ruta') {
    currentView.value = 'traza-ruta'
  } else {
    currentView.value = 'home'
  }
}

onMounted(() => {
  updateView()
  window.addEventListener('hashchange', updateView)
})
</script>

<template>
  <MainLayout v-if="currentView === 'home'">
    <HomeView />
  </MainLayout>
  <MainLayout v-else-if="currentView === 'servicios'">
    <ServiciosView />
  </MainLayout>
  <MainLayout v-else-if="currentView === 'contacto'">
    <ContactoView />
  </MainLayout>
  <div v-else-if="currentView === 'diagnostico'">
    <DiagnosticoView />
  </div>
  <div v-else-if="currentView === 'descargas-parciales'">
    <DescargasParcialesView />
  </div>
  <div v-else-if="currentView === 'localizacion-fallas'">
    <LocalizacionFallasView />
  </div>
  <div v-else-if="currentView === 'fallas-cubierta'">
    <FallasCubiertaView />
  </div>
  <div v-else-if="currentView === 'traza-ruta'">
    <TrazaRutaView />
  </div>
</template>
