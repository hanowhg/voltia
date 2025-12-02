<template>
  <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
    <div class="container-custom py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <!-- Company Info -->
        <div class="md:col-span-2">
          <div class="flex items-center mb-6">
            <img src="/logosf.png" alt="Voltia Logo" class="h-10 md:h-12 w-auto object-contain" />
          </div>
          <p class="text-gray-400 leading-relaxed max-w-md">
            Empresa especializada en diagnóstico eléctrico y localización de fallas en cables de potencia de baja, media y alta tensión. Más de 20 años de experiencia en ensayos eléctricos no destructivos y mantenimiento predictivo.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-bold mb-6 text-white">Enlaces Rápidos</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.label">
              <a
                :href="link.href"
                @click="link.onClick"
                class="text-gray-400 hover:text-primary-500 transition-colors inline-flex items-center group cursor-pointer"
              >
                <i class="pi pi-chevron-right text-xs mr-2 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-bold mb-6 text-white">Contacto</h4>
          <ul class="space-y-4 text-gray-400">
            <li class="flex items-start group">
              <div class="bg-primary-600 w-8 h-8 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                <i class="pi pi-map-marker text-sm"></i>
              </div>
              <div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ant%C3%A1rtida+Argentina+750%2C+B1625+Belen+de+Escobar%2C+Provincia+de+Buenos+Aires"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm hover:text-primary-500 transition-colors"
                >
                  Antártida Argentina 750, B1625 Belen de Escobar, Provincia de Buenos Aires
                </a>
              </div>
            </li>
            <li class="flex items-start group">
              <div class="bg-primary-600 w-8 h-8 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                <i class="pi pi-phone text-sm"></i>
              </div>
              <div>
                <div class="text-sm">+54 9 11 6358 6264</div>
              </div>
            </li>
            <li class="flex items-start group">
              <div class="bg-primary-600 w-8 h-8 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                <i class="pi pi-envelope text-sm"></i>
              </div>
              <div>
                <div class="text-sm">info@voltiaelectricaldiagnostic.com</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-700 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-400 text-sm">
            &copy; {{ currentYear }} Voltia. Todos los derechos reservados.
          </p>
          <div class="flex items-center gap-4 text-sm text-gray-400">
            <a href="#" class="hover:text-primary-500 transition-colors">Política de Privacidad</a>
            <span>|</span>
            <a href="#" class="hover:text-primary-500 transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const goToHome = () => {
  window.location.hash = '#/'
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 100)
}

const quickLinks = [
  {
    label: 'Inicio',
    href: '#/',
    onClick: (e) => {
      e.preventDefault()
      goToHome()
    }
  },
  { label: 'Servicios', href: '#/servicios' },
  { label: 'Contacto', href: '#/contacto' }
]
</script>
