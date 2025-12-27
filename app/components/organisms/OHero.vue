<script setup lang="ts">
const features = [
  'Perfectly Smooth Finishes',
  'Fast & Reliable Turnaround',
  'Dust-Controlled & Clean Work',
  'Competitive Pricing',
]
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
            <AButton href="/projects" variant="outline" size="lg">
              See Our Work
            </AButton>
          </div>
          
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
  margin-bottom: 30px;
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

