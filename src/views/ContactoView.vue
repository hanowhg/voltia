<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white py-16">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Contáctanos</h1>
          <p class="text-xl text-orange-50">
            Estamos aquí para ayudarte con tus necesidades de diagnóstico eléctrico
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contactanos para:</h2>
            <div class="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>

            <!-- Servicios en tarjetas -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
              <div class="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border-2 border-primary-100 hover:border-secondary-400 transition-all">
                <div class="bg-secondary-600 text-white w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i class="pi pi-chart-line text-2xl"></i>
                </div>
                <p class="text-gray-700 font-medium leading-relaxed">
                  Realizar un diagnóstico eléctrico completo de tus cables
                </p>
              </div>

              <div class="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border-2 border-primary-100 hover:border-secondary-400 transition-all">
                <div class="bg-secondary-600 text-white w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i class="pi pi-map-marker text-2xl"></i>
                </div>
                <p class="text-gray-700 font-medium leading-relaxed">
                  Localizar con precisión el punto exacto de una falla
                </p>
              </div>

              <div class="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border-2 border-primary-100 hover:border-secondary-400 transition-all">
                <div class="bg-secondary-600 text-white w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i class="pi pi-headphones text-2xl"></i>
                </div>
                <p class="text-gray-700 font-medium leading-relaxed">
                  Recibir soporte técnico especializado y atención de emergencia 24/7
                </p>
              </div>
            </div>

            <!-- Mensaje de experiencia -->
            <div class="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-8 rounded-2xl max-w-4xl mx-auto shadow-xl">
              <div class="flex items-center justify-center mb-3">
                <i class="pi pi-verified text-3xl mr-3"></i>
                <h3 class="text-2xl font-bold">Experiencia Comprobada</h3>
              </div>
              <p class="text-lg leading-relaxed">
                Contás con un equipo técnico con más de 20 años de experiencia, equipamiento profesional y procedimientos alineados con normas internacionales.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Contact Info -->
            <div class="space-y-8">
              <div>
                <h3 class="text-2xl font-bold mb-6 text-gray-900">Información de Contacto</h3>
              </div>

              <div class="space-y-6">
                <div class="flex items-start p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border-l-4 border-secondary-500">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Ant%C3%A1rtida+Argentina+750%2C+B1625+Belen+de+Escobar%2C+Provincia+de+Buenos+Aires"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-secondary-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 hover:bg-gray-500 transition-colors cursor-pointer"
                  >
                    <i class="pi pi-map-marker text-xl"></i>
                  </a>
                  <div>
                    <div class="font-semibold text-gray-900 mb-1">Dirección</div>
                    <div class="text-gray-600">Antártida Argentina 750, B1625 Belen de Escobar, Provincia de Buenos Aires</div>
                  </div>
                </div>

                <div class="flex items-start p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border-l-4 border-secondary-500">
                  <div class="bg-secondary-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i class="pi pi-phone text-xl"></i>
                  </div>
                  <div>
                    <div class="font-semibold text-gray-900 mb-1">Teléfono</div>
                    <div class="text-gray-600">+54 9 11 6358 6264</div>
                  </div>
                </div>

                <div class="flex items-start p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border-l-4 border-secondary-500">
                  <div class="bg-secondary-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i class="pi pi-envelope text-xl"></i>
                  </div>
                  <div>
                    <div class="font-semibold text-gray-900 mb-1">Email</div>
                    <div class="text-gray-600">info@voltiaelectricaldiagnostic.com</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact Form -->
            <div class="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border border-gray-200">
              <h3 class="text-2xl font-bold mb-6 text-gray-900">Envíanos un Mensaje</h3>

              <!-- Mensaje de éxito -->
              <div v-if="formStatus.success" class="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-lg">
                <p class="text-green-700 font-semibold flex items-center">
                  <i class="pi pi-check-circle text-xl mr-2"></i>
                  {{ formStatus.message }}
                </p>
              </div>

              <!-- Mensaje de error -->
              <div v-if="formStatus.error" class="mb-6 p-4 bg-red-50 border-2 border-red-500 rounded-lg">
                <p class="text-red-700 font-semibold flex items-center">
                  <i class="pi pi-times-circle text-xl mr-2"></i>
                  {{ formStatus.message }}
                </p>
              </div>

              <form @submit.prevent="handleSubmit" class="space-y-5">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Nombre completo *</label>
                  <input
                    v-model="formData.nombre"
                    type="text"
                    placeholder="Tu nombre"
                    required
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-secondary-500 transition-colors"
                  />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input
                    v-model="formData.email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-secondary-500 transition-colors"
                  />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Teléfono</label>
                  <input
                    v-model="formData.telefono"
                    type="tel"
                    placeholder="+54 9 11 6358 6264"
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-secondary-500 transition-colors"
                  />
                </div>

                <div class="border-t-2 border-gray-200 pt-6">
                  <h3 class="text-lg font-semibold text-gray-900 mb-4">Tipo de servicio requerido *</h3>
                  <select
                    v-model="formData.tipoServicio"
                    required
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-secondary-500 transition-colors"
                  >
                    <option value="" disabled>Selecciona un servicio</option>
                    <option value="Diagnóstico de estado eléctrico">Diagnóstico de estado eléctrico</option>
                    <option value="Localización de falla (Aislación principal)">Localización de falla (Aislación principal)</option>
                    <option value="Localización de falla (Cubierta exterior)">Localización de falla (Cubierta exterior)</option>
                    <option value="Seguimiento de traza">Seguimiento de traza</option>
                  </select>
                </div>

                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-4">Especificaciones del cable</h3>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Tensión (kV) *</label>
                  <input
                    v-model="formData.tension"
                    type="text"
                    placeholder="Ej: 13.2, 33, 132"
                    required
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-secondary-500 transition-colors"
                  />
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Aislación</label>
                  <input
                    v-model="formData.aislacion"
                    type="text"
                    placeholder="Ej: XLPE, EPR, PVC"
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-secondary-500 transition-colors"
                  />
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Longitud (km) *</label>
                  <input
                    v-model="formData.longitud"
                    type="text"
                    placeholder="Ej: 2.5, 10, 15.3"
                    required
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-secondary-500 transition-colors"
                  />
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Comentarios adicionales</label>
                  <textarea
                    v-model="formData.comentarios"
                    placeholder="Información adicional sobre el proyecto o servicio requerido..."
                    rows="4"
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-secondary-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    :disabled="formStatus.loading"
                    class="w-full bg-secondary-600 hover:bg-secondary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    <span v-if="!formStatus.loading">Enviar Mensaje</span>
                    <span v-else class="flex items-center">
                      <i class="pi pi-spin pi-spinner text-xl mr-2"></i>
                      Enviando...
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { usePageMeta } from '../composables/usePageMeta'

