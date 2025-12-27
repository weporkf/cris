<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

withDefaults(defineProps<Props>(), {
  centered: true,
  light: false,
})
</script>

<template>
  <div class="section-title" :class="{ 'section-title--centered': centered, 'section-title--light': light }">
    <h2 class="section-title__heading">{{ title }}</h2>
    <p v-if="subtitle" class="section-title__subtitle">{{ subtitle }}</p>
  </div>
</template>

<style scoped>
.section-title {
  margin-bottom: 50px;
}

.section-title--centered {
  text-align: center;
}

.section-title__heading {
  position: relative;
  display: inline-block;
  margin-bottom: 15px;
}

.section-title--centered .section-title__heading {
  display: block;
}

.section-title__heading::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 3px;
  background: var(--gradient-primary);
  border-radius: 2px;
}

.section-title--centered .section-title__heading::after {
  left: 50%;
  transform: translateX(-50%);
}

.section-title__subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 600px;
  margin-bottom: 0;
}

.section-title--centered .section-title__subtitle {
  margin-left: auto;
  margin-right: auto;
}

.section-title--light .section-title__heading {
  color: var(--text-white);
}

.section-title--light .section-title__subtitle {
  color: var(--text-light);
}
</style>

