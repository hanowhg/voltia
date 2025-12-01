<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white py-16">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Nuestra Empresa</h1>
          <p class="text-xl text-orange-50">
            Más de 20 años de experiencia en diagnóstico eléctrico y localización de fallas
          </p>
        </div>
      </div>
    </section>

    <!-- Navigation -->
    <section class="py-3 sticky top-16 z-40">
      <div class="container-custom">
        <div class="flex justify-end">
          <button @click="goToHome" class="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-sm font-medium inline-flex items-center gap-2 shadow-lg cursor-pointer">
            <i class="pi pi-arrow-left text-xs"></i>
            Volver al Inicio
          </button>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 bg-gray-50">
      <div class="container-custom max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Misión, Visión y Valores</h2>
          <div class="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
        </div>

        <!-- Misión y Visión -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div
            v-for="item in misionVision"
            :key="item.title"
            class="group relative bg-gradient-to-br from-orange-50 to-white p-10 rounded-2xl border-2 border-orange-200 hover:border-primary-500 transition-all duration-300 hover:shadow-2xl"
          >
            <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-500 to-primary-700 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="bg-gradient-to-br from-primary-500 to-primary-700 text-white text-5xl w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <i :class="item.icon"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900">{{ item.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>

        <!-- Valores -->
        <div class="mb-8">
          <h3 class="text-3xl font-bold text-center text-gray-900 mb-8">Nuestros Valores</h3>
        </div>
        <div class="flex flex-col items-center gap-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            <div
              v-for="valor in valores.slice(0, 3)"
              :key="valor.title"
              class="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl border-2 border-primary-100 hover:border-primary-500 transition-all duration-300 hover:shadow-lg"
            >
              <div class="flex items-start mb-4">
                <div class="bg-gradient-to-br from-primary-500 to-primary-700 text-white text-2xl w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i :class="valor.icon"></i>
                </div>
                <h4 class="text-xl font-bold text-gray-900 mt-2">{{ valor.title }}</h4>
              </div>
              <p class="text-gray-600 leading-relaxed">{{ valor.description }}</p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
            <div
              v-for="valor in valores.slice(3, 5)"
              :key="valor.title"
              class="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl border-2 border-primary-100 hover:border-primary-500 transition-all duration-300 hover:shadow-lg"
            >
              <div class="flex items-start mb-4">
                <div class="bg-gradient-to-br from-primary-500 to-primary-700 text-white text-2xl w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i :class="valor.icon"></i>
                </div>
                <h4 class="text-xl font-bold text-gray-900 mt-2">{{ valor.title }}</h4>
              </div>
              <p class="text-gray-600 leading-relaxed">{{ valor.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const goToHome = () => {
  window.location.hash = '#/'
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 100)
}

const misionVision = [
  {
    title: 'Misión',
    icon: 'pi pi-flag',
    description: 'Brindar servicios de diagnóstico y ensayos eléctricos no destructivos en cables, con el más alto nivel técnico, precisión y confiabilidad, orientados a prolongar la vida útil de las instalaciones eléctricas y prevenir fallas.'
  },
  {
    title: 'Visión',
    icon: 'pi pi-eye',
    description: 'Consolidarnos como referentes nacionales en servicios predictivos y de localización de fallas en cables eléctricos, y expandirnos a nivel internacional mediante la excelencia técnica, la innovación continua y el compromiso con nuestros clientes.'
  }
]

const valores = [
  {
    title: 'Compromiso técnico',
    icon: 'pi pi-briefcase',
    description: 'Aplicamos conocimiento profundo, experiencia y rigor profesional en cada trabajo.'
  },
  {
    title: 'Confiabilidad',
    icon: 'pi pi-check-circle',
    description: 'Entregamos resultados precisos y fundamentados, esenciales para la toma de decisiones críticas.'
  },
  {
    title: 'Integridad',
    icon: 'pi pi-shield',
    description: 'Actuamos con honestidad, ética y transparencia.'
  },
  {
    title: 'Innovación',
    icon: 'pi pi-cog',
    description: 'Incorporamos tecnología y métodos avanzados para anticiparnos a las necesidades del sector.'
  },
  {
    title: 'Cercanía con el cliente',
    icon: 'pi pi-users',
    description: 'Construimos relaciones de confianza y entendimiento mutuo, ofreciendo atención personalizada.'
  }
]

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
