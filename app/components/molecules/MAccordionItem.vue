<script setup lang="ts">
interface Props {
  question: string
  answer: string
}

defineProps<Props>()

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="accordion-item" :class="{ 'accordion-item--open': isOpen }">
    <button class="accordion-item__trigger" @click="toggle" type="button">
      <span class="accordion-item__question">{{ question }}</span>
      <span class="accordion-item__icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </button>
    <Transition name="accordion">
      <div v-if="isOpen" class="accordion-item__content">
        <p class="accordion-item__answer">{{ answer }}</p>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.accordion-item {
  background-color: var(--color-white);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: box-shadow var(--transition-normal);
}

.accordion-item:hover {
  box-shadow: var(--shadow-md);
}

.accordion-item__trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 20px 25px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background-color var(--transition-fast);
}

.accordion-item__trigger:hover {
  background-color: rgba(245, 166, 35, 0.05);
}

.accordion-item--open .accordion-item__trigger {
  background-color: rgba(245, 166, 35, 0.1);
}

.accordion-item__question {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1rem;
  color: var(--text-primary);
}

.accordion-item__icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform var(--transition-normal);
}

.accordion-item__icon svg {
  width: 20px;
  height: 20px;
  color: var(--color-primary);
}

.accordion-item--open .accordion-item__icon {
  transform: rotate(180deg);
}

.accordion-item__content {
  padding: 0 25px 20px;
}

.accordion-item__answer {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
}

/* Transition */
.accordion-enter-active,
.accordion-leave-active {
  transition: all var(--transition-normal);
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

