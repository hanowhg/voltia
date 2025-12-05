<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white py-16">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Medición de Descargas Parciales (ON-LINE)</h1>
        </div>
      </div>
    </section>

    <!-- Navigation -->
    <section class="py-3 sticky top-16 z-40">
      <div class="container-custom">
        <div class="flex justify-end">
          <button @click="goToServicios" class="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-sm font-medium inline-flex items-center gap-2 shadow-lg cursor-pointer">
            <i class="pi pi-arrow-left text-xs"></i>
            Volver a Servicios
          </button>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="py-16">
      <div class="container-custom max-w-6xl">
        <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
          <div class="flex items-center mb-8">
            <div class="bg-gradient-to-br from-primary-500 to-primary-700 text-white text-3xl w-16 h-16 rounded-xl flex items-center justify-center mr-4">
              <i class="pi pi-bolt"></i>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Medición de Descargas Parciales (ON-LINE)</h2>
          </div>

          <div class="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>En la actualidad existen distintos métodos y ensayos para realizar diagnósticos predictivos sobre cables de Media y Alta tensión, sin embargo, ante la necesidad de poder realizar mantenimientos, pero con detenciones cada mes espaciadas y sobre todo más acotadas es que toman mayor importancia las medidas de carácter ON LINE, sin embargo, nunca se debe dejar de lado las medidas OFF LINE dado que las primeras son ensayos complementarios de las segundas y no al revés.</p>

            <p>Por consiguiente, la metodología que se menciona se denomina medición de Descargas Parciales On Line – Método Inductivo, la misma consiste en realizar esta medida desde los link de puesta a tierra de los conductores y así de esta manera evaluar el fenómeno de las Descargas Parciales vs Potencial de Tierra. Al realizar esta medida desde este punto tiene la virtud y característica que no es necesario realizar ningún tipo de desconexión ni desenergización por parte del circuito. Del mismo modo este método permite realizar un análisis global del estado del o los conductores, mediante la realización de análisis por un tiempo determinado de 24 horas.</p>

            <p>Durante el tiempo determinado de medida no solo se debe tener en consideración los valores absolutos sino también la tasa de repetición de los mismos. Si bien con una sola medida se obtiene mucha información respecto del estado del o los circuitos es importante mencionar que esta medida como la totalidad de las medidas predictivas se evalúan en función de su tendencia de comportamiento en el tiempo, pero dada la facilidad de realizarla se recomienda efectuar su análisis en periodos acotados con la finalidad de desplazar el tiempo de las medidas del tipo Off Line, con lo que con lleva a realizar una detención.</p>

            <p>Voltia es una empresa especialista en medidas eléctricas predictivas, cuenta con un staff de mas de 20 años de experiencia en la misma. Pero no solo la experiencia profesional es el todo, aunque esta influye en el 90% de la medida, es necesario complementarla con instrumental acorde, por dicho motivo es que se utiliza la línea de medición de la marca Omicron, dado que es una marca que hoy en día brinda seguridad y garantía de poder realizar una medida conforme a lo estipulado en las normativas de referencia.</p>
          </div>
        </div>
      </div>
    </section>

    <FooterComponent />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import FooterComponent from '../components/FooterComponent.vue'

const router = useRouter()

const goToServicios = () => {
  router.push('/servicios')
}

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
