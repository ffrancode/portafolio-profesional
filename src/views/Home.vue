<template>
  <section class="home">
    <div class="overlay">

          <div class="cube-background">
            <div class="container">
              <div class="cube" v-for="n in 3" :key="n">
                <div v-for="x in [-1, 0, 1]" :key="x" :style="`--x:${x}; --y:0;`">
                  <span v-for="i in [3, 2, 1]" :key="i" :style="`--i:${i};`"></span>
                </div>
              </div>
            </div>
          </div>

          <div class="hero">
            <h1 v-html="t('heroTitle')"></h1>
            <p class="subtitle">{{ t('heroSubtitle') }}</p>
            <router-link to="/projects" class="read-btn">
              {{ t('readBtn') }}
            </router-link>
          </div>

          <footer>
            <p class="footer-text">{{ t('footerCredit') }}</p>
          </footer>

    </div>
  </section>
</template>


<script setup>
import { useI18n } from "vue-i18n"
import { computed } from "vue"
const { t, locale } = useI18n()
const currentLang = computed(() => locale.value)

function toggleLang() {
  locale.value = locale.value === "en" ? "es" : "en"
}
</script>

<style scoped>

.cube-background {
  position: absolute;
  top: 43%;
  left: 75%;
  transform: translate(-50%, -50%) skewY(-20deg);
  opacity: 0.25;
  z-index: 0;
  animation: animate 5s linear infinite;
}

.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cube {
  position: relative;
  z-index: 2;

  &:nth-child(2) {
    z-index: 1;
    translate: -60px -60px;
  }

  &:nth-child(3) {
    z-index: 3;
    translate: 60px 60px;
  }

  div {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 30px;
    translate: calc(-70px * var(--x)) calc(-60px * var(--y));

    span {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 50px;
      background: #1e307e71;
      z-index: calc(1 * var(--i));
      transition: 1.5s;

      &:hover {
        transition: 0s;
        background: #4318a8a8;
        filter: drop-shadow(0 0 30px #9387ff);

        &:before,
        &:after {
          transition: 0s;
          background: #622fd8;
        }
      }

      &:before {
        content: "";
        position: absolute;
        left: -40px;
        width: 40px;
        height: 100%;
        background: rgba(132, 96, 218, 0.549);
        transform-origin: right;
        transform: skewY(45deg);
        transition: 1.5s;
      }

      &:after {
        content: "";
        position: absolute;
        top: -40px;
        left: 0;
        width: 100%;
        height: 40px;
        background: #26165f;
        transform-origin: bottom;
        transform: skewX(45deg);
        transition: 1.5s;
      }
    }
  }
}


.home {
  position: relative;
  width: 100%;
  overflow: hidden;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
}

.overlay {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  padding: 0 3rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero {
  margin-top: 13%;
  max-width: 600px;
  animation: fadeIn 1s ease forwards;
}

.hero h1 {
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.hero span {
  font-style: italic;
  opacity: 0.8;
}

:deep(.gradient-text) {
  display: inline-block;
  background: linear-gradient(270deg, #d9cae7, #8a8cff, #d9cae7);
  background-size: 400% 400%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  font-style: italic;
  font-weight: 600;
  animation: gradientMove 15s ease infinite;
}

@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.fade-lang-enter-active,
.fade-lang-leave-active {
  transition: opacity 0.5s ease, transform 0.4s ease;
}

.fade-lang-enter-from,
.fade-lang-leave-to {
  opacity: 0;
  transform: translateY(8px);
}


.subtitle {
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 4rem;
}

.read-btn {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 25px;
  color: #fff;
  padding: 0.7rem 1.6rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.read-btn:hover {
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.4);
  background: fixed;
}

.footer-text {
  margin: 4rem 0 0 0;
  font-size: 0.9rem;
  color: #aaa;
  text-align: left;
  max-width: 600px;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}


@media (max-width: 768px) {
  .home {
    margin: 20% auto;
    width: 85%;
  }

  .cube-background {
    top: 62%;
    left: 73%;
    transform: scale(0.35) translate(-50%, -50%) skewY(-20deg);
    animation: moveCube 2s alternate infinite;
  }

  .footer-text {
    margin: 20% 0;
  }

  @keyframes moveCube {
  from { opacity: 0.1;}
  to { opacity: 0.5;}
  }

}
</style>
