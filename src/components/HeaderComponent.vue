<template>
  <header class="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
    <nav class="container-custom py-3 md:py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <a href="/" class="flex items-center group">
            <img src="/logo.png" alt="Voltia Logo" class="h-16 md:h-20 w-auto object-contain" />
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-1 xl:space-x-2">
          <a
            v-for="item in menuItems"
            :key="item.label"
            :href="item.href"
            class="text-gray-700 hover:text-primary-600 font-semibold transition-all duration-300 text-lg px-4 py-2 rounded-lg hover:bg-primary-50 relative group"
          >
            {{ item.label }}
            <span class="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-600 to-primary-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </div>

        <!-- CTA Button -->
        <div class="hidden lg:block">
          <a href="#/contacto" class="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-600/40 hover:scale-105 inline-flex items-center">
            <i class="pi pi-phone mr-2 text-sm"></i>
            Contactar
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden text-gray-700 hover:text-primary-600 hover:bg-primary-50 p-2.5 rounded-lg transition-all duration-200"
        >
          <i :class="mobileMenuOpen ? 'pi pi-times' : 'pi pi-bars'" class="text-xl"></i>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-if="mobileMenuOpen"
          class="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4"
        >
          <div class="flex flex-col space-y-2">
            <a
              v-for="item in menuItems"
              :key="item.label"
              :href="item.href"
              class="text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-semibold transition-all px-4 py-3 rounded-lg text-sm"
              @click="toggleMobileMenu"
            >
              {{ item.label }}
            </a>
            <a href="#/contacto" @click="toggleMobileMenu" class="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-primary-600/30 w-full mt-2 inline-flex items-center justify-center">
              <i class="pi pi-phone mr-2 text-sm"></i>
              Contactar
            </a>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const menuItems = [
  { label: 'Inicio', href: '#/' },
  { label: 'Servicios', href: '#/servicios' },
  { label: 'Contacto', href: '#/contacto' }
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>
