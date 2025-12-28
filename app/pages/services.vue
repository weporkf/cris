<script setup lang="ts">
useSeoMeta({
  title: 'Our Services - PAC Construction Solutions LTD',
  description: 'Professional tape & jointing, plasterboard finishing, drylining and more. Quality services for residential and commercial projects in London.',
})

const services = [
  {
    icon: 'tapeJointing',
    title: 'Tape & Jointing',
    description: 'Expert taping and jointing of plasterboard joints for a seamless, smooth finish. We use professional techniques to ensure invisible joints ready for decoration.',
    features: ['Seamless joint finishing', 'Crack-resistant techniques', 'Ready for painting'],
  },
  {
    icon: 'plasterboard',
    title: 'Plasterboard Finishing',
    description: 'Complete plasterboard finishing services including skimming, sanding, and preparation for final decoration. Perfect walls and ceilings every time.',
    features: ['Level 4 & 5 finishes', 'Dust-controlled sanding', 'Quality materials'],
  },
  {
    icon: 'dryLining',
    title: 'Drylining Finishing',
    description: 'Professional drylining finishing for new builds, renovations, and commercial projects. We complete the final stage to perfection.',
    features: ['Metal & timber frames', 'Acoustic solutions', 'Fire-rated systems'],
  },
  {
    icon: 'paint',
    title: 'Ready-to-Paint Finishes',
    description: 'We deliver walls and ceilings that are completely ready for painting, saving you time and ensuring the best possible paint finish.',
    features: ['No further prep needed', 'Smooth surfaces', 'Quick turnaround'],
  },
  {
    icon: 'commercial',
    title: 'Commercial Packages',
    description: 'Complete tape and jointing packages for commercial developments, office fit-outs, and large-scale projects. Competitive rates for contractors.',
    features: ['Bulk pricing available', 'Reliable scheduling', 'Large team capacity'],
  },
  {
    icon: 'repair',
    title: 'Repair & Remedial Works',
    description: 'Fix cracks, damage, and poor previous work. We can repair and refinish problem areas to restore perfect surfaces.',
    features: ['Crack repairs', 'Water damage restoration', 'Patching & refinishing'],
  },
]
</script>

<template>
  <div class="services-page">
    <OPageHero 
      title="Our Services"
      subtitle="Professional tape & jointing and plasterboard finishing services for all your project needs"
      background-image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=600&fit=crop"
    />
    
    <section class="services-list section">
      <div class="container">
        <div class="services-list__grid">
          <div 
            v-for="(service, index) in services" 
            :key="service.title"
            class="service-item"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="service-item__icon">
              <AIcon :name="service.icon" size="xl" />
            </div>
            
            <div class="service-item__content">
              <h3 class="service-item__title">{{ service.title }}</h3>
              <p class="service-item__description">{{ service.description }}</p>
              
              <ul class="service-item__features">
                <li v-for="feature in service.features" :key="feature">
                  <ACheckmark color="primary" />
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <OCta />
  </div>
</template>

<style scoped>
.services-list__grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.service-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 30px;
  padding: 35px;
  background-color: var(--color-white);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
}

.service-item:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-5px);
}

.service-item__icon {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #FFF3D6 0%, #FFE4A8 100%);
  border-radius: var(--border-radius-lg);
  color: var(--color-primary-dark);
  flex-shrink: 0;
}

.service-item:hover .service-item__icon {
  background: var(--gradient-primary);
  color: var(--color-dark);
}

.service-item__title {
  font-size: 1.4rem;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.service-item__description {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 20px;
}

.service-item__features {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
}

.service-item__features li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--text-primary);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .service-item {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 25px;
  }
  
  .service-item__icon {
    margin: 0 auto;
    width: 80px;
    height: 80px;
  }
  
  .service-item__features {
    justify-content: center;
  }
}
</style>
