<script setup lang="ts">
const highlights = [
  'Specialist tape and jointing contractors',
  'Over 10 years of industry experience',
  'Fully insured and certified professionals',
  'Residential and commercial projects',
  'Serving London and surrounding areas',
]
</script>

<template>
  <section class="about section section--light">
    <div class="container">
      <div class="about__grid">
        <div class="about__image">
          <img 
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=600&fit=crop" 
            alt="PAC Construction team at work"
          />
          <div class="about__image-badge">
            <span class="about__badge-number">10+</span>
            <span class="about__badge-text">Years Experience</span>
          </div>
        </div>
        
        <div class="about__content">
          <ASectionTitle 
            title="About PAC Construction Solutions"
            :centered="false"
          />
          
          <p class="about__text">
            PAC Construction Solutions LTD is a specialist tape and jointing contractor 
            based in London. We provide high-quality plasterboard finishing services 
            for both residential and commercial projects throughout London and the 
            surrounding areas.
          </p>
          
          <p class="about__text">
            Our experienced team takes pride in delivering perfectly smooth walls and 
            ceilings, ready for painting. We use professional-grade materials and 
            time-tested techniques to ensure lasting quality on every project.
          </p>
          
          <ul class="about__highlights">
            <li v-for="highlight in highlights" :key="highlight" class="about__highlight">
              <ACheckmark color="primary" />
              <span>{{ highlight }}</span>
            </li>
          </ul>
          
          <AButton href="/about" variant="primary">
            Learn More About Us
            <AIcon name="arrowRight" size="sm" />
          </AButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: center;
}

.about__image {
  position: relative;
}

.about__image img {
  width: 100%;
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-lg);
}

.about__image-badge {
  position: absolute;
  bottom: -20px;
  right: -20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  background: var(--gradient-primary);
  border-radius: 50%;
  box-shadow: var(--shadow-lg);
  text-align: center;
}

.about__badge-number {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-dark);
  line-height: 1;
}

.about__badge-text {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-dark);
  text-transform: uppercase;
}

.about__text {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

.about__highlights {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
}

.about__highlight {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.95rem;
  color: var(--text-primary);
}

@media (max-width: 1024px) {
  .about__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .about__image {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .about__image-badge {
    right: 0;
    bottom: -15px;
    width: 100px;
    height: 100px;
  }
  
  .about__badge-number {
    font-size: 1.5rem;
  }
}
</style>

