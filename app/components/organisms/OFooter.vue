<script setup lang="ts">
const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

const serviceAreas = [
  'London',
  'North London',
  'East London',
  'South London',
  'Essex',
  'Hertfordshire',
]

const socialLinks = [
  { icon: 'facebook', href: '#', label: 'Facebook' },
  { icon: 'twitter', href: '#', label: 'Twitter' },
  { icon: 'linkedin', href: '#', label: 'LinkedIn' },
  { icon: 'youtube', href: '#', label: 'YouTube' },
]

// WhatsApp number (замени на реальный номер)
const whatsappNumber = '447123456789'
const whatsappLink = `https://wa.me/${whatsappNumber}`
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <!-- Company Info -->
        <div class="footer__section footer__section--company">
          <ALogo variant="light" />
          <p class="footer__description">
            Professional tape & jointing contractors providing high-quality 
            plasterboard finishing services across London.
          </p>
          <div class="footer__social">
            <a 
              :href="whatsappLink"
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp"
              class="footer__social-link footer__social-link--whatsapp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a 
              v-for="social in socialLinks" 
              :key="social.icon"
              :href="social.href"
              :aria-label="social.label"
              class="footer__social-link"
            >
              <AIcon :name="social.icon" size="md" />
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div class="footer__section">
          <h4 class="footer__title">Quick Links</h4>
          <ul class="footer__links">
            <li v-for="link in quickLinks" :key="link.to">
              <NuxtLink :to="link.to" class="footer__link">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Contact -->
        <div class="footer__section">
          <h4 class="footer__title">Contact Us</h4>
          <ul class="footer__contact">
            <li>
              <AIcon name="phone" size="sm" />
              <a href="tel:02201234567">+447366122274</a>
            </li>
            <li>
              <AIcon name="email" size="sm" />
              <a href="pacconstructionsolutions1@gmail.com">pacconstructionsolutions1@gmail.com</a>
            </li>
            <li class="footer__whatsapp">
              <a :href="whatsappLink" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Service Areas -->
        <div class="footer__section">
          <h4 class="footer__title">Service Areas</h4>
          <ul class="footer__areas">
            <li v-for="area in serviceAreas" :key="area">
              {{ area }}
            </li>
          </ul>
        </div>
      </div>
      
      <div class="footer__bottom">
        <p class="footer__copyright">
          © {{ new Date().getFullYear() }} PAC Construction Solutions LTD. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--gradient-dark);
  padding: 60px 0 0;
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr);
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer__section--company {
  padding-right: 40px;
}

.footer__description {
  color: var(--text-light);
  font-size: 0.9rem;
  line-height: 1.7;
  margin: 20px 0;
}

.footer__social {
  display: flex;
  gap: 12px;
}

.footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-white);
  transition: all var(--transition-normal);
}

.footer__social-link:hover {
  background-color: var(--color-primary);
  color: var(--color-dark);
  transform: translateY(-3px);
}

.footer__social-link--whatsapp:hover {
  background-color: #25D366;
  color: white;
}

.footer__title {
  color: var(--text-white);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 20px;
}

.footer__links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__link {
  color: var(--text-light);
  font-size: 0.9rem;
  transition: color var(--transition-fast);
}

.footer__link:hover {
  color: var(--color-primary);
}

.footer__contact {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__contact li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-light);
  font-size: 0.9rem;
}

.footer__contact li .icon {
  color: var(--color-primary);
}

.footer__contact a {
  color: var(--text-light);
  transition: color var(--transition-fast);
}

.footer__contact a:hover {
  color: var(--color-primary);
}

.footer__whatsapp a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: #25D366;
  color: white !important;
  border-radius: 6px;
  font-weight: 500;
  transition: all var(--transition-normal);
}

.footer__whatsapp a:hover {
  background-color: #128C7E;
  transform: translateY(-2px);
}

.footer__areas {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 15px;
}

.footer__areas li {
  color: var(--text-light);
  font-size: 0.85rem;
  position: relative;
}

.footer__areas li::after {
  content: '•';
  position: absolute;
  right: -10px;
  color: var(--color-primary);
}

.footer__areas li:last-child::after {
  display: none;
}

.footer__bottom {
  padding: 25px 0;
  text-align: center;
}

.footer__copyright {
  color: var(--text-light);
  font-size: 0.85rem;
  margin: 0;
  opacity: 0.7;
}

@media (max-width: 1024px) {
  .footer__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .footer__section--company {
    grid-column: span 2;
    padding-right: 0;
  }
}

@media (max-width: 640px) {
  .footer__grid {
    grid-template-columns: 1fr;
  }
  
  .footer__section--company {
    grid-column: span 1;
  }
  
  .footer__areas {
    flex-direction: column;
    gap: 8px;
  }
  
  .footer__areas li::after {
    display: none;
  }
}
</style>