usePageMeta({
  title: 'Contacto - Voltia Electrical Diagnostic | Solicite un Diagnóstico',
  description: 'Contáctenos para diagnóstico eléctrico y localización de fallas en cables. Atención personalizada, presupuestos sin cargo. Teléfono: +54 9 11 6358 6264. Email: info@voltiaelectricaldiagnostic.com. Belén de Escobar, Buenos Aires, Argentina.',
  keywords: 'contacto voltia, solicitar diagnóstico eléctrico, presupuesto cables, diagnóstico cables Buenos Aires, localización fallas Argentina, contacto servicios eléctricos',
  canonical: 'https://voltiaelectricaldiagnostic.com/#/contacto'
})

const formData = ref({
  nombre: '',
  email: '',
  telefono: '',
  tipoServicio: '',
  tension: '',
  aislacion: '',
  longitud: '',
  comentarios: '',
  mensaje: ''
})

const formStatus = ref({
  loading: false,
  success: false,
  error: false,
  message: ''
})

const handleSubmit = async () => {
  formStatus.value = { loading: true, success: false, error: false, message: '' }

  try {
    const apiUrl = import.meta.env.DEV
      ? 'http://localhost:3000/api/send-email'
      : 'https://voltiaelectricaldiagnostic.com/send-email.php'

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData.value)
    })

    const data = await response.json()

    if (response.ok && data.success) {
      formStatus.value = {
        loading: false,
        success: true,
        error: false,
        message: '¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.'
      }
      formData.value = { nombre: '', email: '', telefono: '', tipoServicio: '', tension: '', aislacion: '', longitud: '', comentarios: '', mensaje: '' }
      setTimeout(() => { formStatus.value.success = false }, 5000)
    } else {
      throw new Error(data.message || 'Error al enviar el mensaje')
    }
  } catch (error) {
    console.error('Error:', error)
    formStatus.value = {
      loading: false,
      success: false,
      error: true,
      message: 'Error al enviar el mensaje. Por favor intente nuevamente o contáctenos directamente.'
    }
    setTimeout(() => { formStatus.value.error = false }, 5000)
  }
}

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
