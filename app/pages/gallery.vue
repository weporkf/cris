<script setup lang="ts">
useSeoMeta({
  title: 'Our Projects Gallery - PAC Construction Solutions LTD',
  description: 'View our portfolio of completed tape & jointing and plasterboard finishing projects across London.',
})

const categories = ['All', 'Residential', 'Commercial', 'New Build']
const activeCategory = ref('All')

const projects = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
    title: 'New Build Apartments',
    category: 'New Build',
    location: 'East London',
    description: 'Complete tape & jointing for 50+ unit residential development',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    title: 'Commercial Office Fit-Out',
    category: 'Commercial',
    location: 'City of London',
    description: 'High-end plasterboard finishing for modern office space',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
    title: 'Residential Extension',
    category: 'Residential',
    location: 'North London',
    description: 'Quality finishing for home extension project',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
    title: 'Luxury Home Renovation',
    category: 'Residential',
    location: 'Chelsea',
    description: 'Complete interior tape and jointing for high-end renovation',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop',
    title: 'Corporate Headquarters',
    category: 'Commercial',
    location: 'Canary Wharf',
    description: 'Large-scale plasterboard finishing for corporate offices',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop',
    title: 'New Build Houses',
    category: 'New Build',
    location: 'Essex',
    description: 'Tape and jointing for new housing development',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop',
    title: 'Victorian Conversion',
    category: 'Residential',
    location: 'Hampstead',
    description: 'Careful finishing work in period property conversion',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop',
    title: 'Retail Space Fit-Out',
    category: 'Commercial',
    location: 'Oxford Street',
    description: 'Fast-track plasterboard finishing for retail opening',
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&h=400&fit=crop',
    title: 'Apartment Complex',
    category: 'New Build',
    location: 'South London',
    description: 'Multi-storey residential development finishing',
  },
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return projects
  return projects.filter(p => p.category === activeCategory.value)
})

const selectedProject = ref<typeof projects[0] | null>(null)

const openLightbox = (project: typeof projects[0]) => {
  selectedProject.value = project
}

const closeLightbox = () => {
  selectedProject.value = null
}
</script>

<template>
  <div class="gallery-page">
    <OPageHero 
      title="Our Projects"
      subtitle="Browse our portfolio of completed tape & jointing and plasterboard finishing work"
      background-image="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&h=600&fit=crop"
    />
    
    <section class="gallery section">
      <div class="container">
        <!-- Filter -->
        <div class="gallery__filter">
          <button 
            v-for="category in categories" 
            :key="category"
            class="gallery__filter-btn"
            :class="{ 'gallery__filter-btn--active': activeCategory === category }"
            @click="activeCategory = category"
          >
            {{ category }}
          </button>
        </div>
        
        <!-- Grid -->
        <TransitionGroup name="gallery" tag="div" class="gallery__grid">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="gallery__item"
            @click="openLightbox(project)"
          >
            <div class="gallery__item-image">
              <img :src="project.image" :alt="project.title" />
              <div class="gallery__item-overlay">
                <AIcon name="arrowRight" size="lg" />
              </div>
            </div>
            <div class="gallery__item-content">
              <span class="gallery__item-category">{{ project.category }}</span>
              <h3 class="gallery__item-title">{{ project.title }}</h3>
              <p class="gallery__item-location">
                <AIcon name="location" size="sm" />
                {{ project.location }}
              </p>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </section>
    
    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div v-if="selectedProject" class="lightbox" @click.self="closeLightbox">
          <button class="lightbox__close" @click="closeLightbox">
            <AIcon name="close" size="lg" />
          </button>
          
          <div class="lightbox__content">
            <img :src="selectedProject.image" :alt="selectedProject.title" />
            <div class="lightbox__info">
              <span class="lightbox__category">{{ selectedProject.category }}</span>
              <h2 class="lightbox__title">{{ selectedProject.title }}</h2>
              <p class="lightbox__location">
                <AIcon name="location" size="sm" />
                {{ selectedProject.location }}
              </p>
              <p class="lightbox__description">{{ selectedProject.description }}</p>
              <AButton href="/contact" variant="primary">
                Get a Similar Quote
              </AButton>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
    
    <OCta />
  </div>
</template>

<style scoped>
.gallery__filter {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.gallery__filter-btn {
  padding: 10px 24px;
  border: 2px solid #E5E7EB;
  border-radius: 30px;
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--text-secondary);
  background: transparent;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.gallery__filter-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.gallery__filter-btn--active {
  background: var(--gradient-primary);
  border-color: var(--color-primary);
  color: var(--color-dark);
}

.gallery__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.gallery__item {
  background-color: var(--color-white);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all var(--transition-normal);
}

.gallery__item:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.gallery__item-image {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.gallery__item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.gallery__item:hover .gallery__item-image img {
  transform: scale(1.1);
}

.gallery__item-overlay {
  position: absolute;
  inset: 0;
  background: rgba(245, 166, 35, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.gallery__item-overlay .icon {
  color: var(--color-dark);
}

.gallery__item:hover .gallery__item-overlay {
  opacity: 1;
}

.gallery__item-content {
  padding: 20px;
}

.gallery__item-category {
  display: inline-block;
  padding: 4px 10px;
  background-color: rgba(245, 166, 35, 0.1);
  color: var(--color-primary-dark);
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 4px;
  margin-bottom: 10px;
}

.gallery__item-title {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.gallery__item-location {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0;
}

.gallery__item-location .icon {
  color: var(--color-primary);
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.9);
}

.lightbox__close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.lightbox__close:hover {
  background-color: var(--color-primary);
  color: var(--color-dark);
}

.lightbox__content {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 30px;
  max-width: 1200px;
  max-height: 80vh;
  background-color: var(--color-white);
  border-radius: var(--border-radius-xl);
  overflow: hidden;
}

.lightbox__content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lightbox__info {
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
}

.lightbox__category {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(245, 166, 35, 0.1);
  color: var(--color-primary-dark);
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 4px;
  margin-bottom: 15px;
  width: fit-content;
}

.lightbox__title {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.lightbox__location {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.lightbox__location .icon {
  color: var(--color-primary);
}

.lightbox__description {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 30px;
  flex: 1;
}

/* Transitions */
.gallery-move,
.gallery-enter-active,
.gallery-leave-active {
  transition: all 0.5s ease;
}

.gallery-enter-from,
.gallery-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.gallery-leave-active {
  position: absolute;
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: all var(--transition-normal);
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.lightbox-enter-from .lightbox__content,
.lightbox-leave-to .lightbox__content {
  transform: scale(0.9);
}

@media (max-width: 1024px) {
  .gallery__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .lightbox__content {
    grid-template-columns: 1fr;
    max-width: 600px;
  }
  
  .lightbox__content img {
    height: 300px;
  }
}

@media (max-width: 640px) {
  .gallery__grid {
    grid-template-columns: 1fr;
  }
  
  .lightbox {
    padding: 20px;
  }
  
  .lightbox__info {
    padding: 25px 20px;
  }
}
</style>
