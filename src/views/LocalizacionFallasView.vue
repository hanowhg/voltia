<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white py-16">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Localización de fallas en el Aislamiento de Cables de Baja, Media y Alta Tensión</h1>
          <p class="text-xl text-orange-50">
            Servicios especializados de pre-localización y puntualización de fallas
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
              <i class="pi pi-map-marker"></i>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Localización de fallas en el Aislamiento de Cables de Baja, Media y Alta Tensión</h2>
          </div>

          <p class="text-gray-700 mb-6 text-lg leading-relaxed">
            Las fallas en los cables son provocadas por diversos factores, tales como: desperfectos de fabricación, sobre exigencias en su uso, instalación deficiente, por efecto del tipo de suelo, entre otras.
          </p>
          <p class="text-gray-700 mb-10 text-lg leading-relaxed">
            El objetivo de nuestro servicio es lograr la localización de fallas de forma rápida y precisa, a fin de recuperar la operatividad del sistema eléctrico del cliente. Contamos con personal técnico capacitado e instrumentos de alta calidad.
          </p>
        </div>

        <!-- Etapa de Pre-localización -->
        <div id="prelocalizacion" class="scroll-mt-32 mb-10">
          <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center border-b-2 border-primary-200 pb-3">
              <span class="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm mr-3">
                <i class="pi pi-search"></i>
              </span>
              Etapa de pre-localización de fallas (En torno a la falla)
            </h3>

            <!-- Ensayo de Resistencia de Aislación -->
            <div class="mb-10">
              <h4 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span class="bg-secondary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
                  <i class="pi pi-bolt"></i>
                </span>
                Ensayo de Resistencia de Aislación
              </h4>
              <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>Una de las primeras pruebas que se realiza en el proceso de pre-localización de fallas en cables es la medición resistencia de aislación. Esta técnica es fundamental para obtener un primer diagnóstico del estado de la misma y permitir clasificar el tipo de falla presente, información clave para seleccionar el método de localización más adecuado.</p>
                <p>La prueba consiste en aplicar una tensión continua habitualmente entre 500 V y 5000 V (dependiendo de la tensión de servicio), entre conductor y pantalla vinculada a tierra, mediante un Megóhmetro. Este equipo mide la resistencia de aislación, es decir, cuánta corriente de fuga atraviesa el aislamiento bajo una tensión de ensayo determinada. A partir de este resultado, es posible identificar la severidad de la falla.</p>
                <p>En este sentido, si la resistencia medida es muy baja (en el orden de los kilo-ohm o menos), se interpreta como una falla franca a tierra, es decir, un cortocircuito directo entre conductor y tierra o una perforación total del aislamiento. Por el contrario, si la resistencia es alta (en el orden de los megaohms o gigaohms), se trata de una falla de alta impedancia, donde el contacto a tierra no es directo o franco.</p>
                <p>Esta clasificación es crítica ya que las técnicas de localización posteriores varían en función del tipo de falla. Por ejemplo, las fallas de alta impedancia requieren métodos como el uso de onda de choque para poder ser detectadas, mientras que las fallas francas pueden localizarse directamente mediante reflectometría convencional.</p>
                <p>Este procedimiento se aplica en cables de baja, media y alta tensión, ya sea para cables de transmisión o distribución de potencia. Es una prueba sencilla, no destructiva y de rápida ejecución, lo que la convierte en una herramienta esencial en cualquier procedimiento de diagnóstico de cables.</p>
                <p>Es importante destacar que, aunque el megado no localiza la falla en forma directa, proporciona información vital sobre su naturaleza y severidad, permitiendo así optimizar el proceso de localización posterior y prevenir la aplicación de métodos inadecuados que podrían dañar aún más el cable.</p>
              </div>
            </div>

            <!-- Reflectometría Convencional (TDR) -->
            <div class="mb-10">
              <h4 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span class="bg-secondary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
                  <i class="pi pi-sliders-h"></i>
                </span>
                Reflectometría Convencional (TDR)
              </h4>
              <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>La reflectometría en el dominio del tiempo (TDR) se utiliza para localizar y caracterizar los cambios de impedancia en un sistema de cables. Esta es una prueba sencilla que es aplicada para medir la longitud del cable para pruebas de diagnóstico y para localizar fallas de baja resistencia, obteniendo la distancia en donde se encuentra la avería.</p>
                <p>Para lo cual, los reflectómetros (TDR) transmiten pulsos de baja tensión y de corta duración por el conductor del cable. Registran el tiempo transcurrido del pulso al recorrer toda la longitud del cable y sus reflexiones producidas por desviaciones de la estructura homogénea del cable. Estas reflexiones inciden de vuelta a la fuente y son mostradas en una pantalla de visualización.</p>
                <p>Los cambios en las impedancias aparecen en una secuencia temporal y permiten al operador ubicar e identificar el inicio y fin del cable, los empalmes y derivaciones, los cambios en el tipo de cable y averías como cortocircuitos e interrupciones. La lectura digital de un TDR proporciona la distancia a la avería y la medición de la longitud del cable, a partir del tiempo de reflexión de un pulso conociendo la velocidad de propagación de conductor. La medición TDR se realiza con el cable fuera de línea y requiere que al menos dos conductores (conductor central y la pantalla) estén en estrecha proximidad.</p>
              </div>
            </div>

            <!-- Ensayo de Tensión Aplicada -->
            <div class="mb-10">
              <h4 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span class="bg-secondary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
                  <i class="pi pi-chart-bar"></i>
                </span>
                Ensayo de Tensión Aplicada
              </h4>
              <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>La prueba de tensión aplicada en el proceso de localización de falla no tiene carácter de diagnóstico ni de aceptación del cable, sino que se emplea exclusivamente para determinar el voltaje de disrupción de la avería, es decir, a qué nivel de tensión es encendida la falla en el cable defectuoso.</p>
                <p>El procedimiento consiste en aplicar una tensión continua creciente entre el conductor y tierra, sin superar el valor de la tensión de servicio por fase, con el objetivo de inducir una ruptura dieléctrica temporal en el punto débil o defecto del sistema de aislación.</p>
                <p>La respuesta del cable frente a esta tensión permite clasificar la naturaleza de la falla:</p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>Disrupción posterior a un cierto tiempo y a valores cercanos a la tensión de prueba. Este es un indicativo de existencia de falla no franca de alta resistencia ya que requiere superar cierta tensión para producir la ruptura.</li>
                  <li>Disrupción en los primeros instantes de inyección de tensión. El cable presenta una falla franca de cortocircuito, no es capaz de soportar tensión y produce caída de tensión instantánea a tierra.</li>
                </ul>
                <p>Esta técnica es útil para confirmar la presencia de defectos que no se manifiestan a tensiones bajas, como las aplicadas en un megado convencional.</p>
              </div>
            </div>

            <!-- Método de Reflexión de Arco (ARM) -->
            <div class="mb-10">
              <h4 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span class="bg-secondary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
                  <i class="pi pi-sitemap"></i>
                </span>
                Método de Reflexión de Arco (ARM)
              </h4>
              <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>El método reflexión del arco de sobretensión permite localizar fallas de alta resistencia e intermitentes. Donde un generador de sobretensión puede convertir dichas fallas temporalmente en fallas de resistencia muy inferiores a la impedancia característica, facilitando su localización en una operación combinada de TDR y el generador de sobretensión en dos fases.</p>
                <p>En la primera fase de la medición, los pulsos del TDR no son reflejados por la falla de alta resistencia o intermitente y sólo son visibles el inicio, final y empalmes del cable. En la segunda fase, se conecta el generador de sobretensión, cuya amplitud del pulso de sobretensión es lo suficientemente alta como para romper la avería y generar un arco en su lugar. El pulso del TDR se reflejará en el arco y una imagen de la falla temporal de baja resistencia se visualizará como una reflexión negativa, indicando la ubicación de la falla en pantalla. Una vez que cesa el arco, la falla vuelve a su estado de alta resistencia.</p>
              </div>
            </div>

            <!-- Método de Corriente de Impulso (ICE) -->
            <div class="mb-10">
              <h4 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span class="bg-secondary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
                  <i class="pi pi-flash"></i>
                </span>
                Método de Corriente de Impulso (ICE)
              </h4>
              <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>El método de corriente de impulso permite localizar averías en cables de alta resistencia e intermitentes. Donde un generador de sobretensión envía un pulso de alta tensión al cable defectuoso, produciendo un arco eléctrico en el lugar de la avería.</p>
                <p>Parte de la energía del impulso de AT se refleja en el inicio del cable y, debido a la baja impedancia del condensador de sobretensión, es reflejada nuevamente en el cable. La señal rebota hasta que se disipa toda su energía. Este proceso puede ser observado acoplando un TDR en el cable, donde el espaciado de las reflexiones que se muestran en una pantalla es la medida de la distancia a la falla.</p>
              </div>
            </div>

            <!-- Método de Decaimiento (DECAY) -->
            <div>
              <h4 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span class="bg-secondary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
                  <i class="pi pi-chart-line"></i>
                </span>
                Método de Decaimiento (DECAY)
              </h4>
              <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>El método Decay permite localizar averías en cables de alta resistencia e intermitentes cuando la tensión de ruptura de la avería es superior a la tensión máxima disponible del generador de sobretensión, o cuando la capacitancia del cable se aproxima o supera la capacitancia de un thumper.</p>
                <p>Un equipo de prueba de CC o un quemador cargarán continuamente el cable hasta que se produzca el arco de la avería. En cada arco, se genera una onda viajera que se refleja de un lado a otro entre el inicio del cable y la falla, hasta que se disipa su energía. Esto puede ser observado acoplando un TDR, cuyo espaciado de las reflexiones que se muestran en una pantalla es la medida de la distancia a la falla.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Etapa de Puntualización -->
        <div id="puntual" class="scroll-mt-32 mb-10">
          <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center border-b-2 border-primary-200 pb-3">
              <span class="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm mr-3">
                <i class="pi pi-map-marker"></i>
              </span>
              Etapa de Puntualización: Ubicación Exacta de la Falla
            </h3>

            <!-- Impulsos de Alta Tensión -->
            <div class="mb-10">
              <h4 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span class="bg-secondary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
                  <i class="pi pi-volume-up"></i>
                </span>
                Impulsos de Alta Tensión (THUMPER)
              </h4>
              <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>Los thumpers son dispositivos de descarga capacitiva y de generación de sobretensión en AT, con suficiente tensión y energía para romper un punto de avería y también generar un golpe audible en la ubicación de la avería en el cable. El Thumper se caracteriza por su tensión y energía nominales. La energía nominal se calcula según la ecuación:</p>
              </div>
              <div class="mt-6 mb-6 flex justify-center">
                <img src="/thumper.png" alt="Ecuación de energía nominal del Thumper" class="w-44 rounded-lg shadow-md" />
              </div>
              <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p class="italic bg-gray-50 p-4 rounded-lg">Donde E es la clasificación energética del thumper (J o W-s), C es la capacitancia interna (F) y V es la tensión nominal del thumper.</p>
                <p>El funcionamiento del Thumper se basa en la descarga periódica de su condensador interno en el cable. Cuyo propósito es romper la falla en el espacio de chispa (spark gap) y causar un ruido audible en ella, o bien proporcionar una corriente de arco lo suficientemente fuerte para permitir la medición de la reflexión del arco.</p>
                <p>La aplicación combinada de equipos Thumper y TDR es útil para prelocalizar fallas mediante el método de reflexión del arco y luego identificar la falla con instrumentos acústicos y/o electromagnéticos.</p>
              </div>
            </div>

            <!-- Detección Acústica y Electromagnética -->
            <div>
              <h4 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span class="bg-secondary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
                  <i class="pi pi-phone"></i>
                </span>
                Detección Acústica y Electromagnética
              </h4>
              <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>El método consiste en descargar un condensador (Thumper) en el cable defectuoso. Luego, con un detector electromagnético, se rastrea el pulso del golpe por el cable, mientras que con el detector acústico se detecta el golpe audible causado por la descarga. En las proximidades de la falla, la onda de transición magnética se utiliza para iniciar un temporizador y la señal acústica para detenerlo. La medición del tiempo transcurrido indica la distancia o profundidad de la falla. Cuando el tiempo transcurrido entre el flashover y el golpe es mínimo, el operador se encuentra directamente encima de la falla.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Normas -->
        <div class="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-xl p-8 md:p-12 text-white">
          <h2 class="text-3xl font-bold mb-6 flex items-center">
            <i class="pi pi-book text-3xl mr-4"></i>
            Normas de Referencias
          </h2>
          <ul class="space-y-4 text-lg">
            <li class="flex items-start">
              <i class="pi pi-check-circle text-2xl mr-4 mt-1 flex-shrink-0"></i>
              <div><strong>IEEE Std 400.2-2013:</strong> IEEE Guide for Field Testing of Shielded Power Cable Systems Using Very Low Frequency (VLF) (less than 1Hz)</div>
            </li>
            <li class="flex items-start">
              <i class="pi pi-check-circle text-2xl mr-4 mt-1 flex-shrink-0"></i>
              <div><strong>IEEE Std 1234-2019:</strong> IEEE Guide for Fault-Locating Techniques on Shielded Power Cable Systems</div>
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
