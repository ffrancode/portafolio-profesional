<template>
  <section class="about-page">

        <div class="about-container">

          <div class="about-hero">
            <div class="about-text">
              <h1 class="about-name">Franco Fernández</h1>
              <h2 class="about-role">{{ t('aboutPage.role') }}</h2>
              <p class="about-description">{{ t('aboutPage.intro') }}</p>
            </div>
            <div class="about-photo">
              <img src="@/assets/profile.webp" alt="photo">
            </div>
          </div>

          <div class="about-details">
            <div class="about-left">
              <h3>{{ t('aboutPage.title') }}</h3>
              <p>{{ t('aboutPage.description') }}</p>
            </div>
            <div class="about-right">
              <h3>{{ t('aboutPage.queryTitle') }}</h3>
              <p>{{ t('aboutPage.queryText') }}</p>
              <a href="/contact" class="email-link">francofernandz02@gmail.com →</a>
            </div>
          </div>

        </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.about-page {
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 5rem 2rem;
}

.about-container {
  max-width: 1100px;
  width: 100%;
  position: relative;
  z-index: 10;
}

.about-hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  margin-bottom: 5rem;
  flex-wrap: wrap;
}

.about-text {
  flex: 1;
  min-width: 280px;
}

:deep(.about-name) {
  display: inline-block;
  background: linear-gradient(270deg, #d9cae7, #5b5eff, #d9cae7);
  background-size: 400% 400%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  font-style: italic;
  font-weight: 600;
  animation: gradientMove 10s ease infinite;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
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



.about-role {
  font-size: 1.2rem;
  color: #8b5cf6;
  margin-bottom: 1.5rem;
}

.about-description {
  font-size: 1rem;
  color: #ccc;
  line-height: 1.6;
}

.about-photo {
  flex: 1;
  display: flex;
  justify-content: center;
}

.about-photo img {
  width: 350px;
  height: 350px;
  object-fit: contain;
  border-radius: 0 0 10% 10%;
  filter: brightness(0.9);
  transition: transform 0.4s ease;

  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%);
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 95%);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.about-photo img:hover {
  transform: scale(1.05);
}

.about-details {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;
  flex-wrap: wrap;
}

.about-left,
.about-right {
  flex: 1;
  min-width: 300px;
}

.about-left h3,
.about-right h3 {
  font-size: 1.3rem;
  color: #fff;
  margin-bottom: 1rem;
}

.about-left p,
.about-right p {
  color: #ccc;
  line-height: 1.6;
}

.experience {
  margin-top: 2rem;
}

.years {
  font-size: 2.5rem;
  color: #ff6b4a;
  font-weight: 700;
  margin-right: 0.5rem;
}

.email-link {
  display: inline-block;
  margin-top: 1.5rem;
  color: #ff6b4a;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.email-link:hover {
  color: #fff;
  transform: translateX(5px);
}


@media (max-width: 768px) {

  .about-page {
    display: flex;
    flex-direction: column;
    margin: 40% 0 10% 0;
    min-height: 100vh;
  }

  .about-hero {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .about-photo img {
    width: 250px;
    height: 250px;
  }

  .about-details {
    margin: auto 0 20% 0;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
