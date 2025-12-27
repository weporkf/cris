<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  block?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  block: false,
  disabled: false,
})

const tag = computed(() => props.href ? resolveComponent('NuxtLink') : 'button')
</script>

<template>
  <component
    :is="tag"
    :to="href"
    :disabled="disabled"
    class="btn"
    :class="[
      `btn--${variant}`,
      `btn--${size}`,
      { 'btn--block': block, 'btn--disabled': disabled }
    ]"
  >
    <slot />
  </component>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--font-heading);
  font-weight: 600;
  border-radius: var(--border-radius);
  transition: all var(--transition-normal);
  cursor: pointer;
  text-decoration: none;
  border: 2px solid transparent;
}

/* Sizes */
.btn--sm {
  padding: 8px 16px;
  font-size: 0.875rem;
}

.btn--md {
  padding: 12px 24px;
  font-size: 1rem;
}

.btn--lg {
  padding: 16px 32px;
  font-size: 1.1rem;
}

/* Variants */
.btn--primary {
  background: var(--gradient-primary);
  color: var(--color-dark);
  border-color: var(--color-primary);
}

.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(245, 166, 35, 0.4);
}

.btn--secondary {
  background-color: var(--color-secondary);
  color: var(--text-white);
  border-color: var(--color-secondary);
}

.btn--secondary:hover {
  background-color: var(--color-secondary-light);
  transform: translateY(-2px);
}

.btn--outline {
  background: transparent;
  color: var(--text-white);
  border-color: var(--text-white);
}

.btn--outline:hover {
  background-color: var(--text-white);
  color: var(--color-dark);
}

.btn--ghost {
  background: transparent;
  color: var(--color-primary);
}

.btn--ghost:hover {
  background-color: rgba(245, 166, 35, 0.1);
}

/* Block */
.btn--block {
  width: 100%;
}

/* Disabled */
.btn--disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}
</style>

