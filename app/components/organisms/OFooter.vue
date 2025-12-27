<script setup lang="ts">
const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/services/tape-jointing', label: 'Tape & Jointing' },
  { to: '/services/drylining', label: 'Drylining' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About Us' },
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
              <a href="tel:02201234567">0220 1234 5678</a>
            </li>
            <li>
              <AIcon name="email" size="sm" />
              <a href="mailto:info@pac-construction.co.uk">info@pac-construction.co.uk</a>
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

