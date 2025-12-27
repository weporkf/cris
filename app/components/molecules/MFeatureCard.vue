<script setup lang="ts">
interface Props {
  icon: string
  title: string
  description: string
}

defineProps<Props>()
</script>

<template>
  <div class="feature-card">
    <div class="feature-card__icon-wrapper">
      <AIcon :name="icon" size="lg" class="feature-card__icon" />
    </div>
    <div class="feature-card__content">
      <h4 class="feature-card__title">{{ title }}</h4>
      <p class="feature-card__description">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.feature-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 30px 25px;
  background-color: var(--color-white);
  border-radius: var(--border-radius-lg);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all var(--transition-normal);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary);
}

.feature-card__icon-wrapper {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #FFF3D6 0%, #FFE4A8 100%);
  border-radius: 50%;
  margin-bottom: 20px;
}

.feature-card__icon {
  color: var(--color-primary-dark);
}

.feature-card:hover .feature-card__icon-wrapper {
  background: var(--gradient-primary);
}

.feature-card:hover .feature-card__icon {
  color: var(--color-dark);
}

.feature-card__title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.feature-card__description {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.6;
}
</style>

