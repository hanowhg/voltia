<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white py-16">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Localización de Ruta y Traza de Cables Subterráneos</h1>
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
              <i class="pi pi-sitemap"></i>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Ruteo de Cables Subterráneos</h2>
          </div>

          <div class="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>El Ruteo de Cables Subterráneos es un servicio especializado que permite identificar con precisión el recorrido real, la profundidad y los puntos críticos de cables eléctricos instalados en terreno.</p>
            <p>Se utiliza para evitar daños, verificar infraestructura, localizar empalmes ocultos y optimizar tareas de mantenimiento y localización de fallas.</p>
            <p>El servicio combina tecnología de inyección de señal, métodos inductivos y detección pasiva, logrando el mapeo completo del tendido incluso cuando no existen planos actualizados.</p>
          </div>

          <div class="bg-primary-50 p-6 rounded-xl mt-8">
            <h3 class="text-xl font-bold text-primary-900 mb-4">Objetivo del Servicio:</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <i class="pi pi-check-circle text-primary-600 text-xl mr-3 mt-1 flex-shrink-0"></i>
                <span>Conocer el camino exacto y real del cable.</span>
              </li>
              <li class="flex items-start">
                <i class="pi pi-check-circle text-primary-600 text-xl mr-3 mt-1 flex-shrink-0"></i>
                <span>Detectar empalmes, curvas, cámaras y derivaciones.</span>
              </li>
              <li class="flex items-start">
                <i class="pi pi-check-circle text-primary-600 text-xl mr-3 mt-1 flex-shrink-0"></i>
                <span>Estimar la profundidad y detectar tramos superficiales o riesgos mecánicos.</span>
              </li>
              <li class="flex items-start">
                <i class="pi pi-check-circle text-primary-600 text-xl mr-3 mt-1 flex-shrink-0"></i>
                <span>Identificar interferencias, cruces con otros servicios y zonas de pérdida de continuidad de pantalla.</span>
              </li>
              <li class="flex items-start">
                <i class="pi pi-check-circle text-primary-600 text-xl mr-3 mt-1 flex-shrink-0"></i>
                <span>Obtener un mapa confiable del sistema para intervenir con seguridad.</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Métodos Utilizados -->
        <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-primary-200 pb-3">Métodos Utilizados</h3>
          <p class="text-gray-700 text-lg mb-8">El servicio incluye todos los métodos de trazado disponibles, seleccionados según el acceso, el tipo de cable y el entorno.</p>

          <!-- Conexión Directa -->
          <div class="mb-10">
            <h4 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span class="bg-secondary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
                <i class="pi pi-link"></i>
              </span>
              Método de Conexión Directa (Galvánico)
            </h4>
            <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>Se conecta el transmisor directamente al conductor, pantalla o armadura. Es el método más preciso, ideal cuando se tiene acceso al extremo del cable o a una punta libre.</p>
              <div class="bg-gray-50 p-6 rounded-xl">
                <h5 class="font-bold text-gray-900 mb-3">Ventajas:</h5>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <i class="pi pi-check text-primary-600 mr-2 mt-1"></i>
                    <span>Señal fuerte y estable</span>
                  </li>
                  <li class="flex items-start">
                    <i class="pi pi-check text-primary-600 mr-2 mt-1"></i>
                    <span>Gran alcance</span>
                  </li>
                  <li class="flex items-start">
                    <i class="pi pi-check text-primary-600 mr-2 mt-1"></i>
                    <span>Detecta variaciones típicas de empalmes y daños</span>
                  </li>
                </ul>
                <h5 class="font-bold text-gray-900 mt-4 mb-2">Aplicación:</h5>
                <p>Cables de MT/AT en cámaras, terminales GIS, transformadores.</p>
              </div>
            </div>
          </div>

          <!-- Pinza Inductiva -->
          <div class="mb-10">
            <h4 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span class="bg-secondary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
                <i class="pi pi-sliders-v"></i>
              </span>
              Método Inductivo con Pinza (Clamp-On)
            </h4>
            <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>Se aplica una pinza inductiva alrededor del cable sin abrir el circuito.</p>
              <div class="bg-gray-50 p-6 rounded-xl">
                <h5 class="font-bold text-gray-900 mb-3">Ventajas:</h5>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <i class="pi pi-check text-primary-600 mr-2 mt-1"></i>
                    <span>No requiere desconexión</span>
                  </li>
                  <li class="flex items-start">
                    <i class="pi pi-check text-primary-600 mr-2 mt-1"></i>
                    <span>Alta seguridad</span>
                  </li>
                  <li class="flex items-start">
                    <i class="pi pi-check text-primary-600 mr-2 mt-1"></i>
                    <span>Ideal en tableros energizados</span>
                  </li>
                </ul>
                <h5 class="font-bold text-gray-900 mt-4 mb-2">Aplicación:</h5>
                <p>Alimentadores en servicio, cables en bandejas o túneles</p>
              </div>
            </div>
          </div>

          <!-- Bobina Inductiva -->
          <div class="mb-10">
            <h4 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span class="bg-secondary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
                <i class="pi pi-circle"></i>
              </span>
              Método Inductivo por Bobina de Superficie
            </h4>
            <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>Se apoya una bobina transmisora sobre el suelo, induciendo la señal en el punto estimado del cable.</p>
              <div class="bg-gray-50 p-6 rounded-xl">
                <h5 class="font-bold text-gray-900 mb-3">Ventajas:</h5>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <i class="pi pi-check text-primary-600 mr-2 mt-1"></i>
                    <span>Excelente cuando no existe acceso físico</span>
                  </li>
                  <li class="flex items-start">
                    <i class="pi pi-check text-primary-600 mr-2 mt-1"></i>
                    <span>Permite iniciar el ruteo en calles, parques o zonas sin cámaras</span>
                  </li>
                </ul>
                <h5 class="font-bold text-gray-900 mt-4 mb-2">Aplicación:</h5>
                <p>Barrios cerrados, industrias, cables antiguos sin planos</p>
              </div>
            </div>
          </div>

          <!-- Método Pasivo -->
          <div>
            <h4 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span class="bg-secondary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
                <i class="pi pi-wifi"></i>
              </span>
              Método Pasivo (Sin Inyección de Señal)
            </h4>
            <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>El receptor detecta el campo magnético natural de cables energizados. Útil para identificar rápidamente qué líneas están activas.</p>
              <div class="bg-gray-50 p-6 rounded-xl">
                <h5 class="font-bold text-gray-900 mb-3">Ventajas:</h5>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <i class="pi pi-check text-primary-600 mr-2 mt-1"></i>
                    <span>Muy rápido</span>
                  </li>
                  <li class="flex items-start">
                    <i class="pi pi-check text-primary-600 mr-2 mt-1"></i>
                    <span>No requiere conexión ni equipo transmisor</span>
                  </li>
                </ul>
                <h5 class="font-bold text-gray-900 mt-4 mb-2">Limitaciones:</h5>
                <p>Menor precisión, no detecta cables sin carga.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Resultados -->
        <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-primary-200 pb-3">Resultados</h3>
          <ul class="space-y-3 text-gray-700 text-lg">
            <li class="flex items-start">
              <i class="pi pi-check-circle text-primary-600 text-xl mr-3 mt-1 flex-shrink-0"></i>
              <span>Trazado real del cable, marcado y documentado.</span>
            </li>
            <li class="flex items-start">
              <i class="pi pi-check-circle text-primary-600 text-xl mr-3 mt-1 flex-shrink-0"></i>
              <span>Profundidad estimada cada vez que el terreno o la obra lo requiera.</span>
            </li>
            <li class="flex items-start">
              <i class="pi pi-check-circle text-primary-600 text-xl mr-3 mt-1 flex-shrink-0"></i>
              <span>Ubicación exacta de empalmes, cámaras y derivaciones.</span>
            </li>
            <li class="flex items-start">
              <i class="pi pi-check-circle text-primary-600 text-xl mr-3 mt-1 flex-shrink-0"></i>
              <span>Detección de pérdidas de señal, indicativas de humedad, aplastamientos o corrosión.</span>
            </li>
            <li class="flex items-start">
              <i class="pi pi-check-circle text-primary-600 text-xl mr-3 mt-1 flex-shrink-0"></i>
              <span>Informe técnico con fotografías y recomendaciones.</span>
            </li>
            <li class="flex items-start">
              <i class="pi pi-check-circle text-primary-600 text-xl mr-3 mt-1 flex-shrink-0"></i>
              <span>Soporte directo para excavaciones, reparaciones y diagnóstico de fallas.</span>
            </li>
          </ul>
        </div>

        <!-- Beneficios -->
        <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-primary-200 pb-3">Beneficios</h3>
          <ul class="space-y-3 text-gray-700 text-lg">
            <li class="flex items-start">
              <i class="pi pi-star-fill text-secondary-600 text-xl mr-3 mt-1 flex-shrink-0"></i>
              <span>Reduce riesgos y costos antes de excavar o romper pavimento.</span>
            </li>
            <li class="flex items-start">
              <i class="pi pi-star-fill text-secondary-600 text-xl mr-3 mt-1 flex-shrink-0"></i>
              <span>Evita daños a cables propios y ajenos.</span>
            </li>
            <li class="flex items-start">
              <i class="pi pi-star-fill text-secondary-600 text-xl mr-3 mt-1 flex-shrink-0"></i>
              <span>Aporta información precisa para mantenimiento, ampliaciones o diagnóstico.</span>
            </li>
            <li class="flex items-start">
              <i class="pi pi-star-fill text-secondary-600 text-xl mr-3 mt-1 flex-shrink-0"></i>
              <span>Permite confirmar o corregir planos existentes.</span>
            </li>
            <li class="flex items-start">
              <i class="pi pi-star-fill text-secondary-600 text-xl mr-3 mt-1 flex-shrink-0"></i>
              <span>Complementa técnicas como TDR, VLF, PD acústico y análisis de pantalla.</span>
            </li>
            <li class="flex items-start">
              <i class="pi pi-star-fill text-secondary-600 text-xl mr-3 mt-1 flex-shrink-0"></i>
              <span>Asegura que cualquier intervención se realice con el menor riesgo operativo.</span>
            </li>
          </ul>
        </div>

        <!-- Sectores de Aplicación -->
        <div class="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Sectores en los que se aplica</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="flex items-center text-gray-700">
              <i class="pi pi-building text-primary-600 text-2xl mr-3"></i>
              <span>Barrios cerrados</span>
            </div>
            <div class="flex items-center text-gray-700">
              <i class="pi pi-cog text-primary-600 text-2xl mr-3"></i>
              <span>Industrias</span>
            </div>
            <div class="flex items-center text-gray-700">
              <i class="pi pi-bolt text-primary-600 text-2xl mr-3"></i>
              <span>Centrales eléctricas</span>
            </div>
            <div class="flex items-center text-gray-700">
              <i class="pi pi-sun text-primary-600 text-2xl mr-3"></i>
              <span>Parques solares/eólicos</span>
            </div>
            <div class="flex items-center text-gray-700">
              <i class="pi pi-sitemap text-primary-600 text-2xl mr-3"></i>
              <span>Distribuidoras</span>
            </div>
            <div class="flex items-center text-gray-700">
              <i class="pi pi-wrench text-primary-600 text-2xl mr-3"></i>
              <span>Obras civiles</span>
            </div>
            <div class="flex items-center text-gray-700">
              <i class="pi pi-box text-primary-600 text-2xl mr-3"></i>
              <span>Plantas logísticas</span>
            </div>
            <div class="flex items-center text-gray-700">
              <i class="pi pi-map text-primary-600 text-2xl mr-3"></i>
              <span>Túneles de servicios</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterComponent />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import FooterComponent from '../components/FooterComponent.vue'

const goToServicios = () => {
  window.location.hash = '#/servicios'
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 100)
}

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
