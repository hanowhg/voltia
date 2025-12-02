<template>
  <div>
    <!-- Hero Section - Bienvenidos -->
    <section id="bienvenidos" class="relative text-white py-24 md:py-32 overflow-hidden">
      <!-- Background image with overlay -->
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('/trabajo.png');"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-primary-600/85 via-primary-500/80 to-primary-700/85"></div>

      <div class="container-custom relative z-10">
        <div class="max-w-4xl">
          <div class="inline-block bg-white text-primary-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
            Excelencia en Diagnóstico Eléctrico
          </div>
          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Diagnóstico y Localización de Fallas en Cables Subterráneos
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-orange-50 leading-relaxed">
            Servicios especializados con tecnología VLF y Tangente Delta para redes de baja, media y alta tensión. Más de 20 años de experiencia en ensayos eléctricos no destructivos y mantenimiento predictivo.
          </p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="empresa" class="py-20 bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Quiénes Somos</h2>
          <div class="w-24 h-1 bg-secondary-500 mx-auto mb-6"></div>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos una empresa especializada en el diagnóstico eléctrico y la localización de fallas en cables de potencia de baja, media y alta tensión. Contamos con más de 20 años de experiencia en ensayos eléctricos no destructivos, mantenimiento predictivo y evaluación de sistemas de potencia.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div class="rounded-2xl h-96 overflow-hidden shadow-lg">
            <img src="/instrumento.jpg" alt="Ingeniería Eléctrica" class="w-full h-full object-cover" />
          </div>
          <div>
            <p class="text-gray-700 mb-6 text-lg leading-relaxed">
              Nacimos con una clara vocación por la excelencia técnica, la innovación y el compromiso con la seguridad y la calidad. Ofrecemos soluciones confiables y precisas que permiten a nuestros clientes garantizar la continuidad del servicio, optimizar sus recursos y reducir tiempos de inactividad.
            </p>
            <p class="text-gray-700 text-lg leading-relaxed">
              Nuestro objetivo es crecer con presencia firme a nivel local y proyectarnos internacionalmente, acompañando a nuestros clientes en sus desafíos energéticos con profesionalismo, innovación y compromiso.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section id="valores" class="py-20 bg-white">
      <div class="container-custom">
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
import { usePageMeta } from '../composables/usePageMeta'

usePageMeta({
  title: 'Voltia - Diagnóstico y Localización de Fallas en Cables Subterráneos | Baja, Media y Alta Tensión',
  description: 'Servicios especializados en diagnóstico eléctrico y localización de fallas en cables subterráneos de baja, media y alta tensión. Ensayos VLF, Tangente Delta, descargas parciales y mantenimiento predictivo. Más de 20 años de experiencia en Argentina.',
  keywords: 'diagnóstico eléctrico, localización de fallas, cables subterráneos, cables de media tensión, cables de alta tensión, VLF, tangente delta, descargas parciales, mantenimiento predictivo, ensayos eléctricos no destructivos, localización de falla en cubierta, integridad de cubierta, cables de 33kv, cables de 132kv, Argentina',
  canonical: 'https://voltiaelectricaldiagnostic.com/'
})

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

</script>
