<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white py-16">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios Especializados</h1>
          <p class="text-2xl text-orange-50 font-bold">
            Cables subterráneos de Baja, Media y Alta tensión
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-white">
      <div class="container-custom max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Servicios integrales de Diagnóstico Eléctrico y Localización de Fallas</h2>
          <div class="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos un servicio integral de diagnóstico y localización de fallas para garantizar la fiabilidad y continuidad operativa de su red eléctrica. Con nuestra tecnología avanzada y metodología especializada, protegemos su inversión en cables subterráneos de baja, media y alta tensión.
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-8">
          <div
            v-for="service in services"
            :key="service.title"
            class="group bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-primary-500 hover:-translate-y-2 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md"
          >
            <div class="bg-gradient-to-br from-primary-500 to-primary-700 text-white text-4xl w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <i :class="service.icon"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-900">{{ service.title }}</h3>
            <ul class="space-y-2 text-gray-600 mb-6">
              <li v-for="item in service.items" :key="item" class="flex items-start">
                <i class="pi pi-check text-primary-600 text-sm mr-2 mt-1 flex-shrink-0"></i>
                <span class="text-sm leading-relaxed">{{ item }}</span>
              </li>
            </ul>
            <div v-if="service.showDetail !== false" class="mt-auto pt-4 border-t border-orange-200">
              <router-link :to="service.link" class="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                Ver descripción detallada
                <i class="pi pi-arrow-right ml-2 text-sm"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sectors Section -->
    <section class="py-20 bg-white">
      <div class="container-custom max-w-6xl">
        <div class="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Sectores de Aplicación</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              v-for="sector in sectors"
              :key="sector.title"
              class="flex items-center text-gray-700"
            >
              <i :class="sector.icon" class="text-primary-600 text-2xl mr-3"></i>
              <span>{{ sector.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { usePageMeta } from '../composables/usePageMeta'

usePageMeta({
  title: 'Servicios de Diagnóstico Eléctrico y Localización de Fallas | Voltia',
  description: 'Diagnóstico eléctrico OFF-LINE y ON-LINE, localización de fallas en cables de baja, media y alta tensión. Ensayos VLF, Tangente Delta, TDR, descargas parciales. Traza de cables subterráneos. Servicio profesional en Argentina.',
  keywords: 'servicios diagnóstico eléctrico, localización fallas cables, ensayos VLF, tangente delta, TDR reflectometría, descargas parciales, resistencia aislación, traza cables subterráneos, mantenimiento predictivo cables',
  canonical: 'https://voltiaelectricaldiagnostic.com/#/servicios'
})

const services = [
  {
    title: 'Diagnóstico Eléctrico y Mantenimiento Predictivo (OFF-LINE)',
    icon: 'pi pi-chart-line',
    items: ['Resistencia de Aislación', 'Reflectometría Convencional (TDR)', 'Tensión Aplicada (VLF)', 'Tangente Delta y Capacidad', 'Integridad de Cubierta Exterior'],
    link: '/servicios/diagnostico'
  },
  {
    title: 'Medición de Descargas Parciales (ON-LINE)',
    icon: 'pi pi-bolt',
    items: ['Método Inductivo'],
    link: '/servicios/descargas-parciales'
  },
  {
    title: 'Localización de Fallas en el Aislamiento del cable',
    icon: 'pi pi-map-marker',
    items: ['Resistencia de Aislación', 'Reflectometría Convencional (TDR)', 'Tensión Aplicada', 'Método de Reflexión de Arco (ARM)', 'Método de Corriente de Impulso (ICE)', 'Método de Decaimiento (DECAY)', 'Impulsos de Alta Energía (THUMPER)', 'Detección Acústica y Electromagnética'],
    link: '/servicios/localizacion-fallas'
  },
  {
    title: 'Localización de Fallas en Cubierta Exterior',
    icon: 'pi pi-shield',
    items: ['Tensión Aplicada', 'Medición (Método de Murray)', 'Método del Voltaje de Paso o Gradiente de Voltaje'],
    link: '/servicios/fallas-cubierta'
  },
  {
    title: 'Localización de Ruta y Traza de Cables Subterráneos',
    icon: 'pi pi-sitemap',
    items: ['Conexión Directa', 'Pinza Inductiva', 'Bobina Inductiva de Superficie', 'Detección Pasiva 50 Hz'],
    link: '/servicios/traza-ruta'
  }
]

const sectors = [
  {
    title: 'Generación',
    icon: 'pi pi-bolt'
  },
  {
    title: 'Transmisión',
    icon: 'pi pi-send'
  },
  {
    title: 'Distribución',
    icon: 'pi pi-share-alt'
  },
  {
    title: 'Parques Solares',
    icon: 'pi pi-sun'
  },
  {
    title: 'Parques Eólicos',
    icon: 'pi pi-compass'
  },
  {
    title: 'Plantas Industriales',
    icon: 'pi pi-building'
  },
  {
    title: 'Plantas Petroleras',
    icon: 'pi pi-filter'
  },
  {
    title: 'Barrios Cerrados',
    icon: 'pi pi-home'
  }
]

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
