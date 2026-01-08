<script setup lang="ts">
useSeoMeta({
  title: 'Contact Us - PAC Construction Solutions LTD',
  description: 'Get a free quote for your tape & jointing project. Contact us via WhatsApp, phone, or email.',
})

const { whatsappLink, sendQuickMessage } = useWhatsApp()

const contactInfo = [
  {
    icon: 'phone',
    title: 'Phone',
    value: '+447366122274',
    href: 'tel:02201234567',
  },
  {
    icon: 'email',
    title: 'Email',
    value: 'pacconstructionsolutions1@gmail.com',
    href: 'pacconstructionsolutions1@gmail.com',
  },
  {
    icon: 'location',
    title: 'Service Area',
    value: 'London & Surrounding Areas',
  },
]

const quickMessages = [
  'I need a quote for tape & jointing',
  'I have a question about your services',
  'I want to discuss a commercial project',
]
</script>

<template>
  <div class="contact-page">
    <OPageHero 
      title="Contact Us"
      subtitle="Get in touch for a free quote or to discuss your project"
      background-image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=600&fit=crop"
    />
    
    <section class="contact section">
      <div class="container">
        <div class="contact__grid">
          <!-- Contact Info -->
          <div class="contact__info">
            <h2 class="contact__info-title">Get In Touch</h2>
            <p class="contact__info-text">
              Ready to get started on your project? Contact us today for a free, 
              no-obligation quote. We're here to help with all your tape & jointing needs.
            </p>
            
            <div class="contact__info-list">
              <div v-for="item in contactInfo" :key="item.title" class="contact__info-item">
                <div class="contact__info-icon">
                  <AIcon :name="item.icon" size="md" />
                </div>
                <div>
                  <span class="contact__info-label">{{ item.title }}</span>
                  <a v-if="item.href" :href="item.href" class="contact__info-value">
                    {{ item.value }}
                  </a>
                  <span v-else class="contact__info-value">{{ item.value }}</span>
                </div>
              </div>
            </div>
            
            <!-- WhatsApp Quick Actions -->
            <div class="contact__whatsapp">
              <h3 class="contact__whatsapp-title">Quick WhatsApp Contact</h3>
              <p class="contact__whatsapp-text">
                Click a message below to instantly start a WhatsApp chat:
              </p>
              <div class="contact__whatsapp-buttons">
                <button 
                  v-for="msg in quickMessages" 
                  :key="msg"
                  class="contact__whatsapp-btn"
                  @click="sendQuickMessage(msg)"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {{ msg }}
                </button>
              </div>
            </div>
            
            <!-- Working Hours -->
            <div class="contact__hours">
              <h3 class="contact__hours-title">Working Hours</h3>
              <ul class="contact__hours-list">
                <li>
                  <span>Available 7/7</span>
                  <span>day&night shifts</span>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="contact__form-wrapper">
            <OContactForm />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 60px;
  align-items: start;
}

.contact__info-title {
  font-size: 1.75rem;
  color: var(--text-primary);
  margin-bottom: 15px;
}

.contact__info-text {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 30px;
}

.contact__info-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
}

.contact__info-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.contact__info-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #FFF3D6 0%, #FFE4A8 100%);
  border-radius: var(--border-radius);
  color: var(--color-primary-dark);
  flex-shrink: 0;
}

.contact__info-label {
  display: block;
  font-size: 0.85rem;
  color: var(--text-light);
  margin-bottom: 2px;
}

.contact__info-value {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1rem;
  color: var(--text-primary);
}

a.contact__info-value:hover {
  color: var(--color-primary);
}

/* WhatsApp Section */
.contact__whatsapp {
  background-color: #F0FDF4;
  border: 1px solid #BBF7D0;
  border-radius: var(--border-radius-lg);
  padding: 25px;
  margin-bottom: 30px;
}

.contact__whatsapp-title {
  font-size: 1.1rem;
  color: #166534;
  margin-bottom: 8px;
}

.contact__whatsapp-text {
  font-size: 0.9rem;
  color: #15803D;
  margin-bottom: 15px;
}

.contact__whatsapp-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact__whatsapp-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background-color: #25D366;
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-normal);
  text-align: left;
}

.contact__whatsapp-btn:hover {
  background-color: #128C7E;
  transform: translateX(5px);
}

/* Working Hours */
.contact__hours-title {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 15px;
}

.contact__hours-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contact__hours-list li {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #E5E7EB;
  font-size: 0.9rem;
}

.contact__hours-list li span:first-child {
  color: var(--text-secondary);
}

.contact__hours-list li span:last-child {
  font-weight: 600;
  color: var(--text-primary);
}

@media (max-width: 1024px) {
  .contact__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .contact__form-wrapper {
    order: -1;
  }
}
</style>

