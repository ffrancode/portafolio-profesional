<template>
  <footer class="footer">
    <p class="footer-text">
      ©2025
      <span class="github">
        <a href="https://github.com/ffrancode">.francode</a>
      </span>
      {{ t('footerText') }}</p>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>

.github a {
  color: #4265ff;
  text-decoration: none;
  transition: 0.5s all ease;
}

.github a:hover {
  text-decoration: underline;
  color: #738dff;
}

.footer {
  position: relative;
  width: 100%;
  
}

.footer-text {
  width: 95%;
  margin-top: 3%;
  font-size: 0.9rem;
  color: #aaa;
  text-align: end;
}

@media (max-width: 768px) {
  .footer-text {
    text-align: center;
    margin: 0 auto 0.9rem auto;
  }
}

</style>
