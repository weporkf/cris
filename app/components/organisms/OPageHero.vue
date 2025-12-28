<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  backgroundImage?: string
}

withDefaults(defineProps<Props>(), {
  backgroundImage: '',
})
</script>

<template>
  <section class="page-hero">
    <div class="page-hero__background">
      <div v-if="backgroundImage" class="page-hero__image" :style="{ backgroundImage: `url(${backgroundImage})` }"></div>
      <div class="page-hero__overlay"></div>
      <div class="page-hero__pattern"></div>
    </div>
    
    <div class="container">
      <div class="page-hero__content">
        <h1 class="page-hero__title">{{ title }}</h1>
        <p v-if="subtitle" class="page-hero__subtitle">{{ subtitle }}</p>
        <slot />
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  position: relative;
  padding: 160px 0 100px;
  overflow: hidden;
}

.page-hero__background {
  position: absolute;
  inset: 0;
  z-index: -1;
}

.page-hero__image {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.page-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(15, 15, 26, 0.9) 100%);
}

.page-hero__pattern {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(245, 166, 35, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(245, 166, 35, 0.05) 0%, transparent 40%);
}

.page-hero__content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.page-hero__title {
  color: var(--text-white);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin-bottom: 15px;
}

.page-hero__subtitle {
  color: var(--text-light);
  font-size: 1.15rem;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .page-hero {
    padding: 140px 0 80px;
  }
}
</style>

