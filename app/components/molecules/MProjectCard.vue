<script setup lang="ts">
interface Props {
  image: string
  title: string
  description?: string
  href?: string
}

defineProps<Props>()
</script>

<template>
  <NuxtLink :to="href || '#'" class="project-card">
    <div class="project-card__image">
      <img :src="image" :alt="title" />
      <div class="project-card__overlay">
        <AIcon name="arrowRight" size="lg" />
      </div>
    </div>
    <div class="project-card__content">
      <h4 class="project-card__title">{{ title }}</h4>
      <p v-if="description" class="project-card__description">{{ description }}</p>
      <span class="project-card__link">
        View Project
        <AIcon name="chevronRight" size="sm" />
      </span>
    </div>
  </NuxtLink>
</template>

<style scoped>
.project-card {
  display: block;
  text-decoration: none;
  background-color: var(--color-white);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.project-card__image {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.project-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.project-card:hover .project-card__image img {
  transform: scale(1.1);
}

.project-card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(245, 166, 35, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.project-card__overlay .icon {
  color: var(--color-dark);
  transform: translateX(-10px);
  transition: transform var(--transition-normal);
}

.project-card:hover .project-card__overlay {
  opacity: 1;
}

.project-card:hover .project-card__overlay .icon {
  transform: translateX(0);
}

.project-card__content {
  padding: 20px;
}

.project-card__title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.project-card__description {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0 0 12px 0;
  line-height: 1.5;
}

.project-card__link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-primary);
  transition: gap var(--transition-fast);
}

.project-card:hover .project-card__link {
  gap: 8px;
}
</style>

