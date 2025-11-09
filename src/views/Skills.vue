<template>
  <section class="skills-page">
    <div class="skills-container">
      <h2 class="skills-title">{{ t('skillsPage.title') }}</h2>
      <p class="skills-intro">{{ t('skillsPage.intro') }}</p>

      <div class="skills-grid">
        <div v-for="skill in skills" :key="skill.name" class="skill-card">
          <img :src="skill.icon" :alt="skill.name" class="skill-icon" />
          <h3>{{ skill.name }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const skills = [
  { name: 'HTML', icon: '/icons/html.svg' },
  { name: 'CSS', icon: '/icons/css.svg' },
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'Vue.js', icon: '/icons/vue.svg' },
  { name: 'Node.js', icon: '/icons/nodejs.svg' },
  { name: 'Figma', icon: '/icons/figma.svg' },
  { name: 'Git', icon: '/icons/git.svg' },
  { name: 'npm', icon: '/icons/npm.svg' },
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'Java', icon: '/icons/java.svg' },
]
</script>

<style scoped>

.skills-page {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 6rem 2rem;
}

.skills-container {
  background: transparent;
  max-width: 1100px;
  width: 100%;
  text-align: center;
}

.skills-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #8b5cf6;
}

.skills-intro {
  color: #ccc;
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.skill-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem 1rem;
  width: 100%;
  max-width: 180px;
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 6px 20px rgba(139, 92, 246, 0.3);
}

.skill-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
  filter: invert(54%) sepia(92%) saturate(7484%) hue-rotate(243deg) brightness(97%) contrast(103%);
  animation: iconColor 5s ease infinite;
}

.skill-card:nth-child(1) .skill-icon { animation-delay: 0s; }
.skill-card:nth-child(2) .skill-icon { animation-delay: 1s; }
.skill-card:nth-child(3) .skill-icon { animation-delay: 1.5s; }
.skill-card:nth-child(4) .skill-icon { animation-delay: 2s; }
.skill-card:nth-child(5) .skill-icon { animation-delay: 2.5s; }
.skill-card:nth-child(6) .skill-icon { animation-delay: 3s; }
.skill-card:nth-child(7) .skill-icon { animation-delay: 3.5s; }
.skill-card:nth-child(8) .skill-icon { animation-delay: 4s; }
.skill-card:nth-child(9) .skill-icon { animation-delay: 4.5s; }
.skill-card:nth-child(10) .skill-icon { animation-delay: 5s; }

@keyframes iconColor {
  0%, 100% {
    filter: invert(54%) sepia(92%) saturate(7484%) hue-rotate(243deg) brightness(97%) contrast(103%);
  }
  50% {
    filter: invert(70%) sepia(60%) saturate(5000%) hue-rotate(210deg) brightness(110%) contrast(120%);
  }
}


@media (max-width: 768px) {

  .skills-page {
    padding: 4rem 1rem;
    margin: 40% 0;
  }

  .skills-title {
    font-size: 2rem;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1.5rem;
  }

  .skill-card {
    padding: 1.5rem 1rem;
    max-width: 100px;
    max-height: 100px;
  }

  .skill-icon {
    width: 50px;
    height: 50px;
  }
}

</style>
