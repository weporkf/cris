<script setup lang="ts">
const projects = [
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
    title: 'New Build Apartments',
    description: 'Complete tape & jointing for 50+ unit residential development',
    href: '/projects/new-build-apartments',
  },
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
    title: 'Commercial Office Fit-Out',
    description: 'High-end plasterboard finishing for modern office space',
    href: '/projects/commercial-office',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
    title: 'Residential Extension',
    description: 'Quality finishing for home extension project',
    href: '/projects/residential-extension',
  },
]
</script>

<template>
  <section class="projects section section--dark">
    <div class="container">
      <ASectionTitle 
        title="Recent Tape & Jointing Projects"
        subtitle="See examples of our quality workmanship across London"
        light
      />
      
      <div class="projects__grid">
        <MProjectCard 
          v-for="project in projects" 
          :key="project.title"
          :image="project.image"
          :title="project.title"
          :description="project.description"
          :href="project.href"
        />
      </div>
      
      <div class="projects__cta">
        <AButton href="/projects" variant="outline" size="lg">
          View More Projects
          <AIcon name="arrowRight" size="sm" />
        </AButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;
}

.projects__cta {
  text-align: center;
}

@media (max-width: 1024px) {
  .projects__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .projects__grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }
}
</style>

