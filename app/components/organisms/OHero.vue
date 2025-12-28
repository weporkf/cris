<script setup lang="ts">
const features = [
  'Perfectly Smooth Finishes',
  'Fast & Reliable Turnaround',
  'Dust-Controlled & Clean Work',
  'Competitive Pricing',
]

const { sendQuickMessage } = useWhatsApp()
</script>

<template>
  <section class="hero">
    <div class="hero__background">
      <div class="hero__pattern"></div>
    </div>
    
    <div class="container">
      <div class="hero__grid">
        <div class="hero__content">
          <h1 class="hero__title">
            Professional Tape & Jointing
            <span class="hero__title-accent">Services in London</span>
          </h1>
          
          <p class="hero__subtitle">
            Expert Plasterboard Finishing for Residential & Commercial Projects
          </p>
          
          <ul class="hero__features">
            <li v-for="feature in features" :key="feature" class="hero__feature">
              <ACheckmark color="primary" />
              <span>{{ feature }}</span>
            </li>
          </ul>
          
          <div class="hero__buttons">
            <AButton href="/contact" variant="primary" size="lg">
              Get a Free Quote
            </AButton>
            <AButton href="/gallery" variant="outline" size="lg">
              See Our Work
            </AButton>
          </div>
          
          <!-- WhatsApp Quick Button -->
          <button 
            class="hero__whatsapp"
            @click="sendQuickMessage('Hi! I\'m interested in your tape & jointing services.')"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Chat on WhatsApp</span>
          </button>
          
          <p class="hero__area">Serving London & Surrounding Areas</p>
        </div>
        
        <div class="hero__image">
          <div class="hero__image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=700&fit=crop" 
              alt="Professional plastering work"
            />
            <div class="hero__image-accent"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
  overflow: hidden;
}

.hero__background {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1A1A2E 0%, #0F0F1A 50%, #1A1A2E 100%);
  z-index: -2;
}

.hero__pattern {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(245, 166, 35, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(245, 166, 35, 0.05) 0%, transparent 40%);
  z-index: -1;
}

.hero__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero__content {
  animation: slideInLeft 0.8s ease forwards;
}

.hero__title {
  color: var(--text-white);
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 20px;
}

.hero__title-accent {
  display: block;
  color: var(--color-primary);
}

.hero__subtitle {
  font-size: 1.2rem;
  color: var(--text-light);
  margin-bottom: 30px;
  line-height: 1.6;
}

.hero__features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 20px;
  margin-bottom: 35px;
}

.hero__feature {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-white);
  font-size: 0.95rem;
}

.hero__buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.hero__whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background-color: #25D366;
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
  margin-bottom: 20px;
}

.hero__whatsapp:hover {
  background-color: #128C7E;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
}

.hero__area {
  font-size: 0.9rem;
  color: var(--text-light);
  margin: 0;
  opacity: 0.8;
}

.hero__image {
  animation: slideInRight 0.8s ease 0.2s forwards;
  opacity: 0;
}

.hero__image-wrapper {
  position: relative;
}

.hero__image-wrapper img {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-xl);
  position: relative;
  z-index: 1;
}

.hero__image-accent {
  position: absolute;
  top: 20px;
  right: -20px;
  width: 100%;
  height: 100%;
  background: var(--gradient-primary);
  border-radius: var(--border-radius-xl);
  z-index: 0;
  opacity: 0.3;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .hero__grid {
    grid-template-columns: 1fr;
    gap: 50px;
    text-align: center;
  }
  
  .hero__features {
    justify-content: center;
  }
  
  .hero__buttons {
    justify-content: center;
  }
  
  .hero__image {
    order: -1;
  }
  
  .hero__image-wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .hero__image-accent {
    right: -15px;
    top: 15px;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 100px 0 60px;
  }
  
  .hero__features {
    grid-template-columns: 1fr;
    text-align: left;
  }
  
  .hero__feature {
    justify-content: flex-start;
  }
}
</style>
