<script setup lang="ts">
interface Props {
  variant?: 'light' | 'dark'
}

withDefaults(defineProps<Props>(), {
  variant: 'light',
})
</script>

<template>
  <NuxtLink to="/" class="logo" :class="[`logo--${variant}`]">
    <div class="logo__icon">
      <span class="logo__letter">P</span>
      <span class="logo__letter">A</span>
      <span class="logo__letter">C</span>
    </div>
    <div class="logo__text">
      <span class="logo__name">Construction</span>
      <span class="logo__tagline">Solutions LTD</span>
    </div>
  </NuxtLink>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.logo__icon {
  display: flex;
  align-items: center;
  background: var(--gradient-primary);
  padding: 6px 10px;
  border-radius: 4px;
}

.logo__letter {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.25rem;
  color: var(--color-dark);
  line-height: 1;
}

.logo__text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.logo__name {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.logo__tagline {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.8;
}

/* Variants */
.logo--light .logo__name,
.logo--light .logo__tagline {
  color: var(--text-white);
}

.logo--dark .logo__name,
.logo--dark .logo__tagline {
  color: var(--text-primary);
}

@media (max-width: 480px) {
  .logo__text {
    display: none;
  }
}
</style>

