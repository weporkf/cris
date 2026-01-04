<script setup lang="ts">
useSeoMeta({
  title: 'Our Services - PAC Construction Solutions LTD',
  description: 'Professional tape & jointing, plasterboard finishing, drylining and more. Quality services for residential and commercial projects in London.',
})

const services = [
  {
    icon: 'tapeJointing',
    title: 'Tape & Jointing Services in London',
    description: 'We offer expert tape and jointing for plasterboard walls and ceilings, creating seamless, smooth surfaces with invisible joints. Our professional techniques ensure long-lasting, crack-resistant finishes that meet modern construction standards.',
    features: ['Seamless joint finishing', 'Crack-resistant taping systems', 'Surfaces ready for painting and decorating'],
  },
  {
    icon: 'plasterboard',
    title: 'Professional Plasterboard Finishing',
    description: 'Our plasterboard finishing services in London include skimming, sanding, and full surface preparation to achieve flawless results. We deliver consistent Level 4 and Level 5 finishes, ideal for both residential and commercial interiors.',
    features: ['Level 4 & Level 5 drywall finishes', 'Dust-controlled sanding', 'High-quality materials and clean results'],
  },
  {
    icon: 'dryLining',
    title: 'Drylining Finishing Services',
    description: 'We provide professional drylining finishing services for new builds, renovations, and commercial developments. Our team works with metal and timber frame systems, delivering precise finishes that meet acoustic and fire safety requirements.',
    features: ['Metal and timber framing systems', 'Acoustic drywall solutions', 'Fire-rated drylining systems'],
  },
  {
    icon: 'paint',
    title: 'Ready-to-Paint Wall & Ceiling Finishes',
    description: 'We deliver walls and ceilings that are fully prepared and ready for painting, saving time on-site and ensuring a superior final paint finish. Our smooth surfaces require no additional preparation.',
    features: ['No further preparation needed', 'Smooth, even surfaces', 'Fast turnaround times'],
  },
  {
    icon: 'commercial',
    title: 'Drywall Repair & Remedial Works',
    description: 'We offer complete commercial tape and jointing packages in London for office fit-outs, retail spaces, and large-scale developments. Our capacity and organisation allow us to meet tight schedules and large project demands.',
    features: ['Competitive bulk pricing', 'Reliable scheduling', 'Large team capacity for major projects'],
  },
  {
    icon: 'repair',
    title: 'Drywall Repair & Remedial Works',
    description: 'We specialise in drywall repair and remedial tape and jointing, fixing cracks, damaged surfaces, and poor previous workmanship. Our team restores walls and ceilings to a clean, professional finish.',
    features: ['Crack repairs', 'Water damage restoration', 'Patching and re-finishing'],
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
