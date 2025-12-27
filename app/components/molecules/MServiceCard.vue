<script setup lang="ts">
interface Props {
  icon: string
  title: string
  description?: string
  href?: string
}

defineProps<Props>()
</script>

<template>
  <NuxtLink v-if="href" :to="href" class="service-card service-card--link">
    <div class="service-card__icon-wrapper">
      <div class="service-card__icon-bg"></div>
      <AIcon :name="icon" size="lg" class="service-card__icon" />
    </div>
    <h4 class="service-card__title">{{ title }}</h4>
    <p v-if="description" class="service-card__description">{{ description }}</p>
  </NuxtLink>
  <div v-else class="service-card">
    <div class="service-card__icon-wrapper">
      <div class="service-card__icon-bg"></div>
      <AIcon :name="icon" size="lg" class="service-card__icon" />
    </div>
    <h4 class="service-card__title">{{ title }}</h4>
    <p v-if="description" class="service-card__description">{{ description }}</p>
  </div>
</template>

<style scoped>
.service-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 30px 20px;
  background-color: var(--color-white);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.service-card--link {
  text-decoration: none;
  cursor: pointer;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.service-card__icon-wrapper {
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.service-card__icon-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #FFF3D6 0%, #FFE4A8 100%);
  border-radius: 16px;
  transform: rotate(10deg);
  transition: transform var(--transition-normal);
}

.service-card:hover .service-card__icon-bg {
  transform: rotate(0deg);
  background: var(--gradient-primary);
}

.service-card__icon {
  position: relative;
  z-index: 1;
  color: var(--color-primary-dark);
}

.service-card:hover .service-card__icon {
  color: var(--color-dark);
}

.service-card__title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.service-card__description {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.5;
}
</style>

