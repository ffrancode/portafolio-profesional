<template>
          <nav :class="['navbar', { 'navbar-scrolled': scrolled }]">

            <button class="menu-toggle" @click="toggleMenu">
              ☰
            </button>            


            <ul :class="{ 'show-menu': isMenuOpen }">
              <li><router-link to="/" @click="closeMenu">{{ t('home') }}</router-link></li>
              <li><router-link to="/about" @click="closeMenu">{{ t('about') }}</router-link></li>
              <li><router-link to="/skills" @click="closeMenu">{{ t('skills') }}</router-link></li>
              <li><router-link to="/contact" @click="closeMenu">{{ t('contact') }}</router-link></li>
            </ul>

            <div class="nav-actions">
              <a
                href="/files/cv-franco-fernandez.pdf"
                download="cv-franco-fernandez.pdf"
                class="cv-btn"
              >
                {{ t('downloadCV') }}
              </a>

            <button 
              class="font-btn" 
              @click="toggleFont"
              :data-tooltip="t('tooltip')"
            >
              Aa ↻
            </button>

              <button 
              class="lang-btn" 
              @click="toggleLang"
              >
                <img 
                  :src="currentLang === 'en' ? flagES : flagUS" 
                  :alt="currentLang === 'en' ? 'English' : 'Español'" 
                  class="flag-icon"
                />
              </button>

            </div>
          </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import flagES from '@/assets/flag-es.svg'
import flagUS from '@/assets/flag-us.svg'

const { t, locale } = useI18n()
const scrolled = ref(false)

const isMenuOpen = ref(false)
const closeMenu = () => {
  isMenuOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const fonts = [
  "'Playfair Display', serif",
  "'Roboto Mono', monospace",
  "'Montserrat', sans-serif",
  "'Nunito', sans-serif",
  "'Ubuntu', sans-serif",
  "'Josefin Sans', sans-serif",
  "'Libre Baskerville', serif",
  "'Neuton', serif",
]

const currentFontIndex = ref(
  Number(localStorage.getItem('fontIndex')) || 0
)

onMounted(() => {
  document.documentElement.style.setProperty('--font-family', fonts[currentFontIndex.value])
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggleFont = () => {
  currentFontIndex.value = (currentFontIndex.value + 1) % fonts.length
  const nextFont = fonts[currentFontIndex.value]
  document.documentElement.style.setProperty('--font-family', nextFont)
  localStorage.setItem('fontIndex', currentFontIndex.value)
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 30
}

const currentLang = ref(locale.value)

const toggleLang = () => {
  locale.value = locale.value === 'en' ? 'es' : 'en'
  currentLang.value = locale.value
}
</script>

<style scoped>

.navbar-scrolled {
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
}

.router-link-active {
 color: #a7a8ff;
  font-weight: bold;
}

.navbar {
  border-radius: 25px;
  margin: 1%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 3rem;
  position: fixed;
  width: 90%;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(6px);
  transition: background-color 0.6s ease, backdrop-filter 0.6s ease, box-shadow 0.6s ease;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.navbar-scrolled {
  background-color: rgba(12, 0, 20, 0.35);
  backdrop-filter: blur(14px);
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.25);
}

ul {
  list-style: none;
  display: flex;
  gap: 2rem;
}

ul a {
  position: relative;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
  padding-bottom: 4px;
}

ul a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  background-color: #6366f1;
  transition: width 0.3s ease;
}

ul a:hover::after {
  width: 100%;
}

.lang-btn{
  background: none;
  border: none;
  padding: 0;
  align-items: center;
}

.flag-icon {
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.flag-icon:hover {
  transform: scale(1.1);
}

.font-btn {
  background: none;
  border: 2px solid rgba(255,255,255,0.2);
  color: #fff;
  background: transparent;
  font-size: 0.9rem;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.font-btn:hover {
  background: rgba(255,255,255,0.1);
  transform: scale(1.1);
}

.cv-btn {
  background: none;
  border: 2px solid rgba(255,255,255,0.2);
  color: #fff;
  background: transparent;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.cv-btn:hover {
  background: rgba(255,255,255,0.1);
  transform: scale(1.1);
}

.font-btn::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: -35px;
  left: 50%;
  transform: translateX(-50%) scale(0.9);
  background: linear-gradient(90deg, #ffffff0a, #ffffff0a);
  color: rgba(255, 255, 255, 0.849);
  font-size: 0.75rem;
  padding: 6px 8px;
  border-radius: 6px;
  opacity: 0;
  pointer-events: none;
  white-space: nowrap;
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.font-btn:hover::after {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}


.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: #a7a8ff;
  font-size: 2rem;
  cursor: pointer;
}


@media (max-width: 768px) {

  .navbar {
    flex-direction: row;
    align-items: center;
    padding: 10px;
    margin: 20px auto;
    border-radius: 5px;
  }

  .menu-toggle {
    display: block;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(12, 0, 20, 0.85);
    backdrop-filter: blur(4px);
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    border-radius: 2px 2px 12px 12px;

    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0.25, 1, 0.3, 1), opacity 0.4s ease;
  }

  ul.show-menu {
    display: flex;
    max-height: 300px;
    opacity: 1;
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

}


</style>
