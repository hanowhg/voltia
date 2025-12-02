<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white py-16">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Localización de Fallas en Cubierta Exterior</h1>
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
        <!-- Problemas que Genera una Falla en la Cubierta Exterior -->
        <div id="problemas" class="scroll-mt-32 mb-10">
          <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center border-b-2 border-primary-200 pb-3">
              <span class="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm mr-3">
                <i class="pi pi-exclamation-triangle"></i>
              </span>
              Problemas que Genera una Falla en la Cubierta Exterior
            </h3>
            <p class="text-gray-700 text-lg leading-relaxed mb-6">
              Una falla en la cubierta, aunque sea mínima, desencadena procesos progresivos que comprometen seriamente la vida útil del cable:
            </p>

            <div class="space-y-6">
              <!-- Ingreso de agua y humedad -->
              <div class="bg-gradient-to-r from-red-50 to-white p-6 rounded-xl border-l-4 border-red-500">
                <h4 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <i class="pi pi-droplet text-red-500 text-2xl mr-3"></i>
                  Ingreso de agua y humedad
                </h4>
                <ul class="space-y-2 text-gray-700 ml-6">
                  <li class="flex items-start">
                    <i class="pi pi-angle-right text-red-500 mr-2 mt-1"></i>
                    <span>Se inicia corrosión de la pantalla metálica.</span>
                  </li>
                  <li class="flex items-start">
                    <i class="pi pi-angle-right text-red-500 mr-2 mt-1"></i>
                    <span>La humedad migra hacia el XLPE → arborescencias (water trees).</span>
                  </li>
                  <li class="flex items-start">
                    <i class="pi pi-angle-right text-red-500 mr-2 mt-1"></i>
                    <span>Aumento de la pérdida dieléctrica y riesgo de fallo bajo tensión.</span>
                  </li>
                </ul>
              </div>

              <!-- Corrosión de la pantalla -->
              <div class="bg-gradient-to-r from-orange-50 to-white p-6 rounded-xl border-l-4 border-orange-500">
                <h4 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <i class="pi pi-shield text-orange-500 text-2xl mr-3"></i>
                  Corrosión de la pantalla
                </h4>
                <ul class="space-y-2 text-gray-700 ml-6">
                  <li class="flex items-start">
                    <i class="pi pi-angle-right text-orange-500 mr-2 mt-1"></i>
                    <span>Pérdida de espesor metálico.</span>
                  </li>
                  <li class="flex items-start">
                    <i class="pi pi-angle-right text-orange-500 mr-2 mt-1"></i>
                    <span>Aumento de resistencia óhmica.</span>
                  </li>
                  <li class="flex items-start">
                    <i class="pi pi-angle-right text-orange-500 mr-2 mt-1"></i>
                    <span>Riesgo de corte de pantalla, dejando el cable inseguro para corrientes de falla.</span>
                  </li>
                </ul>
              </div>

              <!-- Daño mecánico interno -->
              <div class="bg-gradient-to-r from-yellow-50 to-white p-6 rounded-xl border-l-4 border-yellow-500">
                <h4 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <i class="pi pi-cog text-yellow-600 text-2xl mr-3"></i>
                  Daño mecánico interno
                </h4>
                <ul class="space-y-2 text-gray-700 ml-6">
                  <li class="flex items-start">
                    <i class="pi pi-angle-right text-yellow-600 mr-2 mt-1"></i>
                    <span>Ovalización del conductor.</span>
                  </li>
                  <li class="flex items-start">
                    <i class="pi pi-angle-right text-yellow-600 mr-2 mt-1"></i>
                    <span>Deformación del aislamiento XLPE.</span>
                  </li>
                  <li class="flex items-start">
                    <i class="pi pi-angle-right text-yellow-600 mr-2 mt-1"></i>
                    <span>Aparición de descargas parciales internas.</span>
                  </li>
                </ul>
              </div>

              <!-- Propagación hacia empalmes -->
              <div class="bg-gradient-to-r from-purple-50 to-white p-6 rounded-xl border-l-4 border-purple-500">
                <h4 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <i class="pi pi-sitemap text-purple-500 text-2xl mr-3"></i>
                  Propagación hacia empalmes y cámaras
                </h4>
                <ul class="space-y-2 text-gray-700 ml-6">
                  <li class="flex items-start">
                    <i class="pi pi-angle-right text-purple-500 mr-2 mt-1"></i>
                    <span>Humedad que viaja por capilaridad hacia empalmes.</span>
                  </li>
                  <li class="flex items-start">
                    <i class="pi pi-angle-right text-purple-500 mr-2 mt-1"></i>
                    <span>Tracking, corrosión y fallas térmicas.</span>
                  </li>
                  <li class="flex items-start">
                    <i class="pi pi-angle-right text-purple-500 mr-2 mt-1"></i>
                    <span>Riesgo de explosión de empalme en MT/AT.</span>
                  </li>
                </ul>
              </div>

              <!-- Incremento de TD y PD -->
              <div class="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border-l-4 border-blue-500">
                <h4 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <i class="pi pi-chart-line text-blue-500 text-2xl mr-3"></i>
                  Incremento de TD y PD
                </h4>
                <ul class="space-y-2 text-gray-700 ml-6">
                  <li class="flex items-start">
                    <i class="pi pi-angle-right text-blue-500 mr-2 mt-1"></i>
                    <span>Aumento de la tangente delta en VLF.</span>
                  </li>
                  <li class="flex items-start">
                    <i class="pi pi-angle-right text-blue-500 mr-2 mt-1"></i>
                    <span>Descargas parciales acústicas e internas.</span>
                  </li>
                </ul>
              </div>

              <!-- Impacto económico -->
              <div class="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-l-4 border-gray-500">
                <h4 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <i class="pi pi-dollar text-gray-600 text-2xl mr-3"></i>
                  Impacto económico y operativo
                </h4>
                <ul class="space-y-2 text-gray-700 ml-6">
                  <li class="flex items-start">
                    <i class="pi pi-angle-right text-gray-600 mr-2 mt-1"></i>
                    <span>Reparaciones más extensas y costosas.</span>
                  </li>
                  <li class="flex items-start">
                    <i class="pi pi-angle-right text-gray-600 mr-2 mt-1"></i>
                    <span>Paradas no programadas.</span>
                  </li>
                  <li class="flex items-start">
                    <i class="pi pi-angle-right text-gray-600 mr-2 mt-1"></i>
                    <span>Reemplazo de tramos largos del cable.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6 rounded-xl mt-8">
              <p class="text-lg font-bold flex items-center">
                <i class="pi pi-info-circle text-2xl mr-3"></i>
                Conclusión: Una perforación en la cubierta no es un daño menor: es el inicio de una falla mayor en el sistema.
              </p>
            </div>
          </div>
        </div>

        <!-- Ensayo de Integridad de la Cubierta -->
        <div id="tension" class="scroll-mt-32 mb-10">
          <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center border-b-2 border-primary-200 pb-3">
              <span class="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm mr-3">
                <i class="pi pi-bolt"></i>
              </span>
              Ensayo de Integridad de la Cubierta (IEC 60229)
            </h3>
            <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>Una vez identificada la necesidad de evaluar el cable, se realiza el ensayo normativo para confirmar si la cubierta está o no perforada.</p>
              <p>Se aplica una tensión continua de hasta 10 kV CC entre:</p>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li>La pantalla metálica del cable</li>
                <li>El terreno húmedo o cama conductiva</li>
              </ul>
              <div class="bg-primary-50 p-6 rounded-xl mt-6">
                <h4 class="font-bold text-gray-900 mb-4 text-lg">Resultados del ensayo:</h4>
                <ul class="space-y-3 text-gray-700">
                  <li class="flex items-start">
                    <i class="pi pi-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>Si la cubierta está sana →</strong> no hay fuga.</span>
                  </li>
                  <li class="flex items-start">
                    <i class="pi pi-times-circle text-red-600 text-xl mr-3 mt-1"></i>
                    <div>
                      <strong>Si está dañada →</strong> se observa:
                      <ul class="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>Corriente de fuga localizada</li>
                        <li>Caída brusca de resistencia</li>
                        <li>Tensión de ruptura inferior a la esperada</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <p class="mt-4 italic bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                Este ensayo confirma la existencia del defecto, pero no indica dónde está.
              </p>
            </div>
          </div>
        </div>

        <!-- Método de Murray -->
        <div id="murray" class="scroll-mt-32 mb-10">
          <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center border-b-2 border-primary-200 pb-3">
              <span class="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm mr-3">
                <i class="pi pi-sliders-h"></i>
              </span>
              <div>
                Medición de la distancia a la falla<br>
                <span class="text-xl">Método de Murray (Puente de Murray)</span>
              </div>
            </h3>
            <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>El método de Murray es un método de prelocalización que permite calcular la distancia eléctrica hasta la falla en un cable con cubierta dañada o conductor/pantalla en contacto con tierra.</p>

              <h4 class="text-xl font-bold text-gray-900 mt-6 mb-3">Objetivo</h4>
              <p>Determinar cuántos metros desde el punto de ensayo se encuentra la falla, antes de salir a campo a localizarla físicamente.</p>

              <h4 class="text-xl font-bold text-gray-900 mt-6 mb-3">Principio de funcionamiento</h4>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li>El circuito se arma como un puente resistivo, donde la resistencia del cable es proporcional a su longitud.</li>
                <li>Comparando dos ramas del puente, se obtiene la relación entre la resistencia hasta la falla y la resistencia del tramo total del cable.</li>
              </ul>

              <h4 class="text-xl font-bold text-gray-900 mt-6 mb-3">Conexión</h4>
              <p>Se utiliza el cable averiado y otro cable sano en paralelo desde el mismo punto de ensayo.</p>
              <p><strong>Conexiones:</strong></p>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong>Brazo 1:</strong> tramo del cable averiado hasta la falla.</li>
                <li><strong>Brazo 2:</strong> cable sano de igual sección/longitud conocido.</li>
                <li><strong>Brazo 3 y 4:</strong> resistencias variables del puente.</li>
                <li>El galvanómetro se coloca entre la unión media de ambos brazos y la unión media del lado opuesto del puente.</li>
              </ul>

              <h4 class="text-xl font-bold text-gray-900 mt-6 mb-3">Ajuste del puente</h4>
              <p>Se ajustan las resistencias hasta que el galvanómetro marque cero (equilibrio).</p>
              <p>En ese punto:</p>
              <div class="bg-gray-50 p-4 rounded-xl mt-4 mb-4 text-center">
                <p class="font-mono text-lg">R₁ / R₂ = L₁ / L₂</p>
              </div>
              <p><strong>donde:</strong></p>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li>R₁ = resistencia del cable hasta la falla</li>
                <li>R₂ = resistencia del cable sano (equivalente)</li>
                <li>L₁ = distancia a la falla</li>
                <li>L₂ = longitud total del cable o longitud del cable de referencia</li>
              </ul>

              <h4 class="text-xl font-bold text-gray-900 mt-6 mb-3">Cálculo final</h4>
              <p>Se despeja:</p>
              <div class="bg-gray-50 p-4 rounded-xl mt-4 mb-4 text-center">
                <p class="font-mono text-lg">L₁ = R₁/(R₁ + R₂) · L<sub>total</sub></p>
              </div>
              <div class="bg-primary-50 p-6 rounded-xl">
                <p class="font-bold text-gray-900 mb-2">Resultado:</p>
                <p>L₁ = distancia estimada desde el punto de ensayo hasta la falla.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Localización Puntual -->
        <div id="gradiente" class="scroll-mt-32 mb-10">
          <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center border-b-2 border-primary-200 pb-3">
              <span class="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm mr-3">
                <i class="pi pi-map-marker"></i>
              </span>
              Puntualización de la falla por Gradiente de Tensión
            </h3>
            <p class="text-gray-700 text-lg mb-4">Una vez conocida la distancia aproximada, se sale al campo a precisar el punto exacto mediante el método de gradiente de tensión.</p>

            <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
              <h4 class="text-xl font-bold text-gray-900 mt-6 mb-3">Principio</h4>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li>El equipo inyecta una tensión entre la pantalla/cubierta y tierra.</li>
                <li>La corriente de fuga fluye por el punto de falla, generando un campo eléctrico localizado en el terreno.</li>
                <li>Ese campo provoca un gradiente de potencial que se puede medir desde superficie.</li>
              </ul>

              <h4 class="text-xl font-bold text-gray-900 mt-6 mb-3">Conexión para la puntualización</h4>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong>Borne +</strong> del equipo → Pantalla/cubierta del cable.</li>
                <li><strong>Borne –</strong> del equipo → Tierra.</li>
                <li>Se retiran los puentes de puesta a tierra para aislar la pantalla.</li>
                <li>Se mantiene una tensión estable (hundreds of volts a pocos kV).</li>
              </ul>

              <h4 class="text-xl font-bold text-gray-900 mt-6 mb-3">Procedimiento de puntualización</h4>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Sobre la traza estimada (obtenida por Murray), se avanza con dos electrodos conectados al receptor.</li>
                <li>Los electrodos miden la diferencia de potencial (ΔV) del terreno.</li>
                <li>El valor del gradiente aumenta al acercarse a la falla.</li>
                <li>El punto exacto se identifica cuando:
                  <ul class="list-circle list-inside ml-6 mt-2 space-y-1">
                    <li>El gradiente llega al máximo, o</li>
                    <li>El receptor cambia de polaridad, o</li>
                    <li>Se observa una inversión brusca de pendiente.</li>
                  </ul>
                </li>
              </ul>

              <div class="mt-6 font-bold bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <p class="text-lg">
                  Ese punto es la proyección en superficie del defecto, lista para excavación.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Ventajas de Localizar la Falla -->
        <div id="ventajas" class="scroll-mt-32 mb-10">
          <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center border-b-2 border-primary-200 pb-3">
              <span class="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm mr-3">
                <i class="pi pi-thumbs-up"></i>
              </span>
              Ventajas de Localizar la Falla con Precisión
            </h3>
            <p class="text-gray-700 text-lg leading-relaxed mb-6">
              Localizar y marcar la falla exacta aporta beneficios técnicos y económicos inmediatos:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border-2 border-green-200">
                <h4 class="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <i class="pi pi-check-circle text-green-600 text-2xl mr-3"></i>
                  Excavación mínima
                </h4>
                <p class="text-gray-700">Solo se abre el punto preciso del daño, sin romper de más.</p>
              </div>

              <div class="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-200">
                <h4 class="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <i class="pi pi-dollar text-blue-600 text-2xl mr-3"></i>
                  Menores costos y tiempos de obra
                </h4>
                <p class="text-gray-700">Se evita maquinaria innecesaria, mano de obra excesiva y pérdida de servicio.</p>
              </div>

              <div class="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border-2 border-purple-200">
                <h4 class="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <i class="pi pi-wrench text-purple-600 text-2xl mr-3"></i>
                  Reparación puntual y eficiente
                </h4>
                <p class="text-gray-700">Se interviene solo el área dañada, preservando el resto del cable.</p>
              </div>

              <div class="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl border-2 border-yellow-200">
                <h4 class="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <i class="pi pi-shield text-yellow-600 text-2xl mr-3"></i>
                  Prevención de fallas mayores
                </h4>
                <p class="text-gray-700">Evita que la humedad avance al XLPE o a los empalmes.</p>
              </div>

              <div class="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border-2 border-orange-200">
                <h4 class="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <i class="pi pi-chart-line text-orange-600 text-2xl mr-3"></i>
                  Mayor confiabilidad del sistema
                </h4>
                <p class="text-gray-700">Una cubierta reparada aumenta la vida útil del cable.</p>
              </div>

              <div class="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl border-2 border-red-200">
                <h4 class="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <i class="pi pi-lock text-red-600 text-2xl mr-3"></i>
                  Seguridad operativa
                </h4>
                <p class="text-gray-700">Reduce riesgos eléctricos y mecánicos en obras posteriores.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Resultado Final del Servicio -->
        <div id="resultado" class="scroll-mt-32 mb-10">
          <div class="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <h3 class="text-3xl font-bold mb-6 flex items-center">
              <i class="pi pi-check-square text-4xl mr-4"></i>
              Resultado Final del Servicio
            </h3>
            <p class="text-xl mb-6">El cliente obtiene:</p>
            <ul class="space-y-4 text-lg">
              <li class="flex items-start">
                <i class="pi pi-check-circle text-2xl mr-4 mt-1 flex-shrink-0"></i>
                <span>Confirmación del estado de la cubierta</span>
              </li>
              <li class="flex items-start">
                <i class="pi pi-check-circle text-2xl mr-4 mt-1 flex-shrink-0"></i>
                <span>Distancia exacta a la falla (método Murray)</span>
              </li>
              <li class="flex items-start">
                <i class="pi pi-check-circle text-2xl mr-4 mt-1 flex-shrink-0"></i>
                <span>Ubicación puntual marcada en terreno</span>
              </li>
              <li class="flex items-start">
                <i class="pi pi-check-circle text-2xl mr-4 mt-1 flex-shrink-0"></i>
                <span>Fotografías, informe y recomendaciones de reparación</span>
              </li>
            </ul>
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
