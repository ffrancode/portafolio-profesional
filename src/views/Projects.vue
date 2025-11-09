<template>
  <section class="projects-page">
    <div class="projects-container">
      <h2 class="projects-title">{{ t('projectsPage.title') }}</h2>
      <p class="projects-intro">{{ t('projectsPage.intro') }}</p>

      <div class="projects-grid">
        <div 
        v-for="project in projects" 
        :key="project.title" 
        class="project-card"
        >
          <img :src="project.image" :alt="project.title" class="project-img" />
          <div class="project-info">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <p>{{ project.info }}</p>
            <a href="#" onclick="alert('Soon / Pronto'); return false">➜</a>
          </div>

          
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const projects = [
  {
    title: t('projectsPage.projects.0.title'),
    description: t('projectsPage.projects.0.description'),
    image: '/icons/reporte.svg',
    info: t('projectsPage.projects.0.info')
  },
  {
    title: t('projectsPage.projects.1.title'),
    description: t('projectsPage.projects.1.description'),
    image: '/icons/ecomm.svg',
    info: t('projectsPage.projects.1.info')
  },
  {
    title: t('projectsPage.projects.2.title'),
    description: t('projectsPage.projects.2.description'),
    image: '/icons/coser.svg',
    info: t('projectsPage.projects.2.info')
  }
]


</script>

<style scoped>
.projects-page {
  position: relative;
  max-height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 2rem;
}

.projects-container {
  max-width: 1100px;
  width: 100%;
  text-align: center;
}

.projects-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #8b5cf6;
  margin-bottom: 1rem;
}

.projects-intro {
  color: #ccc;
  margin-bottom: 3rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 20px rgba(139, 92, 246, 0.3);
}

.project-img {
  padding: 30px 0 0 0;
  width: 100px;
  height: 100px;
  object-fit: cover;
  filter: invert(54%) sepia(92%) saturate(7484%) hue-rotate(243deg) brightness(77%) contrast(90%);
}

.project-info {
  padding: 1.5rem;
}

.project-info h3 {
  color: #fff;
  margin-bottom: 0.5rem;
}

.project-info p {
  color: #ccc;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.project-info p:nth-child(3) {
    color: #8b5cf6;
    font-weight: 600;
}

.project-info a {
  color: #c2acf5;
  font-size: 1.5rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.project-info a:hover {
  color: rgb(156, 60, 43);
}

.project-link {
  color: #8b5cf6;
  font-weight: 600;
  text-decoration: none;
}

.project-link:hover {
  color: white;
}


@media (max-width: 768px) {
  .projects-page {
    margin: 60% 0;
  }
}
</style>
