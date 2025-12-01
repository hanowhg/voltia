<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white py-16">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Diagnóstico Eléctrico y Mantenimiento Predictivo</h1>
          <p class="text-xl text-orange-50">
            Servicios especializados OFF-LINE para cables de baja, media y alta tensión
          </p>
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
              <i class="pi pi-chart-line"></i>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Diagnóstico de Estado Eléctrico</h2>
          </div>

          <p class="text-gray-700 mb-6 text-lg leading-relaxed">
            El objetivo de las pruebas y ensayos de cables es descubrir oportunamente posibles daños presentes en estos elementos, evitando así interrupciones del servicio durante la operación del sistema de energía. Daños y averías producidas principalmente por una inadecuada instalación, y el deterioro por envejecimiento en empalmes, terminaciones y su aislamiento principal.
          </p>

          <p class="text-gray-700 mb-6 text-lg leading-relaxed">
            Son pruebas de campo aplicadas en cualquier momento de la vida útil de un sistema de cables:
          </p>

          <div class="bg-primary-50 p-6 rounded-xl mb-10">
            <h3 class="text-xl font-bold text-primary-900 mb-4">Tipos de Pruebas de Campo</h3>
            <div class="space-y-4">
              <div class="bg-white p-4 rounded-lg">
                <p class="text-gray-700 leading-relaxed"><strong class="text-gray-900">Prueba para Instalación:</strong> Es una prueba de campo realizada después de la instalación y montaje de tramos de cables nuevos, pero antes de integrar empalmes o terminaciones. La prueba está destinada a detectar daños durante el transporte, almacenamiento o fabricación.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <p class="text-gray-700 leading-relaxed"><strong class="text-gray-900">Prueba para Aceptación:</strong> Es una prueba de campo realizada después de la instalación del sistema de cables nuevos, incluidas las terminaciones y empalmes, pero antes de que el sistema sea energizado o puesto en servicio. La prueba está destinada a detectar daños posteriores a la instalación e identificar cualquier defecto o error grave en la instalación de accesorios.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <p class="text-gray-700 leading-relaxed"><strong class="text-gray-900">Prueba para Mantenimiento:</strong> Prueba de campo realizada durante la vida útil de un sistema de cables, por lo general durante un periodo no crítico o en condiciones planificadas. Está destinado a evaluar el estado del cable y accesorios, detectar el deterioro y comprobar la capacidad de servicio del sistema. Se aplica en sistemas de cables que han estado en servicio por algún tiempo y que puede encontrarse con cierto grado de envejecimiento, por lo que los niveles de tensión y duración de prueba son menores a los aplicados en pruebas de instalación o aceptación.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Resistencia de Aislación -->
        <div id="resistencia" class="scroll-mt-32 mb-10">
          <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center border-b-2 border-primary-200 pb-3">
              <span class="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm mr-3">
                <i class="pi pi-bolt"></i>
              </span>
              Ensayo de Resistencia de Aislación
            </h3>
            <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>La prueba de resistencia de aislamiento en cables de potencia, también conocida como prueba Megger, evalúa la calidad del aislamiento entre los conductores y tierra, o entre conductores, para asegurar que no haya fugas de corriente que puedan causar cortocircuitos o fallas peligrosas.</p>
              <p>Se utiliza un megóhmetro, un instrumento que genera una tensión continua de alto voltaje (500V o más, según la aplicación) y mide la resistencia de aislamiento.</p>
              <p>El megóhmetro se conecta a los conductores y a tierra (o entre conductores) y se aplica la tensión de prueba. Se mide la corriente de fuga que fluye a través del aislamiento, y el megóhmetro calcula la resistencia.</p>
              <p>Se compara la resistencia medida con valores de referencia o con mediciones previas para evaluar la calidad del aislamiento. Un valor bajo de resistencia indica un aislamiento deficiente y la necesidad de tomar medidas correctivas.</p>
            </div>
          </div>
        </div>

        <!-- TDR -->
        <div id="tdr" class="scroll-mt-32 mb-10">
          <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center border-b-2 border-primary-200 pb-3">
              <span class="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm mr-3">
                <i class="pi pi-sliders-h"></i>
              </span>
              Reflectometría Convencional (TDR)
            </h3>
            <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>La Reflectometría en el Dominio del Tiempo (TDR) es un método de diagnóstico no destructivo que evalúa la condición interna de un cable de potencia mediante la inyección de un tren de pulsos de baja tensión y alta frecuencia dentro del conductor principal. Estos pulsos, al propagarse a lo largo del cable, se comportan como ondas viajeras sensibles a cualquier modificación en la impedancia característica del sistema conductor–aislante–pantalla. Cuando la onda encuentra una variación —por mínima que sea— parte de la energía se refleja hacia la fuente, generando una señal que el equipo interpreta para construir un perfil longitudinal de impedancias.</p>
              <p>Este método permite identificar de forma anticipada múltiples condiciones internas del cable, todas ellas directamente vinculadas a cambios en su impedancia característica:</p>

              <h4 class="text-xl font-bold text-gray-900 mt-6 mb-3">Cambios de impedancia en empalmes y terminales</h4>
              <p>Los empalmes, uniones y accesorios poseen una geometría eléctrica diferente al cable, lo que genera micro-desadaptaciones de impedancia. El TDR permite verificar que estos componentes presenten un comportamiento estable, uniforme y compatible con la instalación, detectando empalmes envejecidos, deformados o con variaciones internas que podrían evolucionar hacia condiciones críticas.</p>

              <h4 class="text-xl font-bold text-gray-900 mt-6 mb-3">Variaciones asociadas a humedad</h4>
              <p>La presencia de humedad altera la permitividad dieléctrica del aislante y la pantalla, modificando localmente la impedancia. El TDR identifica estos sectores como anomalías suaves o distribuídas, incluso en etapas muy tempranas, permitiendo actuar antes de que se desarrollen procesos de degradación severos o descargas parciales.</p>

              <h4 class="text-xl font-bold text-gray-900 mt-6 mb-3">Interrupciones, discontinuidades y problemas mecánicos</h4>
              <p>Deformaciones por tracción, aplastamientos, radios de curvatura severos, desplazamiento del conductor o pantallas dañadas producen cambios abruptos o graduales en la impedancia. El TDR registra estas irregularidades mediante reflexiones características que permiten delimitar sectores donde el cable pudo haber sufrido esfuerzos mecánicos, movimientos del terreno, interferencias de obra civil o defectos de instalación.</p>

              <h4 class="text-xl font-bold text-gray-900 mt-6 mb-3">Perfil eléctrico como referencia de condición</h4>
              <p>Al analizar la forma de onda reflejada, el TDR genera una "firma eléctrica" completa del cable donde cada tramo posee un patrón de impedancia propio. La comparación entre fases o con mediciones históricas permite identificar evolución del envejecimiento, cambios incipientes en el dieléctrico, desplazamientos internos y cualquier desviación que indique pérdida de homogeneidad estructural.</p>

              <p class="mt-6">La Reflectometría TDR aporta una evaluación rápida, segura y extremadamente sensible del estado interno del cable, sin necesidad de aplicar alta tensión. Es un análisis ideal para:</p>

              <ul class="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Detectar variaciones internas antes de que se transformen en fallas reales.</li>
                <li>Validar la calidad eléctrica actual de empalmes y terminales.</li>
                <li>Identificar zonas con tensión mecánica o humedad en etapas tempranas.</li>
                <li>Complementar ensayos VLF, Tan Delta y la Integridad de la cubierta exterior para obtener un diagnóstico integral.</li>
                <li>Crear una línea base técnica que permite realizar mantenimiento predictivo.</li>
              </ul>

              <p class="mt-6 font-semibold">En síntesis, la Reflectometría TDR permite visualizar todos los elementos que modifican la impedancia del cable a lo largo de su recorrido, brindando una visión clara de su estabilidad eléctrica y su comportamiento estructural, optimizando la toma de decisiones y aumentando la confiabilidad operativa de la red.</p>
            </div>
          </div>
        </div>

        <!-- Tensión Aplicada VLF -->
        <div id="tension" class="scroll-mt-32 mb-10">
          <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center border-b-2 border-primary-200 pb-3">
              <span class="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm mr-3">
                <i class="pi pi-chart-bar"></i>
              </span>
              Ensayo de Tensión Aplicada (VLF)
            </h3>
            <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>La prueba VLF es una prueba de diagnóstico de tensión soportada simple que tiene como objetivo verificar la integridad del cable sometido a prueba. Si el cable de prueba tiene un defecto lo suficientemente grave a la tensión de prueba aplicada, se iniciará un árbol eléctrico y crecerá en el aislamiento en función de la geometría del defecto, la frecuencia y amplitud de la fuente de tensión.</p>
              <p>Esta prueba es aplicada en pruebas de campo de instalación, aceptación y mantenimiento, cuyos parámetros de ensayo como el voltaje y tiempos de prueba, consideraciones y metodología es indicada por la norma IEEE 400.2-2013 sección 5.1.</p>
              <p>En esta prueba se utiliza un equipo de prueba que proporcione una tensión VLF a 0.1 Hz con forma de onda senoidal conectado al objeto de prueba por su conductor central. El nivel de tensión de prueba es ajustado al valor especificado en la Tabla 3 de la norma IEEE 400.2 según la clase o voltaje de diseño del cable. Este voltaje de prueba es aplicado por una hora en pruebas de instalación o aceptación, mientras que en mantenimiento es aplicado por 15 o 30 minutos, el cable pasa la prueba si es capaz de soportarla, caso contrario, si se produce una falla con el colapso de tensión, el cable no pasa la prueba.</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl mt-6">
              <h4 class="font-bold text-gray-900 mb-4 text-lg">Tabla 3 - Niveles de Tensión de Prueba según IEEE 400.2</h4>
              <img src="/Tabla ensayo VLF.png" alt="Tabla de ensayo VLF según IEEE 400.2" class="w-full rounded-lg shadow-md" />
            </div>
          </div>
        </div>

        <!-- Tangente Delta -->
        <div id="tangente" class="scroll-mt-32 mb-10">
          <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center border-b-2 border-primary-200 pb-3">
              <span class="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm mr-3">
                <i class="pi pi-database"></i>
              </span>
              Ensayo de Tangente Delta y Capacidad
            </h3>
            <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>La prueba de tangente delta es una prueba de tensión soportada monitoreada, en donde se mide el factor de disipación (Tan Delta) en cables para determinar el factor de pérdida del material aislante, ya que este factor aumenta durante el proceso de envejecimiento del cable, por tanto, es utilizada como diagnóstico.</p>
              <p>El factor de disipación se define como la relación entre la corriente resistiva (IR) y capacitiva (IC) y el ángulo delta es el ángulo de fase entre la corriente capacitiva y la corriente total, a una frecuencia ω y tensión U.</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl mt-6 mb-6 flex justify-center">
              <img src="/Ensayo tangente.png" alt="Diagrama de ensayo de tangente delta" class="max-w-xs w-full rounded-lg shadow-md" />
            </div>
            <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>Donde el aislamiento del cable puede ser representado por un circuito equivalente que consiste en dos elementos, una resistencia y una capacitación, que, ante la aplicación de una tensión de prueba VLF, es calculado el coeficiente tan delta.</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl mt-6 mb-6 flex justify-center">
              <img src="/Ensayo tangente 2.png" alt="Circuito equivalente del aislamiento" class="max-w-xl w-full rounded-lg shadow-md" />
            </div>
            <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>Para la prueba de tangente delta, el cable es conectado a un equipo de prueba capaz de generar tensión VLF senoidal y medir TD, la metodología de prueba esta dictada por la norma IEEE 400.2 sección 5.4 y es aplicada en pruebas de campo de mantenimiento.</p>
              <p>En la prueba se mide tangente delta (TD) a 0,5 U0, U0, y 1,5 U0, (U0 Voltaje nominal fase-tierra del cable), por cada paso se debe incluir al menos seis mediciones de TD en intervalos de 10s a 0,1 Hz. Se calculan tres parámetros importantes, tangente delta promedio, tangente delta diferencial y la estabilidad de tangente delta, que vienen determinadas principalmente por la degradación del aislamiento del cable (árboles de agua), la corrosión de los blindajes metálicos, la humedad del aislamiento y la degradación de los accesorios.</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl mt-6">
              <h4 class="font-bold text-gray-900 mb-4 text-lg">Parámetros Evaluados:</h4>
              <ul class="space-y-3 text-gray-700">
                <li><strong>Tangente delta promedio:</strong> Es el valor promedio de las mediciones de TD en cada paso de tensión.</li>
                <li><strong>Tangente Delta diferencial (DTD):</strong> Es la diferencia del valor TD medido entre dos niveles de tensión, indica el comportamiento de TD con el incremento de voltaje.</li>
              </ul>
              <div class="mt-6 mb-6 flex justify-center">
                <img src="/Ensayo tangente 3.png" alt="Tangente Delta diferencial" class="max-w-xs w-full rounded-lg shadow-md" />
              </div>
              <ul class="space-y-3 text-gray-700">
                <li><strong>Estabilidad temporal de Tangente Delta (TDTS):</strong> Es la desviación estándar de los valores TD medidos en el tiempo a un paso de tensión.</li>
              </ul>
              <div class="mt-6 mb-6 flex justify-center">
                <img src="/Ensayo tangente 4.png" alt="Estabilidad temporal de Tangente Delta" class="w-48 rounded-lg shadow-md" />
              </div>
              <p class="text-gray-700 mt-4">La medición TD con forma de onda sinusoidal de 0,1 Hz ofrece una evaluación comparativa del envejecimiento de los aislamientos de PE, XLPE, TRXLPE, EPR y tipo papel, cuyos resultados permiten diferenciar entre sistemas de cables nuevos, defectuosos y muy degradados.</p>
              <p class="text-gray-700 mt-4">Los valores absolutos de VLF-TD, VLF-DTD y estabilidad temporal (VLF-TDTS) son utilizados como cifras de mérito o se comparan con datos históricos para calificar el estado del aislamiento del cable como:</p>
              <ul class="list-disc list-inside mt-2 space-y-1 text-gray-700">
                <li>No se requiere ninguna acción.</li>
                <li>Se aconseja un estudio más detallado.</li>
                <li>Acción requerida.</li>
              </ul>
              <p class="text-gray-700 mt-4">La norma IEEE 400.2 proporciona tablas con cifras de mérito para evaluación de aislamiento según su tipo.</p>
              <div class="mt-6 space-y-6">
                <div class="flex justify-center">
                  <img src="/tangente1.jpg" alt="Tabla de cifras de mérito 1" class="w-full max-w-2xl rounded-lg shadow-md" />
                </div>
                <div class="flex justify-center">
                  <img src="/tangente2.jpg" alt="Tabla de cifras de mérito 2" class="w-full max-w-2xl rounded-lg shadow-md" />
                </div>
                <div class="flex justify-center">
                  <img src="/tangente3.jpg" alt="Tabla de cifras de mérito 3" class="w-full max-w-2xl rounded-lg shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Integridad de Cubierta -->
        <div id="cubierta" class="scroll-mt-32 mb-10">
          <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center border-b-2 border-primary-200 pb-3">
              <span class="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm mr-3">
                <i class="pi pi-shield"></i>
              </span>
              Ensayo de Integridad de Cubierta Exterior
            </h3>
            <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>Esta prueba se utiliza para verificar la integridad eléctrica de la cubierta externa del cable después de su instalación en ductos, para ello se sigue la cláusula 5 de la norma IEC 60229:2007 y utiliza un equipo Hipot DC conectado por la pantalla del cable.</p>
              <p>Consiste en aplicar una tensión continua de 4kV por milímetro de espesor de la cubierta exterior extruido con un máximo de 10 kV entre la pantalla metálica y el electrodo exterior durante un período de 1 minuto; en donde no deberá producirse ninguna descarga disruptiva durante la prueba. Para que la prueba sea efectiva, es necesario que el suelo haga buen contacto con toda la superficie de la cubierta.</p>
            </div>
          </div>
        </div>

        <!-- Normas -->
        <div class="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-xl p-8 md:p-12 text-white">
          <h2 class="text-3xl font-bold mb-6 flex items-center">
            <i class="pi pi-book text-3xl mr-4"></i>
            Normas de Referencia
          </h2>
          <ul class="space-y-4 text-lg">
            <li class="flex items-start">
              <i class="pi pi-check-circle text-2xl mr-4 mt-1 flex-shrink-0"></i>
              <div><strong>IEEE Std 400.2-2013:</strong> Guide for Field Testing of Shielded Power Cable Systems Using VLF</div>
            </li>
            <li class="flex items-start">
              <i class="pi pi-check-circle text-2xl mr-4 mt-1 flex-shrink-0"></i>
              <div><strong>IEC 60229-2007:</strong> Tests on extruded oversheaths with a special protective function</div>
            </li>
          </ul>
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
