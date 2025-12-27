<script setup lang="ts">
interface Props {
  to: string
  active?: boolean
}

withDefaults(defineProps<Props>(), {
  active: false,
})
</script>

<template>
  <NuxtLink :to="to" class="nav-link" :class="{ 'nav-link--active': active }">
    <slot />
  </NuxtLink>
</template>

<style scoped>
.nav-link {
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--text-white);
  text-decoration: none;
  padding: 8px 0;
  position: relative;
  transition: color var(--transition-fast);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width var(--transition-normal);
}

.nav-link:hover,
.nav-link--active {
  color: var(--color-primary);
}

.nav-link:hover::after,
.nav-link--active::after {
  width: 100%;
}
</style>

