<script setup lang="ts">
const services = [
  {
    icon: 'tapeJointing',
    title: 'Tape & Jointing',
    href: '/services/tape-jointing',
  },
  {
    icon: 'plasterboard',
    title: 'Plasterboard Finishing',
    href: '/services/plasterboard',
  },
  {
    icon: 'dryLining',
    title: 'Drylining Finishing',
    href: '/services/drylining',
  },
  {
    icon: 'paint',
    title: 'Ready-to-Paint Finishes',
    href: '/services/ready-to-paint',
  },
  {
    icon: 'commercial',
    title: 'New Build & Commercial Packages',
    href: '/services/commercial',
  },
  {
    icon: 'repair',
    title: 'Repair & Remedial Works',
    href: '/services/repair',
  },
]
</script>

<template>
  <section class="services section section--light">
    <div class="container">
      <ASectionTitle 
        title="Tape & Jointing – What We Do"
        subtitle="Professional plasterboard finishing services for all your residential and commercial needs"
      />
      
      <div class="services__grid">
        <MServiceCard 
          v-for="service in services" 
          :key="service.title"
          :icon="service.icon"
          :title="service.title"
          :href="service.href"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.services__grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 25px;
}

@media (max-width: 1200px) {
  .services__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .services__grid {
    grid-template-columns: 1fr;
  }
}
</style>

