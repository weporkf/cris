<script setup lang="ts">
const features = [
  {
    icon: 'quality',
    title: 'Tape & Jointing Experts',
    description: 'Specialist tape and jointing contractors with years of experience in quality plasterboard finishing.',
  },
  {
    icon: 'quality',
    title: 'High Quality Finish',
    description: 'We deliver expert craftsmanship on every project, ensuring perfectly smooth walls and ceilings.',
  },
  {
    icon: 'fast',
    title: 'Fast Turnaround',
    description: 'Professional team that completes work efficiently without compromising on quality standards.',
  },
  {
    icon: 'clean',
    title: 'Clean & Reliable Service',
    description: 'We keep our work areas tidy and always meet our deadlines with professional reliability.',
  },
  {
    icon: 'affordable',
    title: 'Competitive Prices',
    description: 'Quality tape & jointing services at fair and transparent pricing for all project sizes.',
  },
  {
    icon: 'team',
    title: 'Experienced Team',
    description: 'Skilled professionals with extensive experience in residential and commercial projects.',
  },
]
</script>

<template>
  <section class="why-choose section">
    <div class="container">
      <ASectionTitle 
        title="Why Choose PAC Construction Solutions LTD?"
        subtitle="We deliver exceptional quality and reliability on every project"
      />
      
      <div class="why-choose__grid">
        <MFeatureCard 
          v-for="feature in features" 
          :key="feature.title"
          :icon="feature.icon"
          :title="feature.title"
          :description="feature.description"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-choose {
  background: linear-gradient(180deg, var(--color-light) 0%, var(--color-white) 100%);
}

.why-choose__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

@media (max-width: 1024px) {
  .why-choose__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .why-choose__grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>

