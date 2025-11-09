<template>
  <section class="contact-page">
    <div class="contact-container">

      <div class="contact-form-box">
        <h3>{{ t('contactPage.title') }}</h3>
        <p class="form-subtitle">{{ t('contactPage.intro') }}</p>

        <form @submit.prevent="sendMessage">
          <div class="input-group">
            <input v-model="form.name" type="text" required placeholder=" " />
            <label>{{ t('contactPage.name') }}</label>
          </div>
          <div class="input-group">
            <input v-model="form.email" type="email" required placeholder=" " />
            <label>{{ t('contactPage.email') }}</label>
          </div>
          <div class="input-group">
            <textarea v-model="form.message" rows="4" required placeholder=" "></textarea>
            <label>{{ t('contactPage.message') }}</label>
          </div>
          <button type="submit" class="send-btn" :disabled="isSending">
            {{ isSending ? t('contactPage.sending') : t('contactPage.send') }}
          </button>
          <p v-if="success" class="success-msg">{{ t('contactPage.success') }}</p>
          <p v-if="error" class="error-msg">{{ t('contactPage.error') }}</p>

        </form>
      </div>

      <div class="contact-info-box">
        <h4>{{ t('contactPage.subtitle') }}</h4>
        <div class="social-icons">
          <a
          class="socials"
          href="https://linkedin.com/ffrancode">
            <i class="fa-brands fa-linkedin">
              <img class="social-icon" src="/icons/linkedin.svg" alt="linkedin">
              LinkedIn</i>
          </a>

          <a 
          class="socials"
          href="https://github.com/ffrancode">
            <i class="fa-brands fa-github">
              <img class="social-icon" src="/icons/github.svg" alt="github">
              GitHub</i>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import emailjs from 'emailjs-com'

const { t } = useI18n()

const form = ref({
   name: '',
   email: '', 
   message: '' 
  })

  const  isSending = ref(false)
  const success = ref(false)
  const error = ref(false)

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  async function sendMessage() {
    isSending.value = true
    success.value = false
    error.value = false

  try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: form.value.name,
          from_email: form.value.email,
          message: form.value.message
        },
        publicKey
      )

      success.value = true
      form.value = { name: '', email: '', message: '' }
    } catch (err) {
      console.error('Error al enviar:', err)
      error.value = true
    } finally {
      isSending.value = false
    }
  }

</script>

<style scoped>
.contact-page {
  position: relative;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem;
  color: white;
}

.contact-container {
  display: flex;
  gap: 3rem;
  max-width: 1000px;
  width: 100%;
}

.contact-form-box {
  flex: 1;
  min-width: 320px;
  background: linear-gradient(135deg, #621eff00, #ffffff00);
  border-radius: 15px;
  padding: 0 2rem 2rem 2rem;
  color: white;
  box-shadow: 0 0 40px rgba(138, 92, 246, 0.082);
}

.contact-form-box h3 {
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
  font-weight: 700;
}

.form-subtitle {
  margin-bottom: 2rem;
  font-size: 1rem;
  opacity: 0.9;
}

.input-group {
  position: relative;
  margin-bottom: 1.5rem;
}

.input-group input,
.input-group textarea {
  width: 100%;
  box-sizing: border-box;
  padding: 0.8rem;
  background-color: rgba(42, 40, 138, 0.233);
  border: 2px solid rgba(42, 40, 138, 0.466);
  border-radius: 5px;
  color: white;
  outline: none;
}

.input-group label {
  position: absolute;
  left: 0.8rem;
  top: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  transition: 0.3s ease;
}

.input-group input:focus + label,
.input-group input:not(:placeholder-shown) + label,
.input-group textarea:focus + label,
.input-group textarea:not(:placeholder-shown) + label {
  top: -1rem;
  font-size: 0.8rem;
  color: #fff;
}

.send-btn {
  background: #2c166173;
  color: #8b5cf6;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.send-btn:hover {
  background: #5419928a;
  transform: translateY(-2px);
}

.success-msg {
  color: #4ade80;
  margin-top: 1rem;
}

.error-msg {
  color: #f87171;
  margin-top: 1rem;
}

.contact-info-box {
  flex: 1;
  max-width: 400px;
}

.contact-info-box h4 {
  color: #a78bfa;
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
}

.contact-info-box ul {
  list-style: none;
  padding: 0;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.contact-info-box i {
  color: #a78bfa;
  margin-right: 0.6rem;
}

.social-icons a {
  color: #a78bfa;
  font-size: 1.3rem;
  margin-right: 1rem;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #fff;
}

.socials {
  font-size: 1.1rem;
  display: inline-block;
  margin-top: 1rem;
  text-decoration: none;
}

.social-icon {
  width: 50px;
  height: 50px;
  margin-right: 8px;
  vertical-align: middle;
}

.social-icon:nth-child(1) {
  filter: invert(29%) sepia(63%) saturate(4473%) hue-rotate(233deg) brightness(95%) contrast(92%);
}



/* RESPONSIVE para Contact */

@media (max-width: 768px) {
  .contact-page {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .contact-container {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 20rem;
  }

  .send-btn {
    width: 100%;
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
  }

  .contact-info-box {
    width: 100%;
  }


  .social-icons {
    display: flex;
    margin: auto;
    justify-content: center;
    text-align: center;
  }

  .social-icon {
    padding-bottom: 10px;
  }
}


</style>
