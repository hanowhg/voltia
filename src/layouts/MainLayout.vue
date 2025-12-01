<template>
  <div class="min-h-screen flex flex-col">
    <HeaderComponent />
    <main class="flex-grow">
      <slot />
    </main>
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
</script>
