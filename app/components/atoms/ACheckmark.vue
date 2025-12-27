<script setup lang="ts">
interface Props {
  color?: 'primary' | 'success' | 'white'
}

withDefaults(defineProps<Props>(), {
  color: 'primary',
})
</script>

<template>
  <span class="checkmark" :class="[`checkmark--${color}`]">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
      <path d="M5 13l4 4L19 7" />
    </svg>
  </span>
</template>

<style scoped>
.checkmark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  flex-shrink: 0;
}

.checkmark svg {
  width: 12px;
  height: 12px;
}

.checkmark--primary {
  background-color: var(--color-primary);
  color: var(--color-dark);
}

.checkmark--success {
  background-color: #10B981;
  color: white;
}

.checkmark--white {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
}
</style>

