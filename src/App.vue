<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import MainLayout from './layouts/MainLayout.vue'

const route = useRoute()

const useLayout = computed(() => {
  return ['home', 'servicios', 'contacto'].includes(route.name)
})
</script>

<template>
  <MainLayout v-if="useLayout">
    <RouterView />
  </MainLayout>
  <RouterView v-else />
</template>
