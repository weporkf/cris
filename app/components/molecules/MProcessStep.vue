<script setup lang="ts">
interface Props {
  number: number
  title: string
  active?: boolean
}

withDefaults(defineProps<Props>(), {
  active: false,
})
</script>

<template>
  <div class="process-step" :class="{ 'process-step--active': active }">
    <div class="process-step__number">{{ number }}</div>
    <span class="process-step__title">{{ title }}</span>
  </div>
</template>

<style scoped>
.process-step {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 20px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius);
  transition: all var(--transition-normal);
}

.process-step:hover,
.process-step--active {
  background-color: rgba(245, 166, 35, 0.1);
}

.process-step__number {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-primary);
  border-radius: 50%;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--color-dark);
  flex-shrink: 0;
}

.process-step__title {
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--text-white);
}

@media (max-width: 768px) {
  .process-step {
    flex-direction: column;
    text-align: center;
    padding: 20px 15px;
  }
  
  .process-step__title {
    font-size: 0.85rem;
  }
}
</style>

