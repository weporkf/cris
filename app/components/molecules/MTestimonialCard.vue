<script setup lang="ts">
interface Props {
  quote: string
  author: string
  role?: string
}

defineProps<Props>()
</script>

<template>
  <div class="testimonial-card">
    <div class="testimonial-card__quote-icon">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
      </svg>
    </div>
    <blockquote class="testimonial-card__quote">{{ quote }}</blockquote>
    <div class="testimonial-card__author">
      <span class="testimonial-card__name">{{ author }}</span>
      <span v-if="role" class="testimonial-card__role">{{ role }}</span>
    </div>
  </div>
</template>

<style scoped>
.testimonial-card {
  position: relative;
  padding: 40px 30px 30px;
  background-color: var(--color-white);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.testimonial-card__quote-icon {
  position: absolute;
  top: -15px;
  left: 25px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-primary);
  border-radius: 8px;
  box-shadow: var(--shadow-md);
}

.testimonial-card__quote-icon svg {
  width: 20px;
  height: 20px;
  color: var(--color-dark);
}

.testimonial-card__quote {
  font-size: 1rem;
  font-style: italic;
  color: var(--text-primary);
  line-height: 1.7;
  margin: 0 0 20px 0;
}

.testimonial-card__author {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.testimonial-card__name {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text-primary);
}

.testimonial-card__role {
  font-size: 0.85rem;
  color: var(--text-secondary);
}
</style>

