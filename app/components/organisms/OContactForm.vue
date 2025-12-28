<script setup lang="ts">
const { sendQuoteRequest } = useWhatsApp()

const form = reactive({
  name: '',
  phone: '',
  email: '',
  service: '',
  projectType: '',
  message: '',
})

const services = [
  'Tape & Jointing',
  'Plasterboard Finishing',
  'Drylining Finishing',
  'Ready-to-Paint Finishes',
  'Commercial Packages',
  'Repair Works',
]

const projectTypes = [
  'Residential',
  'Commercial',
  'New Build',
  'Renovation',
  'Extension',
]

const isSubmitting = ref(false)
const isSuccess = ref(false)

const handleSubmit = () => {
  if (!form.name || !form.phone || !form.message) {
    return
  }
  
  isSubmitting.value = true
  
  try {
    sendQuoteRequest({
      name: form.name,
      phone: form.phone,
      email: form.email,
      service: form.service,
      projectType: form.projectType,
      message: form.message,
    })
    
    isSuccess.value = true
    
    // Reset form
    form.name = ''
    form.phone = ''
    form.email = ''
    form.service = ''
    form.projectType = ''
    form.message = ''
    
    setTimeout(() => {
      isSuccess.value = false
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <form class="contact-form" @submit.prevent="handleSubmit">
    <div class="contact-form__header">
      <h3 class="contact-form__title">Get a Free Quote</h3>
      <p class="contact-form__subtitle">
        Fill out the form and we'll contact you via WhatsApp
      </p>
    </div>
    
    <Transition name="fade">
      <div v-if="isSuccess" class="contact-form__success">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>WhatsApp opened! Send your message to complete the request.</span>
      </div>
    </Transition>
    
    <div class="contact-form__grid">
      <div class="contact-form__field">
        <label for="name" class="contact-form__label">Name *</label>
        <input 
          id="name"
          v-model="form.name" 
          type="text" 
          class="contact-form__input"
          placeholder="Your name"
          required
        />
      </div>
      
      <div class="contact-form__field">
        <label for="phone" class="contact-form__label">Phone *</label>
        <input 
          id="phone"
          v-model="form.phone" 
          type="tel" 
          class="contact-form__input"
          placeholder="Your phone number"
          required
        />
      </div>
      
      <div class="contact-form__field">
        <label for="email" class="contact-form__label">Email</label>
        <input 
          id="email"
          v-model="form.email" 
          type="email" 
          class="contact-form__input"
          placeholder="Your email (optional)"
        />
      </div>
      
      <div class="contact-form__field">
        <label for="service" class="contact-form__label">Service</label>
        <select 
          id="service"
          v-model="form.service" 
          class="contact-form__input contact-form__select"
        >
          <option value="">Select a service</option>
          <option v-for="service in services" :key="service" :value="service">
            {{ service }}
          </option>
        </select>
      </div>
      
      <div class="contact-form__field contact-form__field--full">
        <label for="projectType" class="contact-form__label">Project Type</label>
        <div class="contact-form__radio-group">
          <label 
            v-for="type in projectTypes" 
            :key="type" 
            class="contact-form__radio"
            :class="{ 'contact-form__radio--active': form.projectType === type }"
          >
            <input 
              type="radio" 
              :value="type" 
              v-model="form.projectType"
            />
            <span>{{ type }}</span>
          </label>
        </div>
      </div>
      
      <div class="contact-form__field contact-form__field--full">
        <label for="message" class="contact-form__label">Message *</label>
        <textarea 
          id="message"
          v-model="form.message" 
          class="contact-form__input contact-form__textarea"
          placeholder="Tell us about your project..."
          rows="4"
          required
        ></textarea>
      </div>
    </div>
    
    <button 
      type="submit" 
      class="contact-form__submit"
      :disabled="isSubmitting"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span>{{ isSubmitting ? 'Opening WhatsApp...' : 'Send via WhatsApp' }}</span>
    </button>
    
    <p class="contact-form__note">
      By submitting, you'll be redirected to WhatsApp to send your message directly to us.
    </p>
  </form>
</template>

<style scoped>
.contact-form {
  background-color: var(--color-white);
  border-radius: var(--border-radius-xl);
  padding: 40px;
  box-shadow: var(--shadow-lg);
}

.contact-form__header {
  text-align: center;
  margin-bottom: 30px;
}

.contact-form__title {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.contact-form__subtitle {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin: 0;
}

.contact-form__success {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px 20px;
  background-color: #D1FAE5;
  border-radius: var(--border-radius);
  margin-bottom: 20px;
}

.contact-form__success svg {
  width: 24px;
  height: 24px;
  color: #059669;
  flex-shrink: 0;
}

.contact-form__success span {
  color: #065F46;
  font-size: 0.9rem;
}

.contact-form__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 25px;
}

.contact-form__field--full {
  grid-column: span 2;
}

.contact-form__label {
  display: block;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.contact-form__input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #E5E7EB;
  border-radius: var(--border-radius);
  font-family: inherit;
  font-size: 1rem;
  color: var(--text-primary);
  transition: border-color var(--transition-fast);
}

.contact-form__input::placeholder {
  color: var(--text-light);
}

.contact-form__input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.contact-form__select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 20px;
  padding-right: 40px;
}

.contact-form__textarea {
  resize: vertical;
  min-height: 120px;
}

.contact-form__radio-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.contact-form__radio {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border: 2px solid #E5E7EB;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.contact-form__radio input {
  display: none;
}

.contact-form__radio span {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.contact-form__radio:hover,
.contact-form__radio--active {
  border-color: var(--color-primary);
  background-color: rgba(245, 166, 35, 0.1);
}

.contact-form__radio--active span {
  color: var(--color-primary-dark);
  font-weight: 600;
}

.contact-form__submit {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 24px;
  background-color: #25D366;
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.contact-form__submit:hover {
  background-color: #128C7E;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
}

.contact-form__submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.contact-form__note {
  text-align: center;
  font-size: 0.8rem;
  color: var(--text-light);
  margin: 15px 0 0;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: all var(--transition-normal);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 640px) {
  .contact-form {
    padding: 25px 20px;
  }
  
  .contact-form__grid {
    grid-template-columns: 1fr;
  }
  
  .contact-form__field--full {
    grid-column: span 1;
  }
  
  .contact-form__radio-group {
    flex-direction: column;
  }
}
</style>

