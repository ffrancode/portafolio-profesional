<template>
  <MainLayout />
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<style>
:root {
  --font-family: 'Playfair Display';
}

* {
  font-family: var(--font-family);
  transition: font-family 0.3s ease;
}
</style>
