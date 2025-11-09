<template>
  <section class="home">
    <Background />
    <div class="overlay">

      <transition name="navbar-fade" mode="out-in">
        <Navbar :key="currentLang" />
      </transition>


      <transition name="page-fade" mode="out-in">
        <router-view :key="$route.fullPath + '-' + currentLang" />
      </transition>

      <Footer />

    </div>
  </section>
</template>

<script setup>
import Background from '@/components/Background.vue';
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { locale } = useI18n()
const currentLang = locale
</script>

<style scoped>

.home {
  max-height: 100vh;
  background: radial-gradient(circle at 30% 30%, #1a1a2e, #0f0f1a 80%);
  color: white;
  position: relative;
}

.overlay {
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.4s ease;
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.page-fade-enter-to,
.page-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}


.navbar-fade-enter-active {
  transition: all 0.5s ease;
}
.navbar-fade-leave-active {
  transition: all 0.3s ease;
}
.navbar-fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.navbar-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.navbar-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.navbar-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}


</style>
